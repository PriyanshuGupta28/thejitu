import React from "react";
import figma from "../../assets/skills/figma.png";
import ps from "../../assets/skills/ps.png";
import ai from "../../assets/skills/ai.png";
import Confluence from "../../assets/skills/illu.png";
import Miro from "../../assets/skills/x.png";
import ms from "../../assets/skills/ms.png";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col py-[24px] gap-[16px] justify-center items-center">
      <p className=" text-center text-[14px] weight-[400] font-text mb-4 text-white/80 tracking-[0.56px] uppercase">
        Expertise in the following tools
      </p>
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 lg:grid-cols-6 gap-4 place-items-center"
        key={Math.random() * 100}
      >
        {SkillsData.map((skill: SkillsType) => (
          <>
            <SkillCard title={skill.title} icon={skill.icon} />
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
    icon: figma,
  },
  {
    title: "Photoshop",
    icon: ps,
  },
  {
    title: "Illustrator",
    icon: ai,
  },
  {
    title: "Confluence",
    icon: Confluence,
  },
  {
    title: "Miro",
    icon: Miro,
  },
  {
    title: "Ms Office",
    icon: ms,
  },
];

const SkillCard = ({ title, icon }: SkillsType) => {
  return (
    <div
      className="bg-border-fade rounded-[38px] w-[120px] h-[120px] p-[1px]"
      key={"skill" + title + "-"}
    >
      <div
        className="flex justify-center items-center w-full h-full rounded-[38px] bg-gradient-to-br from-[#101010] to-[#000000]"
        role="button"
        aria-label={title}
        title={title}
      >
        <img src={icon} alt="alt" />
      </div>
    </div>
  );
};

type SkillsType = {
  title: string;
  icon: string;
};
