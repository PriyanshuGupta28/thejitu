import React from "react";
import Marquee from "../ui/marquee";

const questions = [
  {
    id: 1,
    text: "How easy is it for you to find sessions, booths, and networking areas?",
  },
  {
    id: 2,
    text: "What are the most confusing parts of navigating the platform?",
  },
  {
    id: 3,
    text: "If you leave a session, how would you expect to return or catch up?",
  },
  {
    id: 4,
    text: "Do you feel limited by the current design templates and themes?",
  },
  {
    id: 5,
    text: "What level of customization do you expect for branding booths and spaces?",
  },
  {
    id: 6,
    text: "Would you prefer pre-designed templates or modular components for flexibility?",
  },
  { id: 7, text: "How important is multi-lingual support for your audience?" },
  {
    id: 8,
    text: "What features would make sessions more interactive—polls, quizzes, or Q&A tools?",
  },
  {
    id: 9,
    text: "What kind of reports or insights do you need after an event?",
  },
];

const KeyQuestionsWeAsked: React.FC = () => {
  return (
    <div className="h-[260px] py-6 flex-col justify-start items-center gap-4 inline-flex overflow-hidden">
      <div className="text-white/80 text-sm font-['SF Compact'] uppercase leading-tight tracking-wide">
        Key Questions We Asked
      </div>
      <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:80s]">
          <div className="flex flex-wrap justify-start items-start gap-3">
            {questions.map((question) => (
              <div
                key={question.id}
                className="px-4 py-3 bg-[#101010] rounded-[32px] border border-neutral-700 flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden"
              >
                <div className="self-stretch text-white/80 text-sm font-normal font-['SF Pro'] leading-normal">
                  {question.text}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:80s]">
          <div className="flex flex-wrap justify-start items-start gap-3">
            {questions.map((question) => (
              <div
                key={question.id}
                className="px-4 py-3 bg-[#101010] rounded-[32px] border border-neutral-700 flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden"
              >
                <div className="self-stretch text-white/80 text-sm font-normal font-['SF Pro'] leading-normal">
                  {question.text}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee pauseOnHover className="[--duration:80s]">
          <div className="flex flex-wrap justify-start items-start gap-3">
            {questions.map((question) => (
              <div
                key={question.id}
                className="px-4 py-3 bg-[#101010] rounded-[32px] border border-neutral-700 flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden"
              >
                <div className="self-stretch text-white/80 text-sm font-normal font-['SF Pro'] leading-normal">
                  {question.text}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
      </div>
    </div>
  );
};

export default KeyQuestionsWeAsked;
