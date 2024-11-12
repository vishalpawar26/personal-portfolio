import Image from "next/image";
import React from "react";

import vishalPawar from "@public/images/Vishal-Pawar.webp";

const AboutMeCard = () => {
  return (
    <div className="relative mt-2 flex flex-col gap-6 rounded-3xl bg-background p-8">
      <Image
        src={vishalPawar}
        alt="Vishal Pawar"
        width={100}
        className="rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <p className="text-neutral-400">
          I'm a dedicated full-stack developer with a strong foundation in
          Next.js, TypeScript, three.js, Tailwind CSS, MongoDB, and a passion
          for game development.
        </p>
        <p className="text-neutral-400">
          I enjoy creating interactive, visually compelling applications and
          games that emphasize user-friendly design and responsiveness. With
          experience across both front-end and back-end technologies, I focus on
          building seamless, efficient solutions that bring ideas to life across
          the full stack. As I continue expanding my skills, I prioritize
          simplicity and clarity, especially when leveraging JavaScript for
          dynamic applications and engaging game experiences.
        </p>
      </div>
    </div>
  );
};

export default AboutMeCard;
