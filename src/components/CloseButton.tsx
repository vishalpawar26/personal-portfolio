import React from "react";
import Image from "next/image";
import close from "@public/icons/close.svg";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button onClick={() => onClick()} className="w-fit self-end">
      <Image
        src={close}
        alt="Close"
        width={36}
        className="rounded-full bg-neutral-600 p-2 transition-all hover:rotate-90 hover:bg-blue-500"
      />
    </button>
  );
};

export default CloseButton;
