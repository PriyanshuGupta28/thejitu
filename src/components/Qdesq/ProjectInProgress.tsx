import React from "react";
import lapjitu from "../../assets/Qdesq/lapjitu.png";

const ProjectInProgress: React.FC = () => {
  return (
    <div className="h-[163px] w-[1028px] p-6 bg-[#007aff] rounded-3xl flex-col justify-start items-start gap-4 inline-flex relative">
      <div className="text-white text-xl font-semibold font-['SF Pro Display'] leading-7">
        Project In Progress
      </div>
      <div className="w-[659px]">
        <span className="text-white text-sm font-normal font-['SF Pro'] leading-tight">
          This project is currently in development, and the{" "}
        </span>
        <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-tight">
          full design study will be published in February 2025.
          <br />
        </span>
        <span className="text-white text-sm font-normal font-['SF Pro'] leading-tight">
          What you’re seeing is a preview of the redesign journey, highlighting
          key updates and improvements made so far. Stay tuned for the complete
          case study—exciting things are on the way!
        </span>
      </div>
      <img
        className="w-[143px] h-[179px] left-[794px] top-[-15px] absolute"
        src={lapjitu}
      />
    </div>
  );
};

export default ProjectInProgress;
