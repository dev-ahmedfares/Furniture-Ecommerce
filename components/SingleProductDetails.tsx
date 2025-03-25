"use client";
import React from "react";
import AddToCartBtns from "./shared/AddToCartBtns";
import { Button } from "./ui/button";
import { GoShareAndroid } from "react-icons/go";
import BtnPrimary from "./shared/BtnPrimary";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/lib/data-service";
import Loading from "./feedback/Loading";
import { useAddToCartItem } from "@/hooks/useAddToCartItem";
import { Spinner } from "./shared/Spinner";

function SingleProductDetails({ id }: { id: string }) {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById({ productId: id }),
  });

  const { handleAddToCart, loadingCart, cartItems } = useAddToCartItem();
  const currentItem = cartItems.find((item) => item.item_id === data?.id);
  const cannotAddToCart = currentItem
    ? data.quantity < currentItem.qty || data.quantity == currentItem.qty
    : false;

  console.log(currentItem, data);
  return (
    <Loading
      status={isPending}
      isError={isError}
      error={error as string | null}
      type="singleProductSkeleton"
    >
      <div
        className={` flex  ${
          data?.productimage.length === 1 ? "" : " md:items-center"
        } gap-10 md:gap-5 max-md:flex-col lg:gap-20`}
      >
        <div className="flex-1 flex flex-col gap-1">
          <div
            className={`relative  ${
              data?.productimage.length > 1
                ? "h-[200px] rounded-tr-[8px] rounded-tl-[8px]"
                : "md:min-h-full min-h-[300px] rounded-[8px]"
            } background-light600_dark200`}
          >
            <Image
              src={`http://test-ecomerce.xn--hrt-w-ova.de/${data?.productimage[0].link}`}
              alt="product"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-1">
            {data?.productimage.length > 1 && (
              <div
                className={`flex-1 relative   background-light600_dark200 h-[160px] ${
                  data?.productimage.length > 2
                    ? "rounded-bl-[8px]"
                    : "rounded-bl-[8px] rounded-br-[8px]"
                }`}
              >
                <Image
                  src={`http://test-ecomerce.xn--hrt-w-ova.de/${data?.productimage[1].link}`}
                  alt="product"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {data?.productimage.length > 2 && (
              <div className="flex-1 relative rounded-br-[8px] background-light600_dark200 h-[160px]">
                <Image
                  src={`http://test-ecomerce.xn--hrt-w-ova.de/${data?.productimage[2].link}`}
                  alt="product"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="h1-bold text-darkBlack_light100">{data?.title}</h2>
            <div className="relative text-light800_light100 font-semibold ps-2 text-2xl">
              {data?.price}
              <span className="absolute -top-1 -left-1 text-sm">€</span>
            </div>
          </div>
          <div className="font-medium leading-[160%] text-sm mt-8 min-h-[140px] border-b border-light-400 dark:border-light-100">
            <p>{data?.information}</p>
            {/* <span>L45 x D47 x H90 cm</span> */}
          </div>
          <div className="py-4 flex items-center justify-between">
            <AddToCartBtns
              currentQty={currentItem?.qty || 0}
              cannotAddToCart={cannotAddToCart}
              item={{
                item_id: data?.id,
                qty: 1,
                price: data?.price,
                name: data?.title,
                
              }}
            />
            <Button
              variant={"ghost"}
              className="text-primary-100  flex-col [&_svg]:size-6 gap-0 p-1   hover:text-primary-100 min-h-fit"
            >
              <GoShareAndroid />
              <span className="font-mont font-light text-sm">Share</span>
            </Button>
          </div>
          {data?.quantity === 0 ? (
            <div className="text-center">Out Of Stock</div>
          ) : (
            <BtnPrimary
              disabled={loadingCart || cannotAddToCart}
              onClick={() =>
                handleAddToCart({
                  item_id: data?.id,
                  qty: 1,
                  price: data?.price,
                  name: data?.title,
                  
                })
              }
              customStyle="w-full rounded-full [&_svg]:!size-5"
            >
              {loadingCart ? <Spinner /> : "Add to Cart"}
            </BtnPrimary>
          )}
        </div>
      </div>
    </Loading>
  );
}

export default SingleProductDetails;
