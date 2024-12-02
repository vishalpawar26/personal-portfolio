"use client";

import React, { useRef } from "react";
import Image from "next/image";

import Spotlight from "@/components/Spotlight";

import responsiveWeb from "@public/mockups/Responsive-Web.webp";
import cleanCode from "@public/images/clean-code.webp";
import { useViewportAnimation } from "@/utils/useViewportAnimation";

const BentoGrid = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const responsiveWebRef = useRef<HTMLDivElement>(null);
  const cleanCodeRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLDivElement>(null);

  useViewportAnimation([
    headingRef,
    aboutRef,
    techStackRef,
    responsiveWebRef,
    cleanCodeRef,
    gamesRef,
  ]);

  return (
    <section className="spotlight-grid z-10 flex w-full items-center justify-center bg-background px-4 py-12 sm:px-12">
      <div className="flex flex-col items-center gap-4 sm:gap-8 lg:w-[1024px]">
        <Spotlight />
        {/* Heading */}
        <h2
          ref={headingRef}
          className="pb-4 text-center text-4xl font-light leading-snug opacity-0 sm:py-12 sm:text-5xl md:text-6xl"
        >
          Your Vision, <br /> My Execution.
        </h2>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6 md:gap-8 lg:flex-row">
          <div className="flex w-full flex-col gap-6 md:gap-8">
            {/* About */}
            <div
              ref={aboutRef}
              className="h-2/5 w-full rounded-3xl bg-gradient-to-bl from-gradientLight to-gradientDark p-px px-6 py-8 opacity-0 md:px-8 md:py-12"
            >
              <h3 className="text-xl font-light sm:text-2xl md:text-3xl">
                Turning Concepts into Code.
              </h3>
              <p className="pt-2 text-base font-light text-neutral-400">
                I am a passionate full-stack developer with a strong interest in
                game development, dedicated to creating immersive digital
                experiences and efficient web solutions. With expertise in both
                front-end and back-end, I craft user-focused applications that
                seamlessly blend functionality with creativity.
              </p>
            </div>

            {/* Clean Code */}
            <div
              ref={cleanCodeRef}
              className="flex h-3/5 w-full flex-col gap-6 overflow-hidden rounded-3xl bg-gradient-to-bl from-gradientLight to-gradientDark p-px px-6 py-8 opacity-0 md:px-8 md:py-12"
            >
              <h3 className="text-xl font-light sm:text-2xl md:text-3xl">
                Clean and Efficient Code.
              </h3>
              <div className="-mb-[4.5rem] -mr-16">
                <Image
                  src={cleanCode}
                  alt="Simple and efficient code"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 md:gap-8">
            {/* Responsive Web */}
            <div
              ref={responsiveWebRef}
              className="flex h-3/5 w-full flex-col gap-6 rounded-3xl bg-gradient-to-bl from-gradientLight to-gradientDark p-px px-6 py-8 opacity-0 md:px-8 md:py-12"
            >
              <h3 className="text-xl font-light sm:text-2xl md:text-3xl">
                Responsive Web.
              </h3>
              <Image src={responsiveWeb} alt="Responsive Web" />
            </div>

            {/* Games */}
            <div
              ref={gamesRef}
              className="flex h-2/5 flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-bl from-gradientLight to-gradientDark p-px px-6 py-8 opacity-0 md:flex-row md:px-8 md:py-12"
            >
              <h3 className="w-full self-start text-xl font-light sm:text-2xl md:w-1/5 md:text-3xl">
                Playful Games.
              </h3>

              <div className="-mb-12 -mr-12 md:-mb-16 md:w-4/5">
                <video width="100%" loop muted autoPlay className="rounded-2xl">
                  <source src="/videos/games.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
