import Image from "next/image";
import React from "react";
import { FiPlus } from "react-icons/fi";

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

function Page() {
  return (
    <>
      <section className="relative">
        <div className="container py-24 pt-32 sm:pt-44 flex items-center max-lg:flex-col-reverse max-lg:gap-24">
          <div>
            <h1 className="h1-bold text-darkBlack_light100">All Living Room</h1>
            <p className="text-sm font-medium max-w-[500px] leading-[160%] pe-8">
              {" "}
              Sofas, loveseats, armchairs, coffee tables, end tables,
              entertainment centers, bookshelves.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative xl:ms-12 w-[260px] h-[180px]  sm:w-[400px] sm:h-[230px] lg:h-[300px]">
              <div className="background-light300_dark200 w-[80%] h-full rounded-[20px] absolute -left-6 -top-6 sm:-top-8"></div>
              <div className="background-light300_dark200 w-full h-[60%] rounded-[20px] absolute -right-6 top-1/2 -translate-y-1/2"></div>
              <div className=" w-[70%] h-[80%] rounded-[20px] blur-[50px] absolute left-1/2 -translate-x-1/2 top-10 ">
                <Image
                  src="/assets/images/category-bg-1.png"
                  fill
                  alt="img"
                  className="object-cover rounded-[20px]"
                />
              </div>
              <Image
                src="/assets/images/category-bg-1.png"
                fill
                alt="img"
                className="object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>

        <div className="container py-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 gap-y-32">
          {chairs?.map((chair, idx) => (
            <div
              key={idx}
              className="dark:shadow-dark-200 shadow-black-200 shadow rounded-[20px] bg-light-100 dark:bg-dark-100"
            >
              <div className="background-light600_dark200 h-[160px] relative rounded-tl-[20px]  rounded-tr-[20px]">
                <Image
                  src={chair.img}
                  alt={chair.name}
                  width={180}
                  height={160}
                  className="object-contain mx-auto absolute left-1/2 -translate-x-1/2 -top-1/3"
                />
              </div>
              <div className="p-4">
                <div>
                  <span className="font-inter text-light-700 capitalize">
                    {chair.category}
                  </span>
                  <h4 className="font-inter capitalize font-semibold text-light800_light100">
                    {chair.name}
                  </h4>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <div className="relative text-light800_light100 font-semibold ps-2">
                    {chair.price}
                    <span className="absolute -top-1 -left-1 text-sm">
                      {chair.currency}
                    </span>
                  </div>
                  <div className="background-light800_light100 rounded-full w-7 h-7 flex items-center justify-center">
                    <FiPlus className="text-light-100 dark:text-light-800" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
