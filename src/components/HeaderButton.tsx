import React from "react";

interface HeaderButtonProps {
  label: string;
  onClick: () => void;
}

const HeaderButton = ({ label, onClick }: HeaderButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg px-4 py-2 text-left text-base font-light transition-colors duration-300 hover:bg-white/10"
    >
      {label}
    </button>
  );
};

export default HeaderButton;
