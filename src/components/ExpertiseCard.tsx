import Image, { StaticImageData } from "next/image";
import React, { RefObject } from "react";

interface ExpertiseCardType {
  ref: RefObject<HTMLDivElement>;
  icon: StaticImageData;
  title: string;
  subTitle: string;
}

const ExpertiseCard = ({ ref, icon, title, subTitle }: ExpertiseCardType) => {
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-neutral-800 bg-gradient-to-bl from-gradientLight to-gradientDark p-8 opacity-0"
    >
      <Image src={icon} alt="Icon" width={48} />
      <h3 className="pb-1 pt-6 text-2xl font-light">{title}</h3>
      <p className="font-light text-neutral-400">{subTitle}</p>
    </div>
  );
};

export default ExpertiseCard;
