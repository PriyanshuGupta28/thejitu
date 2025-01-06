import React from "react";

const ProjectsAtHubilo: React.FC = () => {
  const projects = [
    { title: "Lead Score Definition & Analysis" },
    { title: "Check-in attendance data for Onsite attendees" },
    { title: "Copy Event" },
    { title: "Email Builder" },
    { title: "Event Creation Flow" },
    { title: "In-person events" },
    { title: "Salesforce Integration" },
    { title: "Sendoso Integration" },
    { title: "Website Builder" },
  ];

  return (
    <div className="h-[658px] p-12 flex-col justify-center items-center gap-6 inline-flex">
      <div className="w-[1024px] justify-start items-start gap-4 inline-flex">
        <div className="w-[220px] text-2xl font-semibold font-['SF Pro Display']">
          Projects I Worked on at Hubilo
        </div>
        <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex flex-wrap">
          {projects.map((project, index) => (
            <div className="w-[390px] h-[106px] p-[1px] bg-border-fade rounded-[36px]">
              <div
                key={index}
                className="w-[388px] h-[106px] p-9 bg-light-to-dark rounded-[36px] justify-start items-center gap-3 flex"
              >
                <div className="w-6 h-6 relative overflow-hidden" />
                <div className="grow shrink basis-0 text-base font-semibold font-['SF Pro Display'] underline leading-normal">
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAtHubilo;
