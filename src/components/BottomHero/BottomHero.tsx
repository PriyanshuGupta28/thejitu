import React from "react";
import { ArrowRight } from "lucide-react";
import jitu from "../../assets/jitu.png";
import GradientText from "../GradientText.tsx/GradientText";

const BottomHero: React.FC = () => {
  return (
    <div className="py-[48px] px-[16px] md:px-0">
      <div className="flex flex-col md:flex-row gap-[72px] w-[100%] h-[100%] md:w-[928px] md:h-[296px] rounded-[48px] border border-zinc-700 bg-gradient-to-br from-[#101010] to-[#000000] p-[48px] relative">
        <div className="flex items-center justify-center w-[100%] md:w-[196.29px] h-[200px] ">
          <img src={jitu} alt="jitu" />
        </div>
        <div className="flex flex-col w-[100%] md:w-[557px] gap-[24px]">
          <p className="text-[32px] font-semibold text-center md:text-left">
            What sets me <GradientText>apart?</GradientText>
          </p>
          <p className="text-[14px] text-white/80 font-text font-normal text-center md:text-left">
            I don’t just create digital experiences—I design journeys that
            connect, inspire, and perform. By blending creativity with purpose
            and functionality with emotion, I shape solutions that adapt to
            trends without losing timeless appeal. Whether it’s reimagining
            workflows or crafting intuitive designs, I ensure every project
            stands out and tells a story worth experiencing.
          </p>
          <div className="flex gap-[24px] justify-center items-center md:justify-start">
            <button className="flex items-center justify-center w-[91px] h-[38px] rounded-[100px] py-[12px] px-[16px] text-[12px] whitespace-nowrap bg-white ">
              <p className="text-black font-medium">Contact Me</p>
            </button>
            <button className="flex items-center justify-center w-[117px] h-[38px] rounded-[100px] py-[12px] px-[16px] text-[12px] whitespace-nowrap text-white border border-[#404040]">
              View Resume
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
