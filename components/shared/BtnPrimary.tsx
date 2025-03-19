import React from "react";
import { Button } from "../ui/button";

function BtnPrimary({
  children,
  customStyle,
}: {
  children: React.ReactNode;
  customStyle?: string;
}) {
  return (
    <Button
      className={`text-light-100 min-h-[50px] hover:bg-primary-100/90 font-mont rounded-[18px] bg-primary-100 ${customStyle}`}
    >
      {children}
    </Button>
  );
}

export default BtnPrimary;
