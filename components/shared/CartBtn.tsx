"use client";
import { Link } from "@/i18n/navigation";
import { actGetCartItems } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useLocale } from "next-intl";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { PiHandbagFill } from "react-icons/pi";

function CartBtn() {
  const { accessToken } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
const pathname = usePathname()
const locale = useLocale()
const isHomeSection = pathname === `/${locale}`
  const totalItemsInCart = items.reduce((acc, ele) => acc + ele.qty, 0);

  useEffect(() => {
   
    if (accessToken) {
      dispatch(actGetCartItems(locale));
   
    }
  }, [accessToken,pathname,locale]);

  return (
    <div className="">
      <Link href={"/cart"} className="relative">
        {" "}
        <PiHandbagFill size={26} className={`dark:text-light-100 text-black ${isHomeSection ? "text-light-100" : ""}`} />
        <span className={`bg-primary-100 text-darkBlack_light100 flex justify-center items-center w-[22px] h-[22px] absolute -top-1 -right-2 rounded-full text-sm ${isHomeSection ? "text-light-100" : ""}`}>
          {items.length > 0 ? totalItemsInCart : 0}
        </span>
      </Link>
    </div>
  );
}

export default CartBtn;
