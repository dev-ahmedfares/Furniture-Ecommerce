"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/categories",
    label: "Shop",
  },
];

function LinksList({ isCol,className }: { isCol?: boolean,className?:string }) {
  const pathname = usePathname();
  return (
    <ul className={`${className} ${isCol ? "flex-col gap-4 mt-4 !items-start" : "gap-11"} flex items-center  flex-1 justify-center`}>
      {navLinks.map((link, idx) => {
        const isActive = pathname === link.path;

        return (
          <li key={idx + link.path}>
            <Link
              href={link.path}
              className={`${
                isActive ? "!text-primary-100 font-semibold" : ""
              } ${isCol ? "text-2xl" : ""} hover:font-semibold hover:!text-primary-100 transition-all dark:text-light-100`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default LinksList;
