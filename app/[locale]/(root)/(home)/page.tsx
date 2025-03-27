import SearchContainer from "@/components/search/SearchContainer";
import ToggleMenubar from "@/components/shared/ToggleMenubar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CarouselItem } from "@/components/ui/carousel";
import CustomCarousel from "@/components/CustomCarousle";
import CategoriesList from "@/components/CategoriesList";
import {  getTranslations } from "next-intl/server";


async function Page() {
  const t = await getTranslations("homePage");

  const features = [
    {
      img: "/assets/images/feature-1.png",
      label: t("featuresSection.cardOne.head"),
      text: t("featuresSection.cardOne.p"),
    },
    {
      img: "/assets/images/feature-2.png",
      label: t("featuresSection.cardTwo.head"),
      text: t("featuresSection.cardTwo.p"),
    },
    {
      img: "/assets/images/feature-3.png",
      label: t("featuresSection.cardThree.head"),
      text: t("featuresSection.cardThree.p"),
    },
  ];

  return (
    <>
      <section className="bg-bgHome bg-cover bg-no-repeat min-h-screen bg-center ">
        <div className="w-full min-h-screen flex flex-col items-center bg-lightOverlay dark:bg-blackOverlay ">
          <div className="text-center mt-52 text-light-100">
            <h1 className="h1-bold xl:text-5xl  max-lg:max-w-[400px] max-w-[550px] capitalize">
              {t("heroSection.h1")}
            </h1>
            <p className="font-extrabold leading-[160%] max-md:text-sm  max-md:max-w-[280px] max-w-[400px] mt-4 mx-auto">
              {t("heroSection.p")}
            </p>
          </div>

          <SearchContainer
            btnStyle="hover:!bg-transparent"
            button={
              <div className="relative mt-12 xl:min-h-[32px] xl:min-w-[280px] min-h-[26px] min-w-[220px] flex items-center px-2 justify-between bg-light-850/20 backdrop-blur-[10px] rounded-full  ">
                <span className="text-xs font-[300] font-mont text-light-100">
                  {t("heroSection.search")}
                </span>
                <Image
                  src="/assets/icons/white-search.svg"
                  width={18}
                  height={18}
                  alt="search icon"
                />
              </div>
            }
          />
        </div>
      </section>

      {/* Categories Section */}

      <section className="xl:py-28 relative">
        <div>
          <div className="container py-24 flex gap-16 xl:items-end max-xl:flex-col">
            <h2 className="font-extrabold flex gap-2 xl:flex-col max-xl:justify-center  max-md:text-3xl xl:pb-12 flex-1 text-4xl">
              <span>{t("outCategories.span1")}</span>
              <span>{t("outCategories.span2")}</span>
            </h2>
            <div className="max-xl:flex-1">
              <CategoriesList />
            </div>
          </div>
          <Image
            alt="icon"
            src="/assets/icons/home-svg-1.svg"
            width={140}
            height={100}
            className="absolute left-0   -z-10  top-20  xl:w-[160px]"
          />
        </div>

        <div className="relative">
          <div className="container pb-24 pt-12 xl:pt-32 flex max-xl:flex-col max-xl:gap-10 items-center xl:gap-32">
            <div className="relative xl:ms-12 w-[260px] h-[180px]  sm:w-[400px] sm:h-[230px] lg:h-[300px]">
              <div className="background-light300_dark200 w-[80%] h-full rounded-[20px] absolute -left-6 -top-6 sm:-top-8"></div>
              <div className="background-light300_dark200 w-full h-[60%] rounded-[20px] absolute -right-6 top-1/2 -translate-y-1/2"></div>
              <div className=" w-[70%] h-[80%] rounded-[20px] blur-[50px] absolute left-1/2 -translate-x-1/2 top-10 ">
                <Image
                  src="/assets/images/category-4.png"
                  fill
                  alt="img"
                  className="object-cover rounded-[20px]"
                />
              </div>
              <Image
                src="/assets/images/category-4.png"
                fill
                alt="img"
                className="object-cover rounded-[20px]"
              />
            </div>

            <div className="flex flex-col">
              <h4 className="font-extrabold text-xl md:text-3xl mt-4">
                {t("outCategories.h2One")}
                <br />
                {t("outCategories.h2Two")}
              </h4>
              <p className="  leading-[185%] text-sm my-4 max-w-[500px]">
                {t("outCategories.p2")}
              </p>
              <Link
                href={"/"}
                className="font-medium group capitalize text-primary-100 flex items-center gap-2 mt-auto"
              >
                <span>{t("outCategories.moreInfo")}</span>
                <span className="group-hover:animate-pulse rtl:-rotate-180">
                  <IoIosArrowRoundForward size={20} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="background-light900_dark200 overflow-hidden mb-24 relative md:mb-44">
        <div className="container relative z-20 py-24">
          <div className="text-center mb-12 max-sm:mb-4">
            <p className="text-primary-100 mb-2 font-medium tracking-widest text-sm">
              {t("featuresSection.p")}
            </p>
            <h2 className="font-extrabold flex gap-2 xl:flex-col max-xl:justify-center  text-3xl xl:pb-12 flex-1 ">
              {t("featuresSection.h1")}
            </h2>
          </div>

          <div className="grid max-lg:hidden lg:grid-cols-3 justify-center gap-10 2xl:gap-20">
            {features.map((feature, idx) => (
              <div className="relative" key={idx}>
                <div
                  style={{
                    backgroundImage: `url(${feature.img})`,
                  }}
                  className={`p-6 shadow-xl z-10 flex items-end bg-no-repeat bg-cover rounded-[20px] bg-center h-[400px]`}
                >
                  <div className="relative">
                    <div className="bg-light-100/70 text-light-400  backdrop-blur-sm min-h-[150px] text-center  p-5 rounded-[10px]">
                      <h5 className="font-extrabold mb-2">{feature.label}</h5>
                      <p>{feature.text}</p>
                    </div>
                    <div className="absolute bg-light-100/70 -top-[50px]  left-1/2 z-10 -translate-x-1/2 w-[100px] h-[50px] rounded-tl-full rounded-tr-full backdrop-blur-sm"></div>

                    <div className="absolute left-1/2 -translate-x-[59px] rotate-180 -top-[10px] bg-[radial-gradient(circle_at_100%_100%,_transparent_10px,_rgba(255,255,255,.70)_10px)] w-[10px] h-[10px]  "></div>
                    <div className="absolute right-1/2 translate-x-[59px] -rotate-90 -top-[10px] bg-[radial-gradient(circle_at_100%_100%,_transparent_10px,_rgba(255,255,255,.70)_10px)] w-[10px] h-[10px]  "></div>
                  </div>
                </div>
                <div className="-z-10 w-[70%] h-[80%] rounded-[20px] blur-[50px] absolute left-1/2 -translate-x-1/2 top-14 ">
                  <Image
                    src={feature.img}
                    fill
                    alt="img"
                    className="object-cover rounded-[20px]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Carousel */}
          <div className="lg:hidden">
            <CustomCarousel slidesCount={features.length}>
              {features.map((feature, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 ">
                  <div className="relative ">
                    <div
                      style={{
                        backgroundImage: `url(${feature.img})`,
                      }}
                      className={`p-6 relative shadow-xl z-10 justify-center flex items-end bg-no-repeat bg-cover rounded-[20px] bg-center h-[400px]`}
                    >
                      <div className="relative">
                        <div className="bg-light-100/70 text-light-400  backdrop-blur-sm min-h-[150px] text-center  p-5 rounded-[10px]">
                          <h5 className="font-extrabold mb-2">
                            {feature.label}
                          </h5>
                          <p>{feature.text}</p>
                        </div>
                        <div className="absolute bg-light-100/70 -top-[50px]  left-1/2 z-10 -translate-x-1/2 w-[100px] h-[50px] rounded-tl-full rounded-tr-full backdrop-blur-sm"></div>

                        <div className="absolute left-1/2 -translate-x-[59px] rotate-180 -top-[10px] bg-[radial-gradient(circle_at_100%_100%,_transparent_10px,_rgba(255,255,255,.70)_10px)] w-[10px] h-[10px]  "></div>
                        <div className="absolute right-1/2 translate-x-[59px] -rotate-90 -top-[10px] bg-[radial-gradient(circle_at_100%_100%,_transparent_10px,_rgba(255,255,255,.70)_10px)] w-[10px] h-[10px]  "></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CustomCarousel>
          </div>
        </div>
        <Image
          alt="icon"
          src="/assets/icons/home-svg-2.svg"
          width={140}
          height={100}
          className="absolute -right-5 -top-20  xl:w-[200px]"
        />
        <Image
          alt="icon"
          src="/assets/icons/home-svg-3.svg"
          width={140}
          height={100}
          className="absolute left-0 -bottom-32  xl:w-[200px] max-md:w-[120px] max-md:-bottom-20"
        />
      </section>
    </>
  );
}

export default Page;
