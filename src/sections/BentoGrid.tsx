"use client";

import React, { useRef } from "react";
import Image from "next/image";

import Spotlight from "@/components/Spotlight";

import nextjs from "@public/icons/nextjs-13.svg";
import mern from "@public/icons/mern.svg";
import unity from "@public/icons/unity.svg";
import figma from "@public/icons/figma.svg";

import responsiveWeb from "@public/mockups/Responsive-Web.webp";
import cleanCode from "@public/images/clean-code.webp";
import { useViewportAnimation } from "@/utils/useViewportAnimation";

const BentoGrid = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const responsiveWebRef = useRef<HTMLDivElement>(null);
  const cleanCodeRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLDivElement>(null);

  useViewportAnimation([
    aboutRef,
    techStackRef,
    responsiveWebRef,
    cleanCodeRef,
    gamesRef,
  ]);

  return (
    <section className="spotlight-grid relative flex flex-col gap-8 px-4 py-12 sm:px-12 lg:px-36">
      <Spotlight />
      <div className="flex w-full flex-col gap-8 md:flex-row">
        {/* About */}
        <div
          ref={aboutRef}
          className="flex w-full flex-col items-start justify-center rounded-3xl border border-neutral-800 bg-neutral-900 px-6 py-8 opacity-0 md:w-3/5 md:px-8 md:py-12"
        >
          <h3 className="text-xl font-medium sm:text-2xl md:text-3xl">
            Creating Beautiful Worlds through Code.
          </h3>
          <p className="pt-3 text-base font-light text-neutral-400 sm:text-lg">
            I am a passionate full-stack developer and game enthusiast,
            specializing in creating immersive digital experiences and efficient
            web solutions. With extensive experience in both front-end and
            back-end development, I craft user-focused applications that combine
            technical excellence with creative innovation, ensuring seamless
            functionality and engaging user experiences across every project.
          </p>
        </div>

        {/* Tech Stack */}
        <div
          ref={techStackRef}
          className="grid w-full grid-cols-2 grid-rows-2 gap-8 opacity-0 md:w-2/5"
        >
          <div className="flex items-center justify-center gap-8 rounded-3xl border border-neutral-800 bg-neutral-900 px-4 py-12">
            <Image src={nextjs} alt="Next.js" width={128} />
          </div>
          <div className="flex items-center justify-center gap-8 rounded-3xl border border-neutral-800 bg-neutral-900 px-4 py-12">
            <Image src={mern} alt="MERN Stack" width={128} />
          </div>
          <div className="flex items-center justify-center gap-8 rounded-3xl border border-neutral-800 bg-neutral-900 px-4 py-12">
            <Image src={unity} alt="Unity" width={128} />
          </div>
          <div className="flex items-center justify-center gap-8 rounded-3xl border border-neutral-800 bg-neutral-900 px-4 py-12">
            <Image src={figma} alt="Figma" width={36} />
          </div>
        </div>
      </div>

      {/* Qualities */}
      <div className="flex flex-col gap-8 md:flex-row">
        <div
          ref={responsiveWebRef}
          className="flex w-full flex-col gap-8 rounded-3xl border border-neutral-800 bg-neutral-900 px-6 py-8 opacity-0 md:w-1/2 md:px-8 md:py-12"
        >
          <h3 className="text-xl font-medium sm:text-2xl md:text-3xl">
            Responsive Web.
          </h3>
          <Image src={responsiveWeb} alt="Responsive Web" />
        </div>
        <div
          ref={cleanCodeRef}
          className="flex w-full flex-col gap-8 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 px-6 py-8 opacity-0 md:w-1/2 md:px-8 md:py-12"
        >
          <h3 className="text-xl font-medium sm:text-2xl md:text-3xl">
            Clean and Efficient Code.
          </h3>
          <div className="-mb-16 -mr-16 flex">
            <Image
              src={cleanCode}
              alt="Simple and efficient code"
              className="rounded-xl border border-neutral-700"
            />
          </div>
        </div>
      </div>

      {/* Games */}
      <div
        ref={gamesRef}
        className="flex w-full flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 px-6 py-8 opacity-0 md:flex-row md:px-8 md:py-12"
      >
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-medium sm:text-2xl md:text-3xl">
            Challenging Games.
          </h3>
          <p className="w-full pt-3 text-base font-light text-neutral-400 sm:text-lg md:w-2/3">
            Creating gameplay that keeps players challenged and engaged.
          </p>
        </div>
        <div className="-mb-[2.75rem] -mr-16 md:-mb-16 md:w-1/2">
          <video
            width="100%"
            loop
            muted
            autoPlay
            className="rounded-xl border border-neutral-700"
          >
            <source src="/videos/games.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
