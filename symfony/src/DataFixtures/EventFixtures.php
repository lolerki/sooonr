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
            ->setPrice($faker->numberBetween($min = 10, $max = 2000))
            ->setLinkGoogle($faker->url)
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