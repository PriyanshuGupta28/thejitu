import React from "react";
import Journey from "../../components/Hubilio/Journey";
import GradientText from "../../components/GradientText.tsx/GradientText";
import Desc from "../../components/Hubilio/Desc";

const Hubilo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-[200px] gap-[12px]">
      <div>
        {projectHeader.map((header, index) => (
          <div key={index} className="text-center">
            <p className="text-[14px] uppercase tracking-[0.56px] text-white/80 font-compact">
              {header.skils.join(" • ")}
            </p>
            <div className="flex flex-row justify-center items-center text-[32px] tracking-[-0.32px] font-semibold gap-[8px]">
              <div className="flex flex-row justify-center items-center text-[32px] tracking-[-0.32px] font-semibold gap-[8px]">
                {header.title.split(" ").map((word, idx) => (
                  <p
                    key={idx}
                    className={`${
                      header.titleIdx.includes(idx)
                        ? "text-[42px] font-semibold tracking-[-1.68px] leading-[46px]"
                        : "text-white"
                    }`}
                  >
                    {header.titleIdx.includes(idx) ? (
                      <GradientText>{word}</GradientText>
                    ) : (
                      word
                    )}
                  </p>
                ))}
              </div>
              <p className="text-[42px]">{"-"}</p>
              <p>{header.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Journey />
      <Desc />
    </div>
  );
};

export default Hubilo;

const projectHeader: projectHeaderType[] = [
  {
    skils: ["UX design", "Case Study"],
    title: "Redefining virtual events",
    description: "My UX journey at Hubilo",
    titleIdx: [1, 2],
  },
];

type projectHeaderType = {
  skils: string[];
  title: string;
  description: string;
  titleIdx: number[];
};
