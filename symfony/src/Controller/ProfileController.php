<?php

namespace App\Controller;

use App\Entity\Profile;
use App\Entity\User;
use App\Form\ProfileType;
use App\Repository\AddressRepository;
use App\Repository\EventRepository;
use App\Repository\ProfileRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;


/**
 * @Route("/setting")
 */
class ProfileController extends AbstractController
{
    /**
     * @Route("/", name="setting_index", methods={"GET"})
     * @IsGranted("ROLE_USER")
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
        $user = $this->get('session')->get('loginUserId');

        $form = $this->createForm(ProfileType::class, $profile);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($profile);
            $entityManager->flush();

            return $this->redirectToRoute('profile_index');
        }

        return $this->render('profile/new.html.twig', [
            'profile' => $profile,
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="setting_show", methods={"GET"}, requirements={"id":"\d+"})
     * @IsGranted("ROLE_USER")
     */
    public function show(Profile $profile, EventRepository $eventRepository, ProfileRepository $profileRepository, AddressRepository $addressRepository): Response
    {
        $user = $this->getUser();
        $profileexist = $profileRepository->findby([
            'id_user' => $user,
        ]);
        if($profileexist == null){
            return $this->redirectToRoute('profile_new');
        }
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
