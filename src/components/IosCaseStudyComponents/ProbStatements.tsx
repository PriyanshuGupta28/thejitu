import React from "react";

const ProbStatements: React.FC = () => {
  return (
    <div>
      <div className="h-[944px] w-[1048px] bg-black flex-col justify-center items-center gap-6 inline-flex">
        <div className="justify-start items-start gap-4 inline-flex">
          <div className="w-[220px] text-white text-2xl font-semibold font-['SF Pro Display']">
            Problem <br />
            Statements
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-center gap-9 inline-flex">
            <div className="self-stretch text-white text-[11px] font-normal font-['SF Pro Text'] leading-tight">
              While iOS has long been admired for its design consistency,
              several inconsistencies across different apps and components are
              evident. As a designer, I understand the challenges of maintaining
              design coherence across large teams, but in today’s digital age,
              we have the tools and capabilities to ensure consistency through
              well-managed design systems. iOS design files and components can
              be unified to provide the same experience across all pages and
              applications, creating a more cohesive ecosystem.
            </div>
            <div className="self-stretch h-[141px] flex-col justify-start items-start gap-3 flex">
              <div className="p-1.5 bg-[#007aff] rounded-xl flex-col justify-center items-center gap-2.5 flex overflow-hidden">
                <div className="w-7 h-7 text-center text-white text-2xl font-normal font-['SF Pro Text'] leading-tight">
                  􀈍
                </div>
              </div>
              <div className="self-stretch">
                <span className="text-white text-[13px] font-bold font-['SF Pro Text'] leading-tight">
                  Inconsistent Design Component
                  <br />
                </span>
                <span className="text-white text-[11px] font-normal font-['SF Pro Text'] leading-tight">
                  One major issue I encountered is the inconsistency in design
                  component across various iOS apps. For example, the visual
                  hierarchy and interaction patterns between different module
                  like AirPlay, Phone, and Settings vary unnecessarily, causing
                  friction in the user experience. My redesign aims to unify
                  these components, ensuring that users have the same intuitive
                  experience no matter which app they are using.
                </span>
              </div>
            </div>
            <div className="self-stretch h-[161px] flex-col justify-start items-start gap-3 flex">
              <div className="p-1.5 bg-[#34c759] rounded-xl flex-col justify-center items-center gap-2.5 flex overflow-hidden">
                <div className="w-7 h-7 text-center text-white text-[23px] font-normal font-['SF Pro Text'] leading-tight">
                  􀌿
                </div>
              </div>
              <div className="self-stretch">
                <span className="text-white text-[13px] font-bold font-['SF Pro Text'] leading-tight">
                  Limited Content Accessibility in the Phone App
                  <br />
                </span>
                <span className="text-white text-[11px] font-normal font-['SF Pro Text'] leading-tight">
                  The Phone and Contacts apps require a significant overhaul in
                  terms of accessibility and user interaction. Currently, they
                  offer limited options for sorting and managing contacts, which
                  creates unnecessary friction for users. My solution introduces
                  more information, customization, and sorting options, allowing
                  users to easily navigate their contacts and organize them in
                  ways that make sense for their individual needs.
                </span>
              </div>
            </div>
            <div className="self-stretch h-[161px] flex-col justify-start items-start gap-3 flex">
              <div className="p-1.5 bg-[#ff3b30] rounded-xl flex-col justify-center items-center gap-2.5 flex overflow-hidden">
                <div className="w-7 h-7 text-center text-white text-xl font-normal font-['SF Pro Text'] leading-tight">
                  􂃓
                </div>
              </div>
              <div className="self-stretch">
                <span className="text-white text-[13px] font-bold font-['SF Pro Text'] leading-tight">
                  Call Recording Placement
                  <br />
                </span>
                <span className="text-white text-[11px] font-normal font-['SF Pro Text'] leading-tight">
                  Another critical pain point is the placement of call
                  recordings. Currently, call recordings are saved in the Notes
                  app, which raises the question: why is this the case when
                  there is a dedicated Voice Memos app? This disconnect in
                  functionality creates confusion and an inefficient workflow
                  for users. My redesign addresses this issue by streamlining
                  the call recording process, ensuring it integrates seamlessly
                  with Voice Memos, where users expect it to be.
                </span>
              </div>
            </div>
            <div className="self-stretch h-[161px] flex-col justify-start items-start gap-3 flex">
              <div className="p-1.5 bg-[#ff9500] rounded-xl flex-col justify-center items-center gap-2.5 flex overflow-hidden">
                <div className="w-7 h-7 text-center text-white text-xl font-normal font-['SF Pro Text'] leading-tight">
                  􀜊
                </div>
              </div>
              <div className="self-stretch">
                <span className="text-white text-[13px] font-bold font-['SF Pro Text'] leading-tight">
                  Control Center Inefficiencies
                  <br />
                </span>
                <span className="text-white text-[11px] font-normal font-['SF Pro Text'] leading-tight">
                  The Control Center also presents a usability issue. The
                  current design requires users to manage connectivity
                  controllers (like Wi-Fi, Bluetooth, etc.) individually,
                  initiating multiple processes when these could be simplified.
                  My solution consolidates these functions into a single,
                  grouped controller, reducing unnecessary steps and freeing up
                  space for additional widgets. This not only simplifies the
                  experience but also gives users more control over the layout
                  of their Control Center.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbStatements;
