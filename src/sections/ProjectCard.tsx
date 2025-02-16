import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";

import Image, { StaticImageData } from "next/image";
import { useViewportAnimation } from "@/utils/useViewportAnimation";

interface ProjectCardProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  onClick: () => void;
  projectTitle: string;
  projectSubtitle: string;
  isLastCard: boolean;
}

const ProjectCard = ({
  imageSrc,
  imageAlt,
  onClick,
  projectTitle,
  projectSubtitle,
  isLastCard,
}: ProjectCardProps) => {
  gsap.registerPlugin(ScrollTrigger);

  const cardRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useViewportAnimation([titleRef, subtitleRef]);

  useLayoutEffect(() => {
    if (isLastCard) return;
    const card = cardRef.current;

    if (card) {
      gsap.to(card, {
        filter: "blur(8px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "bottom 80%",
          end: "bottom",
          scrub: 2,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <button
      ref={cardRef}
      onClick={onClick}
      className="project-card sticky top-0 overflow-hidden"
    >
      <div className="absolute top-1/2 w-full rounded-xl bg-neutral-950/10 px-4 py-16 text-left backdrop-blur-xl sm:rounded-2xl sm:px-8 md:rounded-3xl md:px-16">
        <h2
          ref={titleRef}
          className="text-4xl font-light opacity-0 md:pb-2 lg:text-5xl"
        >
          {projectTitle}
        </h2>
        <h3
          ref={subtitleRef}
          className="text-3xl font-light text-neutral-300 opacity-0 lg:text-4xl"
        >
          {projectSubtitle}
        </h3>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="h-screen rounded-xl object-cover sm:rounded-2xl md:rounded-3xl"
      />
    </button>
  );
};

export default ProjectCard;
