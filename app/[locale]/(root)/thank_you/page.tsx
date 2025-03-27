import BtnPrimary from "@/components/shared/BtnPrimary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <section className="relative">
      <div className="container flex min-h-screen flex-col gap-8 items-center py-16 pt-[80px] sm:pt-[140px]">
        <div className="text-center">
          <h1 className="h1-bold text-darkBlack_light100 max-sm:text-[24px]">
            Thank you for your purchase!
          </h1>
          <p className="font-medium leading-[160%] text-light500_light100 max-sm:text-sm max-sm:mt-2">
            We're doing a little happy dance over here.
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/Group.png"
            alt="thank you img"
            width={170}
            height={300}
          />
        </div>
        <Link href="/">
          <BtnPrimary customStyle="rounded-full min-h-[40px]">
            Go to home
          </BtnPrimary>
        </Link>
      </div>
      <Image
        alt="icon"
        src="/assets/icons/sign-svg-1.svg"
        width={140}
        height={100}
        className="absolute right-0 max-lg:hidden  -z-10 top-[10%] md:top-[15%]  2xl:w-[180px]"
      />
      <Image
        alt="icon"
        src="/assets/icons/sign-svg-2.svg"
        width={140}
        height={100}
        className="absolute left-0 max-lg:hidden  -z-10 bottom-[10%]   2xl:w-[180px]"
      />
    </section>
  );
}

export default Page;
