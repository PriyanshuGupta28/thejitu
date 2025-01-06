import React from "react";
import brcorner from "../../assets/revampcorners/br.png";
import blcorner from "../../assets/revampcorners/bl.png";
import tc1 from "../../assets/tc1.png";
import tc2 from "../../assets/tc2.png";
import tcs1 from "../../assets/tcs1.png";
import tcs2 from "../../assets/tcs2.png";
import tcs3 from "../../assets/tcs3.png";
import tcs4 from "../../assets/tcs4.png";
import tcs5 from "../../assets/tcs5.png";
import tcs6 from "../../assets/tcs6.png";

const ThemeCustomization: React.FC = () => {
  return (
    <div className="w-[1026px] h-[1434.25px] p-[1px] bg-border-fade rounded-[48px]">
      <div className="w-[1024px] h-[1434.25px] p-12 bg-gradient-to-b from-[#101010] to-black rounded-[48px] flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
        <div className="self-stretch text-white text-2xl font-semibold font-['SF Pro Display'] leading-7">
          Theme Customization
        </div>
        <div className="self-stretch">
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            The revamped Hubilo platform supports{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            complete theme customization,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            allowing clients to align designs with their{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            brand identity
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and color guidelines.
            <br />
            <br />
            With the ability to{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            change colors, backgrounds,
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            images
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            , the platform ensures each event feels unique and personalized.
            Whether it’s a corporate theme, a vibrant celebration, or a
            minimalist design, users can{" "}
          </span>
          <span className="text-[#ffcc00] text-sm font-bold font-['Kalam'] leading-normal">
            adapt the interface
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            to match their vision effortlessly.
          </span>
        </div>
        <div className="h-[200px] justify-start items-center gap-[6.96px] inline-flex">
          <div className="w-[327.23px] h-[199.90px] relative rounded-lg  overflow-hidden">
            <img
              className="w-[327.23px] h-[199.90px] left-0 top-[-0px] absolute"
              src={tcs1}
            />
          </div>
          <div className="w-[327.23px] h-[199.96px] relative rounded-lg  overflow-hidden">
            <img
              className="w-[327.23px] h-[199.96px] left-0 top-[-0px] absolute"
              src={tcs2}
            />
          </div>
          <div className="w-[327.23px] h-[200px] relative rounded-lg  overflow-hidden">
            <img
              className="w-[327.23px] h-[200px] left-0 top-[-0px] absolute"
              src={tcs3}
            />
          </div>
        </div>
        <div className="h-[200px] justify-start items-center gap-[6.96px] inline-flex">
          <div className="w-[327.23px] h-[199.90px] relative rounded-lg  overflow-hidden">
            <img
              className="w-[327.23px] h-[199.90px] left-0 top-[-0px] absolute"
              src={tcs4}
            />
          </div>
          <div className="w-[327.23px] h-[199.96px] relative rounded-lg  overflow-hidden">
            <img
              className="w-[327.23px] h-[199.96px] left-0 top-[-0px] absolute"
              src={tcs5}
            />
          </div>
          <div className="w-[327.23px] h-[200px] relative rounded-lg  overflow-hidden">
            <img
              className="w-[327.23px] h-[200px] left-0 top-[-0px] absolute"
              src={tcs6}
            />
          </div>
        </div>
        <div className="self-stretch pt-12 justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-white text-base font-bold font-['SF Pro Text'] leading-7">
            Dashboard Customization Section
          </div>
        </div>
        <div className="w-full h-full relative">
          <div className="w-[928px] h-[698.83px] left-0 top-[-42.78px] absolute">
            <img
              className="w-[558px] h-[329px] left-0 top-[42.83px] absolute"
              src={tc1}
            />
            <img
              className="w-[669px] h-[552px] left-[259px] top-[146.83px] absolute"
              src={tc2}
            />
            <div className="w-[349.12px] h-36 left-[28.44px] top-[451.24px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
              <div className="grow shrink basis-0 h-36 p-3  justify-center items-center gap-2.5 flex z-10">
                <div className="grow shrink basis-0">
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    The color picker and theme editor offer{" "}
                  </span>
                  <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                    real-time customization
                  </span>
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    , letting users adjust{" "}
                  </span>
                  <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                    color tokens, backgrounds,{" "}
                  </span>
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    and{" "}
                  </span>
                  <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                    images.{" "}
                  </span>
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    With{" "}
                  </span>
                  <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                    color mapping,
                  </span>
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    {" "}
                    every visual element—buttons, headers, and text—adapts
                    seamlessly to match the chosen{" "}
                  </span>
                  <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                    theme palette.
                  </span>
                </div>
              </div>
              <img
                className="w-[27.93px] h-[28.44px] left-[330px] top-[115px] absolute origin-top-left"
                src={brcorner}
              />
            </div>
            <div className="w-[323.46px] h-[143px] left-[563.12px] top-0 absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
              <img
                className="w-[27.93px] h-[28.44px] left-[-8px] top-[115px] absolute"
                src={blcorner}
              />
              <div className="grow shrink basis-0 h-[143px] p-3  justify-center items-center gap-2.5 flex z-10">
                <div className="grow shrink basis-0">
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    The platform supports{" "}
                  </span>
                  <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                    theme storage,{" "}
                  </span>
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    enabling users to{" "}
                  </span>
                  <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                    save customized templates.
                  </span>
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    {" "}
                    This feature allows organizers to
                  </span>
                  <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                    {" "}
                    reuse designs
                  </span>
                  <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                    {" "}
                    across multiple events, maintaining consistency and branding
                    standards without starting from scratch.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomization;
