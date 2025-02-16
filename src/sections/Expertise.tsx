import React, { useRef } from "react";
import { expertise } from "@/constants/index";
import ExpertiseCard from "@/components/ExpertiseCard";
import { useViewportAnimation } from "@/utils/useViewportAnimation";

const Expertise = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardOneRef = useRef<HTMLDivElement>(null);
  const cardTwoRef = useRef<HTMLDivElement>(null);
  const cardThreeRef = useRef<HTMLDivElement>(null);
  const cardFourRef = useRef<HTMLDivElement>(null);
  const cardFiveRef = useRef<HTMLDivElement>(null);
  const cardSixRef = useRef<HTMLDivElement>(null);

  const refArray = [
    cardOneRef,
    cardTwoRef,
    cardThreeRef,
    cardFourRef,
    cardFiveRef,
    cardSixRef,
  ];

  useViewportAnimation([
    headingRef,
    cardOneRef,
    cardTwoRef,
    cardThreeRef,
    cardFourRef,
    cardFiveRef,
    cardSixRef,
  ]);

  return (
    <section
      id="expertise"
      className="z-10 flex w-full items-center justify-center bg-background px-4 py-12 sm:px-12"
    >
      <div className="flex flex-col items-center gap-4 sm:gap-8 lg:w-[1200px]">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="pb-4 text-center text-4xl font-light leading-snug opacity-0 sm:py-12 sm:text-5xl md:text-6xl"
        >
          Areas of My <br /> Expertise.
        </h2>

        {/* Grid */}
        <div className="spotlight-grid grid gap-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
          {expertise.map(({ icon, title, subTitle }, index) => (
            <ExpertiseCard
              ref={refArray[index]}
              key={title}
              icon={icon}
              title={title}
              subTitle={subTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
