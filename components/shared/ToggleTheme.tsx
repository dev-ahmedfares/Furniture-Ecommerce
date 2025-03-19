"use client";

import { Button } from "../ui/button";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { useTheme } from "next-themes";

function ToggleTheme({className}:{className?:string}) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
    className={className}
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IoMoon className="h-[1.5rem] w-[1.3rem] dark:hidden text-dark-300" />
      <MdSunny className="hidden h-5 w-5 dark:block text-primary-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ToggleTheme;
