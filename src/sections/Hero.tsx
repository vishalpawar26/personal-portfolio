"use client";

import Button from "@/components/Button";
import React, { useEffect, useRef } from "react";
import arrowRightUp from "@public/arrow-right-up.svg";
import Image from "next/image";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

import heroImage from "@public/hero-image.png";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
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
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-32 text-center sm:px-12"
    >
      <Image
        ref={imageRef}
        src={heroImage}
        alt="Hero"
        className="absolute -z-10 w-72 opacity-0 blur-md sm:w-[28rem] md:w-[32rem] md:blur-lg"
      />
      <h1 ref={titleRef} className="text-6xl font-light opacity-0 sm:text-8xl">
        Vishal Pawar
      </h1>
      <h3
        ref={subtitleRef}
        className="text-base font-light text-neutral-400 opacity-0 sm:text-xl"
      >
        Full-Stack Developer and Game Developer, <br /> passionate about
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
