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

export const navlinks: navlinksType[] = [
  {
    lable: "Projects",
    link: "#projects",
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
