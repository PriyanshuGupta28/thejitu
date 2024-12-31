import React from "react";
import GradientText from "../GradientText.tsx/GradientText";
import control from "../../assets/3d/control.png";
import music from "../../assets/3d/music.png";
import call from "../../assets/3d/call.png";
import home from "../../assets/3d/home.png";
import record from "../../assets/3d/recording.png";

const ProjectRedifinedBasedOn: React.FC = () => {
  return (
    <div className="relative">
      <div className="w-[888px] left-[86px] bottom-[-2px] opacity-[0.5] h-[240px] absolute bg-apple-ai blur-[10px] animate-gradient-move"></div>
      <div className="flex flex-col w-[1048px] justify-center items-center gap-[12px] py-[48px] rounded-[24px] bg-white relative">
        <div className="text-[24px] font-semibold text-[#000] font-display">
          Project <GradientText>redefine</GradientText> Based On
        </div>
        <div>
          <div className="flex justify-center items-center gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-[8.828px] p-[28.25px]"
              >
                <img src={item.icon} alt={item.title} />
                <p className="text-[black] text-[11.476px]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRedifinedBasedOn;

const data: dataType[] = [
  {
    title: "Control Center",
    icon: control,
  },
  {
    title: "Media Controls",
    icon: music,
  },
  {
    title: "Phone & Contacts",
    icon: call,
  },
  {
    title: "Home Screen Customization",
    icon: home,
  },
  {
    title: "Call Recording",
    icon: record,
  },
];

type dataType = {
  title: string;
  icon: string;
};
