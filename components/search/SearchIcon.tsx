"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function SearchIcon({
  className,
  isPopup = false,
}: {
  className?: string;
  isPopup?: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const isHomeSection = pathname === `/${locale}`;
  return (
    <div className={className}>
      <Image
        src={"/assets/icons/search.svg"}
        width={24}
        height={24}
        alt="search icon"
        className={`${isHomeSection && !isPopup ? "hidden" : "dark:hidden"} `}
      />
      <Image
        src={"/assets/icons/search-dark.svg"}
        width={24}
        height={24}
        alt="search icon"
        className={`${isHomeSection && !isPopup ? "" : "hidden dark:block"} `}
      />
    </div>
  );
}

export default SearchIcon;
