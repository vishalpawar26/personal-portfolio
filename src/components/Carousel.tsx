import { CarouselItem } from "@/constants/projects";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Carousel: React.FC<{ items: CarouselItem[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange("next");
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleSlideChange = (direction: "next" | "prev") => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const carouselWidth = carousel.offsetWidth;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % items.length
          : (currentIndex - 1 + items.length) % items.length;
      carousel.style.transform = `translateX(-${newIndex * carouselWidth}px)`;
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {items.map((item) => (
          <div
            key={item.imgAlt}
            className="flex w-full flex-shrink-0 flex-col items-center justify-center"
          >
            <Image
              src={item.imgSrc}
              alt={item.imgAlt}
              className="h-auto w-auto lg:w-3/4"
            />
            <h3 className="pb-8 text-xl font-semibold md:pb-20 md:text-2xl">
              {item.imgDesc}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
