import React from "react";
import GradientText from "../GradientText.tsx/GradientText";
import GlowingCard from "../GlowingCard/GlowingCard";

const HeroSection: React.FC = () => {
  return (
    <div className="flex py-[24px] flex-col justify-center items-center">
      <GlowingCard />
      <div className="flex flex-col gap-[24px] p-[48px] justify-center items-center ">
        <h1 className="text-[32px] text-center">
          <span>Designing</span> <GradientText>stories</GradientText>
          <span>, not just screens.</span>
        </h1>
        <p className="text-[14px] font-normal text-center w-[100%] md:w-[710px] text-white/80">
          Hi, I’m Jitendra. I specialize in creating user-centric, visually
          engaging products that simplify complex workflows. My approach blends
          problem-solving, storytelling, and design thinking to deliver
          impactful solutions.
        </p>
        <p className="text-[14px] font-normal text-center w-[100%] md:w-[710px] text-white/80">
          When I’m not designing, you’ll find me breaking down design patterns,
          writing UX insights, learning new languages, or pushing limits at the
          gym.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
