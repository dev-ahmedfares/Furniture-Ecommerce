import React from "react";

function Page() {
  return (
    <section className="bg-bgHome bg-cover bg-no-repeat min-h-screen bg-center ">
      <div className="w-full min-h-screen flex justify-center bg-lightOverlay dark:bg-blackOverlay ">
        <div className="text-center mt-52 text-light-100">
          <h1 className="h1-bold xl:text-5xl  max-lg:max-w-[400px] max-w-[550px] capitalize">
            Make your interior more minimalistic & modern
          </h1>
          <p className="font-extrabold leading-[160%] max-md:text-sm  max-md:max-w-[280px] max-w-[400px] mt-4 mx-auto">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page;
