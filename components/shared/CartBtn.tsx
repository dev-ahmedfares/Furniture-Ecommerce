import Link from "next/link";
import React from "react";
import { PiHandbagFill } from "react-icons/pi";

function CartBtn() {
  // TODO
  return (
    <div className="">
      <Link href={"/cart"} className="relative">
        {" "}
        <PiHandbagFill size={26} className="dark:text-light-100 text-black" />
        <span className="bg-primary-100 text-darkBlack_light100 flex justify-center items-center w-[22px] h-[22px] absolute -top-1 -right-2 rounded-full text-sm">
          0
        </span>
      </Link>
    </div>
  );
}

export default CartBtn;
