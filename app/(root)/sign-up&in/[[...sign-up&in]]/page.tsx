import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";
import SignInAndUpForms from "@/components/SignInAndUpForms";
import SignTabs from "@/components/SignTabs";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="relative">
      <div className="container py-16 pt-[80px] md:pt-[140px]">
        <div className="text-center">
          <h1 className="h1-bold text-darkBlack_light100">
            Welcome to Our store
          </h1>
          <p className="font-medium leading-[160%] text-light500_light100">
            Bringing Your Style Home
          </p>
        </div>
       
          <SignInAndUpForms />
      
      </div>
      <Image
        alt="icon"
        src="/assets/icons/sign-svg-1.svg"
        width={140}
        height={100}
        className="absolute right-0 max-2xl:hidden  -z-10 top-[10%] md:top-[15%]  2xl:w-[150px]"
      />
      <Image
        alt="icon"
        src="/assets/icons/sign-svg-2.svg"
        width={140}
        height={100}
        className="absolute left-0 max-2xl:hidden  -z-10 bottom-[10%]   2xl:w-[150px]"
      />
    </section>
  );
}

export default page;
