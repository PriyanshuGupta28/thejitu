import React from "react";
import { Lock } from "lucide-react";
import GifBackgroundCard from "../GifBackgroundCard/GifBackgroundCard";
import qdesq from "../../assets/projects/qdesq.png";
import wehive from "../../assets/projects/wehive.png";
import hubilo from "../../assets/projects/hubilo.png";
import ioscs from "../../assets/projects/ioscs.png";
import dyt from "../../assets/projects/dyt.png";

const ProjectsSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-[20px] py-[24px] w-[100%] md:w-[1048px]">
      <div className="flex flex-col items-center gap-[20px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/fb53/b23d/fa08b9d0d398c8c13bb0af77f4505c84?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEyDCd3DI11IytDvy4Ykt8N~2xMqTBPG8jTxT4b7CZJvMguJz39WNlc3rZgnRYtTDFQkMs6Hq6oertfHAQor4Qpcr1s8TkpMeaBymHdV7Ke0ZQFcbu76t3Colrm53EFPOWE5MZRTGKUuup5-VbXCdAQreU-DbOjhnOw8Emw15oKdHgBZVn75VeZIUs-0wiSmGfHvvYWZCOlqAfYXlR37EpZhjwg43JK2zhvTg2~-EeyvqmDmjapkqvqEXLUWtCTPxOfDM1Ek3K73~Wu~aXP0w3Av~4rkXCgp95mPJO8WCMOEVlfi9TZpF68gHEQQQx4uLBSJdlg2WCC0c8zlrUGW6Q__"
          alt="jituthumb_img"
          className="w-[79.65px] h-[90px]"
        />
        <h2 className="text-[24px] md:text-[32px] font-semibold tracking-[-0.32px]">
          Case studies and projects
        </h2>
        <div className="flex flex-col md:flex-row gap-[20px] flex-wrap w-full justify-center items-center">
          {ProjectData?.map((project) => (
            <GifBackgroundCard
              key={project.title}
              title={project.title}
              description={project.description}
              img={project.img}
              icon={project.icon}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

type ProjectDataType = {
  title: string;
  description: string[];
  img: string;
  link: string;
  icon?: React.ReactNode;
};

const ProjectData: ProjectDataType[] = [
  {
    title: "Qdesq",
    description: ["UX Correction", "Case Study", "Freelance"],
    img: qdesq,
    link: "/qdesq",
  },
  {
    title: "WeHive",
    description: ["Case Study", "Freelance"],
    img: wehive,
    icon: <Lock size={12} />,
    link: "/wehive",
  },
  {
    title: "iOS Case Study",
    description: ["UX Correction", "Case Study", "Self"],
    img: ioscs,
    link: "/ios",
  },
  {
    title: "Hubilo Platform redesign",
    description: ["UX Correction", "Case Study", "Full Time"],
    img: hubilo,
    link: "/hubilo",
  },
  {
    title: "DYT Club",
    description: ["Case Study", "Freelance"],
    img: dyt,
    link: "/dyt",
  },
];
