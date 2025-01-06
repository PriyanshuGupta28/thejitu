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
