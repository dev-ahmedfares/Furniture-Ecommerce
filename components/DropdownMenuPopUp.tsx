"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { MdKeyboardArrowDown } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { signOutWithGoogle } from "@/lib/actions";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useSignInAndOut } from "@/hooks/useSignInAndOut";


export function DropdownMenuPopUp() {
  const t = useTranslations("homePage.navLinks")
  const pathname = usePathname();
  const locale = useLocale();
  const isHomeSection = pathname === `/${locale}`;

const {mutate,isPending,isAuthenticatedWithGoogle,user,accessToken} = useSignInAndOut()

  if (!accessToken)
    return (
      <Link href={"/sign-up&in"}>
        <Button
          className={`text-light-400 dark:!text-light-100  bg-light-100 dark:bg-dark-100 ${
            isHomeSection ? "md:!bg-light-100 md:dark:!text-light-400" : ""
          }`}
          variant="outline"
        >
          {t("signin")}
        </Button>
      </Link>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`text-light-400 capitalize gap-.5 dark:text-light-100 p-2 !py-0 h-8 ${
            isHomeSection ? " md:!text-light-100 hover:bg-transparent" : ""
          }`}
          variant="ghost"
        >
          {`${user?.name} ${user?.lastname}`}
          <MdKeyboardArrowDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" !left-0 !text-light-400 dark:!text-light-100  bg-light-100 dark:bg-dark-100">
        {isAuthenticatedWithGoogle ? (
          <DropdownMenuItem
            disabled={isPending}
            onClick={() => {
              signOutWithGoogle();
            }}
            className="cursor-pointer"
          >
            {t("logout")}
            <DropdownMenuShortcut>
              <PiSignOut />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem
            disabled={isPending}
            onClick={() => mutate()}
            className="cursor-pointer"
          >
            {t("logout")}
            <DropdownMenuShortcut>
              <PiSignOut />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
