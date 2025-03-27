"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export default function CustomCarousel({
  children,
  slidesCount
}: {
  children: React.ReactNode;
  slidesCount:number
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const totalSlides = slidesCount;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div dir="ltr" className="w-full max-w-4xl mx-auto py-10">
      <Carousel dir="ltr" className="w-full" setApi={setApi}>
        <CarouselContent>{children}</CarouselContent>
        {/* <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" /> */}
      </Carousel>

      {/* Slide indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all",
              current === index
                ? "bg-primary-100 scale-110 w-8 "
                : "bg-light-950 hover:bg-primary-100"
            )}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>

      {/* Current slide indicator text */}
      {/* <p className="text-center mt-2 text-sm text-muted-foreground">
        Slide {current + 1} of {totalSlides}
      </p> */}
    </div>
  );
}
