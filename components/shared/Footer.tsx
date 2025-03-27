import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  const t = useTranslations("homePage.footer")
  return (
    <div className="background-light300_dark200 mt-auto">
      <div className="container lg:py-16 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 lg:gap-32">
          <div>
            <Link href={"/"} className="font-bold text-2xl">
              Logo
            </Link>
            <p className="font-medium mt-6 text-sm max-w-[400px]">
            {t("p")}
            </p>
          </div>
          <div>
            <h4 className="text-primary-100 font-dmSans">{t("service.h")}</h4>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <Link href={"/"} className="font-medium text-sm">
                {t("service.opt1")}
                </Link>
              </li>
              <li>
                <Link href={"/"} className="font-medium text-sm">
                {t("service.opt2")}
                </Link>
              </li>
              <li>
                <Link href={"/"} className="font-medium text-sm">
                {t("service.opt3")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-100 font-dmSans"> {t("furniture.h")}</h4>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <Link href={"/"} className="font-medium text-sm">
                {t("furniture.opt1")}
                </Link>
              </li>
              <li>
                <Link href={"/"} className="font-medium text-sm">
                {t("furniture.opt2")}
                </Link>
              </li>
              <li>
                <Link href={"/"} className="font-medium text-sm">
                {t("furniture.opt3")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-primary-100 font-dmSans">{t("follow.h")}</h4>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <Link
                  href={"/"}
                  className="font-medium text-sm flex items-center gap-2"
                >
                  <span>
                    <TiSocialFacebook size={20} />
                  </span>
                  <span>{t("follow.opt1")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="font-medium text-sm flex items-center gap-2"
                >
                  <span>
                    <FaTwitter size={20} />
                  </span>
                  <span>{t("follow.opt2")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="font-medium text-sm flex items-center gap-2"
                >
                  <span>
                    <IoLogoInstagram size={20} />
                  </span>
                  <span>{t("follow.opt3")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="items-center flex gap-4 max-sm:flex-col sm:justify-between mt-8 text-sm">
          <p className="font-dmSans text-dark-500 dark:text-light-100/50">{t("copyright")} {new Date().getFullYear()}</p>
          <div className="flex items-center gap-8 max-xs:flex-col max-sm:gap-4">
            <Link href={"/"}>{t("terms")}</Link>
            <Link href={"/"}>{t("privacy")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
