import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import iosimg from "../../assets/iOSPoster.png";
import ios18logo from "../../assets/iso18logo.png";
import GradientText from "../../components/GradientText.tsx/GradientText";
import IntroCard from "../../components/IosCaseStudyComponents/IntroCard";
import { CircleChevronDown } from "lucide-react";
import ProbStatements from "../../components/IosCaseStudyComponents/ProbStatements";
import RedesignGoals from "../../components/IosCaseStudyComponents/RedesignGoals";
import ProjectRedifinedBasedOn from "../../components/IosCaseStudyComponents/ProjectRedifinedBasedOn";

// Main component for the iOS page
const Ios: React.FC = () => {
  return (
    <div className="flex flex-col pt-[24px] justify-center items-center gap-[24px] relative">
      <PageHeader />
      <img src={iosimg} alt="ios hero section img" className="w-[100%]" />
      <div className="flex flex-col gap-[24px] justify-center items-center py-[24px]">
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
        <div>
          <CircleChevronDown color="rgba(255, 255, 255, 0.80)" />
        </div>
      </div>
      {/* Introduction section */}
      <div className="w-[100%] bg-[#F2F2F5] relative">
        {/* Gradient background animation */}
        <div className="absolute w-[100%] h-[24px] bg-gradient-to-l from-[#e43d19] via-[#3472bc] to-[#06d6d6] blur-[20px] animate-gradient-move top-[-12px] z-0"></div>
        <div className="relative w-[100%] h-[100%] bg-[#F2F2F5] flex flex-col justify-center items-center">
          {/* Content container */}
          <div className="flex flex-col relative w-[1048px] text-[#000] z-10 gap-[48px] py-[48px]">
            {/* Introduction text */}
            <div className="flex flex-col gap-[24px]">
              <p className="text-[32px] font-semibold font-display">
                Introduction
              </p>
              <p className="text-[11px] font-normal font-textThin">
                As a long-time Apple user, particularly immersed in iOS and its
                ecosystem, I have always admired Apple’s consistent focus on
                simplicity and user-centered design. iOS has been a dominant
                operating system for over a decade due to its elegant design and
                intuitive user experience. However, throughout my experience, I
                encountered several moments where the user experience could be
                further improved.
              </p>
              <p className="text-[11px] font-normal font-textThin">
                This project reflects my vision for a redesigned iOS—focusing on
                how users should interact with and experience the system in a
                more intuitive and accessible way. My goal was to address
                specific pain points, apply cognitive design principles, and
                enhance user-centric behavior in the design. By refining
                existing elements and adding missing components, I created a
                more fluid and likable experience for users. Through this
                redesign, I aimed to simplify the user interface while
                addressing the exact needs that are crucial in the current iOS.
              </p>
            </div>
            {/* Intro cards section */}
            <IntroCard />
          </div>
        </div>
      </div>
      <ProbStatements />
      <div className="flex flex-col p-[48px] w-[100%] bg-[#f2f2f5] justify-center items-center">
        <RedesignGoals />
        <ProjectRedifinedBasedOn />
      </div>
    </div>
  );
};

export default Ios;
