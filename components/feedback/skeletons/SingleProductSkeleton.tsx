import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function SingleProductSkeleton() {
  return (
    <div className={` flex  max-md:flex-col  gap-10 md:gap-5 lg:gap-20`}>
      <div className="flex-1 flex flex-col gap-1">
        <div
          className={`relative w-full h-[300px]  rounded-[8px] flex justify-center`}
        >
          <Skeleton className="w-full h-full" />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <Skeleton className="w-[120px] h-6" />
          <Skeleton className="w-[60px] h-6" />
        </div>
        <Skeleton className="w-[80px] h-4" />
        <Skeleton className="w-[220px] h-4 mt-2" />
        <Skeleton className="w-[180px] h-4 mt-2" />
        <div className="mt-auto border-t max-md:mt-8">
        <div className="py-4 flex items-center justify-between">
          <Skeleton className="w-[120px] h-6" />
          <Skeleton className="w-[60px] h-6" />
        </div>
        <Skeleton className="w-full h-8" />
        </div>
      </div>
    </div>
  );
}

export default SingleProductSkeleton;
