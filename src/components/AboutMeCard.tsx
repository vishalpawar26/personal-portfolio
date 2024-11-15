import Image from "next/image";
import React, { useEffect } from "react";

import arrowRightUp from "@public/icons/arrow-right-up.svg";
import vishalPawar from "@public/images/Vishal-Pawar.webp";

import useStore from "@/store/store";
import CloseButton from "./CloseButton";
import LinkButton from "./LinkButton";

const AboutMeCard = () => {
  const { isAboutMeCardOpen, setIsAboutMeCardOpen } = useStore();

  useEffect(() => {
    if (isAboutMeCardOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isAboutMeCardOpen]);

  return (
    <div
      className={`fixed inset-0 top-0 flex h-full w-full min-w-80 items-center justify-center bg-neutral-900/50 p-4 backdrop-blur-xl ${isAboutMeCardOpen ? "pointer-events-auto z-40 opacity-100" : "pointer-events-none opacity-0"} transition-all duration-300`}
    >
      <div className="flex w-full flex-col gap-6 rounded-3xl bg-background p-6 shadow-2xl sm:w-[32rem] sm:p-8">
        <div className="flex items-start justify-between">
          {/* Image */}
          <Image
            src={vishalPawar}
            alt="Vishal Pawar"
            width={100}
            className="rounded-xl"
          />

          {/* Close Button */}
          <div className="">
            <CloseButton onClick={setIsAboutMeCardOpen} />
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-2">
          <p className="text-neutral-400">
            Hi, I am Vishal Pawar, full-stack developer with a strong foundation
            in Next.js, TypeScript, Tailwind CSS, MongoDB, and a passion for
            game development.
          </p>
          <p className="text-neutral-400">
            I enjoy creating interactive applications and games with a focus on
            user experience. Leveraging both front-end and back-end
            technologies, I build efficient solutions while prioritizing clean
            code and engaging experiences.
          </p>
        </div>

        {/* Get resume button */}
        <LinkButton
          label="Download Resume"
          href="./resume/Vishal_Pawar_Resume.pdf"
          imgSrc={arrowRightUp}
          imgAlt="arrow"
          imgWidth={24}
        />
      </div>
    </div>
  );
};

export default AboutMeCard;
