import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import Button from "@/components/Button";
import arrowRightUp from "@public/icons/arrow-right-up.svg";

const Hero = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline();

        timeline
          .fromTo(
            imageRef.current,
            { opacity: 0, y: 30 },
            { opacity: 0.5, y: 0, duration: 0.75, ease: "power3.out" },
          )
          .fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
            "-=0.5",
          )
          .fromTo(
            subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
            "-=0.5",
          )
          .fromTo(
            buttonRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
            "-=0.5",
          );
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:px-12 sm:py-36">
      <h1 ref={titleRef} className="text-6xl font-light opacity-0 sm:text-8xl">
        Vishal Pawar
      </h1>
      <h3
        ref={subtitleRef}
        className="text-base font-light text-neutral-400 opacity-0 sm:text-xl"
      >
        Full-Stack Developer and Indie Game Developer, <br /> passionate about
        creating beautiful, intuitive digital spaces.
      </h3>
      <Button
        ref={buttonRef}
        label="Download Resume"
        variant="filled"
        icon={true}
        buttonIcon={arrowRightUp}
        onClick={() => {}}
      />
    </section>
  );
};

export default Hero;
