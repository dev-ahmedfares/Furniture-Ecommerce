"use client";
import { actGetCartItems } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import Link from "next/link";
import React, { useEffect } from "react";
import { PiHandbagFill } from "react-icons/pi";

function CartBtn() {
  const { accessToken } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const totalItemsInCart = items.reduce((acc, ele) => acc + ele.qty, 0);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetCartItems());
    }
  }, [accessToken]);

  return (
    <div className="">
      <Link href={"/cart"} className="relative">
        {" "}
        <PiHandbagFill size={26} className="dark:text-light-100 text-black" />
        <span className="bg-primary-100 text-darkBlack_light100 flex justify-center items-center w-[22px] h-[22px] absolute -top-1 -right-2 rounded-full text-sm">
          {items.length > 0 ? totalItemsInCart : 0}
        </span>
      </Link>
    </div>
  );
}

export default CartBtn;
