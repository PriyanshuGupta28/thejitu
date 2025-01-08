import React from "react";
import cdp from "../../assets/wehive/cdp.png";
import dots from "../../assets/wehive/dots.png";
import calljitu from "../../assets/wehive/calljitu.png";

const DesignPreview: React.FC = () => {
  return (
    <div className="w-[1024px] h-[539.02px] relative">
      <img
        className="w-[1024px] h-[539.02px] left-0 top-[-0.36px] absolute"
        src={cdp}
      />
      <div
        className="w-[1120px] h-[488px] left-[-48px] top-[52.02px] absolute"
        style={{
          background:
            "linear-gradient(180deg, rgba(16, 16, 16, 0.00) 0%, #000 90.5%)",
        }}
      />
      <img
        className="w-[1437px] h-[316.83px] top-[171.02px] absolute opacity-80"
        src={dots}
      />
      <div className="h-[275px] left-[236px] top-[264.02px] absolute flex-col justify-end items-center gap-3 inline-flex">
        <div className="flex-col justify-end items-center gap-3 flex">
          <div className="text-white text-2xl font-semibold font-['SF Pro Display']">
            Confidential Design Preview
          </div>
          <div className="w-[540px] text-center">
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              The showcased{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              UI screens{" "}
            </span>
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              are part of WeHive’s{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              confidential design process{" "}
            </span>
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              and are currently in{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              stealth mode.
            </span>
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              For more details or to explore the project further, feel free to{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              reach out directly
            </span>
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              for additional insights.
            </span>
          </div>
        </div>
        <img src={calljitu} className="w-[149.36px] h-[150px]" />
      </div>
    </div>
  );
};

export default DesignPreview;
