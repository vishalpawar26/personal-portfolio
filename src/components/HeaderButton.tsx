import React from "react";

interface HeaderButtonProps {
  label: string;
  onClick: () => void;
}

const HeaderButton = ({ label, onClick }: HeaderButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg px-4 py-2 text-left text-base transition-colors duration-200 hover:bg-white/15"
    >
      {label}
    </button>
  );
};

export default HeaderButton;
