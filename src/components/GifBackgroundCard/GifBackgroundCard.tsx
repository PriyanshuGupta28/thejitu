import React, { useState } from "react";

interface GifBackgroundCardProps {
  img: string;
  gif: string;
  title: string;
  description: string[];
  icon?: React.ReactNode;
}

const GifBackgroundCard: React.FC<GifBackgroundCardProps> = ({
  img,
  gif,
  title,
  description,
  icon,
}) => {
  const [backgroundImage, setBackgroundImage] = useState(img);

  return (
    <div
      className="w-[454px] h-[300px] bg-cover bg-center transition-all duration-300 ease-in-out p-[48px] rounded-[48px] border border-zinc-700 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      onMouseEnter={() => setBackgroundImage(gif)}
      onMouseLeave={() => setBackgroundImage(img)}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#000000]/25 shadow-[0_1.96px_1.96px_rgba(0,0,0,0.25)] rounded-[48px]"></div>

      <div className="w-full h-full flex flex-col items-left justify-end text-white relative z-10">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="flex items-center">
          {icon && (
            <span className="mr-2 flex items-center gap-1">
              {icon}
              {"•"}
            </span>
          )}
          {description?.map((d, i) => (
            <span key={i} className="mr-1 font-normal">
              {d} {description?.length - 1 === i ? "" : "•"}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default GifBackgroundCard;
