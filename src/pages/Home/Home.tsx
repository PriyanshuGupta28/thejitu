import React from "react";
import BottomHero from "../../components/BottomHero/BottomHero";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Skills from "../../components/Skills/Skills";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import thumbjitu from "../../assets/thumbjitu.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-16">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
          }}
        >
          <HeroSection />
          <Skills />
        </div>
        <img
          src={thumbjitu}
          alt="jituthumb_img"
          className="w-[79.65px] h-[90px] mt-5"
        />
        <h2 className="text-[24px] md:text-[32px] font-semibold tracking-[-0.32px]">
          Case studies and projects
        </h2>
        <ProjectsSection />
        <div>
          <div className="flex justify-center items-center py-[72px]">
            <p className="w-[100%] md:w-[624px] text-[32px] text-left md:text-center font-semibold py-[100px] px-[24px] tracking-[-0.32px]">
              Product design is an ongoing process that require constant
              maintenance. The beauty of the UIUX design is that it’s never
              finished.
            </p>
          </div>
        </div>
        <BottomHero />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
