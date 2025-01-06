import React from "react";
import revamp1 from "../../assets/revamp1.png";
import revamp2 from "../../assets/revamp2.png";
import revamp3 from "../../assets/revamp3.png";
import revamp4 from "../../assets/revamp4.png";
import brcorner from "../../assets/revampcorners/br.png";
import blcorner from "../../assets/revampcorners/bl.png";
import trcorner from "../../assets/revampcorners/tr.png";

const Revamp: React.FC = () => {
  return (
    <div className="w-[1026px] h-[2035.67px] p-[1px] bg-border-fade rounded-[48px]">
      <div className="w-[1024px] h-[2035.67px] p-12 bg-gradient-to-b from-[#101010] to-black rounded-[48px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch text-white text-2xl font-semibold font-['SF Pro Display'] leading-7">
          Let’s Revamp
        </div>
        <div className="w-[546px]">
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            The{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            old platform design
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            of Hubilo’s{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            Event Community Page
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            highlighted several usability gaps and visual inefficiencies that
            impacted user experience and engagement. This section focuses on{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            analyzing flaws
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            and{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            redefining the UX
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            to deliver a more{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            intuitive, structured,{" "}
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            and visually{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            engaging interface.
          </span>
        </div>
        <div className="text-white text-sm font-bold font-['SF Pro Text'] leading-[18px]">
          Old Platform
        </div>
        <div className="h-[504px] w-full relative">
          <img
            className="w-[928px] h-[504.15px] left-0 top-0 absolute rounded-2xl"
            src={revamp1}
          />
          <div className="w-[380px] left-[-101px] top-[58.72px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 h-36 p-3  justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0">
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  Banner Blocking Navigation
                  <br />
                </span>
                <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-tight">
                  Issue:{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  The{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  banner dominates the top section
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  , hiding the primary navigation and making it visually
                  overwhelming at first glance.
                  <br />
                </span>
                <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-tight">
                  Impact:
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  Users struggle to{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  quickly locate navigation{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  options, reducing ease of access to key sections.
                </span>
              </div>
            </div>
            <img
              className="w-[27.93px] h-[28.44px] left-[360px] top-[115px] absolute origin-top-left"
              src={brcorner}
            />
          </div>
          <div className="w-[415px] left-[-146px] top-[448.72px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 h-[164px] p-3  justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0">
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  Overcrowded Viewport
                  <br />
                </span>
                <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-tight">
                  Issue:{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  The event description and advertisements{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  occupy excessive space,
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  pushing critical elements like{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  sessions and meeting agendas{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  out of the visible{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  viewport.
                  <br />
                </span>
                <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-tight">
                  Impact:
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  Users must scroll{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  unnecessarily
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  to access important information, disrupting the flow and
                  efficiency of interactions.
                </span>
              </div>
            </div>
            <img
              className="w-[27.93px] h-[28.44px] left-[397px] absolute origin-top-left"
              src={trcorner}
            />
          </div>
          <div className="w-[370px] left-[670px] top-[70.72px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
            <img
              className="w-[27.93px] h-[28.44px] left-[-8px] top-[157px] absolute"
              src={blcorner}
            />
            <div className="grow shrink basis-0 h-[186px] p-3  justify-center items-center gap-2.5 flex z-10">
              <div className="grow shrink basis-0">
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  Navigation Bar Limitations
                  <br />
                </span>
                <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-tight">
                  Issue:
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  While the navigation bar is{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  customizable
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  —allowing users to add or remove items—it lacks{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  categorization
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  and{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  custom pages
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  for better organization.
                  <br />
                </span>
                <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-tight">
                  Impact:{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  It feels static and fails to support complex workflows,
                  leaving users unable to{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  personalize navigation
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  effectively.
                </span>
              </div>
            </div>
          </div>
          <div className="w-[344px] left-[625px] top-[-174.28px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
            <img
              className="w-[27.93px] h-[28.44px] left-[-8px] top-[135px] absolute"
              src={blcorner}
            />
            <div className="grow shrink basis-0 h-[164px] p-3  justify-center items-center gap-2.5 flex z-10">
              <div className="grow shrink basis-0">
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  Redundant and Bland Navigation
                  <br />
                </span>
                <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-tight">
                  Issue:{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  The navigation bar occupies a large blank space, making it
                  look{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  redundant and bland
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  without visual hierarchy or emphasis.
                  <br />
                </span>
                <span className="text-white text-sm font-bold font-['SF Pro Text'] leading-tight">
                  Impact:{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  Users may{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  overlook
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  important elements due to the lack of visual cues, leading to
                  a disconnected experience.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[120px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-base font-bold font-['SF Pro Text'] leading-7">
            Revamp Platform
          </div>
        </div>
        <div className="self-stretch">
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            The{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            revamped Hubilo platform
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            improves usability with a{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            dynamic banner
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            for Ads, Upcoming Events, and Live Sessions—all visible at a glance.{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            Sessions
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            are now displayed directly on the home page for{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            quick access.
          </span>
        </div>
        <div className="w-[521px]">
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            An{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            industry-first dynamic side panel
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            supports custom pages, interactive tools, and gamification,
            delivering a{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            personalized experience.
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            The{" "}
          </span>
          <span className="text-[#00c7be] text-sm font-bold font-['Kalam'] leading-normal">
            streamlined navigation bar
          </span>
          <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
            {" "}
            features a top-level structure and side panel tools, ensuring the
            platform is organized and accessible.
          </span>
        </div>
        <div className="w-[928px] h-[537.62px] relative">
          <img
            className="w-[928px] h-[537.62px] left-0 top-[-0.32px] absolute rounded-2xl"
            src={revamp2}
          />
          <div className="w-[290px] left-[735px] top-[87.72px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
            <img
              className="w-[27.93px] h-[28.44px] left-[-8px] top-[75px] absolute"
              src={blcorner}
            />
            <div className="grow shrink basis-0 h-[104px] p-3  justify-center items-center gap-2.5 flex z-10">
              <div className="grow shrink basis-0">
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  An{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  industry-first feature
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  that{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  supports custom pages, interactive tools,
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  and{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  gamification elements,
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  allowing for a personalized and{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  engaging experience.
                </span>
              </div>
            </div>
          </div>
          <div className="w-[290px] left-[625px] top-[-111.78px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
            <img
              className="w-[27.93px] h-[28.44px] left-[-8px] top-[94px] absolute"
              src={blcorner}
            />
            <div className="grow shrink basis-0 h-[123px] p-3  justify-center items-center gap-2.5 flex z-10">
              <div className="grow shrink basis-0">
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  The navigation bar has been{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  streamlined
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  with a top-level tab structure for{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  primary actions
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  and a{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  side panel layout{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  for secondary tools, making the platform more organized and
                  accessible.
                </span>
              </div>
            </div>
          </div>
          <div className="w-[313px] left-[-94px] top-[198.46px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 h-[103px] p-3  justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0">
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  The banner now{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  displays Ads, Upcoming Events,{" "}
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  and
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['SF Pro Text'] leading-tight">
                  {" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  Live Sessions
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  at a glance, ensuring better visibility and engagement without
                  overwhelming the interface.
                </span>
              </div>
            </div>
            <img
              className="w-[27.93px] h-[28.44px] left-[295px] top-[74px] absolute origin-top-left"
              src={brcorner}
            />
          </div>
          <div className="w-[313px] left-[-74px] top-[408.46px] absolute bg-[#007aff] rounded-2xl shadow-[0px_12px_24px_0px_rgba(0,0,0,0.35)] justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 h-[103px] p-3  justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0">
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  Ongoing and upcoming{" "}
                </span>
                <span className="text-[#fbff67] text-sm font-bold font-['Kalam'] leading-tight">
                  sessions
                </span>
                <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-tight">
                  {" "}
                  are displayed directly on the home page, offering users quick
                  access without additional clicks.
                </span>
              </div>
            </div>
            <img
              className="w-[27.93px] h-[28.44px] left-[295px] top-[74px] absolute origin-top-left"
              src={brcorner}
            />
          </div>
        </div>
        <div className="justify-start items-start gap-[13.38px] inline-flex">
          <div className="w-[457.31px] h-[233.05px] rounded-lg justify-start items-start gap-[5.50px] flex overflow-hidden">
            <img src={revamp3} />
          </div>
          <div className="w-[457.31px] h-[233.05px] rounded-lg border border-neutral-700 justify-start items-start gap-[5.50px] flex overflow-hidden">
            <img src={revamp4} />
          </div>
        </div>
        <div className="self-stretch text-center text-white/80 text-sm font-normal font-['SF Pro'] leading-none">
          New Sessions listing & Broadcasting Studio
        </div>
      </div>
    </div>
  );
};

export default Revamp;
