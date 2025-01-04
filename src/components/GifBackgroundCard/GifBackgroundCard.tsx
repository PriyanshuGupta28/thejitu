import React from "react";
import { MoveRightIcon } from "lucide-react";

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
    <div className="group flex flex-col justify-between bg-border-fade w-[370px] h-[300px] md:w-[456px] md:h-[300px] rounded-[48px] p-[1px] relative cursor-pointer">
      <div className="flex flex-col w-[370px] h-[300px] md:w-[454px] md:h-[300px] bg-cover bg-center transition-all duration-300 ease-in-out p-[48px] rounded-[48px] relative">
        <div className="absolute top-0 left-0 w-full h-[230px] bg-black rounded-tr-[48px] rounded-tl-[48px] overflow-hidden">
          <img
            src={img}
            alt="img"
            className="absolute top-0 left-0 w-full h-full object-contain transition-all duration-300 ease-in-out group-hover:bg-apple-ai"
          />
        </div>
        <div className="w-full h-full flex flex-row items-end justify-center text-white relative z-10">
          <div className="w-full h-full flex flex-col items-left justify-end text-white relative z-10 transition-all duration-500 ease-in-out group-hover:ml-5">
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
          <div className="w-[48px] bg-white mr-5 py-[12px] px-[16px] rounded-full transition-all duration-500 ease-in-out flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:mr-0">
            <MoveRightIcon className="w-[24px] h-[24px] text-black" />
          </div>
        </div>
      </div>
      <div className="bg-faded-effect absolute right-0 bottom-0 w-full h-[191px]"></div>
    </div>
  );
};

export default GifBackgroundCard;
