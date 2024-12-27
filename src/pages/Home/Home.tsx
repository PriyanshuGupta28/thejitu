import BottomHero from "../../components/BottomHero/BottomHero";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Skills from "../../components/Skills/Skills";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
        <Skills />
        <ProjectsSection />
        <div>
          <div className="flex justify-center items-center py-[72px]">
            <p className="w-[624px] text-[32px] text-center font-semibold">
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
