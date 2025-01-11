import React from "react";
import myhq from "../../assets/Qdesq/myhq.png";
import cofynd from "../../assets/Qdesq/cofynd.png";
import regus from "../../assets/Qdesq/regus.png";
import hubble from "../../assets/Qdesq/hubble.png";

const Competitors: React.FC = () => {
  return (
    <div className="w-[1028px] h-[1156px] py-6 flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
      <div className="text-white/80 text-sm font-['SF Compact'] uppercase leading-tight tracking-wide">
        Let’s Explore qdesq’s Competitors
      </div>
      <div className="h-[1066px] p-[1px] bg-border-fade rounded-[48px]">
        <div className="h-[1064px] px-10 py-12 bg-light-to-dark rounded-[48px] flex-col justify-start items-start gap-6 flex overflow-hidden">
          <div className="text-white text-2xl font-semibold font-['SF Pro Display']">
            Competitive Analysis
          </div>
          <div className="self-stretch">
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              Qdesq operates in a highly competitive workspace booking market,
              facing direct competition from platforms like{" "}
            </span>
            <span className="text-[#ff75b0] text-sm font-bold font-['Kalam'] leading-normal">
              MyHQ, Cofynd, Regus, and HubbleHQ (UK-based).{" "}
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              Each competitor offers unique approaches to workspace discovery
              and booking, posing challenges for Qdesq to stand out.
            </span>
          </div>
          <div className="text-white text-base font-bold font-['SF Pro Text'] leading-normal">
            Key Competitor Insights
          </div>
          <div className="self-stretch justify-start items-start gap-2 inline-flex flex-wrap">
            <div className="w-[462px] h-[250px] p-[1px] rounded-[36px] bg-blue-border-fade">
              <div className="w-[460px] h-[250px] p-9 rounded-[36px] bg-light-to-dark flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-base font-semibold font-['SF Pro Display'] leading-normal">
                  MyHQ
                </div>
                <div className="self-stretch text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  Focuses on affordability and flexible coworking plans,
                  appealing to freelancers and startups.
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-end items-start gap-2.5 flex">
                  <div className="w-[85.47px] h-8 relative  overflow-hidden">
                    <img src={myhq} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[462px] h-[250px] p-[1px] rounded-[36px] bg-yellow-border-fade">
              <div className="w-[460px] h-[250px] p-9 rounded-[36px] bg-light-to-dark flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-base font-semibold font-['SF Pro Display'] leading-normal">
                  Cofynd
                </div>
                <div className="self-stretch text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  Highlights customizable workspace options with seamless online
                  bookings, catering to businesses of all sizes.
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-end items-start gap-2.5 flex">
                  <img src={cofynd} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[462px] h-[250px] p-[1px] rounded-[36px] bg-orange-border-fade">
              <div className="w-[460px] h-[250px] p-9 rounded-[36px] bg-light-to-dark flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-base font-semibold font-['SF Pro Display'] leading-normal">
                  Regus
                </div>
                <div className="self-stretch text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  Provides premium office spaces with global reach, targeting
                  established enterprises with high-end requirements.
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-end items-start gap-2.5 flex">
                  <img src={regus} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[462px] h-[250px] p-[1px] rounded-[36px] bg-red-border-fade">
              <div className="w-[460px] h-[250px] p-9 rounded-[36px] flex-col bg-light-to-dark justify-start items-start gap-6 inline-flex">
                <div className="self-stretch text-white text-base font-semibold font-['SF Pro Display'] leading-normal">
                  HubbleHQ
                </div>
                <div className="self-stretch text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  UK-based, specializing in flexible office spaces, offering
                  detailed filters and remote access features.
                </div>
                <div className="self-stretch grow shrink basis-0 flex-col justify-end items-start gap-2.5 flex">
                  <img src={hubble} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch text-white text-base font-bold font-['SF Pro Text'] leading-normal">
            Key Differentiation Opportunities for Qdesq:
          </div>
          <div className="self-stretch">
            <span className="text-[#ff75b0] text-sm font-bold font-['Kalam'] leading-normal">
              · Content-Rich Layouts{" "}
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              – Offering data-savvy designs with detailed workspace insights and
              transparent pricing.
              <br />
            </span>
            <span className="text-[#ff75b0] text-sm font-bold font-['Kalam'] leading-normal">
              · SEO-Optimized Pages{" "}
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              – Enhancing visibility in local searches to attract more organic
              traffic.
              <br />
            </span>
            <span className="text-[#ff75b0] text-sm font-bold font-['Kalam'] leading-normal">
              · Minimalist Design Approach{" "}
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              – Focusing on intuitive navigation and modern UI/UX to simplify
              bookings.
              <br />
            </span>
            <span className="text-[#ff75b0] text-sm font-bold font-['Kalam'] leading-normal">
              · Scalable Features
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              – Customizing workflows to support enterprise clients without
              losing flexibility for smaller teams.
            </span>
          </div>
          <div className="self-stretch text-white text-base font-bold font-['SF Pro Text'] leading-normal">
            Outcome
          </div>
          <div className="self-stretch">
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              The redesign emphasized{" "}
            </span>
            <span className="text-[#ff75b0] text-sm font-bold font-['Kalam'] leading-normal">
              simplicity, adaptability, and usability,
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              {" "}
              giving Qdesq a{" "}
            </span>
            <span className="text-[#ff75b0] text-sm font-bold font-['Kalam'] leading-normal">
              fresh visual identity{" "}
            </span>
            <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
              and positioning it as a data-focused platform that resonates with
              both businesses and individuals looking for smart workspace
              solutions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitors;
