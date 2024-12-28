import React from "react";
import intro1 from "../../assets/intro1.png";
import intro2 from "../../assets/intro2.png";
import intro3 from "../../assets/intro3.png";
import introb1 from "../../assets/introb1.png";
import introbr1 from "../../assets/introbr1.png";
import introbr2 from "../../assets/introbr2.png";

const IntroCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex justify-center items-center gap-[24px] w-[1048px]">
        <div className="flex flex-col w-[100%] h-[310px] bg-[#FFF] px-[24px] pt-[24px] gap-[8px] justify-between rounded-[16px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[13px] font-semibold text-[#963D97] ">
              User-Centered Focus
            </p>
            <p className="text-[11px] ">
              Prioritize the needs, behaviors, and pain points of users to
              create a seamless experience.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={intro1} alt="intro1" />
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-[310px] bg-[#FFF] px-[24px] pt-[24px] gap-[8px] justify-between rounded-[16px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[13px] font-semibold text-[#009DDC]">
              Simplicity in Design
            </p>
            <p className="text-[11px]">
              Remove unnecessary steps and streamline workflows, ensuring the
              design remains intuitive.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={intro2} alt="intro1" />
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-[310px] bg-[#FFF] px-[24px] pt-[24px] gap-[8px] justify-between rounded-[16px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[13px] font-semibold text-[#61BB46]">
              Cognitive Load Reduction
            </p>
            <p className="text-[11px]">
              Minimize the mental effort required for users to interact with the
              system by applying cognitive design principles.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={intro3} alt="intro1" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-[24px]">
        <div className="bg-[#FFF] h-[298px] p-[24px] w-[100%] rounded-[16px] flex flex-col gap-[24px] justify-between">
          <div className="flex flex-col gap-[8px] justify-center items-center">
            <p className="text-[13px] font-semibold text-[#F5821F] text-center">
              Consistency and Familiarity
            </p>
            <p className="text-[11px] text-center w-[229px]">
              Retain familiar elements from previous iOS versions to maintain
              continuity while enhancing usability.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={introb1} alt="" />
          </div>
        </div>
        <div className="bg-[#FFF] h-[298px] w-[100%] rounded-[16px] px-[24px] flex gap-[24px]">
          <div className="flex flex-col gap-[8px] justify-between pb-[24px]">
            <div>
              <img src={introbr1} alt="" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#E03A3E]">
                Enhanced Accessibility
              </p>
              <p className="text-[11px] w-[229px]">
                Ensure that the design caters to all users, including those with
                accessibility needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <div>
              <img src={introbr2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
