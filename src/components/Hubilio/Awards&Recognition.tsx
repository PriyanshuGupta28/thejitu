import React from "react";
import Trophy from "../../assets/Trophy.png";
import twofjitu from "../../assets/2fjitu.png";
import hfhubilo from "../../assets/hfhubilo.png";

const AwardsRecognition: React.FC = () => {
  return (
    <div className="h-[702.40px] p-[1px] justify-center items-start gap-4 inline-flex overflow-hidden relative bg-border-fade rounded-[48px]">
      <div className="w-[1024px] p-12 bg-gradient-to-b from-[#101010] to-black rounded-[48px] flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
        <div className="text-white text-2xl font-semibold font-['SF Pro Display'] leading-7">
          Awards & Recognition
        </div>
        <div className="w-[116.70px] h-[230.40px] relative">
          <img src={Trophy} alt="Trophy" />
        </div>
        <div className="py-3 flex-col justify-center items-center gap-1 flex">
          <div className="text-white text-base font-['SF Compact']">
            Limitless Award 2021
          </div>
          <div className="text-right text-white/80 text-xs font-['SF Compact']">
            Hubilo Annual Townhall
          </div>
        </div>
        <div className="w-[494px] text-center">
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            I was honored with{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            Hubilo’s Limitless Award
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            at the{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            first-ever townhall{" "}
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            held after the platform’s{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            pivot to virtual events.
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            This recognition celebrated the{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            hard work, dedication,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            innovation
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            that went into redefining Hubilo’s{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            user experience.
            <br />
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            <br />
            The award was a testament to the
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            {" "}
            collaborative effort{" "}
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            with my fellow designer,{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            Kaushal Tailor,
          </span>
          <span className="text-[#e43d19] text-sm font-bold font-['Kalam'] leading-normal">
            {" "}
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            who partnered with me to{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            deliver exceptional results
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            —meeting strict deadlines while maintaining high-quality standards.
          </span>
        </div>
        <img
          className="w-[84px] h-[107px] left-[740.48px] top-[365.90px] absolute origin-top-left rotate-[7.63deg]"
          src={twofjitu}
        />
        <img
          className="w-[85.96px] h-[90px] left-[193.27px] top-[625.08px] absolute origin-top-left rotate-[-6.41deg]"
          src={hfhubilo}
        />
      </div>
    </div>
  );
};

export default AwardsRecognition;
