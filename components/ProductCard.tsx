"use client";
import { IProduct } from "@/types";
import Image from "next/image";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiPlus } from "react-icons/fi";
import { useAddToCartItem } from "@/hooks/useAddToCartItem";
import { Link } from "@/i18n/navigation";

function ProductCard({ item }: { item: IProduct }) {
  const [isClicked, setIsClicked] = useState(false);
  const { handleAddToCart, loadingCart, cartItems } = useAddToCartItem();
  const currentItem = cartItems.find(
    (cardItem) => cardItem.item_id === item.id
  );
  const cannotAddToCart = currentItem
    ? item.quantity < currentItem?.qty || item.quantity == currentItem.qty
    : false;

  return (
    <div className="dark:shadow-dark-200 flex-col flex shadow-black-200 shadow rounded-[20px] bg-light-100 dark:bg-dark-100 ">
      <Link href={`/product/${item.id}`}>
        <div className="background-light600_dark200 h-[160px] relative rounded-tl-[20px]  rounded-tr-[20px]">
          <Image
            src={`http://test-ecomerce.xn--hrt-w-ova.de/${item.productimage[0].link}`}
            alt="product img"
            width={180}
            height={160}
            className="object-contain mx-auto absolute left-1/2 -translate-x-1/2 bottom-0"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <div>
          <span className="font-inter text-light-700 capitalize">
            {item.title}
          </span>
          <h4
            title={item.description}
            className="font-inter capitalize font-semibold text-light800_light100 line-clamp-4 mb-4"
          >
            {item.description}
          </h4>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="relative text-light800_light100 font-semibold ps-2">
            {Math.round(+item.price)}
            <span className="absolute -top-1 -left-1 rtl:-left-2 text-sm">€</span>
          </div>
          <Button
            disabled={cannotAddToCart || +item.quantity === 0}
            onClick={() => {
              setIsClicked(!isClicked);
              handleAddToCart({
                item_id: item.id,
                price: +item.discount > 0 ? +item.discount_Price : +item.price,
                qty: 1,
                name: item?.title,
              });
            }}
            className={`!background-light800_light100 target:scale-50 rounded-full w-7 p-0 h-7 flex items-center justify-center transition-transform duration-200  active:scale-90 `}
          >
            <FiPlus className="text-light-100 dark:text-light-800" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
