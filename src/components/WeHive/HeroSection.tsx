import React from "react";
import hero from "../../assets/wehive/hero.png";
import { Figma } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <>
      <img src={hero} alt="hero" />
      <div className="h-[260px] py-6 justify-center items-start gap-2 inline-flex">
        <div className="bg-border-fade w-[252px] h-[164px] p-[1px] rounded-3xl">
          <div className="w-[250px] h-[164px] p-6 bg-gradient-to-b from-[#101010] to-black rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-white/80 text-sm font-compact uppercase leading-tight tracking-wide">
              company
            </div>
            <div className="text-white text-sm font-normal font-['SF Pro'] underline leading-tight">
              Hammer & Tongs 􀰾
            </div>
          </div>
        </div>
        <div className="bg-border-fade w-[252px] h-[164px] p-[1px] rounded-3xl">
          <div className="w-[250px] h-[164px] p-6 bg-gradient-to-b from-[#101010] to-black rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-white/80 text-sm font-compact uppercase leading-tight tracking-wide">
              My role
            </div>
            <div className="text-white text-sm font-normal font-['SF Pro'] leading-tight">
              Research
              <br />
              Project management
              <br />
              High-fidelity design
              <br />
              Design Workshop
            </div>
          </div>
        </div>
        <div className="bg-border-fade w-[252px] h-[164px] p-[1px] rounded-3xl">
          <div className="w-[250px] h-[164px] p-6 bg-gradient-to-b from-[#101010] to-black rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-white/80 text-sm font-compact uppercase leading-tight tracking-wide">
              Team
            </div>
            <div className="text-white text-sm font-normal font-['SF Pro'] leading-tight">
              Sole Designer
              <br />1 Design Architect
            </div>
          </div>
        </div>
        <div className="bg-border-fade w-[252px] h-[164px] p-[1px] rounded-3xl">
          <div className="w-[250px] h-[164px] p-6 bg-gradient-to-b from-[#101010] to-black rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-white/80 text-sm font-compact uppercase leading-tight tracking-wide">
              Tools
            </div>
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
              <Figma className="w-6 h-6 relative overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
