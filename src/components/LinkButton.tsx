import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  label: string;
  href: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  imgWidth: number;
}

const LinkButton = ({
  label,
  href,
  imgSrc,
  imgAlt,
  imgWidth,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex w-fit items-center justify-center gap-4 rounded-full border border-neutral-700 bg-neutral-900 px-8 py-3 transition-colors duration-500 hover:border-blue-600 hover:bg-blue-600"
    >
      {label}
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        className="transition-transform duration-500 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default LinkButton;
