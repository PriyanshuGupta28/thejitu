import React from "react";
import GradientText from "../GradientText.tsx/GradientText";
import { Figma } from "lucide-react";

const PageHeader: React.FC = () => {
  return (
    <div className="w-[928px] flex flex-col justify-center gap-[48px] py-[24px] px-[48px] h-[300px] bg-gradient-to-b from-[#101010] to-[#000000] rounded-[48px] border border-neutral-700 items-start  overflow-hidden relative">
      <div className="absolute text-white/10 inset-0 grid grid-cols-20 grid-rows-10 gap-[10px]">
        {[...Array(200)].map((_, index) => (
          <div
            key={index}
            className="w-1 h-1 bg-white/20 rounded-full animate-blink"
            style={{
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className="text-white text-sm font-['SF Compact']">
          UX Correction • Case Study
        </p>
        <h1 className="text-white text-[32px] font-['SF Pro']">
          iOS Project <GradientText>redefine</GradientText>
        </h1>
      </div>
      <div className="h-14 justify-start items-start gap-6 inline-flex">
        <div className="w-[190px] flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch text-white/80 text-xs font-['SF Compact'] uppercase leading-tight tracking-wide">
            Based on
          </div>
          <div className="self-stretch text-white text-xs font-normal font-['SF Pro'] leading-tight">
            iOS 18 and Later
          </div>
        </div>
        <div className="w-[190px] flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch text-white/80 text-xs font-['SF Compact'] uppercase leading-tight tracking-wide">
            My role
          </div>
          <div className="self-stretch text-white text-xs font-normal font-['SF Pro'] leading-tight">
            UX Designer; Self-Assigned
          </div>
        </div>
        <div className="w-[190px] flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch text-white/80 text-xs font-['SF Compact'] uppercase leading-tight tracking-wide">
            Tools
          </div>
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <Figma className="w-6 h-6 relative  overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
