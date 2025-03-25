"use client";
import React, { useEffect } from "react";
import SignInForm from "./forms/SignInForm";
import SignUpForm from "./forms/SignUpForm";
import SignTabs from "./SignTabs";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hook";

function SignInAndUpForms() {
  const pathname = usePathname();
  const { accessToken } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (accessToken && pathname === "/sign-up&in") {
      router.push("/");
    }
  }, [accessToken,pathname]);
  return (
    <>
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
