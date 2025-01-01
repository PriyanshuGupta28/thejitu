import React from "react";

interface GifBackgroundCardProps {
  img: string;
  title: string;
  description: string[];
  icon?: React.ReactNode;
}

const GifBackgroundCard: React.FC<GifBackgroundCardProps> = ({
  img,
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-border-fade w-[370px] h-[300px] md:w-[456px] md:h-[300px] rounded-[48px] p-[1px] relative">
      <div className="flex flex-col w-[370px] h-[300px] md:w-[454px] md:h-[300px] bg-cover bg-center transition-all duration-300 ease-in-out p-[48px] rounded-[48px] relative">
        <div className="absolute top-0 left-0 w-full h-[230px] bg-black rounded-[48px]">
          <img
            src={img}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
        <div className="w-full h-full flex flex-col items-left justify-end text-white relative z-10 ">
          <h1 className="text-[16px] font-semibold tracking-[-0.16px]">
            {title}
          </h1>
          <p className="flex items-center">
            {icon && (
              <span className="mr-2 flex items-center gap-1">
                {icon}
                {"•"}
              </span>
            )}
            {description?.map((d, i) => (
              <span
                key={i}
                className="mr-1 font-normal text-[12px] tracking-[-0.24px] text-white/80 leading-[18px]"
              >
                {d} {description?.length - 1 === i ? "" : "•"}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="absolute top-[0px] left-0 w-full h-full bg-overlay-fade shadow-[0_1.96px_1.96px_rgba(0,0,0,0.25)] rounded-[48px]"></div>
    </div>
  );
};

export default GifBackgroundCard;
