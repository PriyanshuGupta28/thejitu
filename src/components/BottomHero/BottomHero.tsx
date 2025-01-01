import React from "react";
import jitu from "../../assets/jitu.png";
import GradientText from "../GradientText.tsx/GradientText";

const BottomHero: React.FC = () => {
  return (
    <div className="py-[48px] px-[16px] md:px-0 ">
      <div className="bg-border-fade rounded-[48px] w-[100%] h-[100%] md:w-[930px] md:h-[296px] p-[1px]">
        <div className="flex flex-col md:flex-row gap-[72px] w-full h-full md:w-[928px] md:h-[296px] rounded-[48px] bg-light-to-dark p-[48px]">
          <div className="flex items-center justify-center w-[100%] md:w-[196.29px] h-[200px]">
            <img src={jitu} alt="jitu" />
          </div>
          <div className="flex flex-col w-[100%] md:w-[557px] gap-[24px]">
            <p className="text-[32px] font-semibold text-center md:text-left tracking-[-0.32px]">
              What sets me{" "}
              <GradientText className="w-[114px] h-[52px] text-center text-[42px] font-semibold font-edu tracking-[-1.68px]">
                apart?
              </GradientText>
            </p>
            <p className="text-[14px] text-white/80 font-text font-normal text-center md:text-left tracking-[-0.28px]">
              I don’t just create digital experiences—I design journeys that
              connect, inspire, and perform. By blending creativity with purpose
              and functionality with emotion, I shape solutions that adapt to
              trends without losing timeless appeal. Whether it’s reimagining
              workflows or crafting intuitive designs, I ensure every project
              stands out and tells a story worth experiencing.
            </p>
            <div className="flex gap-[24px] justify-center items-center md:justify-start">
              {/* <button className="flex items-center justify-center w-[91px] h-[38px] rounded-[100px] py-[12px] px-[16px] text-[12px] whitespace-nowrap bg-white ">
                <p className="text-black font-medium">Contact Me</p>
              </button> */}
              <div className="h-[38px] px-4 py-3 rounded-[100px] border border-neutral-700 justify-center items-center gap-2 inline-flex">
                <div className="text-white text-xs font-compact underline cursor-pointer">
                  <a
                    download={"jitu_resume.pdf"}
                    target="_blank"
                    href={
                      "https://drive.google.com/file/d/1yTOSvk150NYgNhzUwDUB-FGzeTeWfxyW/view"
                    }
                    className="tracking-[-0.4px]"
                  >
                    View Resume 􀄫
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
