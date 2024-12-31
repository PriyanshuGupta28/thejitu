import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string; // Allows passing additional classes
}

const GradientText: React.FC<GradientTextProps> = ({ children, className }) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#E43D19] via-[#3472BC] to-[#06D7D7] bg-clip-text text-transparent font-edu ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
