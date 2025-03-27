"use client";
import React, { useState } from "react";
import ToggleMenubar from "./ToggleMenubar";
import MobileMenu from "./MobileMenu";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";
function MenubarContainer() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ToggleMenubar
    customStyle="block lg:hidden  relative z-50"
      btnChild={<IoMenu className="text-primary-100  " />}
      setShowMenu={setShowMenu}
      showMenu={showMenu}
      btnStyle="hover:!bg-transparent"
    >
      <div className="container relative z-20">
        <div className="flex items-center justify-between  min-h-[60px]">
          <Link href={"/"} className="font-agency dark:text-light-100">
            LOGO
          </Link>
          <Button
            onClick={() => setShowMenu((curr: boolean) => !curr)}
            variant={"ghost"}
            size={"icon"}
            className="  [&_svg]:!size-6"
          >
            <RxCross2 className="text-primary-100  " />
          </Button>
        </div>
        <MobileMenu setShowMenu={setShowMenu}/>
      </div>
    </ToggleMenubar>
  );
}

export default MenubarContainer;
