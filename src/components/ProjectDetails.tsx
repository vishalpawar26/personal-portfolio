import React, { useEffect } from "react";
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

  useEffect(() => {
    if (isProjectCardOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isProjectCardOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 flex w-full min-w-80 items-start justify-center overflow-y-scroll bg-neutral-900/50 pt-16 backdrop-blur-xl transition-opacity duration-300 ${
        isVisible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative w-full rounded-t-3xl bg-background p-4 pb-12 md:w-[80%] md:p-16">
        {/* Close Button */}
        <div className="flex justify-end md:-mr-8 md:-mt-8">
          <CloseButton onClick={() => setIsProjectCardOpen()} />
        </div>

        {project && (
          <div className="flex flex-col items-center gap-16">
            {/* Headings */}
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl">
                {project.heading}
              </h2>
              <h3 className="text-center text-base text-neutral-400 sm:text-xl lg:w-3/4">
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

            {/* Carousel */}
            <div className="w-full rounded-2xl bg-neutral-900">
              <Carousel items={project.carouselData} />
            </div>
            <LinkButton
              href={project.liveURL}
              imgSrc={rightChevron}
              imgAlt="right"
              label="View Live Site"
              imgWidth={20}
            />

            {/* Close Button */}
            <button
              onClick={setIsProjectCardOpen}
              className="rounded-full border border-neutral-700 bg-neutral-900 px-6 py-2 text-neutral-400 transition-colors duration-300 hover:bg-neutral-800"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
