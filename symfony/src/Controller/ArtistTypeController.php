<?php

namespace App\Controller;

use App\Entity\ArtistType;
use App\Form\ArtistTypeType;
use App\Repository\ArtistTypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/artist/type")
 */
class ArtistTypeController extends AbstractController
{
    /**
     * @Route("/", name="artist_type_index", methods={"GET"})
     */
    public function index(ArtistTypeRepository $artistTypeRepository): Response
    {
        return $this->render('artist_type/index.html.twig', [
            'artist_types' => $artistTypeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="artist_type_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $artistType = new ArtistType();
        $form = $this->createForm(ArtistTypeType::class, $artistType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($artistType);
            $entityManager->flush();

            return $this->redirectToRoute('artist_type_index');
        }

        return $this->render('artist_type/new.html.twig', [
            'artist_type' => $artistType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="artist_type_show", methods={"GET"})
     */
    public function show(ArtistType $artistType): Response
    {
        return $this->render('artist_type/show.html.twig', [
            'artist_type' => $artistType,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="artist_type_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ArtistType $artistType): Response
    {
        $form = $this->createForm(ArtistTypeType::class, $artistType);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('artist_type_index', [
                'id' => $artistType->getId(),
            ]);
        }

        return $this->render('artist_type/edit.html.twig', [
            'artist_type' => $artistType,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="artist_type_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ArtistType $artistType): Response
    {
        if ($this->isCsrfTokenValid('delete'.$artistType->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($artistType);
            $entityManager->flush();
        }

        return $this->redirectToRoute('artist_type_index');
    }
}
