import React from "react";
import { Figma } from "lucide-react";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col py-[24px] gap-[16px] justify-center items-center">
      <p className=" text-center text-[12px] weight-[400] font-semibold mb-4 text-white/80">
        Expertise in the following tools
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 lg:grid-cols-6 gap-4 place-items-center">
        {SkillsData.map((skill: SkillsType, index: number) => (
          <>
            <SkillCard
              title={skill.title}
              icon={skill.icon}
              key={index + skill.title}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;

const SkillsData: SkillsType[] = [
  {
    title: "Figma",
    icon: <Figma width={"36px"} height={"36px"} />,
  },
  {
    title: "Figma",
    icon: <Figma width={"36px"} height={"36px"} />,
  },
  {
    title: "Figma",
    icon: <Figma width={"36px"} height={"36px"} />,
  },
  {
    title: "Figma",
    icon: <Figma width={"36px"} height={"36px"} />,
  },
  {
    title: "Figma",
    icon: <Figma width={"36px"} height={"36px"} />,
  },
  {
    title: "Figma",
    icon: <Figma width={"36px"} height={"36px"} />,
  },
];

const SkillCard = ({ title, icon }: SkillsType) => {
  return (
    <div
      className="w-[120px] h-[120px] rounded-[32px] border border-zinc-700 flex justify-center items-center bg-gradient-to-b from-[#101010] to-[#000000]"
      role="button"
      aria-label={title}
      title={title}
    >
      {icon}
    </div>
  );
};

type SkillsType = {
  title: string;
  icon: React.ReactNode;
};
