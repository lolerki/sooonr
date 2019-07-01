<?php


namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

use App\Entity\Profile;
use Faker;


class ProfileFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {

        $faker = Faker\Factory::create('fr_FR');

        $user = $this->getReference(UserFixtures::USER_REFERENCE);

        $profile = (new Profile())
            ->setPrice($faker->numberBetween($min = 10, $max = 2000))
            ->setBiography($faker->text)
            ->setStageName($faker->text($maxNbChars = 10))
            ->setAbout($faker->text)
            ->setIdUser($user);
        $manager->persist($profile);

        $manager->flush();

    }

    public function getDependencies()
    {
        return array(
            UserFixtures::class,
        );
    }
}