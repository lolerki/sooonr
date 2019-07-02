<?php

namespace App\Controller;

use App\Repository\ProfileRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DemandsRepository;
use App\Repository\EventRepository;




/**
 * @Route("/")
 *
 * Class DefaultController
 * @package App\Controller
 */
class HomeController extends AbstractController
{

    /**
     * @Route("/", name="app_index")
     */
    public function indexAction(EventRepository $eventRepository, ProfileRepository $profileRepository): Response
    {

        return $this->render('home/home.html.twig', [
            'events' => $eventRepository->findAll(),
            'profiles' => $profileRepository->findAll(),
        ]);
    }

    /**
     * @Route("/mentions-legales", name="app_mentions-legales")
     */
    public function mentionLegaleAction(): Response
    {
        return $this->render('home/mentionslegales.html.twig');
    }

    /**
     * @Route("/cgv", name="app_cgv")
     */
    public function cgvAction(): Response
    {
        return $this->render('home/cgv.html.twig');
    }

    /**
     * @Route("/contact", name="app_contact")
     */
    public function contactAction(): Response
    {
        return $this->render('home/contact.html.twig');
    }

    /**
     * @Route("/booking", name="app_booking")
     */
    public function bookingAction(): Response
    {
        return $this->render('home/booking.html.twig');
    }

    /**
     * @Route("/artists", name="app_bookingartists")
     */
    public function bookingArtistsAction(ProfileRepository $profileRepository): Response
    {
        return $this->render('home/artists.html.twig',[
            'profiles' => $profileRepository->findAll()
        ]);
    }




    /**
     * @Route("/about", name="app_about")
     */
    public function aboutAction(): Response
    {
        return $this->render('home/about.html.twig');
    }


}

