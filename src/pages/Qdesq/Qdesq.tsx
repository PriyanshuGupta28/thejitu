import React from "react";
import GradientText from "../../components/GradientText.tsx/GradientText";

import hero from "../../assets/Qdesq/heroqdesq.png";
import Desc from "../../components/Qdesq/Desc";
import ProjectInProgress from "../../components/Qdesq/ProjectInProgress";
import WhenLaveshCalled from "../../components/Qdesq/WhenLaveshCalled";
import Overview from "../../components/Qdesq/Overview";
import DesignProcess from "../../components/Qdesq/DesignProcess";
import ProblemStatements from "../../components/Qdesq/ProblemStatements";
import Competitors from "../../components/Qdesq/Competitors";
import WhatUsersWereThinking from "../../components/Qdesq/WhatUsersWereThinking";
import MobileDesign from "../../components/Qdesq/MobileDesign";
import Comp150 from "../../components/Qdesq/Comp150";
import WebsiteDesigns from "../../components/Qdesq/WebsiteDesigns";
import IdeateDesign from "../../components/Qdesq/IdeateDesign";
import Comparison from "../../components/Qdesq/Comparison";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

const Qdesq: React.FC = () => {
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
      <img src={hero} alt="" />
      <div
        className="w-full h-full flex flex-col justify-center items-center"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
        }}
      >
        <Desc />
      </div>
      <ProjectInProgress />
      <WhenLaveshCalled />
      <div className="w-full h-full flex flex-col justify-center items-center bg-light-to-dark">
        <Overview />
        <ProblemStatements />
        <DesignProcess />
        <Competitors />
        <WhatUsersWereThinking />
        <MobileDesign />
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#e2e8f0]">
          <Comp150 />
        </div>
        <IdeateDesign />
        <Comparison />
        <WebsiteDesigns />
      </div>

      <div className="text-2xl font-semibold font-['SF Pro Display']">
        Discover What’s Next
      </div>
      <ProjectsSection />
    </div>
  );
};

export default Qdesq;

const projectHeader: projectHeaderType[] = [
  {
    skils: ["Freelance project", "Case Study"],
    title: "From search to setup",
    description: "Reimagining Qdesq",
    titleIdx: [1, 2, 3],
  },
];

type projectHeaderType = {
  skils: string[];
  title: string;
  description: string;
  titleIdx: number[];
};
