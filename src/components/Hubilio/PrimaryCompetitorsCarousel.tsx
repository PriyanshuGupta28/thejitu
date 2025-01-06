import { Carousel } from "../ui/apple-cards-carousel";

export function PrimaryCompetitorsCarousel() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="grow shrink basis-0 text-white text-base font-bold font-text leading-normal">
        Primary Competitors
      </div>
      <Carousel />
    </div>
  );
}
