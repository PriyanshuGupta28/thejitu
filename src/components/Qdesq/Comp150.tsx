import React from "react";
import comp150img from "../../assets/Qdesq/comp500.png";

const Comp150: React.FC = () => {
  return (
    <div className="h-[626px] pb-6 flex-col justify-start items-center inline-flex relative">
      <div className="h-[578px] rounded-[48px] flex-col justify-start items-start flex overflow-hidden ">
        <div className="h-[458px] relative overflow-hidden">
          <img className="left-0 top-0 object-contain" src={comp150img} />
          <div
            className="w-[1024px] h-[257px] left-0 top-[204px] absolute"
            style={{
              background:
                "linear-gradient(0deg, #E2E8F0 0%, rgba(226, 232, 240, 0.00) 100%)",
            }}
          />
          <div className="h-[76px] left-[400px] top-[384px] absolute flex-col justify-center items-center inline-flex z-10">
            <div className="self-stretch text-center">
              <span className="text-black text-5xl font-semibold font-['SF Pro Display'] leading-[48px]">
                150
              </span>
              <span className="text-[#ff3b30] text-5xl font-bold font-['Kalam'] leading-[48px]">
                +
              </span>
            </div>
            <div className="text-center text-black text-2xl font-semibold font-['SF Pro Display'] leading-7">
              Components created
            </div>
          </div>
        </div>
        <div className="self-stretch h-[120px] py-6 bg-slate-200 flex-col justify-start items-center gap-6 flex overflow-hidden">
          <div className="w-[590px] text-center">
            <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              Qdesq’s design system is crafted using{" "}
            </span>
            <span className="text-[#ff3b30] text-sm font-bold font-['Kalam'] leading-normal">
              Google’s Material You,
            </span>
            <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              ensuring a{" "}
            </span>
            <span className="text-[#ff3b30] text-sm font-bold font-['Kalam'] leading-normal">
              minimalist and scalable design.{" "}
            </span>
            <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              With 150+ reusable components, it achieves visual consistency
              while enabling role-based access, flexible customization, and{" "}
            </span>
            <span className="text-[#ff3b30] text-sm font-bold font-['Kalam'] leading-normal">
              future-proof scalability{" "}
            </span>
            <span className="text-black/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              to adapt to evolving business needs.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp150;
