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

  const headingRef = useRef<HTMLDivElement>(null);
  const webWeaverRef = useRef<HTMLButtonElement>(null);
  const psychoCodersRef = useRef<HTMLButtonElement>(null);
  const anonNotesRef = useRef<HTMLButtonElement>(null);

  const refArray = [webWeaverRef, psychoCodersRef, anonNotesRef];

  const handleProjectClick = (project: ProjectType): void => {
    setSelectedProject(project);
    setIsProjectCardOpen();
  };

  useViewportAnimation([
    headingRef,
    webWeaverRef,
    psychoCodersRef,
    anonNotesRef,
  ]);

  return (
    <section
      id="projects"
      className="flex w-full items-center justify-center px-4 py-12 sm:p-12"
    >
      <div className="flex flex-col items-center justify-center gap-8 lg:w-[1200px]">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="pb-4 text-center text-4xl font-light leading-snug opacity-0 sm:py-12 sm:text-5xl md:text-6xl"
        >
          Highlighting <br /> My Best Work.
        </h2>

        <div className="grid grid-cols-1 grid-rows-3 gap-6 md-lg:grid-cols-2 md-lg:grid-rows-2">
          {projects.map((project, index) => (
            <button
              ref={refArray[index]}
              key={project.heading}
              onClick={() => handleProjectClick(project)}
              className="opacity-0"
            >
              <div
                className={clsx(
                  "group aspect-video overflow-hidden rounded-2xl px-8 py-8 transition-all hover:p-0 sm:px-12 sm:pt-12 md:px-16 md:pt-16 md-lg:px-12 md-lg:pt-12",
                  project.gradient,
                )}
              >
                <Image
                  src={project.imgOneSrc}
                  alt={project.imgOneAlt}
                  className="mt-2 rounded-t-lg transition-all group-hover:m-0 group-hover:w-full group-hover:rounded-2xl"
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
