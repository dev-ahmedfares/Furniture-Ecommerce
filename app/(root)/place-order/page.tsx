import FormStepper from "@/components/FormStepper";
import Image from "next/image";

function Page() {
  return (
    <section className="relative">
      <div className="container py-20 md:pt-44 min-h-screen ">
        <FormStepper />
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
      </div>
    </section>
  );
}

export default Page;
