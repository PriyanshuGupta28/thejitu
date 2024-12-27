import React from "react";
import { GlowingStarsBackgroundCard } from "../ui/glowing-stars";

const GlowingCard: React.FC = () => {
  return (
    <div className="flex antialiased w-[299px] relative">
      <GlowingStarsBackgroundCard>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000] to-[#000000]/25 shadow-[0_1.96px_1.96px_rgba(0,0,0,0.25)] rounded-[48px]"></div>
        <img
          src="https://s3-alpha-sig.figma.com/img/091e/b872/b71a6249fc2df540998b9d03b09b66c9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YsbRXcaCvzxD9BT~yZ61bgHJabSwuKOJ~I9fM3ZwXqe0e4MCbp6kngnx3laCyd-cY8Ze9Z1E0QMdPCHAuhAHNTOzWvvz0gN4FmOFPKoqxQpUEuNxMjGprmG5lm0wr6LoDZAYPsddvvR7GOun-qFXFn28~kerNebVXre1DaqAzzKWn2hn1zrY6br4aTpFbHku~bISOK2Yyd1czjsfCd13eskaCWGGMORh0UU3HDup6LQ~0FkZte03fvrWYm~-tgyYiAUcDweKm2O0QhF4o0gamNS5XBUvzd~K1KvISxBXSS9IitaPa85lQEbjvju0OLC3Krd~iefnvdTLD-9ZhiCIaA__"
          alt=""
          className="mt-[-180px] h-[307px] ml-[20px] absolute z-20"
        />
      </GlowingStarsBackgroundCard>
    </div>
  );
};

// const Icon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="h-4 w-4 text-white stroke-2"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//       />
//     </svg>
//   );
// };

export default GlowingCard;
