import React from "react";
import left from "../../assets/Qdesq/left.png";
import right from "../../assets/Qdesq/right.png";
import CircularButton from "../../assets/Qdesq/CircularButton.png";

const Comparison: React.FC = () => {
  return (
    <div className="h-[886px] px-12 py-6 flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
      <div className="w-[1024px] px-6 justify-between items-center inline-flex">
        <div className="text-white text-base font-bold font-['SF Pro Text'] leading-[18px]">
          Old
        </div>
        <div className="text-white/80 text-sm font-['SF Compact'] uppercase leading-tight tracking-wide">
          slide to see design comparison
        </div>
        <div className="text-white text-base font-bold font-['SF Pro Text'] leading-[18px]">
          New
        </div>
      </div>
      {/* {img of comparitional side by side} */}
      <div className="w-full h-full rounded-[48px] overflow-hidden relative">
        <div className="w-full h-full flex justify-center items-center absolute">
          <div className="h-full bg-[#007AFF] w-1 flex justify-center items-center absolute"></div>
          <img src={CircularButton} alt="" className="z-10" />
        </div>
        <div className="flex justify-between z-10">
          <div>
            <img src={left} alt="left" />
          </div>
          <div>
            <img src={right} alt="right" />
          </div>
        </div>
      </div>
      <div className="w-[1024px]">
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          In this side-by-side comparison, the transformation is evident—from a
          cluttered and text-heavy interface to a cleaner, more modern design
          that prioritizes usability and visual appeal.
          <br />
          <br />
          During discussions with
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          {" "}
          Lavesh,{" "}
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          he emphasized the importance of{" "}
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          data-savvy cards{" "}
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          that showcase workspace information effectively. The goal was not only
          to{" "}
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          enhance SEO rankings
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          {" "}
          but also to{" "}
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          streamline discovery
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          {" "}
          through Google searches, making listings easier to find.
          <br />
          <br />
          Balancing
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          {" "}
          data richness{" "}
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          with{" "}
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          visual simplicity
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          {" "}
          was a challenge. The redesigned cards were structured to{" "}
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          highlight key details
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          —such as pricing, amenities, and accessibility—at a{" "}
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          glance
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          {" "}
          without overwhelming users. The result is an{" "}
        </span>
        <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
          intuitive and engaging experience
        </span>
        <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
          {" "}
          that captures attention while driving conversions.
        </span>
      </div>
    </div>
  );
};

export default Comparison;
