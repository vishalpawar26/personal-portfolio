import React, { useState, useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

import useStore from "@/store/store";
import ProjectDetails from "@/components/ProjectDetails";

import { projects, ProjectType } from "@/constants/projects";
import { useViewportAnimation } from "@/utils/useViewportAnimation";

const Projects = () => {
  const { setIsProjectCardOpen, isProjectCardOpen } = useStore();

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  const webWeaverRef = useRef<HTMLButtonElement>(null);
  const psychoCodersRef = useRef<HTMLButtonElement>(null);
  const anonNotesRef = useRef<HTMLButtonElement>(null);

  const refArray = [webWeaverRef, psychoCodersRef, anonNotesRef];

  const handleProjectClick = (project: ProjectType): void => {
    setSelectedProject(project);
    setIsProjectCardOpen();
  };

  useViewportAnimation([webWeaverRef, psychoCodersRef, anonNotesRef]);

  return (
    <section
      id="projects"
      className="flex w-full items-center justify-center px-4 py-20 sm:gap-24 sm:px-12"
    >
      <div className="flex flex-col items-center justify-center gap-20 lg:w-[1440px]">
        {/* Heading */}
        <h2 className="text-center text-4xl leading-snug sm:text-5xl md:text-6xl">
          Shaping Concepts <br /> into Experiences
        </h2>

        <div className="grid grid-rows-3 gap-8 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <button
              ref={refArray[index]}
              key={project.heading}
              onClick={() => handleProjectClick(project)}
              className="opacity-0"
            >
              <div
                className={clsx(
                  "project-card m group rounded-2xl px-[6vw] pt-[6.75vw] transition-all hover:bg-background hover:p-0 hover:shadow-2xl hover:shadow-white/10 md:px-[4vw] md:pt-[4.25vw] lg:px-[2.5vw] lg:pt-[2.75vw]",
                  project.gradient,
                )}
              >
                <Image
                  src={project.imgOneSrc}
                  alt={project.imgOneAlt}
                  className="rounded-t-lg transition-all group-hover:rounded-2xl"
                />
              </div>
            </button>
          ))}
        </div>

        <ProjectDetails
          project={selectedProject}
          isVisible={isProjectCardOpen}
        />
      </div>
    </section>
  );
};

export default Projects;
