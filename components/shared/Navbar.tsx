import Link from "next/link";
import React from "react";
import CartBtn from "./CartBtn";
import LinksList from "./LinksList";
import Language from "./Language";
import ToggleTheme from "./ToggleTheme";
import SearchIcon from "../search/SearchIcon";
import MenubarContainer from "./MenubarContainer";
import SearchContainer from "../search/SearchContainer";

function Navbar() {
  return (
    <nav className="container z-10 min-h-[60px] flex items-center justify-between absolute right-0 left-0">
      <Link href={"/"} className="font-agency dark:text-light-100">
        LOGO
      </Link>

      <LinksList className="max-md:hidden" />

      <div className="flex items-center gap-6">
        <SearchContainer button={<SearchIcon />} />
        <CartBtn />

        <div className="flex items-center gap-6 max-md:hidden">
          <ToggleTheme />
          <Language />
        </div>

        <div>
          <MenubarContainer />
        </div> 
      </div>
    </nav>
  );
}

export default Navbar;
