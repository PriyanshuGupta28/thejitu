import React from "react";
import dcimg from "../../assets/dcimg.png";

const DesignComponents: React.FC = () => {
  return (
    <div className="w-[1024px] h-[532px] bg-white rounded-[48px] justify-between items-center inline-flex overflow-hidden">
      <div className="w-[456px] p-12 rounded-[48px] flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
        <div className="self-stretch text-black text-2xl font-semibold font-['SF Pro Display'] leading-7">
          Design Components
        </div>
        <div className="self-stretch">
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            We developed and implemented a{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            scalable design system
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            for Hubilo, creating{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            modular components
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            that ensured{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            consistency, efficiency, and flexibility
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            across the platform.
            <br />
            <br />
            Collaborating closely with the{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            design team
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            developers,
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            I focused on building components that:
            <br />
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            Adapted to{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            branding needs with custom themes{" "}
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            and layouts.
            <br />
            Maintained{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            visual consistency
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            across pages and workflows.
            <br />
            Simplified the{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            design-to-development handoff
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            , reducing implementation time by 60%.
            <br />
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            <br />
            This{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            component library
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            became the{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            foundation
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            for Hubilo’s platform, supporting{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            future scalability{" "}
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            while meeting user demands for{" "}
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            personalization
          </span>
          <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and
          </span>
          <span className="text-[#5856d6] text-sm font-bold font-['Kalam'] leading-normal">
            {" "}
            ease of use.
          </span>
        </div>
      </div>
      <div className="grow shrink basis-0 self-stretch justify-center items-start gap-3 flex relative">
        <img className="grow shrink basis-0 self-stretch" src={dcimg} />
        <div className="w-[249px] h-[497px] left-[-15px] top-[34.72px] absolute bg-gradient-to-r from-white to-rgba(255, 255, 255, 0.00) 100%)" />
      </div>
    </div>
  );
};

export default DesignComponents;
