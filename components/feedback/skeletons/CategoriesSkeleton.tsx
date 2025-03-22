import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function CategoriesSkeleton() {
  return (
    <div
      className="grid grid-cols-[repeat(1,240px)]  
      sm:grid-cols-[repeat(2,240px)] 
      lg:grid-cols-[repeat(3,240px)] gap-8 lg:gap-20 place-content-center "
    >
      {Array(3)
        .fill(0)
        ?.map((offer: any, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="relative w-[240px] h-[240px] rounded-[23px] overflow-hidden">
              <Skeleton className="w-full h-full" />
            </div>

            <Skeleton className="w-[50%] h-4 mt-4" />
            <Skeleton className="w-[70%] h-4 mt-4" />
            <Skeleton className="w-[90%] h-4 mt-2" />

            <Skeleton className=" h-4 w-[30%] mt-4" />
          </div>
        ))}
    </div>
  );
}

export default CategoriesSkeleton;
