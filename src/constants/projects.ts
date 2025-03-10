import { StaticImageData } from "next/image";

import webWeaver from "@public/mockups/web-weaver/web-weaver.webp";
import webWeaverOne from "@public/images/web-weaver.webp";
import webWeaverTwo from "@public/mockups/web-weaver/Web-Weaver-2.webp";
import wwm1 from "@public/mockups/web-weaver/wwm-1.webp";
import wwm2 from "@public/mockups/web-weaver/wwm-2.webp";
import wwm3 from "@public/mockups/web-weaver/wwm-3.webp";
import wwm4 from "@public/mockups/web-weaver/wwm-4.webp";
import wwm5 from "@public/mockups/web-weaver/wwm-5.webp";
import wwm6 from "@public/mockups/web-weaver/wwm-6.webp";

import psychoCoders from "@public/mockups/psychocoders/psychocoders.webp";
import psychoCodersOne from "@public/images/psychocoders.webp";
import psychoCodersTwo from "@public/mockups/psychocoders/psychocoders-2.webp";
import pcm1 from "@public/mockups/psychocoders/pcm-1.webp";
import pcm2 from "@public/mockups/psychocoders/pcm-2.webp";
import pcm3 from "@public/mockups/psychocoders/pcm-3.webp";
import pcm4 from "@public/mockups/psychocoders/pcm-4.webp";
import pcm5 from "@public/mockups/psychocoders/pcm-5.webp";

import anonNotes from "@public/mockups/anon-notes/anon-notes.webp";
import anonNotesOne from "@public/images/anon-notes.webp";
import anonNotesTwo from "@public/mockups/anon-notes/anon-notes-2.webp";
import aam1 from "@public/mockups/anon-notes/aam-1.webp";
import aam2 from "@public/mockups/anon-notes/aam-2.webp";
import aam3 from "@public/mockups/anon-notes/aam-3.webp";
import aam4 from "@public/mockups/anon-notes/aam-4.webp";
import aam5 from "@public/mockups/anon-notes/aam-5.webp";

export type CarouselItem = {
  imgSrc: StaticImageData;
  imgAlt: string;
  imgDesc: string;
};

export type ProjectType = {
  heading: string;
  subHeading: string;
  about: string;
  thumbnail: StaticImageData;
  imgOneSrc: StaticImageData;
  imgOneAlt: string;
  imgTwoSrc: StaticImageData;
  imgTwoAlt: string;
  carouselData: CarouselItem[];
  hoverBgColor: string;
  liveURL: string;
  githubURL: string;
  year: number;
  technologies: string;
};

export const projects: ProjectType[] = [
  {
    heading: "Web Weaver",
    subHeading: "No-code website builder.",
    about:
      "Web Weaver makes website building effortless—no coding needed. Customize beautiful templates with just a few clicks. Note: The project is still in development and may not work as intended.",
    thumbnail: webWeaver,
    imgOneSrc: webWeaverOne,
    imgOneAlt: "Web Weaver",
    imgTwoSrc: webWeaverTwo,
    imgTwoAlt: "Web Weaver",
    carouselData: [
      { imgSrc: wwm1, imgAlt: "wwm1", imgDesc: "Visit the site" },
      { imgSrc: wwm2, imgAlt: "wwm2", imgDesc: "Choose a template" },
      { imgSrc: wwm3, imgAlt: "wwm3", imgDesc: "Customize it" },
      { imgSrc: wwm4, imgAlt: "wwm4", imgDesc: "Check its responsiveness" },
      { imgSrc: wwm5, imgAlt: "wwm5", imgDesc: "Choose a domain" },
      { imgSrc: wwm6, imgAlt: "wwm6", imgDesc: "Publish it!" },
    ],
    hoverBgColor: "hover:bg-blue-600",
    liveURL: "https://web-weaver-psi.vercel.app/",
    githubURL: "https://github.com/Neel3301/Web-Weaver",
    year: 2024,
    technologies:
      "Next.js, Tailwind CSS, Aceternity UI, TypeScript, MongoDB, Clerk, Cloudinary, Zustand, Prisma",
  },
  {
    heading: "PsychoCoders",
    subHeading: "Practice DSA.",
    about:
      "PsychoCoders makes DSA practice engaging, with a profile dashboard to track progress and problem-solving stats by difficulty. Solve problems in C++, Java, or Python.",
    thumbnail: psychoCoders,
    imgOneSrc: psychoCodersOne,
    imgOneAlt: "PsychoCoders",
    imgTwoSrc: psychoCodersTwo,
    imgTwoAlt: "PsychoCoders",
    carouselData: [
      { imgSrc: pcm1, imgAlt: "pcm1", imgDesc: "Understand the problem" },
      { imgSrc: pcm2, imgAlt: "pcm2", imgDesc: "Write a solution" },
      { imgSrc: pcm3, imgAlt: "pcm3", imgDesc: "Submit it" },
      { imgSrc: pcm4, imgAlt: "pcm4", imgDesc: "Track your progress" },
      { imgSrc: pcm5, imgAlt: "pcm5", imgDesc: "View your solutions" },
    ],
    hoverBgColor: "hover:bg-green-600",
    liveURL: "https://psychocoders.vercel.app/",
    githubURL: "https://github.com/vishalpawar26/PsychoCoders",
    year: 2024,
    technologies: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB",
  },
  {
    heading: "AnonNotes",
    subHeading: "Send anonymous messages.",
    about:
      "AnonNotes fosters anonymous, supportive communication, allowing users to send anonymous messages, questions, or notes to others. With secure storage and easy access, it ensures privacy while promoting kindness and connection.",
    thumbnail: anonNotes,
    imgOneSrc: anonNotesOne,
    imgOneAlt: "Anon Notes",
    imgTwoSrc: anonNotesTwo,
    imgTwoAlt: "Anon Notes",
    carouselData: [
      { imgSrc: aam1, imgAlt: "aam1", imgDesc: "Create your account" },
      { imgSrc: aam2, imgAlt: "aam2", imgDesc: "Verify it" },
      { imgSrc: aam3, imgAlt: "aam3", imgDesc: "Get your public link" },
      { imgSrc: aam4, imgAlt: "aam4", imgDesc: "Your public page" },
      { imgSrc: aam5, imgAlt: "aam5", imgDesc: "Receive messages" },
    ],
    hoverBgColor: "hover:bg-white",
    liveURL: "https://anonnotes.vercel.app/",
    githubURL: "https://github.com/vishalpawar26/anonnotes",
    year: 2024,
    technologies:
      "Next.js, Tailwind CSS, shadcn/ui, TypeScript, MongoDB, NodeMailer",
  },
];
