import Image from "next/image";
import React from "react";

function Page() {
  return (
    <section className=" py-24 pt-32 sm:pt-44">
      <div className="container flex items-center gap-20">
        <div className="flex-1 flex flex-col gap-2">
          <div className="relative h-[200px] background-light600_dark200">
            <Image
              src="/assets/images/chair-1.png"
              alt="product"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 relative  background-light600_dark200 h-[160px]">
              <Image
                src="/assets/images/chair-1.png"
                alt="product"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 relative  background-light600_dark200 h-[160px]">
              <Image
                src="/assets/images/chair-1.png"
                alt="product"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="h1-bold text-darkBlack_light100">Baltsar Chair</h2>
            <div className="relative text-light800_light100 font-semibold ps-2 text-2xl">
              38,97
              <span className="absolute -top-1 -left-1 text-sm">€</span>
            </div>
          </div>
          <div className="font-medium leading-[160%] text-sm mt-8 min-h-[140px] border-b border-light-400 dark:border-light-100">
            <p>
              As the name suggests it, this is the jack of all trades of chairs;
              it goes in any room, with any design and serves multiple purposes
              that go with all upholstery options.
            </p>
            <span>L45 x D47 x H90 cm</span>
          </div>
          <div className="py-4 flex items-center justify-between">

          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Page;
