"use client";
import React from "react";
import { Button } from "../ui/button";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useIncreaseCartItem } from "@/hooks/useIncreaseCartItem";
import { ICartProduct } from "@/types";
import { useDecreaseCartItem } from "@/hooks/useDecreaseCartItem";


function AddToCartBtns({
  btnStyle,
  textStyle,
  parentStyle,
  item,
  cannotAddToCart,
  currentQty
}: {
  btnStyle?: string;
  parentStyle?: string;
  textStyle?: string;
  item: ICartProduct;
  cannotAddToCart?: boolean;
  currentQty:number
}) {
  const { handleIncreaseItem, loadingCart } = useIncreaseCartItem();
  const { handleDecreaseItem ,loadingDecrease} = useDecreaseCartItem();
  return (
    <div className={`flex items-center gap-4`}>
      <Button
        disabled={cannotAddToCart || loadingCart || +currentQty === 0}
        onClick={() => handleIncreaseItem(item)}
        size={"icon"}
        className={`disabled:opacity-100 disabled:!bg-light-750 rounded-full bg-light-750 dark:!bg-light-750 ${btnStyle}`}
      >
        <FiPlus className="text-light-100" />
      </Button>
      <p
        className={` font-extrabold leading-[130%] text-2xl text-darkBlack_light100 ${textStyle}`}
      >
        {currentQty === 0 ? 1 : currentQty}
      </p>
      <Button
        disabled={ loadingDecrease ||  +currentQty === 0 || +currentQty === 1}
        onClick={() => handleDecreaseItem(item)}
        size={"icon"}
        className={` rounded-full bg-light-750 disabled:opacity-100 disabled:!bg-light-750 dark:!bg-light-750 ${btnStyle}`}
      >
        <FiMinus className="text-light-100" />
      </Button>
    </div>
  );
}

export default AddToCartBtns;
