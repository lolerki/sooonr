<?php


namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

use App\Entity\Bill;
use Faker;

class BillFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {

        $faker = Faker\Factory::create('fr_FR');

        $user = $this->getReference(UserFixtures::USER_REFERENCE);
        $address = $this->getReference(AddressFixtures::ADDRESS_REFERENCE);
        $event = $this->getReference(EventFixtures::EVENT_REFERENCE);

        for ($i = 0; $i < 10; $i++) {

            $bill = (new Bill())
                ->setDate($faker->dateTime)
                ->setIdAddress($address)
                ->setIdEvent($event)
                ->setIdUser($user);
            $manager->persist($bill);

        }

        $manager->flush();

    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
            AddressFixtures::class,
            EventFixtures::class,
        );
    }
}