import React from "react";
import GradientText from "../GradientText.tsx/GradientText";
import GlowingCard from "../GlowingCard/GlowingCard";
import logo from "../../assets/logo.png";

const HeroSection: React.FC = () => {
  return (
    <div className="flex py-[24px] flex-col justify-center items-center">
      <div className="flex flex-col md:hidden py-[12px] justify-center items-center gap-[12px]">
        <div>
          <img src={logo} alt="logo" className="w-[22.857px] h-[48px]" />
        </div>
        <div>
          <p className="text-center text-[16px] font-[656] font-compact">
            Jitendra Kumar
          </p>
          <p className="text-center text-[14px] font-compact font-[457] text-white/80">
            Product Designer
          </p>
        </div>
      </div>
      <GlowingCard />
      <div className="flex flex-col gap-[24px] p-[48px] justify-center items-center ">
        <h1 className="text-[32px] text-center">
          <span>Designing</span>{" "}
          <GradientText className="w-[102px] h-[50px] text-center font-semibold text-[42px] tracking-[-1.68px]">
            stories
          </GradientText>
          <span>, not just screens.</span>
        </h1>
        <p className="text-[14px] font-normal text-center w-[100%] md:w-[710px] text-white/80 tracking-[-0.28px]">
          Hi, I’m Jitendra. I specialize in creating user-centric, visually
          engaging products that simplify complex workflows. My approach blends
          problem-solving, storytelling, and design thinking to deliver
          impactful solutions.
        </p>
        <p className="text-[14px] font-normal text-center w-[100%] md:w-[710px] text-white/80 tracking-[-0.28px]">
          When I’m not designing, you’ll find me breaking down design patterns,
          writing UX insights, learning new languages, or pushing limits at the
          gym.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
