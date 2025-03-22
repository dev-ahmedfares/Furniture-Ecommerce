"use client";
import React from "react";
import { Button } from "../ui/button";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

function AddToCartBtns({
  btnStyle,
  textStyle,
  parentStyle
}: {
  btnStyle?: string;
  parentStyle?: string;
  textStyle?: string;
}) {
  return (
    <div className={`flex items-center gap-4`}>
      <Button
        size={"icon"}
        className={` rounded-full bg-light-750 dark:!bg-light-750 ${btnStyle}`}
      >
        <FiPlus className="text-light-100" />
      </Button>
      <p
        className={` font-extrabold leading-[130%] text-2xl text-darkBlack_light100 ${textStyle}`}
      >
        1
      </p>
      <Button
        size={"icon"}
        className={` rounded-full bg-light-750 dark:!bg-light-750 ${btnStyle}`}
      >
        <FiMinus className="text-light-100" />
      </Button>
    </div>
  );
}

export default AddToCartBtns;
