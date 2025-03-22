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
        <p className="font-semibold  text-light500_light100 mt-12 leading-[130%] text-sm">
          Items (<span>{orders?.length}</span>)
        </p>

        <Image
          src="/assets/icons/search-svg-1.svg"
          className="  absolute -top-16 md:-top-24 -z-10 left-1/2 -translate-x-1/2 max-md:w-[220px]"
          width={260}
          height={260}
          alt="icon"
        />
      </div>
      <div className="flex justify-center mt-16 relative">
        <div className="min-w-fit relative">
          <div className="relative">
            <div className=" relative flex flex-col  gap-2 pb-8 max-h-[500px] px-4 overflow-y-auto  ">
              {orders?.map((order, idx) => (
                <div key={idx} className="flex   md:items-center gap-4 md:gap-10">
                  <div className="rounded-[26px] background-light600_dark200 relative h-[90px] md:h-[120px] w-[90px] md:w-[120px] p-1">
                    <Image
                      src={order.img}
                      alt={order.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex max-md:flex-col max-md:gap-2 md:items-center md:gap-10">
                    <div className="font-mont">
                      <h5 className="font-medium">{order.name}</h5>
                      <p className="text-sm">{order.description}</p>
                    </div>

                    <div className="flex items-center gap-2 md:gap-6">
                      <Button
                        size={"icon"}
                        className={`rounded-full  bg-transparent shadow-none !text-primary-100 hover:!text-primary-100/90 hover:bg-transparent [&_svg]:size-5 dark:!bg-transparent`}
                      >
                        <GoTrash />
                      </Button>
                      <AddToCartBtns
                        textStyle="text-lg"
                        btnStyle="!bg-primary-100 dark:!bg-primary-100 hover:!bg-primary-100/90 w-6 h-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative text-light800_light100 font-semibold ps-2 md:text-2xl">
                      {order.price}
                      <span className="absolute -top-1 -left-1 text-sm">
                        {order.currency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute w-full bg-lightOverlaySmall dark:bg-blackOverlaySmall bottom-0 right-0  left-1/2 -translate-x-1/2 h-[80px]"></div>
          </div>
          <div className=" border-t pt-8">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-darkBlack_light100">Total</p>
            <p className="font-semibold font-mont text-darkBlack_light100">
              43,96 €
            </p>
          </div>
          <BtnPrimary customStyle="rounded-full w-full mt-8">
            Place Order
          </BtnPrimary>
        </div>
        </div>
      </div>
     
    </div>
  );
}

export default Page;
