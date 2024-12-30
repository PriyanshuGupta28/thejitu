import React from "react";
import jitu from "../../assets/jitu.png";

const GlowingCard: React.FC = () => {
  return (
    <div className="">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#000000]/25 shadow-[0_1.96px_1.96px_rgba(0,0,0,0.25)] rounded-[48px]"></div> */}
      <img src={jitu} alt="jitu" />
    </div>
  );
};

export default GlowingCard;
