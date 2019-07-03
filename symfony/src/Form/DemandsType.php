<?php


namespace App\Form;

use App\Entity\Demands;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DemandsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('numref', TextType::class)
            ->add('datedemand', DateTimeType::class)
            ->add('message', TextType::class)
            ->add('linkgg', UrlType::class)
            ->add('address', TextType::class)
            ->add('status', TextType::class)
            ->add('datedemanded', DateTimeType::class)
            ->add('submit', SubmitType::class, [
                'attr' => ['class' => 'btn']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Demands::class
        ]);
    }
}