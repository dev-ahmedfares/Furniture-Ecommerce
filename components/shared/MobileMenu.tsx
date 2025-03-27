import React from "react";
import LinksList from "./LinksList";
import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitchMenu from "./ThemeSwitchMenu";
import SignInAndOutInfoMenubar from "./SignInAndOutInfoMenubar";

function MobileMenu({setShowMenu}: {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <LinksList isMenubar isCol setShowMenu={setShowMenu}/>

      <LanguageSwitch />

      <ThemeSwitchMenu setShowMenu={setShowMenu}/>

      <SignInAndOutInfoMenubar setShowMenu={setShowMenu}/>
    </div>
  );
}

export default MobileMenu;
