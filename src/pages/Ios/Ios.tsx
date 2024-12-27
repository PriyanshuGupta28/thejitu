import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import iosimg from "../../assets/ioscaseimg.png";
import ios18logo from "../../assets/iso18logo.png";
import GradientText from "../../components/GradientText.tsx/GradientText";

const Ios: React.FC = () => {
  return (
    <div className="flex flex-col py-[24px] justify-center items-center gap-[24px] relative">
      <PageHeader />
      <img src={iosimg} alt="ios hero section img" className="w-[100%]" />
      <div className="flex flex-col gap-[24px] justify-center items-center">
        <img src={ios18logo} alt="ios 18 logo" />
        <p className="text-[16px] font-bold">
          ios 18 Project <GradientText>redefine</GradientText>
        </p>
        <p className="text-[32px] font-semibold">
          Redefined. Unified. Reimagined.
        </p>
        <p className="text-center w-[602px] text-white/80 text-[11px] font-normal">
          Hello, I am Jitendra Kumar, and I present the Project Redefine. This
          project reflects my personal observations and design perspective on
          iOS 18. Through innovative enhancements, I aim to improve usability,
          aesthetics, and user experience, showcasing my commitment to
          user-centric design and a more intuitive iOS environment.
        </p>
      </div>
      <div className="relative w-[100%] h-[500px] bg-white text-black z-10">
        <div className="absolute w-[100%] h-[24px] bg-gradient-to-l from-[#e43d19] via-[#3472bc] to-[#06d6d6] blur-[20px] animate-gradient-move top-[-12px]"></div>
      </div>
    </div>
  );
};

export default Ios;
