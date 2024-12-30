import React from "react";
import BottomHero from "../../components/BottomHero/BottomHero";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Skills from "../../components/Skills/Skills";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-16">
        <HeroSection />
        <Skills />
        <ProjectsSection />
        <div>
          <div className="flex justify-center items-center py-[72px]">
            <p className="w-[100%] md:w-[624px] text-[32px] text-left md:text-center font-semibold py-[100px] px-[24px]">
              Product design is an ongoing process that require constant
              maintenance. The beauty of the UIUX design is that it’s never
              finished.
            </p>
          </div>
        </div>
        <BottomHero />
      </div>
    </>
  );
};

export default Home;
