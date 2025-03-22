"use client";
import { getCategories } from "@/lib/data-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Loading from "./feedback/Loading";

function CategoriesList() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });


  return (
    <Loading
      status={isPending}
      isError={isError}
      error={error as string | null}
      type={"categoriesSkeleton"}
    >
      <div
        className="grid grid-cols-[repeat(1,240px)]  
      sm:grid-cols-[repeat(2,240px)] 
      lg:grid-cols-[repeat(3,240px)] gap-8 lg:gap-20 place-content-center "
      >
        {data?.map((offer: any) => (
          <div key={offer.id} className="flex flex-col">
            <div className="relative w-[240px] h-[240px] rounded-[23px] overflow-hidden">
              <Image
                src={`http://test-ecomerce.xn--hrt-w-ova.de/${offer.image}`}
                fill
                alt={offer.title}
                className="object-cover"
              />
            </div>
            <h4 className="font-extrabold text-xl mt-4">{offer.title}</h4>
            <p className=" font-light leading-[185%] text-sm my-4">
              {offer.description}
            </p>
            <Link
              href={`/category/${offer.id}`}
              className="font-medium group capitalize text-primary-100 flex items-center gap-2 mt-auto"
            >
              <span>more info</span>
              <span className="group-hover:animate-pulse">
                <IoIosArrowRoundForward size={20} />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </Loading>
  );
}

export default CategoriesList;
