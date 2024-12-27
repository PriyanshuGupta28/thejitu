import React from "react";
import GradientText from "../GradientText.tsx/GradientText";
import GlowingCard from "../GlowingCard/GlowingCard";

const HeroSection: React.FC = () => {
  return (
    <div className="flex py-[24px] flex-col md:flex-row justify-center gap-[16px]">
      <div className="flex flex-col gap-[24px] p-[48px] border border-zinc-700 rounded-[48px] w-[613px] bg-gradient-to-b from-[#101010] to-[#000000] relative">
        <h1 className="text-[32px]">
          <span>Designing</span> <GradientText>stories</GradientText>
          <span>, not just screens.</span>
        </h1>
        <p className="text-[12px] font-normal">
          Hi, I’m Jitendra. I specialize in creating user-centric, visually
          engaging products that simplify complex workflows. My approach blends
          problem-solving, storytelling, and design thinking to deliver
          impactful solutions.
        </p>
        <p className="text-[12px] font-normal">
          When I’m not designing, you’ll find me breaking down design patterns,
          writing UX insights, learning new languages, or pushing limits at the
          gym.
        </p>
      </div>
      <GlowingCard />
    </div>
  );
};

export default HeroSection;
