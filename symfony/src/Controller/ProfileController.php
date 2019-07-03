<?php

namespace App\Controller;

use App\Entity\Profile;
use App\Form\ProfileType;
use App\Repository\AddressRepository;
use App\Repository\EventRepository;
use App\Repository\ProfileRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;




/**
 * @Route("/setting")
 */
class ProfileController extends AbstractController
{
    /**
     * @Route("/", name="setting_index", methods={"GET"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function index(ProfileRepository $profileRepository): Response
    {
        return $this->render('profile/index.html.twig', [
            'profiles' => $profileRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="setting_new", methods={"GET","POST"})
     * @IsGranted("ROLE_USER")
     */
    public function new(Request $request): Response
    {
        $profile = new Profile();
        $user = $this->getUser();
        $form = $this->createForm(ProfileType::class, $profile);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $profile->setIdUser($user);
            $entityManager->persist($profile);
            $entityManager->flush();

            return $this->redirectToRoute('app_index');
        }

        return $this->render('profile/new.html.twig', [
            'profile' => $profile,
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="setting_show", methods={"GET"})
     * @IsGranted("ROLE_USER")
     */
    public function show(Profile $profile, EventRepository $eventRepository, AddressRepository $addressRepository, ProfileRepository $profileRepository): Response
    {
        $user = $this->getUser();

        return $this->render('profile/show.html.twig', [
            'profile' => $profile,
            'events' => $eventRepository->findby([
                'idUser' => $user,
            ]),
            'addresses' =>$addressRepository->findby([
                'id_user' => $user
            ])
        ]);
    }


    /**
     * @Route("/{id}/edit", name="setting_edit", methods={"GET","POST"})
     * @IsGranted("ROLE_USER")
     */
    public function edit(Request $request, Profile $profile): Response
    {
        $form = $this->createForm(ProfileType::class, $profile);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('profile_index', [
                'id' => $profile->getId(),
            ]);
        }

        return $this->render('profile/edit.html.twig', [
            'profile' => $profile,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="setting_delete", methods={"DELETE"})
     * @IsGranted("ROLE_USER")
     */
    public function delete(Request $request, Profile $profile): Response
    {
        if ($this->isCsrfTokenValid('delete'.$profile->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($profile);
            $entityManager->flush();
        }

        return $this->redirectToRoute('profile_index');
    }
}
