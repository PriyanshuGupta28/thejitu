import React from "react";
import userThinkingImg from "../../assets/userThinkingImg.png";

const WhatUsersWereThinking: React.FC = () => {
  return (
    <div className="w-[1026px] h-[905px] p-[1px] bg-border-fade rounded-[48px] ">
      <div className="w-[1024px] h-[905px] p-12 bg-gradient-to-b from-[#101010] to-black rounded-[48px] flex-col justify-start items-center gap-6 inline-flex">
        <div className="self-stretch text-white text-2xl font-semibold font-['SF Pro Display'] leading-7">
          What users were thinking...
        </div>
        <div className="self-stretch">
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            When designing Hubilo’s platform, we took a deep{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            dive into user behaviors and expectations.
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            Through user feedback, G2 reviews, CAB meetings, and competitor
            analysis, we identified{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            pain points, desires,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            influences
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            shaping their needs.
          </span>
        </div>
        <img src={userThinkingImg} alt="userThinkingImg" />

        <div className="self-stretch text-white text-base font-bold font-['SF Pro Text'] leading-[18px]">
          Internal Surveys
        </div>
        <div className="self-stretch">
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            To refine the Hubilo platform, we conducted a mix of{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            internal surveys{" "}
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            and{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            user interviews
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            targeting{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            stakeholders, CAB members,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            newly onboarded users.{" "}
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            The goal was to uncover pain{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            points, test concepts,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and validate ideas to build a{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            seamless experience
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            for both event attendees and organizers.
            <br />
            <br />
            We applied this same{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            survey process
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            to refine features like the{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            dashboard layout, session navigation,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#ff75a4] text-sm font-bold font-['Kalam'] leading-normal">
            theme customization tools,{" "}
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            ensuring the platform addressed pain points while meeting user
            expectations.
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhatUsersWereThinking;
