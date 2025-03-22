"use client";
import { getCategoryAndProductsById } from "@/lib/data-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Loading from "./feedback/Loading";
import Link from "next/link";

const chairs = [
  {
    img: "/assets/images/chair-1.png",
    category: "chair",
    name: "Sakarias Armchair",
    price: "392",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    category: "chair",
    name: "Sakarias Armchair",
    price: "392",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    category: "chair",
    name: "Sakarias Armchair",
    price: "392",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    category: "chair",
    name: "Sakarias Armchair",
    price: "392",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    category: "chair",
    name: "Sakarias Armchair",
    price: "392",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    category: "chair",
    name: "Sakarias Armchair",
    price: "392",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    category: "chair",
    name: "Sakarias Armchair",
    price: "392",
    currency: "€",
  },
  {
    img: "/assets/images/chair-1.png",
    category: "chair",
    name: "Sakarias Armchair",
    price: "392",
    currency: "€",
  },
];

function ProductsList({ id }: { id: string }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["categoryAndProducts", id],
    queryFn: () => getCategoryAndProductsById({ categoryId: id }),
  });
  

  return (
    <Loading
      error={error as string | null}
      isError={isError}
      status={isPending}
      type="categoryAndProductsSkeleton"
    >
      <div className="container py-24 pt-32 sm:pt-44 flex items-center max-lg:flex-col-reverse max-lg:gap-24">
        <div>
          <h1 className="h1-bold text-darkBlack_light100">
            {data?.category.title}
          </h1>
          <p className="text-sm font-medium max-w-[500px] leading-[160%] pe-8">
            {data?.category.description}
          </p>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="relative xl:ms-12 w-[260px] h-[180px]  sm:w-[400px] sm:h-[230px] lg:h-[300px]">
            <div className="background-light300_dark200 w-[80%] h-full rounded-[20px] absolute -left-6 -top-6 sm:-top-8"></div>
            <div className="background-light300_dark200 w-full h-[60%] rounded-[20px] absolute -right-6 top-1/2 -translate-y-1/2"></div>
            <div className=" w-[70%] h-[80%] rounded-[20px] blur-[50px] absolute left-1/2 -translate-x-1/2 top-10 ">
              <Image
                src={`http://test-ecomerce.xn--hrt-w-ova.de/${data?.category.image}`}
                fill
                alt="img"
                className="object-cover rounded-[20px]"
              />
            </div>
            <Image
              src={`http://test-ecomerce.xn--hrt-w-ova.de/${data?.category.image}`}
              fill
              alt="img"
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>

      <div className="container py-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 gap-y-32">
        {data?.products?.data.map((item: any) => (
          <div
            key={item.id}
            className="dark:shadow-dark-200 flex-col flex shadow-black-200 shadow rounded-[20px] bg-light-100 dark:bg-dark-100 "
          >
            <Link href={`/product/${item.id}`}>
              <div className="background-light600_dark200 h-[160px] relative rounded-tl-[20px]  rounded-tr-[20px]">
                <Image
                  src={`http://test-ecomerce.xn--hrt-w-ova.de/${item.productimage[0].link}`}
                  alt={item.name}
                  width={180}
                  height={160}
                  className="object-contain mx-auto absolute left-1/2 -translate-x-1/2 bottom-0"
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col flex-1">
              <div>
                <span className="font-inter text-light-700 capitalize">
                  {item.title}
                </span>
                <h4
                  title={item.description}
                  className="font-inter capitalize font-semibold text-light800_light100 line-clamp-4 mb-4"
                >
                  {item.description}
                </h4>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="relative text-light800_light100 font-semibold ps-2">
                  {item.price}
                  <span className="absolute -top-1 -left-1 text-sm">€</span>
                </div>
                <div className="background-light800_light100 rounded-full w-7 h-7 flex items-center justify-center">
                  <FiPlus className="text-light-100 dark:text-light-800" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Loading>
  );
}

export default ProductsList;
