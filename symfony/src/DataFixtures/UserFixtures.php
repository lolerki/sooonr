<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\User;
use Faker;

class UserFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {

        $faker = Faker\Factory::create('fr_FR');

        $user = (new User())
            ->setEmail('virgil@test.com')
            ->setFirstName('Virgil')
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword(password_hash("Azerty@1", PASSWORD_BCRYPT));

   /**     $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'the_new_password'
        ));**/

        $manager->flush();
    }
}
