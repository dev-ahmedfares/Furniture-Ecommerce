import ProductsList from "@/components/ProductsList";
import { ParamsProps } from "@/types";
import Image from "next/image";
import React from "react";

async function Page({params}: ParamsProps) {
  const {id} = await params;
  
  return (
    <>
      <section className="relative">
        <ProductsList  id={id}/>

        <Image
          alt="icon"
          src="/assets/icons/living-svg-1.svg"
          width={140}
          height={100}
          className="absolute left-0   -z-10 top-[10%] md:top-[20%]  xl:w-[180px]"
        />
        <Image
          alt="icon"
          src="/assets/icons/living-svg-2.svg"
          width={140}
          height={100}
          className="absolute right-0   -z-10  top-[40%]  xl:w-[180px]"
        />
        <Image
          alt="icon"
          src="/assets/icons/living-svg-3.svg"
          width={140}
          height={100}
          className="absolute left-0   -z-10  bottom-[0%]  xl:w-[160px] max-md:hidden"
        />
      </section>
    </>
  );
}

export default Page;
