import React from "react";
import SearchInput from "./SearchForm";
import Image from "next/image";

function SearchPage() {
  return (
    <div className="mt-16">
      <div className="flex justify-center  gap-10">
        <div className="relative w-[220px] h-[160px] max-lg:hidden">
          <div className="bg-light-900 w-full h-[100px] rounded-[20px] absolute -right-6 top-1/2 -translate-y-1/2"></div>

          <div className="bg-light-900 w-full h-full rounded-[20px] absolute -left-5 -top-4"></div>
          <Image
            src="/assets/images/search-img-2.png"
            fill
            alt="img"
            className="object-cover rounded-[20px]"
          />
        </div>
        <div className=" text-darkBlack_light100 text-center mx-12 max-xl:mx-6 relative">
          <h1 className="h1-bold text-darkBlack_light100 mx-auto max-w-[400px] max-sm:text-[25px]">
            Chic Furnishings Online Furniture Store
          </h1>
          <p className="font-medium mt-2 text-light500_light100  leading-[130%]">
            Discover Elegant Comfort for Every Room
          </p>

          <Image
            src="/assets/icons/search-svg-1.svg"
            className="  absolute -top-24 -z-10 left-1/2 -translate-x-1/2"
            width={300}
            height={300}
            alt="icon"
          />
        </div>

        <div className="relative w-[220px] h-[160px] max-lg:hidden">
          <div className="bg-light-900 w-full h-full rounded-[20px] absolute -left-5 -top-4"></div>
          <div className="bg-light-900 w-full h-[100px] rounded-[20px] absolute -right-6 top-1/2 -translate-y-1/2"></div>
          <Image
            src="/assets/images/search-img-1.png"
            fill
            alt="img"
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>

      <div className="lg:mt-28 mt-16 sm:mt-20 max-w-2xl mx-auto">
        <SearchInput />
      </div>

      <div className=" justify-center mt-16 md:mt-28 flex lg:!hidden">
        <div className="relative  w-[220px] h-[160px]  md:w-[400px] md:h-[230px]">
          <div className="bg-light-900 w-full h-full rounded-[20px] absolute -left-5 -top-4"></div>
          <div className="bg-light-900 w-full h-[60%] rounded-[20px] absolute -right-6 top-1/2 -translate-y-1/2"></div>
          <Image
            src="/assets/images/search-img-1.png"
            fill
            alt="img"
            className="object-cover rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
