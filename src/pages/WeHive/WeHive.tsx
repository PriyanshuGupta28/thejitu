import React from "react";
import GradientText from "../../components/GradientText.tsx/GradientText";
import HeroSection from "../../components/WeHive/HeroSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import TheBirthOfWeHive from "../../components/WeHive/TheBirthOfWeHive";
import Overview from "../../components/WeHive/Overview";
import MyRole from "../../components/WeHive/MyRole";
import DesignProcess from "../../components/WeHive/DesignProcess";
import ProblemStatements from "../../components/WeHive/ProblemStatements";
import CraftingTheWeHive from "../../components/WeHive/CraftingTheWeHive";
import Components500 from "../../components/WeHive/Components500";
import ResearchDesign from "../../components/WeHive/Research&Design";

const WeHive: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[150px] py-12 gap-[12px]">
      <div>
        {projectHeader.map((header, index) => (
          <div key={index} className="text-center">
            <p className="text-[14px] uppercase tracking-[0.56px] text-white/80 font-compact">
              {header.skils.join(" • ")}
            </p>
            <div className="flex flex-row justify-center items-center text-[32px] tracking-[-0.32px] font-semibold gap-[8px]">
              <div className="flex flex-row justify-center items-center text-[32px] tracking-[-0.32px] font-semibold gap-[8px]">
                {header.title.split(" ").map((word, idx) => (
                  <p
                    key={idx}
                    className={`${
                      header.titleIdx.includes(idx)
                        ? "text-[42px] font-semibold tracking-[-1.68px] leading-[46px]"
                        : "text-white"
                    }`}
                  >
                    {header.titleIdx.includes(idx) ? (
                      <GradientText>{word}</GradientText>
                    ) : (
                      word
                    )}
                  </p>
                ))}
              </div>
              <p className="text-[42px]">{"-"}</p>
              <p>{header.description}</p>
            </div>
          </div>
        ))}
      </div>
      <HeroSection />
      <TheBirthOfWeHive />
      <div className="w-full bg-light-to-dark flex flex-col justify-center items-center p-[48px] gap-[48px]">
        <Overview />
        <ProblemStatements />
        <MyRole />
        <DesignProcess />
      </div>
      <CraftingTheWeHive />
      <Components500 />
      <ResearchDesign />
      <div className="text-white text-2xl font-semibold font-['SF Pro Display']">
        Discover What’s Next
      </div>
      <ProjectsSection />
    </div>
  );
};

export default WeHive;

const projectHeader: projectHeaderType[] = [
  {
    skils: ["UX design", "Case Study"],
    title: "Redefining virtual events",
    description: "My UX journey at Hubilo",
    titleIdx: [1, 2],
  },
];

type projectHeaderType = {
  skils: string[];
  title: string;
  description: string;
  titleIdx: number[];
};
