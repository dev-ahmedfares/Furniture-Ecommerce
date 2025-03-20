import SearchContainer from "@/components/search/SearchContainer";
import ToggleMenubar from "@/components/shared/ToggleMenubar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CarouselItem } from "@/components/ui/carousel";
import CustomCarousel from "@/components/CustomCarousle";

const offers = [
  {
    label: "Living Room",
    paragraph:
      " Sofas, loveseats, armchairs, coffee tables, end tables, entertainment centers, bookshelves.",
    path: "/categories",
    img: "/assets/images/category-1.png",
  },
  {
    label: "Bedroom",
    paragraph:
      "Beds, nightstands, dressers, chests of drawers, wardrobes, vanities.",
    path: "/categories",
    img: "/assets/images/category-2.png",
  },
  {
    label: "Kitchen",
    paragraph: "Kitchen cabinets, kitchen islands, dining tables, chairs.",
    path: "/categories",
    img: "/assets/images/category-3.png",
  },
];

const features = [
  {
    img: "/assets/images/feature-1.png",
    label: "Extensive Catalog",
    text: "A wide selection of furniture styles, categories, and price points.",
  },
  {
    img: "/assets/images/feature-2.png",
    label: "Detailed Product Descriptions",
    text: "Comprehensive information including dimensions, materials, care instructions, and warranty details.",
  },
  {
    img: "/assets/images/feature-3.png",
    label: "Room Planner/Visualizer",
    text: "Tools to help customers visualize furniture in their own spaces.",
  },
];
function Page() {
  return (
    <>
      <section className="bg-bgHome bg-cover bg-no-repeat min-h-screen bg-center ">
        <div className="w-full min-h-screen flex flex-col items-center bg-lightOverlay dark:bg-blackOverlay ">
          <div className="text-center mt-52 text-light-100">
            <h1 className="h1-bold xl:text-5xl  max-lg:max-w-[400px] max-w-[550px] capitalize">
              Make your interior more minimalistic & modern
            </h1>
            <p className="font-extrabold leading-[160%] max-md:text-sm  max-md:max-w-[280px] max-w-[400px] mt-4 mx-auto">
              Turn your room with panto into a lot more minimalist and modern
              with ease and speed
            </p>
          </div>

          <SearchContainer
            btnStyle="hover:!bg-transparent"
            button={
              <div className="relative mt-12 xl:min-h-[32px] xl:min-w-[280px] min-h-[26px] min-w-[220px] flex items-center px-2 justify-between bg-light-850/20 backdrop-blur-[10px] rounded-full  ">
                <span className="text-xs font-[300] font-mont text-light-100">
                  Search
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
              <span>Our</span>
              <span>Categories</span>
            </h2>
            <div className="max-xl:flex-1">
              <div
                className="grid grid-cols-[repeat(1,240px)]  
  sm:grid-cols-[repeat(2,240px)] 
  lg:grid-cols-[repeat(3,240px)] gap-8 lg:gap-20 place-content-center "
              >
                {offers.map((offer, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="relative w-[240px] h-[240px] rounded-[23px] overflow-hidden">
                      <Image
                        src={offer.img}
                        fill
                        alt={offer.label}
                        className="object-cover"
                      />
                    </div>
                    <h4 className="font-extrabold text-xl mt-4">
                      {offer.label}
                    </h4>
                    <p className=" font-light leading-[185%] text-sm my-4">
                      {offer.paragraph}
                    </p>
                    <Link
                      href={offer.path}
                      className="font-medium group capitalize text-primary-100 flex items-center gap-2 mt-auto"
                    >
                      <span>more info</span>
                      <span className="group-hover:animate-pulse">
                        <IoIosArrowRoundForward size={20} />
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
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
                Furnish Your Dreams,
                <br />
                Choose Wisely
              </h4>
              <p className="  leading-[185%] text-sm my-4 max-w-[500px]">
                Discover quality furniture, curated styles, and exceptional
                service at Our Store. We make furnishing your home easy and
                enjoyable.
              </p>
              <Link
                href={"/categories"}
                className="font-medium group capitalize text-primary-100 flex items-center gap-2 mt-auto"
              >
                <span>more info</span>
                <span className="group-hover:animate-pulse">
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
              SOME OF OUR
            </p>
            <h2 className="font-extrabold flex gap-2 xl:flex-col max-xl:justify-center  text-3xl xl:pb-12 flex-1 ">
              Features we offer to you
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
