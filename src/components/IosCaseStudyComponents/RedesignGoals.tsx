import React from "react";

const RedesignGoals: React.FC = () => {
  return (
    <div className="h-[516px] w-[1048px] bg-[#f2f2f5] flex-col justify-center items-center gap-12 inline-flex">
      <div className="justify-start items-start gap-4 inline-flex">
        <div className="w-[220px] text-black text-[24px] font-semibold font-display">
          Redesign Goals
        </div>
        <div className="grow shrink basis-0">
          <ul className="text-black text-[11px] font-normal font-text leading-tight list-disc ml-4">
            <li>
              As a dedicated iOS user, I’ve always admired Apple’s commitment to
              creating simple and intuitive designs. However, after years of
              interacting with various iOS applications, I began to see
              opportunities for enhancing the user experience. This led to the
              creation of Project Redefine, a personal initiative to explore how
              iOS could evolve to better meet users’ needs.
            </li>
          </ul>
          <br />
          <ul className="text-black text-[11px] font-normal font-text leading-tight list-disc ml-4">
            <li>
              <span className="font-bold">
                Enhancing Consistency Across Apps:{" "}
              </span>
              While each iOS app has a strong identity, I noticed slight
              variations in interaction patterns and visual hierarchy that
              disrupted user flow. My goal was to unify design components,
              creating a cohesive experience where users can transition between
              apps seamlessly, without inconsistent patterns or unexpected
              layouts.
            </li>
            <br />
            <li>
              <span className="font-bold">
                Improving Phone and Contacts Functionality:{" "}
              </span>
              I aimed to make the Phone and Contacts apps more user-friendly by
              introducing customizable sorting options and refining how contact
              information is presented. The goal was to give users more control
              and flexibility in managing their contacts, making these essential
              apps more functional and aligned with individual preferences.
            </li>
            <br />
            <li>
              <span className="font-bold">
                Streamlining Call Recording Workflow:{" "}
              </span>
              Currently, call recordings are saved in the Notes app, creating a
              disjointed experience. My redesign proposes integrating call
              recordings into the Voice Memos app, providing a more logical and
              intuitive solution that reduces confusion and improves workflow.
            </li>
            <br />
            <li>
              <span className="font-bold">Optimizing Control Center: </span>
              The Control Center is incredibly useful, but its current structure
              can be more streamlined. I proposed grouping connectivity controls
              (like Wi-Fi and Bluetooth) into a single interface, reducing steps
              to manage settings and freeing up space for additional widgets,
              offering users more customization options.
            </li>
          </ul>
          <br />
          <span className="text-black text-[11px] font-normal font-text leading-tight">
            Through these redesign goals, my aim was to elevate the iOS
            experience, making it even more intuitive and user-friendly, while
            staying true to Apple’s design principles of simplicity and
            accessibility.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RedesignGoals;
