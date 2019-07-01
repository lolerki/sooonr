<?php


namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

use App\Entity\Address;
use Faker;

class AddressFixtures extends Fixture implements DependentFixtureInterface
{
    public const ADDRESS_REFERENCE = 'addressFixture';

    public function load(ObjectManager $manager)
    {

        $faker = Faker\Factory::create('fr_FR');

        $user = $this->getReference(UserFixtures::USER_REFERENCE);

            $address = (new Address())
                ->setStreet($faker->streetName)
                ->setStreetLine2($faker->streetAddress)
                ->setCity($faker->city)
                ->setZipCode($faker->postcode)
                ->setCountry($faker->country)
                ->setIdUser($user);
            $manager->persist($address);

        $manager->flush();

        $this->addReference(self::ADDRESS_REFERENCE, $address);

    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
        );
    }
}