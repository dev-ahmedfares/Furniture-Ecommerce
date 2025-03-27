"use client";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import { usePathname } from "next/navigation";
import React from "react";

function LinksList({
  isCol,
  className,
  isMenubar = false,
  setShowMenu,
}: {
  isCol?: boolean;
  isMenubar?: boolean;
  className?: string;
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const isHomeSection = pathname === `/${locale}`;
  const t = useTranslations("homePage");

  const navLinks = [
    {
      path: "/",
      label: t("navLinks.home"),
    },
    {
      path: "/shop",
      label: t("navLinks.shop"),
    },
  ];

  return (
    <>
      <Link
        href={"/"}
        className={`${
          isMenubar ? "hidden" : ""
        } font-agency dark:text-light-100 ${
          isHomeSection ? "text-light-100" : ""
        }`}
      >
        LOGO
      </Link>
      <ul
        className={`${className} ${
          isCol ? "flex-col gap-4 mt-4 !items-start" : "gap-11"
        } flex items-center  flex-1 justify-center`}
      >
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.path;

          return (
            <li
              key={idx + link.path}
              onClick={() => (isCol && setShowMenu ? setShowMenu(false) : "")}
            >
              <Link
                href={link.path}
                className={`${
                  isActive ? "!text-primary-100 font-semibold" : ""
                } ${
                  isCol ? "text-2xl" : ""
                }  hover:!text-primary-100 duration-300 transition-all dark:text-light-100 ${
                  isHomeSection ? "lg:text-light-100" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default LinksList;
