"use client";
import React, { useEffect } from "react";
import SignInForm from "./forms/SignInForm";
import SignUpForm from "./forms/SignUpForm";
import SignTabs from "./SignTabs";
import { useAppSelector } from "@/store/hook";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

function SignInAndUpForms() {
  const pathname = usePathname();
  const { accessToken } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const t = useTranslations("signPage")

  useEffect(() => {
    if (accessToken && pathname === "/sign-up&in") {
      router.push("/");
    }
  }, [accessToken, pathname]);
  return (
    <>
      <div className="text-center">
        <h1 className="h1-bold text-darkBlack_light100">{t("h1")}</h1>
        <p className="font-medium leading-[160%] text-light500_light100">
          {t("p")}
        </p>
      </div>
      <div className="flex mt-12 gap-4 max-lg:hidden">
        <SignInForm />
        <SignUpForm />
      </div>
      <div className="lg:hidden">
        <SignTabs />
      </div>
    </>
  );
}

export default SignInAndUpForms;
