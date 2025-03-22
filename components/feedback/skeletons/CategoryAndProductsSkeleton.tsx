import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function CategoryAndProductsSkeleton() {
  return (
    <>
      {" "}
      <div className="container py-24 pt-32 sm:pt-44 flex items-center max-lg:flex-col-reverse max-lg:gap-12">
        <div className="flex-1">
          <Skeleton className="sm:w-[180px] w-[80px] h-6" />
          <Skeleton className="sm:w-[260px] w-[200px] h-6 mt-4" />
          <Skeleton className="sm:w-[200px] w-[160px] h-6 mt-2" />
          <Skeleton className="sm:w-[290px] w-[220px] h-6 mt-2" />
        </div>
        <div className="flex flex-1 justify-center">
          <div className="relative xl:ms-12 w-[260px] h-[180px]  sm:w-[400px] sm:h-[230px] lg:h-[300px]">
            <div className=" w-[80%] h-full rounded-[20px] absolute -left-6 -top-6 sm:-top-8"></div>
            <div className=" w-full h-[60%] rounded-[20px] absolute -right-6 top-1/2 -translate-y-1/2"></div>
            
              <Skeleton className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="container py-24 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 gap-y-32">
        {Array(4)
          .fill(0)
          .map((item: any, idx) => (
            <div
              key={idx}
              className="dark:shadow-dark-200 relative z-10 bg-light-100 dark:bg-dark-100 flex-col flex shadow-black-200 shadow rounded-[20px]  "
            >
              <div className=" h-[160px] relative rounded-tl-[20px]  rounded-tr-[20px] overflow-hidden">
                <Skeleton className="w-full h-full" />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div>
                  <Skeleton className="w-[30%] h-4" />
                  <Skeleton className="w-[70%] h-4 mt-2" />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Skeleton className="w-[30%] h-4" />
                  <Skeleton className="w-4 h-4 rounded-full"/>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default CategoryAndProductsSkeleton;
