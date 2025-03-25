import OrdersList from "@/components/OrdersList";
import AddToCartBtns from "@/components/shared/AddToCartBtns";
import BtnPrimary from "@/components/shared/BtnPrimary";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { GoTrash } from "react-icons/go";

const orders = [
  {
    img: "/assets/images/chair-1.png",
    name: "Baltsar Chair",
    description: "About the Chair",
    price: "38,97",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    name: "Baltsar Chair",
    description: "About the Chair",
    price: "38,97",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    name: "Baltsar Chair",
    description: "About the Chair",
    price: "38,97",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    name: "Baltsar Chair",
    description: "About the Chair",
    price: "38,97",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    name: "Baltsar Chair",
    description: "About the Chair",
    price: "38,97",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    name: "Baltsar Chair",
    description: "About the Chair",
    price: "38,97",
    currency: "€",
  },
];

function Page() {
  return (
    <div className=" py-24 pt-32  container">
      <div className=" text-darkBlack_light100 text-center mx-12 max-xl:mx-6 relative">
        <h1 className="h1-bold text-darkBlack_light100 mx-auto max-w-[400px] max-sm:text-[25px]">
          Your Cart
        </h1>
        <p className="font-medium mt-2 text-light500_light100  leading-[130%] text-sm">
          Review Your Items
        </p>

        <Image
          src="/assets/icons/search-svg-1.svg"
          className="  absolute -top-16 md:-top-24 -z-10 left-1/2 -translate-x-1/2 max-md:w-[220px]"
          width={260}
          height={260}
          alt="icon"
        />
      </div>
      <OrdersList/>
    </div>
  );
}

export default Page;
