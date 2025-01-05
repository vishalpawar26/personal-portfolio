import { StaticImageData } from "next/image";
import algorithm from "@public/icons/algorithm.svg";
import backend from "@public/icons/backend.svg";
import devices from "@public/icons/devices.svg";
import gamepad from "@public/icons/gamepad.svg";
import monitor from "@public/icons/monitor.svg";
import uiux from "@public/icons/uiux.svg";

type navlinksType = {
  lable: string;
  link: string;
};

type urlsType = {
  linkedIn: string;
  github: string;
  webWeaver: string;
  psychocoders: string;
  anonNotes: string;
};

type formArrayType = {
  label: string;
  type: string;
  placeholder: string;
  register: "fullName" | "email" | "subject" | "message";
};

type expertiseType = {
  icon: StaticImageData;
  title: string;
  subTitle: string;
};

export const navlinks: navlinksType[] = [
  {
    lable: "Projects",
    link: "#projects",
  },
  {
    lable: "Expertise",
    link: "#expertise",
  },
];

export const urls: urlsType = {
  linkedIn: "https://www.linkedin.com/in/vishal-r-pawar/",
  github: "https://github.com/vishalpawar26",
  webWeaver: "https://web-weaver-psi.vercel.app/",
  psychocoders: "https://psychocoders.vercel.app/",
  anonNotes: "https://anonnotes.vercel.app/",
};

export const formArray: formArrayType[] = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "Jeff Bezos",
    register: "fullName",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "jeff@amazon.com",
    register: "email",
  },
  {
    label: "Subject",
    type: "text",
    placeholder: "E-commerce Optimization",
    register: "subject",
  },
];

export const expertise: expertiseType[] = [
  {
    icon: devices,
    title: "Full-Stack Development",
    subTitle:
      "Expertise in building robust web applications using the MERN stack (MongoDB, Express, React, Node.js).",
  },
  {
    icon: monitor,
    title: "Next.js & React.js",
    subTitle:
      "Proficient in creating dynamic, SEO-friendly, and scalable front-end solutions with Next.js and React.",
  },
  {
    icon: backend,
    title: "Backend Development",
    subTitle:
      "Skilled in designing and building secure, efficient server-side applications using Node.js and Express.",
  },
  {
    icon: gamepad,
    title: "Game Development",
    subTitle:
      "Experienced in creating interactive 2D/3D games with custom mechanics and controls using Unity and C#.",
  },
  {
    icon: uiux,
    title: "UI/UX Design with Figma",
    subTitle:
      "Adept at designing intuitive and user-centric interfaces with Figma, ensuring a seamless user experience.",
  },
  {
    icon: algorithm,
    title: "Problem Solving & DSA",
    subTitle:
      "Strong expertise in data structures and algorithms, applying efficient solutions to complex problems.",
  },
];
