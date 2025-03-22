import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { GrCheckmark } from "react-icons/gr";

function ThemeSwitchMenu() {
  const { setTheme, theme } = useTheme();
// TODO remove return or fix it
if (!theme) return null;

  return (
    <div>
      <h4 className="font-medium text-xl">Theme</h4>
      <div className="flex flex-col gap-1">
        <div className="border-b border-black/60 dark:border-light-100/60">
          <Button
            variant="ghost"
            className="my-2 w-full !justify-start relative"
            onClick={() => setTheme("light")}
          >
            <div className="flex items-center ps-8 gap-4 ">
              { theme === "light" && (
                <GrCheckmark
                  className="text-primary-100 start-4 absolute top-1/2 -translate-y-1/2"
                  size={24}
                />
              )}
              <MdSunny className=" h-5 w-5  text-primary-100" />
              <span className="font-mont text-sm text-darkBlack_light100">
                Light Mode
              </span>
            </div>
          </Button>
        </div>
        <Button
          variant="ghost"
          className="my-2 w-full !justify-start relative"
          onClick={() => setTheme("dark")}
        >
          <div className="flex items-center ps-8 gap-4 ">
            { theme === "dark" && (
              <GrCheckmark className="text-primary-100 start-4 absolute top-1/2 -translate-y-1/2" />
            )}
            <IoMoon className="h-[1.5rem] w-[1.3rem]  text-dark-300 dark:text-light-100" />
            <span className="font-mont text-sm text-darkBlack_light100 ">
              Dark Mode
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default ThemeSwitchMenu;
