import React from "react";
import { Figma } from "lucide-react";
const Desc: React.FC = () => {
  return (
    <div className="h-[260px] py-12 justify-center items-start gap-2 inline-flex">
      <div className="bg-border-fade w-[252px] h-[164px] p-[1px] rounded-3xl">
        <div className="w-[250px] h-[164px] p-6 bg-gradient-to-b from-[#101010] to-black rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-white/80 text-sm font-compact uppercase leading-tight tracking-wide">
            company
          </div>
          <div className="self-stretch text-sm font-normal font-['SF Pro'] underline leading-tight">
            Qdesq􀰾
          </div>
        </div>
      </div>
      <div className="bg-border-fade w-[252px] h-[164px] p-[1px] rounded-3xl">
        <div className="w-[250px] h-[164px] p-6 bg-gradient-to-b from-[#101010] to-black rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-white/80 text-sm font-compact uppercase leading-tight tracking-wide">
            My role
          </div>
          <div className="self-stretch text-sm font-normal font-['SF Pro'] leading-tight">
            Research
            <br />
            Project management
            <br /> High-fidelity
            <br /> design Design Workshop
          </div>
        </div>
      </div>
      <div className="bg-border-fade w-[252px] h-[164px] p-[1px] rounded-3xl">
        <div className="w-[250px] h-[164px] p-6 bg-gradient-to-b from-[#101010] to-black rounded-3xl flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-white/80 text-sm font-compact uppercase leading-tight tracking-wide">
            Team
          </div>
          <div className="self-stretch text-sm font-normal font-['SF Pro'] leading-tight">
            Sole Designer
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
  );
};

export default Desc;
