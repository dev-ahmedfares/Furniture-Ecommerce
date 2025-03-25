"use client";
import { ICartProduct, IProduct } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { GoTrash } from "react-icons/go";
import AddToCartBtns from "./shared/AddToCartBtns";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import {
  actRemoveItemFromCart,
  clearCartLocal,
  removeItemLocal,
} from "@/store/cart/cartSlice";
import { toast } from "sonner";
import actDestroyCart from "@/store/cart/act/actDestroyCart";
import { useRemoveItemAndDestroyCart } from "@/hooks/useRemoveItemAndDestroyCart";

function OrderCard({
  order,
  withOutBtns,
  customStyle,
}: {
  order: ICartProduct;
  withOutBtns?: boolean;
  customStyle?: string;
}) {
  const { handleDeleteItemFromCart, loadingDeleteFromCart } =
    useRemoveItemAndDestroyCart();

  return (
    <>
      <div
        className={`flex max-md:justify-between  md:items-center gap-4 md:gap-10 min-w-[300px] ${customStyle}`}
      >
        {/* Image not coming with endpoint of Cart */}
        {/* <div className="rounded-[26px] background-light600_dark200 relative h-[90px] md:h-[120px] w-[90px] md:w-[120px] p-1">
        <Image
          src={`http://test-ecomerce.xn--hrt-w-ova.de/${order?.productimage[0].link}`}
          alt={"product img"}
          fill
          className="object-contain"
        />
      </div> */}

        <div className="flex max-md:flex-col  max-md:gap-2 md:items-center md:gap-10">
          <div className="font-mont">
            <h5
              title={order.name}
              className="font-medium line-clamp-1 w-[120px] md:w-[200px] overflow-hidden"
            >
              {order.name}
            </h5>
            {/* <p className="text-sm line-clamp-2">{order.description}</p> */}
          </div>
          {withOutBtns ? (
            ""
          ) : (
            <div className="flex items-center gap-4 md:gap-6">
              <Button
                disabled={loadingDeleteFromCart}
                onClick={() => handleDeleteItemFromCart(order)}
                size={"icon"}
                className={`rounded-full   bg-transparent shadow-none !text-primary-100 disabled:!opacity-100 hover:!text-primary-100/90 hover:bg-transparent [&_svg]:size-5 dark:!bg-transparent`}
              >
                <GoTrash />
              </Button>
              <AddToCartBtns
                currentQty={order?.qty || 0}
                // cannotAddToCart={}
                item={order}
                textStyle="text-lg"
                btnStyle="!bg-primary-100 disabled:!bg-primary-100 dark:!bg-primary-100 hover:!bg-primary-100/90 w-6 h-6"
              />
            </div>
          )}
        </div>
        <div>
          <div className="relative text-light800_light100 font-semibold ps-2 md:text-2xl">
            {order.price}
            <span className="absolute -top-1 -left-1 text-sm">€</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
