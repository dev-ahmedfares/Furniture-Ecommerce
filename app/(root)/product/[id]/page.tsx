import AddToCartBtns from "@/components/shared/AddToCartBtns";
import BtnPrimary from "@/components/shared/BtnPrimary";
import SingleProductDetails from "@/components/SingleProductDetails";
import { Button } from "@/components/ui/button";
import { ParamsProps } from "@/types";
import Image from "next/image";
import React from "react";
import { GoShareAndroid } from "react-icons/go";

async function Page({ params }: ParamsProps) {
  const { id } = await params;
  return (
    <section className=" py-24 pt-32 md:pt-44 min-h-screen container">
      <SingleProductDetails id={id} />
      <Image
        alt="icon"
        src="/assets/icons/single-svg-1.svg"
        width={140}
        height={100}
        className="absolute right-0 max-md:hidden  -z-10 top-[10%] md:top-[15%]  2xl:w-[180px]"
      />
      <Image
        alt="icon"
        src="/assets/icons/single-svg-2.svg"
        width={140}
        height={100}
        className="absolute left-0  max-md:hidden -z-10 bottom-[5%]  2xl:w-[180px]"
      />
    </section>
  );
}

export default Page;
