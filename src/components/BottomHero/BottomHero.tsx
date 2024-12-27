import React from "react";
import { ArrowRight } from "lucide-react";
import GradientText from "../GradientText.tsx/GradientText";

const BottomHero: React.FC = () => {
  return (
    <div className="py-[12px]">
      <div className="flex gap-[72px] w-[928px] h-[296px] rounded-[48px] border border-zinc-700 bg-gradient-to-br from-[#101010] to-[#000000] p-[48px] relative">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/ae74/d2e7/c6567560515d64640a975895db7660b4?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NttXZ~jFBkfbCWvMKO31cVQTDRP5UkAS7toe5Wp~x4jNLUglfPzNptysva5MzHXREVMzgxmCzYnAbC7RjS4IZzzoiU9YcVum837w4JUrrMR00mm0qeDlKY7rpgKdbyDorzNNrMmsRNET75CouK7ObyPZ5b-aZ9C2gj0l3pRbCR9RQy3nvaOE3rifuSU4MJWp-cvdXvqQj71AnlgKSneT75TZAGPKLHG66Kk3DerHOIcSwcM-CJ8kxP9FTwaVPm7xZgBLk0Xy1VnetVbTGEHM41kBy6l7V63DHLY4huDmTHdoyhiv25AgS-paTbRT7pRU3olVsFZg3hVfRb6KuQNUcg__"
            alt=""
            className="w-[196.29px] h-[200px]"
          />
        </div>
        <div className="flex flex-col w-[557px] gap-[24px]">
          <p className="text-[32px] font-semibold">
            What sets me <GradientText>apart?</GradientText>
          </p>
          <p className="text-[12px] font-normal">
            I don’t just create digital experiences—I design journeys that
            connect, inspire, and perform. By blending creativity with purpose
            and functionality with emotion, I shape solutions that adapt to
            trends without losing timeless appeal. Whether it’s reimagining
            workflows or crafting intuitive designs, I ensure every project
            stands out and tells a story worth experiencing.
          </p>
          <div className="flex gap-[24px]">
            <button className="w-[91px] h-[38px] rounded-[100px] py-[12px] px-[16px] text-[12px] whitespace-nowrap bg-white ">
              <p className="text-black font-medium">Contact Me</p>
            </button>
            <button className="flex items-center w-[117px] h-[38px] rounded-[100px] py-[12px] px-[16px] text-[12px] whitespace-nowrap text-white border border-[#404040]">
              View Resume
              <ArrowRight size={"12px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
