"use client";

import React from "react";
import OrderCard from "./OrderCard";
import Loading from "./feedback/Loading";
import { useAppSelector } from "@/store/hook";
import BtnPrimary from "./shared/BtnPrimary";
import { useRemoveItemAndDestroyCart } from "@/hooks/useRemoveItemAndDestroyCart";
import Link from "next/link";

function OrdersList() {
  const { items, total } = useAppSelector((state) => state.cart);
  const { handleDestroyCart, loadingDestroyCart } =
    useRemoveItemAndDestroyCart();
  const totalItemsQty =
    items?.length > 0 ? items.reduce((acc, ele) => acc + ele.qty, 0) : 0;
  return (
    <>
      <p className="font-semibold text-center  text-light500_light100 mt-12 leading-[130%] text-sm">
        Items (<span>{totalItemsQty}</span>)
      </p>
      <div className="flex justify-center mt-16 relative">
        <div className="min-w-fit relative">
          <div className="relative">
            {items.length > 0 && (
              <div className="mb-8">
                <button
                  disabled={loadingDestroyCart}
                  onClick={() => handleDestroyCart()}
                  className="font-semibold text-sm"
                >
                  Clear Cart
                </button>
              </div>
            )}
            <div className=" relative flex flex-col  gap-10 pb-20 max-h-[500px] px-4 overflow-y-auto  ">
              {items?.length > 0 ? (
                items?.map((order, idx) => (
                  <OrderCard key={`${order?.item_id}  ${idx}`} order={order} />
                ))
              ) : (
                <div className="min-w-[280px] text-center text-xl">
                  Cart is empty
                </div>
              )}
            </div>
            <div className="absolute w-full bg-lightOverlaySmall dark:bg-blackOverlaySmall bottom-0 right-0  left-1/2 -translate-x-1/2 h-[80px]"></div>
          </div>
          {items?.length > 0 && (
            <div className=" border-t pt-8">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-darkBlack_light100">Total</p>
                <p className="font-semibold font-mont text-darkBlack_light100">
                  € {total}
                </p>
              </div>
              <Link href={"/place-order"}>
                <BtnPrimary customStyle="rounded-full w-full mt-8">
                  Place Order
                </BtnPrimary>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OrdersList;
