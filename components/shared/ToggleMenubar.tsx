"use client";
import React from "react";
import { Button } from "../ui/button";


function ToggleMenubar({
  children,
  setShowMenu,
  showMenu,
  btnChild,
  customStyle
}: {
  children: React.ReactNode;
  btnChild: React.ReactNode;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
  customStyle?:string;
}) {
  return (
    <div className={customStyle}>
      <Button
        onClick={() => setShowMenu((curr: boolean) => !curr)}
        variant={"ghost"}
        size={"icon"}
        className="  [&_svg]:!size-6"
      >
       {btnChild}
      </Button>

      <div
        className={`transition-all duration-300 ease-in-out transform ${
          showMenu
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        } bg-light-100 dark:bg-dark-100 fixed inset-0 z-50 `}
      >
        {children}
      </div>
    </div>
  );
}

export default ToggleMenubar;
