"use client";
import React, { ReactNode, useTransition } from "react";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale, useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Image from "next/image";
import { GrCheckmark } from "react-icons/gr";

type Props = {
  children?: ReactNode;
  defaultValue: string;
};
function LocaleSwitcherLang({ defaultValue }: Props) {
  const t = useTranslations("homePage.navLinks")
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`

        { pathname, params },
        { locale: nextLocale as Locale }
      );
    });
  }
  return (
    <>
      <div className="max-lg:hidden">
        {defaultValue === "en" ? (
          <Button
            className={`${
              pathname === "/" ? "!text-light-100" : "text-darkBlack_light100"
            } bg-transparent p-1 shadow-none hover:bg-transparent`}
            disabled={isPending}
            onClick={() => onSelectChange("ar")}
          >
            <span>
              <Image
                width={20}
                height={20}
                alt="icon"
                src="/assets/icons/ar.svg"
              />
            </span>
            <span className="capitalize">ar</span>
          </Button>
        ) : (
          <Button
            className={`${
              pathname === "/" ? "text-light-100 " : "text-dark100_light100"
            }  bg-transparent p-1 shadow-none hover:bg-transparent`}
            disabled={isPending}
            onClick={() => onSelectChange("en")}
          >
            <span>
              <Image
                width={20}
                height={20}
                alt="icon"
                src="/assets/icons/en.svg"
              />
            </span>
            <span className={` capitalize`}>en</span>
          </Button>
        )}
      </div>
      <div className="lg:hidden mt-8">
        <div>
          <h4 className="font-medium text-xl">{t("language")}</h4>
          <div className="flex flex-col gap-1">
            <div className="border-b border-black/60 dark:border-light-100/60">
              <Button
                variant="ghost"
                className="my-2 w-full !justify-start relative"
                disabled={isPending}
                onClick={() => onSelectChange("ar")}
              >
                {locale === "ar" && (
                  <GrCheckmark
                    className="text-primary-100 start-4 absolute top-1/2 -translate-y-1/2"
                    size={24}
                  />
                )}
                <div className="flex gap-3 ps-8 ">
                  <span>
                    <Image
                      width={20}
                      height={20}
                      alt="icon"
                      src="/assets/icons/ar.svg"
                    />
                  </span>
                  <span className="capitalize font-mont text-sm text-darkBlack_light100">
                  {t("langSwitcher.ar")}
                  </span>
                </div>
              </Button>
            </div>
            <Button
              variant="ghost"
              className="my-2 w-full !justify-start relative gap-6"
              disabled={isPending}
              onClick={() => onSelectChange("en")}
            >
              {locale === "en" && (
                <GrCheckmark
                  className="text-primary-100 start-4 absolute top-1/2 -translate-y-1/2"
                  size={24}
                />
              )}
              <div className="flex gap-3 ps-8 ">
                <span>
                  <Image
                    width={20}
                    height={20}
                    alt="icon"
                    src="/assets/icons/en.svg"
                  />
                </span>
                <span className="capitalize font-mont text-sm text-darkBlack_light100">
                {t("langSwitcher.en")}
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocaleSwitcherLang;
