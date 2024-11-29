import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import arrowRightUp from "@public/icons/arrow-right-up.svg";
import LinkButton from "@/components/LinkButton";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef<HTMLDivElement>(null);
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

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (container) {
      gsap.to(container, {
        opacity: 0.25,
        scale: 0.95,

        scrollTrigger: {
          trigger: container,
          start: "top [0%]",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });
    }

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:px-12 sm:py-44"
    >
      <h1
        ref={titleRef}
        className="text-6xl font-light opacity-0 sm:text-7xl md:text-8xl"
      >
        Vishal Pawar
      </h1>
      <h2
        ref={subtitleRef}
        className="text-base font-light text-neutral-400 opacity-0 sm:text-xl"
      >
        Full-Stack Developer and Indie Game Developer, <br /> passionate about
        creating beautiful, intuitive digital spaces.
      </h2>

      {/* Download Button */}
      <div ref={buttonRef} className="opacity-0">
        <LinkButton
          label="Download Resume"
          href="./resume/Vishal_Pawar_Resume.pdf"
          imgSrc={arrowRightUp}
          imgAlt="arrow"
          imgWidth={24}
        />
      </div>
    </section>
  );
};

export default Hero;
