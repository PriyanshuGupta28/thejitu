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
        <img
          src="https://s3-alpha-sig.figma.com/img/fb53/b23d/fa08b9d0d398c8c13bb0af77f4505c84?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEyDCd3DI11IytDvy4Ykt8N~2xMqTBPG8jTxT4b7CZJvMguJz39WNlc3rZgnRYtTDFQkMs6Hq6oertfHAQor4Qpcr1s8TkpMeaBymHdV7Ke0ZQFcbu76t3Colrm53EFPOWE5MZRTGKUuup5-VbXCdAQreU-DbOjhnOw8Emw15oKdHgBZVn75VeZIUs-0wiSmGfHvvYWZCOlqAfYXlR37EpZhjwg43JK2zhvTg2~-EeyvqmDmjapkqvqEXLUWtCTPxOfDM1Ek3K73~Wu~aXP0w3Av~4rkXCgp95mPJO8WCMOEVlfi9TZpF68gHEQQQx4uLBSJdlg2WCC0c8zlrUGW6Q__"
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
      </div>
    </>
  );
};

export default Home;
