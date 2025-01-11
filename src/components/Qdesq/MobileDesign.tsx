import React from "react";
import md from "../../assets/Qdesq/mobiledesign.png";

const MobileDesign: React.FC = () => {
  return (
    <div className="w-[1026px] h-[1354.97px] p-[1px] bg-border-fade rounded-[48px]">
      <div className="w-[1024px] h-[1354.97px] p-12 bg-light-to-dark rounded-[48px] flex-col justify-start items-center gap-12 inline-flex overflow-hidden">
        <div className="self-stretch text-center text-white text-2xl font-semibold font-['SF Pro Display'] leading-7">
          Mobile Designs
        </div>
        <div className="justify-center items-start gap-[9.37px] inline-flex">
          <img src={md} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MobileDesign;
