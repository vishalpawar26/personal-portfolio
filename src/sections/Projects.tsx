import React, { useState, useRef } from "react";

import useStore from "@/store/store";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectCard from "./ProjectCard";

import { projects, ProjectType } from "@/constants/projects";
import { useViewportAnimation } from "@/utils/useViewportAnimation";

const Projects = () => {
  const { setIsProjectCardOpen, isProjectCardOpen } = useStore();

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  const headingRef = useRef<HTMLDivElement>(null);

  const handleProjectClick = (project: ProjectType): void => {
    setSelectedProject(project);
    setIsProjectCardOpen();
  };

  useViewportAnimation([headingRef]);

  return (
    <section id="projects" className="flex w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="pb-4 text-center text-4xl font-light leading-snug opacity-0 sm:py-12 sm:text-5xl md:text-6xl"
        >
          Highlighting <br /> My Best Work.
        </h2>

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              imageSrc={project.thumbnail}
              imageAlt="Alt"
              onClick={() => handleProjectClick(project)}
              projectTitle={project.heading}
              projectSubtitle={project.subHeading}
              key={project.heading}
              isLastCard={index === projects.length - 1}
            />
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
