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
            ->setFirstName($faker->firstName)
            ->setRoles(['ROLE_ADMIN'])
            ->setPassword(password_hash("Azerty@1", PASSWORD_BCRYPT));
        $manager->persist($user);



   /**     $user->setPassword($this->passwordEncoder->encodePassword(
            $user,
            'the_new_password'
        ));**/

       $user = (new User())
            ->setEmail('laetitita@rabois.com')
            ->setFirstName('laetitia')
            ->setPassword(password_hash("test", PASSWORD_BCRYPT));
        $manager->persist($user);

        $manager->flush();


    }
}
