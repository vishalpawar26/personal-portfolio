import React, { useEffect, useRef } from "react";
import Image from "next/image";

import useStore from "@/store/store";
import CloseButton from "./CloseButton";
import { ProjectType } from "@/constants/projects";
import Carousel from "./Carousel";
import LinkButton from "./LinkButton";

import rightChevron from "@public/icons/right-chevron.svg";

interface ProjectDetailsProps {
  project: ProjectType | null;
  isVisible: boolean;
}

const ProjectDetails = ({ project, isVisible }: ProjectDetailsProps) => {
  const { isProjectCardOpen, setIsProjectCardOpen } = useStore();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const closeProjectCard = () => {
    if (isProjectCardOpen) {
      setIsProjectCardOpen();
    }
  };

  const handleClickOutside = () => {
    if (cardRef.current && !cardRef.current.contains(event?.target as Node)) {
      closeProjectCard();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    if (isProjectCardOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProjectCardOpen]);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-40 flex w-full min-w-80 items-start justify-center overflow-y-scroll bg-neutral-900/50 pt-16 backdrop-blur-xl transition-opacity duration-300 ${
        isVisible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        ref={cardRef}
        className="relative w-full rounded-t-3xl bg-background p-4 pb-12 md:w-[1000px] md:p-16"
      >
        {/* Close Button */}
        <div className="flex justify-end md:-mr-8 md:-mt-8">
          <CloseButton onClick={() => setIsProjectCardOpen()} />
        </div>

        {project && (
          <div className="flex flex-col items-center gap-16">
            {/* Headings */}
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="text-center text-3xl font-light sm:text-4xl md:text-5xl">
                {project.heading}
              </h2>
              <h3 className="text-center text-base font-light text-neutral-400 sm:text-xl lg:w-3/4">
                {project.subHeading}
              </h3>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center rounded-2xl bg-neutral-900">
              <Image
                src={project.imgTwoSrc}
                alt={project.imgTwoAlt}
                className="rounded-lg sm:w-4/5"
              />
            </div>

            {/* Live Site Button */}
            <LinkButton
              href={project.liveURL}
              imgSrc={rightChevron}
              imgAlt="right"
              label="View Live Site"
              imgWidth={20}
            />

            {/* Carousel */}
            <div className="w-full rounded-2xl bg-neutral-900">
              <Carousel items={project.carouselData} />
            </div>

            {/* Footer */}
            <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div className="flex flex-col gap-2">
                {/* Project Name & Year */}
                <h3 className="text-xl md:text-2xl">
                  {project.heading}
                  {", "}
                  <span className="text-lg text-neutral-400 md:text-xl">
                    {project.year}
                  </span>
                </h3>

                {/* Tech Stack */}
                <p className="text-sm text-neutral-400 md:w-4/5">
                  {project.technologies}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {/* Live Gihub Button */}
                <LinkButton
                  href={project.githubURL}
                  imgSrc={rightChevron}
                  imgAlt="right"
                  label="View Github"
                  imgWidth={20}
                />

                {/* Closing Window Instructions */}
                <button
                  onClick={setIsProjectCardOpen}
                  className="text-center text-sm text-neutral-400 underline underline-offset-1"
                >
                  Click to close.
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
