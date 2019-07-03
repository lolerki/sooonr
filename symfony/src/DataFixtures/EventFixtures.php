<?php


namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

use App\Entity\Event;
use Faker;

class EventFixtures extends Fixture implements DependentFixtureInterface
{
    public const EVENT_REFERENCE = 'eventFixture';

    public function load(ObjectManager $manager)
    {

        $faker = Faker\Factory::create('fr_FR');

        $user = $this->getReference(UserFixtures::USER_REFERENCE);

        for ($i = 0; $i < 10; $i++) {

        $event = (new Event())
            ->setTitle($faker->text($maxNbChars = 50)  )
            ->setDescription($faker->text)
            ->setDateEvent($faker->dateTime)
            ->setCreateAt($faker->dateTime)
            ->setPrice($faker->numberBetween($min = 10, $max = 1000))
            ->setLinkGoogle('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.09353737724!2d2.356037815640078!3d48.856426708799056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e028667a9ad%3A0x9d3782048f6a0950!2sPrincess+Cr%C3%AApe!5e0!3m2!1sfr!2sfr!4v1562160166372!5m2!1sfr!2sfr')
            ->setIdUser($user);
        $manager->persist($event);

        }

        $manager->flush();

        $this->addReference(self::EVENT_REFERENCE, $event);

    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
        );
    }
}