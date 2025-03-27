
import React from "react";
import CartBtn from "./CartBtn";
import LinksList from "./LinksList";
import ToggleTheme from "./ToggleTheme";
import SearchIcon from "../search/SearchIcon";
import MenubarContainer from "./MenubarContainer";
import SearchContainer from "../search/SearchContainer";
import { DropdownMenuPopUp } from "../DropdownMenuPopUp";
import LanguageSwitch from "./LanguageSwitch";

function Navbar() {
  return (
    <nav className="container z-10 min-h-[60px] flex items-center justify-between absolute right-0 left-0">
      <LinksList  className="max-lg:hidden" />

      <div className="flex items-center gap-4">
        
          <SearchContainer btnStyle="hover:!bg-transparent" button={<SearchIcon />} />
        
        <CartBtn />

        <div className="flex items-center gap-2 max-lg:hidden">
          <ToggleTheme />
          <LanguageSwitch />
          <DropdownMenuPopUp />
        </div>

        <div>
          <MenubarContainer />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
