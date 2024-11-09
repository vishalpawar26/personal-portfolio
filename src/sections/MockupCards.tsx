"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import webWeaverMockup from "@public/mockups/Web-Weaver-1.webp";
import psychocodersMockup from "@public/mockups/Psychocoders-1.webp";
import anonNotesMockup from "@public/mockups/AnonNotes-1.webp";

import { urls } from "@/constants";

const MockupCards = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
      "+=1.1",
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-4 px-4 py-8 opacity-0 sm:px-12 sm:py-14"
    >
      <Link href={urls.webWeaver} className="project-card sticky top-16">
        <Image
          src={webWeaverMockup}
          alt="Web Weaver"
          className="h-[60vh] rounded-[2.5rem] object-cover sm:rounded-[3rem] md:h-[120vh]"
        />
      </Link>

      <Link href={urls.psychocoders} className="project-card sticky top-24">
        <Image
          src={psychocodersMockup}
          alt="PsychoCoders"
          className="h-[60vh] rounded-[2.5rem] object-cover sm:rounded-[3rem] md:h-[120vh]"
        />
      </Link>
      <Link href={urls.anonNotes} className="project-card sticky top-32">
        <Image
          src={anonNotesMockup}
          alt="AnonNotes"
          className="h-[60vh] rounded-[2.5rem] object-cover sm:rounded-[3rem] md:h-[120vh]"
        />
      </Link>
    </section>
  );
};

export default MockupCards;
