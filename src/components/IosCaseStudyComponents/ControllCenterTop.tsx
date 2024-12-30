import React from "react";

const ControllCenterTop: React.FC = () => {
  return (
    <div className="flex flex-col gap-[24px] items-start text-[#000] p-[48px]">
      <div>Control Center</div>
      <div>
        Simplify the interface by grouping connectivity controls (Wi-Fi,
        Bluetooth, etc.) into a single, streamlined controller, freeing up space
        for more widgets and enhancing usability.
      </div>
      <div>
        <div className="flex flex-col p-[32px] gap-[12px] items-start">
          <div className="text-[24px] font-semibold text-[#000] font-display">
            Before Redesign
          </div>
          <div>
            <ul>
              {data.map((item, index) => (
                <li key={index} className="text-[#000]">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ControllCenterTop;

const data: dataType[] = [
  {
    text: "The Control Center received significant improvements in iOS 18, including the ability to resize widgets.",
  },
  {
    text: "However, not all widgets offer this flexibility—some have fixed sizes, limiting customization options for certain components.",
  },
  {
    text: "Each widget has its own individuality, but the connectivity widgets (Wi-Fi, Bluetooth, Airplane Mode, VPN) are grouped together, without the option to place them individually.",
  },
  {
    text: "This grouping restricts users from customizing the layout as per their preferences, and the fixed sizes for some widgets reduce overall customization flexibility.",
  },
];

type dataType = {
  text: string;
};
