import React, { MutableRefObject } from "react";
import Image from "next/image";

interface BaseButtonProps {
  label: string;
  variant: "outline" | "filled";
  onClick: () => void;
  ref?: MutableRefObject<null>;
}
interface IconButtonProps extends BaseButtonProps {
  icon: true;
  buttonIcon: any;
}

interface NoIconButtonProps extends BaseButtonProps {
  icon: false;
  buttonIcon?: never;
}

type ButtonProps = IconButtonProps | NoIconButtonProps;

const Button = ({
  label,
  icon,
  buttonIcon,
  variant,
  onClick,
  ref,
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white transition-colors duration-500 ${
        variant === "outline"
          ? "border border-blue-600 bg-blue-600 hover:bg-transparent"
          : "border border-neutral-700 bg-neutral-900 hover:border-blue-600 hover:bg-blue-600"
      } group ${ref && "opacity-0"}`}
    >
      <p>{label}</p>
      {icon && (
        <Image
          src={buttonIcon}
          alt="arrow"
          width={24}
          className="transition-transform duration-500 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default Button;
