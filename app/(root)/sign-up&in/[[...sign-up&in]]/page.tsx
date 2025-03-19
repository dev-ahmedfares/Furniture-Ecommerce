import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";
import SignTabs from "@/components/SignTabs";
import React from "react";

function page() {
  return (
    <div className="container py-16 pt-[80px] md:pt-[140px]">
      <div className="text-center">
        <h1 className="h1-bold text-darkBlack_light100">
          Welcome to Our store
        </h1>
        <p className="font-medium leading-[160%] text-light500_light100">
          Bringing Your Style Home
        </p>
      </div>

      <div className="flex mt-12 gap-4 max-lg:hidden">
        <SignInForm />
        <SignUpForm />
      </div>

      <div className="lg:hidden">
        <SignTabs/>
      </div>
    </div>
  );
}

export default page;
