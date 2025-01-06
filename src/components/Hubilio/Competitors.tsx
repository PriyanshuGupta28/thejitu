import React from "react";
import Marquee from "../ui/marquee";
import hopin from "../../assets/hopin.png";
import airmeet from "../../assets/airmeet.png";
import cvent from "../../assets/cvent.png";
import zoom from "../../assets/zoom.png";
import swapcard from "../../assets/swapcard.png";

const Competitors: React.FC = () => {
  return (
    <>
      <div className="text-white/80 text-sm font-['SF Compact'] uppercase leading-tight tracking-wide">
        Let’s Explore Hubilo’s Competitors
      </div>
      <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {cardData.map((card, key) => (
            <Card key={key} title={card.title} icons={card.icons} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
      </div>
    </>
  );
};

export default Competitors;

const Card = ({ title, icons }: { title: string; icons?: string }) => {
  return (
    <>
      <div className="w-46 h-[120px] p-[1px] bg-border-fade rounded-[32px] overflow-hidden">
        <div className="w-44 h-[120px] bg-gradient-to-b from-[#101010] to-black rounded-[32px] overflow-hidden relative">
          <div
            className="w-[76.75px] h-[22px] left-[50px] top-[48.72px] absolute"
            title={title}
          >
            <img src={icons} alt={title} />
          </div>
        </div>
      </div>
    </>
  );
};

const cardData = [
  {
    title: "SwapCard",
    icons: swapcard,
  },
  {
    title: "Airmeet",
    icons: airmeet,
  },
  {
    title: "hopin",
    icons: hopin,
  },
  {
    title: "Cvent",
    icons: cvent,
  },
  {
    title: "zoom",
    icons: zoom,
  },
];
