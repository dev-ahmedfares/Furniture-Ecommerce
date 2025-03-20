"use client";
import React, { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { Button } from "../ui/button";
import Link from "next/link";
import ToggleMenubar from "../shared/ToggleMenubar";
import SearchPage from "./SearchPage";
import SearchIcon from "./SearchIcon";
import Image from "next/image";

function SearchContainer({button,btnStyle}:{button:React.ReactNode,btnStyle?:string}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ToggleMenubar
    btnStyle={btnStyle}
      btnChild={button}
      setShowMenu={setShowMenu}
      showMenu={showMenu}
    >
      <div className="relative min-h-screen">
        <div className="container">
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
          <SearchPage />
        </div>
        <Image
          src="/assets/icons/search-svg-2.svg"
          className="  absolute top-1/2 -translate-y-1/2 -z-10 -right-1 max-lg:hidden"
          width={200}
          height={200}
          alt="icon"
        />
        <Image
          src="/assets/icons/search-svg-3.svg"
          className="  absolute top-1/2 -translate-y-1/2 -z-10 -left-1 max-lg:hidden"
          width={200}
          height={200}
          alt="icon"
        />
      </div>
    </ToggleMenubar>
  );
}

export default SearchContainer;
