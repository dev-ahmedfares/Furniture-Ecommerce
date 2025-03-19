import React from "react";
import LinksList from "./LinksList";
import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitchMenu from "./ThemeSwitchMenu";

function MobileMenu() {
  return (
    <div>
      <LinksList isCol/>

      <LanguageSwitch />

      <ThemeSwitchMenu />  
    </div>
  );
}

export default MobileMenu;
