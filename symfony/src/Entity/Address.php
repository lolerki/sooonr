<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *     collectionOperations={
 *           "get"={
 *              "normalization_context"={"groups"={"address_get_collection"}}
 *          },
 *          "post"={
 *             "method"="POST",
 *             "normalization_context"={"groups"={"address_post_collection"}},
 *             "access_control"="is_granted('ROLE_ADMIN')"
 *          }
 *     },
 *     itemOperations={
 *           "get"={
 *             "method"="GET",
 *             "normalization_context"={"groups"={"address_get_item"}}
 *            },
 *           "put"={
 *             "method"="PUT",
 *             "normalization_context"={"groups"={"address_put_item"}},
 *             "access_control"="is_granted('ROLE_ADMIN')"
 *           },
 *           "delete"={
 *             "method"="DELETE",
 *             "normalization_context"={"groups"={"address_delete_item"}},
 *             "access_control"="is_granted('ROLE_ADMIN')"
 *          }
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\AddressRepository")
 */
class Address
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"address_get_collection","address_post_collection","address_get_item","address_put_item","user_put_item"})
     */
    private $street;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"address_get_collection","address_post_collection","address_get_item","address_put_item","user_put_item"})
     */
    private $street_line2;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"address_get_collection","address_post_collection","address_get_item","address_put_item","user_put_item"})
     */
    private $city;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"address_get_collection","address_post_collection","address_get_item","address_put_item","user_put_item"})
     */
    private $zip_code;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"address_get_collection","address_post_collection","address_get_item","address_put_item","user_put_item"})
     */
    private $country;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\user", cascade={"persist", "remove"})
     * @Groups({"address_get_collection","address_post_collection","address_get_item"})
     */
    private $id_user;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Bill", mappedBy="idAddress")
     * @Groups({"address_post_collection"})
     */
    private $bills;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    public function __construct()
    {
        $this->bills = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStreet(): ?string
    {
        return $this->street;
    }

    public function setStreet(string $street): self
    {
        $this->street = $street;

        return $this;
    }

    public function getStreetLine2(): ?string
    {
        return $this->street_line2;
    }

    public function setStreetLine2(string $street_line2): self
    {
        $this->street_line2 = $street_line2;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getZipCode(): ?int
    {
        return $this->zip_code;
    }

    public function setZipCode(int $zip_code): self
    {
        $this->zip_code = $zip_code;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getIdUser(): ?user
    {
        return $this->id_user;
    }

    public function setIdUser(?user $id_user): self
    {
        $this->id_user = $id_user;

        return $this;
    }

    /**
     * @return Collection|Bill[]
     */
    public function getBills(): Collection
    {
        return $this->bills;
    }

    public function addBill(Bill $bill): self
    {
        if (!$this->bills->contains($bill)) {
            $this->bills[] = $bill;
            $bill->setIdAddress($this);
        }

        return $this;
    }

    public function removeBill(Bill $bill): self
    {
        if ($this->bills->contains($bill)) {
            $this->bills->removeElement($bill);
            // set the owning side to null (unless already changed)
            if ($bill->getIdAddress() === $this) {
                $bill->setIdAddress(null);
            }
        }

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }
}
