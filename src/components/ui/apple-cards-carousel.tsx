import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import hopin from "../../assets/hopin.png";
import airmeet from "../../assets/airmeet.png";
import cvent from "../../assets/cvent.png";

interface CarouselProps {
  items?: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content?: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            <div className="w-[382px] h-[640px] p-[1px] bg-border-fade rounded-[36px]">
              <div className="w-[380px] h-[640px] p-9 bg-[#101010] rounded-[36px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-base font-semibold font-['SF Pro Display'] leading-normal">
                  Hopin – The Virtual Event Veteran
                </div>
                <div className="self-stretch">
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    Hopin built its reputation as a
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    {" "}
                    starter-friendly virtual event platform
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    , enabling businesses to pivot quickly from physical to
                    virtual events during the pandemic. It offers{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    discussion rooms, exhibitor booths, and broadcasting
                    studios,
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    {" "}
                    making it a reliable choice for standard virtual events.
                    <br />
                    <br />
                  </span>
                  <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-normal">
                    Strengths:
                    <br />
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    Easy to get started{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    for smaller virtual events.
                    <br />
                    Suitable for{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    moderate-sized audiences.
                    <br />
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    <br />
                  </span>
                  <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-normal">
                    Limitations:
                    <br />
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    No custom themes{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    or flexibility for complex branding needs.
                    <br />
                    Limited engagement features like{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    games and watch parties
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    —hindering audience interaction.
                    <br />
                    Lacks an{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    interactive side panel
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    {" "}
                    for seamless multi-tasking.
                  </span>
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-end items-start gap-2.5 flex">
                  <div className="w-[76.75px] h-[22px] relative">
                    <img src={hopin} alt="hopin" />
                  </div>
                </div>
              </div>
            </div>
            {/* {2} */}
            <div className="w-[382px] h-[640px] p-[1px] bg-border-fade rounded-[36px]">
              <div className="w-[380px] h-[640px] p-9 bg-[#101010] rounded-[36px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-base font-semibold font-['SF Pro Display'] leading-normal">
                  Airmeet – Feature-Rich, But Limited Customization
                </div>
                <div className="self-stretch">
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    Airmeet positions itself as a platform with{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    enterprise-grade features{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    and white-glove support. It caters well to hybrid events and
                    community building.
                    <br />
                    <br />
                  </span>
                  <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-normal">
                    Strengths:
                    <br />
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    Provides features like{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    lounge access and discussion rooms
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    {" "}
                    for networking.
                    <br />
                    Suitable for{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    mid-sized enterprises
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    {" "}
                    with customer support dependencies.
                    <br />
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    <br />
                  </span>
                  <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-normal">
                    Limitations:
                    <br />
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    No website builder{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    or{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    custom themes,
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    {" "}
                    restricting brand personalization.
                    <br />
                    Fewer integrations compared to Hubilo, limiting scalability.
                    <br />
                    Missing{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    engagement tools{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    like quizzes, polls, and gamification elements.
                  </span>
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-end items-start gap-2.5 flex">
                  <div className="w-[102.17px] h-6 relative">
                    <img src={airmeet} alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="w-[382px] h-[640px] p-[1px] bg-border-fade rounded-[36px]">
              <div className="w-[380px] h-[640px] p-9 bg-[#101010] rounded-[36px] flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-base font-semibold font-['SF Pro Display'] leading-normal">
                  Cvent – The Traditional Heavyweight
                </div>
                <div className="self-stretch">
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    Cvent dominates the{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    event technology market{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    with{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    registration tools, email marketing,
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    {" "}
                    and{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    surveys.{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    However, it leans heavily toward{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    corporate events{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    rather than interactive or creative experiences.
                    <br />
                    <br />
                  </span>
                  <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-normal">
                    Limitations:
                    <br />
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    Complex interfaces{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    that are less user-friendly for new users.
                    <br />
                    Focused on{" "}
                  </span>
                  <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                    event logistics,{" "}
                  </span>
                  <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                    not engagement or customization.
                  </span>
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-end items-start gap-2.5 flex">
                  <div className="w-[80.29px] h-4 relative  overflow-hidden">
                    <div className="w-[80.32px] h-4 left-[-0px] top-0 absolute">
                      <img src={cvent} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

interface ImageProps {
  height?: number;
  width?: number;
  src: string;
  className?: string;
  alt?: string;
  [key: string]: unknown;
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
