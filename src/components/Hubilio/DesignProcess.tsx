import React from "react";
import aero from "../../assets/aero.png";
import dpjitu from "../../assets/dpjitu.png";

const DesignProcess: React.FC = () => {
  return (
    <div className="h-[476px] px-12 py-6 justify-center items-start gap-4 inline-flex overflow-hidden ">
      <div className="w-[1026px] self-stretch p-[1px] bg-border-fade rounded-[48px]">
        <div className="w-[1024px] self-stretch p-12 bg-gradient-to-b from-[#101010] to-black rounded-[48px] flex-col justify-start items-start gap-6 inline-flex relative">
          <div className="text-white text-2xl font-semibold font-['SF Pro Display'] leading-7 ">
            Design Process - Or How to Build a Plane While Flying It
          </div>
          <div className="self-stretch">
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              Let’s be honest—design processes at{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              startups
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              rarely look like the neat, linear frameworks we read about in
              textbooks. In reality, it’s more like{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              assembling a plane mid-flight
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              while passengers are already boarding. And Hubilo? It was no
              different.
              <br />
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              Sure, processes matter.{" "}
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              But in a fast-paced startup environment, you don’t always get the
              luxury of perfect timelines and endless brainstorming sessions.
              Instead, you{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              dodge deadlines, pull late nights,
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              and still find ways to{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              deliver designs that work
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              —even if you’re sketching wireframes while gulping your third
              coffee.
              <br />
            </span>
            <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-normal">
              Process matters—but momentum wins.
              <br />
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              In startups, speed doesn’t kill—it builds. The designs I created
              at Hubilo didn’t just{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              meet deadlines;
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              they
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              {" "}
              set standards
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              —turning chaotic timelines into{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              structured workflows
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              and ideas into
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              {" "}
              impactful products.
              <br />
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              Because sometimes, all you need is a{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              process that’s good enough
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              to{" "}
            </span>
            <span className="text-[#32ade6] text-sm font-bold font-['Kalam'] leading-normal">
              keep the plane flying
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              —and that’s exactly what we did. ✌️
            </span>
          </div>
          <img
            className="w-[109.89px] h-36 left-[934px] top-[283.72px] absolute"
            src={dpjitu}
          />
          <img
            className="w-6 h-6 left-[684px] top-[52px] absolute"
            src={aero}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignProcess;
