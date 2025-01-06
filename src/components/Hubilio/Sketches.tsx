import React from "react";
import sketche1 from "../../assets/sketche1.png";
import sketche2 from "../../assets/sketche2.png";
import sketche3 from "../../assets/sketche3.png";

const Sketches: React.FC = () => {
  return (
    <div className="w-[1026px] h-[733px] p-[1px] bg-border-fade rounded-[48px]">
      <div className="w-[1024px] h-[733px] p-12 bg-gradient-to-b from-[#101010] to-black rounded-[48px] flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
        <div className="self-stretch text-white text-2xl font-semibold font-['SF Pro Display'] leading-7">
          Sketches
        </div>
        <div className="self-stretch">
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            With the{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            core structure{" "}
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            of Hubilo’s redesign established, I began{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            sketching out ideas
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            to visualize layouts and workflows. Each feature category underwent{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            multiple iterations,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            focusing on{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            simplicity, flexibility, and scalability.
            <br />
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            <br />
            The sketches served as{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            blueprints,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            helping to identify{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            key content placements, navigation flows,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            user interactions
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            early in the process. This iterative approach ensured the designs
            addressed{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            user feedback
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and supported both attendees and organizers effectively.
          </span>
        </div>
        <div className="self-stretch h-[441px] justify-start items-center gap-3 inline-flex">
          <img
            className="grow shrink basis-0 self-stretch rounded-2xl"
            src={sketche1}
          />
          <img
            className="grow shrink basis-0 self-stretch rounded-2xl"
            src={sketche2}
          />
          <img
            className="grow shrink basis-0 self-stretch rounded-2xl"
            src={sketche3}
          />
        </div>
      </div>
    </div>
  );
};

export default Sketches;
