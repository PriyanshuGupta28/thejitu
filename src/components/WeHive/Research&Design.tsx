import React from "react";
import mindtree from "../../assets/wehive/mindtree.png";
import ss from "../../assets/wehive/ss.png";

const ResearchDesign: React.FC = () => {
  return (
    <>
      <div className="h-full flex-col justify-start items-start inline-flex overflow-hidden relative">
        <div className="left-[100px] relative">
          <div className="h-[350px]">
            <img src={mindtree} />
          </div>
        </div>
        <div className="w-[517px] h-[138px] top-[230px] left-[300px] bg-black/10 rounded-[72px] blur-[25px] backdrop-blur-[6px] absolute" />
        <div className="left-[300px] top-[202px] absolute flex-col justify-start items-center gap-6 flex tracking-[-0.24px] z-10">
          <div className="text-white text-2xl font-semibold font-['SF Pro Display'] ">
            Research & Design
          </div>
          <div className="w-[540px] text-center tracking-[-0.28px]">
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              This section highlights the{" "}
            </span>
            <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
              in-depth research
            </span>
            <span className="text-white text-sm font-bold font-['Kalam'] leading-normal">
              {" "}
            </span>
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              and{" "}
            </span>
            <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
              design process{" "}
            </span>
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              behind WeHive, focusing on creating a seamless and adaptive
              platform for the interior design industry. From{" "}
            </span>
            <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
              competitive analysis to architectural layouts,{" "}
            </span>
            <span className="text-white text-sm font-normal font-['SF Pro Text'] leading-normal">
              every element is crafted to optimize workflows and enhance user
              experience.
            </span>
          </div>
        </div>
        <div
          className="w-[1440px] h-[181px] left-0 top-0 absolute rotate-180"
          style={{
            background:
              "linear-gradient(180deg, rgba(16, 16, 16, 0.00) 0%, #000 100%)",
          }}
        />
        <div
          className="w-[1440px] h-[100px] left-0 bottom-0 absolute"
          style={{
            background: "linear-gradient(rgba(16, 16, 16, 0.00) 0%, #000 100%)",
          }}
        />
      </div>
      <div className="w-[1024px] h-[527.36px] py-6 justify-center items-start gap-4 inline-flex overflow-hidden">
        <div className="grow shrink basis-0 self-stretch justify-start items-start gap-2 flex">
          <div className="grow shrink basis-0 p-[1px] bg-border-fade rounded-[36px]">
            <div className="grow shrink basis-0 p-9 bg-light-to-dark rounded-[36px] flex-col justify-start items-start gap-6 inline-flex overflow-hidden">
              <div className="w-[220px] text-white text-base font-semibold font-['SF Pro Display'] leading-7">
                Competitive Analysis
              </div>
              <div className="self-stretch">
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  While{" "}
                </span>
                <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                  existing
                </span>
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  {" "}
                  project management tools cater to generic industries, WeHive
                  fills a significant gap by offering solutions{" "}
                </span>
                <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                  tailored exclusively{" "}
                </span>
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  for the interior design market, ensuring{" "}
                </span>
                <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                  seamless workflows and adaptability.
                </span>
              </div>
              <div className="h-[172px] flex-col justify-start items-start gap-3 inline-flex">
                <div className="self-stretch justify-center items-start gap-3 inline-flex ">
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M2.82613 21.6441C2.5552 22.0866 2.25051 22.6004 1.99082 23.0091C1.8797 23.1977 1.84692 23.4222 1.8995 23.6347C1.95208 23.8471 2.08584 24.0304 2.27207 24.1454L7.70207 27.4866C7.79536 27.5443 7.89912 27.5831 8.00741 27.6007C8.11569 27.6183 8.22638 27.6143 8.33314 27.5891C8.4399 27.5638 8.54063 27.5177 8.62956 27.4535C8.7185 27.3893 8.7939 27.3082 8.85145 27.2148L8.85895 27.2026C9.07551 26.8398 9.35582 26.3673 9.66051 25.8619C11.8111 22.3116 13.973 22.7466 17.8758 24.6094L23.2599 27.1698C23.359 27.217 23.4665 27.2442 23.5762 27.2499C23.6859 27.2556 23.7957 27.2396 23.8992 27.2029C24.0027 27.1661 24.098 27.1093 24.1795 27.0358C24.2611 26.9622 24.3274 26.8733 24.3746 26.7741L24.3849 26.7516L26.9677 20.9063C27.0555 20.7057 27.0609 20.4786 26.9829 20.274C26.9049 20.0693 26.7496 19.9035 26.5505 19.8123C25.4143 19.2779 23.1549 18.2119 21.1205 17.2304C13.8033 13.6744 7.58395 13.9041 2.82613 21.6441Z"
                        fill="url(#paint0_linear_2298_2447)"
                      />
                      <path
                        d="M27.1738 8.37378C27.4447 7.93128 27.7494 7.41753 28.0091 7.00878C28.1202 6.82025 28.153 6.59567 28.1004 6.38324C28.0478 6.17081 27.9141 5.98746 27.7278 5.87253L22.2988 2.53128C22.2079 2.46998 22.1058 2.42719 21.9983 2.40537C21.8909 2.38354 21.7802 2.38311 21.6726 2.40409C21.5649 2.42508 21.4625 2.46706 21.3711 2.52766C21.2798 2.58825 21.2012 2.66625 21.14 2.75722C21.1288 2.77322 21.1185 2.7898 21.1091 2.8069C20.8916 3.16972 20.6122 3.64222 20.3066 4.14753C18.1559 7.69784 15.9941 7.26284 12.0913 5.40003L6.72407 2.85284C6.6251 2.80562 6.51779 2.77837 6.40828 2.77265C6.29877 2.76693 6.1892 2.78285 6.08585 2.81951C5.9825 2.85616 5.88738 2.91284 5.80595 2.98628C5.72451 3.05972 5.65836 3.1485 5.61126 3.24753L5.60094 3.27003L3.01532 9.11815C2.92756 9.3188 2.9221 9.54589 3.00013 9.75052C3.07816 9.95515 3.23343 10.1209 3.43251 10.2122C4.56876 10.7466 6.82813 11.8116 8.86251 12.7932C16.1966 16.3435 22.4159 16.1053 27.1738 8.37378Z"
                        fill="url(#paint1_linear_2298_2447)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2298_2447"
                          x1="26.8186"
                          y1="29.2173"
                          x2="10.3918"
                          y2="19.7776"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.18" stop-color="#0052CC" />
                          <stop offset="1" stop-color="#2684FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_2298_2447"
                          x1="3.17657"
                          y1="0.803467"
                          x2="19.6081"
                          y2="10.2469"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.18" stop-color="#0052CC" />
                          <stop offset="1" stop-color="#2684FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M18.3577 14.3906L7.98047 12.5625V26.0709C7.98059 26.2177 8.00962 26.363 8.06589 26.4985C8.12217 26.6341 8.20458 26.7572 8.30844 26.8609C8.4123 26.9645 8.53556 27.0467 8.67119 27.1028C8.80681 27.1588 8.95215 27.1876 9.09891 27.1875H27.0052C27.1521 27.1879 27.2976 27.1593 27.4335 27.1033C27.5693 27.0474 27.6928 26.9652 27.7968 26.8615C27.9009 26.7578 27.9835 26.6346 28.0399 26.4989C28.0963 26.3633 28.1253 26.2178 28.1255 26.0709V21.0938L18.3577 14.3906Z"
                        fill="#185C37"
                      />
                      <path
                        d="M18.3577 2.8125H9.09891C8.95215 2.81238 8.80681 2.84116 8.67119 2.89721C8.53556 2.95325 8.4123 3.03546 8.30844 3.13915C8.20458 3.24283 8.12217 3.36595 8.06589 3.50149C8.00962 3.63702 7.98059 3.78231 7.98047 3.92906V8.90625L18.3577 15L23.8523 16.8281L28.1255 15V8.90625L18.3577 2.8125Z"
                        fill="#21A366"
                      />
                      <path
                        d="M7.98047 8.90625H18.3577V15H7.98047V8.90625Z"
                        fill="#107C41"
                      />
                      <path
                        opacity="0.1"
                        d="M15.4073 7.6875H7.98047V22.9219H15.4073C15.7033 22.9204 15.9867 22.8024 16.1962 22.5934C16.4058 22.3844 16.5245 22.1012 16.5267 21.8053V8.80406C16.5245 8.50813 16.4058 8.22499 16.1962 8.01599C15.9867 7.80699 15.7033 7.68897 15.4073 7.6875Z"
                        fill="black"
                      />
                      <path
                        opacity="0.2"
                        d="M14.797 8.29688H7.98047V23.5312H14.797C15.093 23.5298 15.3764 23.4118 15.5859 23.2028C15.7955 22.9938 15.9142 22.7106 15.9164 22.4147V9.41344C15.9142 9.11751 15.7955 8.83436 15.5859 8.62537C15.3764 8.41637 15.093 8.29835 14.797 8.29688Z"
                        fill="black"
                      />
                      <path
                        opacity="0.2"
                        d="M14.797 8.29688H7.98047V22.3125H14.797C15.093 22.311 15.3764 22.193 15.5859 21.984C15.7955 21.775 15.9142 21.4919 15.9164 21.1959V9.41344C15.9142 9.11751 15.7955 8.83436 15.5859 8.62537C15.3764 8.41637 15.093 8.29835 14.797 8.29688Z"
                        fill="black"
                      />
                      <path
                        opacity="0.2"
                        d="M14.1867 8.29688H7.98047V22.3125H14.1867C14.4827 22.311 14.7661 22.193 14.9756 21.984C15.1851 21.775 15.3039 21.4919 15.3061 21.1959V9.41344C15.3039 9.11751 15.1851 8.83436 14.9756 8.62537C14.7661 8.41637 14.4827 8.29835 14.1867 8.29688Z"
                        fill="black"
                      />
                      <path
                        d="M2.99437 8.29688H14.1862C14.4827 8.29663 14.7672 8.41409 14.977 8.62346C15.1869 8.83283 15.3051 9.11697 15.3056 9.41344V20.5866C15.3051 20.883 15.1869 21.1672 14.977 21.3765C14.7672 21.5859 14.4827 21.7034 14.1862 21.7031H2.99437C2.84754 21.7034 2.7021 21.6747 2.56637 21.6187C2.43063 21.5627 2.30726 21.4805 2.2033 21.3768C2.09935 21.2731 2.01684 21.15 1.96051 21.0144C1.90418 20.8788 1.87512 20.7334 1.875 20.5866V9.41344C1.87512 9.26661 1.90418 9.12124 1.96051 8.98564C2.01684 8.85005 2.09935 8.72688 2.2033 8.62319C2.30726 8.51949 2.43063 8.4373 2.56637 8.38131C2.7021 8.32532 2.84754 8.29663 2.99437 8.29688Z"
                        fill="url(#paint0_linear_2298_2451)"
                      />
                      <path
                        d="M5.34375 18.631L7.69781 14.9898L5.54156 11.3691H7.27312L8.44969 13.6876C8.55844 13.907 8.63719 14.0701 8.67281 14.1788H8.68875C8.76562 14.0026 8.84719 13.8329 8.9325 13.667L10.1906 11.3729H11.7844L9.57281 14.9729L11.8406 18.6338H10.1447L8.78531 16.0923C8.72219 15.983 8.66856 15.8685 8.625 15.7501H8.6025C8.56286 15.8655 8.51001 15.9759 8.445 16.0791L7.04531 18.631H5.34375Z"
                        fill="white"
                      />
                      <path
                        d="M27.0059 2.8125H18.3574V8.90625H28.1252V3.92906C28.1251 3.78223 28.0961 3.63687 28.0397 3.50127C27.9834 3.36567 27.9009 3.24251 27.7969 3.13881C27.693 3.03512 27.5696 2.95293 27.4339 2.89694C27.2981 2.84095 27.1527 2.81226 27.0059 2.8125Z"
                        fill="#33C481"
                      />
                      <path
                        d="M18.3574 15H28.1252V21.0938H18.3574V15Z"
                        fill="#107C41"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2298_2451"
                          x1="4.21312"
                          y1="7.41938"
                          x2="12.9675"
                          y2="22.5806"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#18884F" />
                          <stop offset="0.5" stop-color="#117E43" />
                          <stop offset="1" stop-color="#0B6631" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2298_2464)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.35875 27.3917L2.13435 23.3748C1.35856 22.4084 0.9375 21.2199 0.9375 19.9968V5.45156C0.9375 3.61935 2.40337 2.09904 4.29442 1.96992L19.2488 0.948921C20.3353 0.874748 21.4151 1.16352 22.3076 1.76691L27.5618 5.31929C28.5023 5.95518 29.0625 6.99468 29.0625 8.104V24.6405C29.0625 26.4336 27.6212 27.9181 25.7696 28.0321L9.17187 29.0538C7.69437 29.1447 6.26624 28.5222 5.35875 27.3917Z"
                          fill="white"
                        />
                        <path
                          d="M10.5447 12.7299V12.5395C10.5447 12.0568 10.9313 11.6565 11.4296 11.6232L15.0589 11.3809L20.078 18.7719V12.285L18.7861 12.1128V12.0224C18.7861 11.534 19.1816 11.131 19.6862 11.1052L22.9886 10.936V11.4113C22.9886 11.6343 22.8226 11.8252 22.5953 11.8636L21.8006 11.998V22.5034L20.8033 22.8463C19.97 23.1329 19.0424 22.8262 18.5654 22.1064L13.6928 14.7535V21.7715L15.1925 22.0584L15.1717 22.1976C15.1062 22.6333 14.7299 22.9629 14.2749 22.9832L10.5447 23.1492C10.4953 22.6806 10.8465 22.2614 11.331 22.2105L11.8217 22.1589V12.8017L10.5447 12.7299Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.3825 2.78127L4.42801 3.80227C3.53225 3.86343 2.83789 4.58358 2.83789 5.45146V19.9967C2.83789 20.8121 3.1186 21.6044 3.63579 22.2488L6.8602 26.2656C7.38152 26.915 8.20194 27.2726 9.05071 27.2204L25.6484 26.1987C26.4991 26.1463 27.1614 25.4642 27.1614 24.6404V8.1039C27.1614 7.59421 26.904 7.11661 26.4719 6.82445L21.2177 3.27206C20.6822 2.91003 20.0343 2.73676 19.3825 2.78127ZM5.16958 5.67835C4.96158 5.52435 5.06057 5.20355 5.32185 5.18481L19.4831 4.16908C19.9343 4.13671 20.3826 4.26096 20.7475 4.51948L23.5889 6.53253C23.6967 6.60896 23.6461 6.77394 23.5125 6.7812L8.51589 7.59681C8.06204 7.62149 7.61407 7.48816 7.25321 7.221L5.16958 5.67835ZM7.81248 10.1537C7.81248 9.66647 8.20608 9.26407 8.70939 9.23666L24.5651 8.37314C25.0557 8.34643 25.4685 8.72367 25.4685 9.19849V23.5174C25.4685 24.0037 25.0764 24.4057 24.5741 24.4343L8.81871 25.3307C8.27282 25.3618 7.81248 24.9423 7.81248 24.4138V10.1537Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2298_2464">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2298_2469)">
                        <path
                          d="M27.0703 0H2.92969C1.31167 0 0 1.31167 0 2.92969V27.0703C0 28.6883 1.31167 30 2.92969 30H27.0703C28.6883 30 30 28.6883 30 27.0703V2.92969C30 1.31167 28.6883 0 27.0703 0Z"
                          fill="url(#paint0_linear_2298_2469)"
                        />
                        <path
                          d="M24.6939 3.8999H18.3564C17.5798 3.8999 16.9502 4.5295 16.9502 5.30615V15.6187C16.9502 16.3953 17.5798 17.0249 18.3564 17.0249H24.6939C25.4706 17.0249 26.1002 16.3953 26.1002 15.6187V5.30615C26.1002 4.5295 25.4706 3.8999 24.6939 3.8999Z"
                          fill="white"
                        />
                        <path
                          d="M11.6441 3.8999H5.30664C4.52999 3.8999 3.90039 4.5295 3.90039 5.30615V23.1187C3.90039 23.8953 4.52999 24.5249 5.30664 24.5249H11.6441C12.4208 24.5249 13.0504 23.8953 13.0504 23.1187V5.30615C13.0504 4.5295 12.4208 3.8999 11.6441 3.8999Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_2298_2469"
                          x1="1500"
                          y1="0"
                          x2="1500"
                          y2="3000"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0091E6" />
                          <stop offset="1" stop-color="#0079BF" />
                        </linearGradient>
                        <clipPath id="clip0_2298_2469">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M28.125 13.5413H20.4487L27.0975 9.70313L25.6369 7.17188L18.99 11.0119L22.8263 4.36312L20.2969 2.9025L16.4625 9.54938V1.875H13.5375V9.55125L9.70125 2.9025L7.17375 4.36312L11.01 11.01L4.36312 7.17375L2.9025 9.70125L9.55125 13.5394H1.875V16.4587H9.54938L2.9025 20.2969L4.36312 22.8281L11.01 18.99L7.17188 25.6369L9.70313 27.0975L13.5394 20.4487V28.125H16.4587V20.4487L20.2969 27.0975L22.8263 25.6369L18.9881 18.9881L25.635 22.8263L27.0956 20.2969L20.4487 16.4606H28.1231L28.125 13.5413ZM15 18.9713C13.9428 18.9713 12.9289 18.5513 12.1813 17.8037C11.4337 17.0561 11.0138 16.0422 11.0138 14.985C11.0138 13.9278 11.4337 12.9139 12.1813 12.1663C12.9289 11.4187 13.9428 10.9988 15 10.9988C16.0572 10.9988 17.0711 11.4187 17.8187 12.1663C18.5663 12.9139 18.9862 13.9278 18.9862 14.985C18.9862 16.0422 18.5663 17.0561 17.8187 17.8037C17.0711 18.5513 16.0572 18.9713 15 18.9713Z"
                        fill="#625DF5"
                      />
                    </svg>
                  </div>
                </div>
                <div className="self-stretch justify-center items-start gap-3 inline-flex">
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <div className="flex justify-center items-center w-[30px] h-[30px] left-[25px] top-[25px] absolute  overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.391 3H16.9006L20 7.80769L13.4439 3H9.94872L13.0513 9.29968L6.49519 3H3L6.04968 11.1314L3 27H6.49519L13.0497 9.98558L9.94872 27H13.4423L20 8.49359L16.899 27H20.391L27 6.67308L20.391 3Z"
                          fill="#E0C219"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M21.1155 8.12068C21.1155 11.4985 18.377 14.236 15.0002 14.236C11.6233 14.236 8.88484 11.4976 8.88484 8.12068C8.88484 4.74287 11.6233 2.00537 15.0002 2.00537C18.378 2.00537 21.1155 4.74287 21.1155 8.12068ZM7.05672 15.7651C3.67891 15.7651 0.941406 18.5035 0.941406 21.8804C0.941406 25.2572 3.67984 27.9957 7.05672 27.9957C10.4345 27.9957 13.172 25.2572 13.172 21.8804C13.1711 18.5035 10.4336 15.766 7.05672 15.7651ZM22.9436 15.7651C19.5658 15.7651 16.8283 18.5035 16.8283 21.8804C16.8283 25.2572 19.5667 27.9957 22.9436 27.9957C26.3214 27.9957 29.0589 25.2572 29.0589 21.8804C29.0589 18.5026 26.3214 15.7651 22.9436 15.7651Z"
                        fill="#FF0000"
                      />
                    </svg>
                  </div>
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <div className="flex justify-center items-center w-[30px] h-[30px] left-[25px] top-[25px] absolute  overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2298_2483)">
                          <path
                            d="M3.73194 23.8463C2.38177 23.8492 1.13446 23.1255 0.46708 21.9518C-0.190681 20.7853 -0.151237 19.3511 0.569641 18.2225L7.29308 7.66446C7.99366 6.50922 9.26162 5.82028 10.6121 5.86109C11.9615 5.89343 13.189 6.65005 13.8242 7.84109C14.451 9.02624 14.3726 10.4521 13.6219 11.5646L6.90278 22.1227C6.21027 23.2018 5.01414 23.852 3.73194 23.8463Z"
                            fill="#F62B54"
                          />
                          <path
                            d="M15.2642 23.8463C13.9081 23.8463 12.6603 23.1213 12.005 21.9561C11.3487 20.7928 11.3882 19.3622 12.1076 18.2368L18.8182 7.70294C19.5087 6.53113 20.7804 5.82601 22.1401 5.86112C23.5075 5.89103 24.7468 6.65596 25.3736 7.85251C25.9961 9.04905 25.9049 10.4835 25.1314 11.5931L18.4222 22.127C17.7319 23.2014 16.5413 23.8496 15.2642 23.8463Z"
                            fill="#FFCC00"
                          />
                          <path
                            d="M26.5386 23.9348C28.4503 23.9348 30 22.4176 30 20.546C30 18.6744 28.4503 17.1572 26.5386 17.1572C24.6269 17.1572 23.0771 18.6744 23.0771 20.546C23.0771 22.4176 24.6269 23.9348 26.5386 23.9348Z"
                            fill="#00CA72"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2298_2483">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M27.8107 14.2655L16.132 2.96991L15 1.875L6.20877 10.3778L2.1893 14.2655C1.77023 14.6713 1.77023 15.3287 2.1893 15.7345L10.2211 23.5028L15 28.125L23.7912 19.6222L23.9273 19.4905L27.8107 15.7345C28.2298 15.3287 28.2298 14.6713 27.8107 14.2655ZM15 18.8807L10.9877 15L15 11.1193L19.0123 15L15 18.8807Z"
                        fill="#2684FF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.9995 11.1194C12.3727 8.57832 12.3598 4.46257 14.9709 1.90625L6.19043 10.3952L10.9693 15.0174L14.9995 11.1194Z"
                        fill="url(#paint0_linear_2298_2489)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.023 14.9897L15 18.8807C16.268 20.1064 16.9804 21.7692 16.9804 23.5029C16.9804 25.2367 16.268 26.8995 15 28.1252L23.802 19.6119L19.023 14.9897Z"
                        fill="url(#paint1_linear_2298_2489)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_2298_2489"
                          x1="14.2831"
                          y1="7.19368"
                          x2="7.59006"
                          y2="10.1159"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.18" stop-color="#0052CC" />
                          <stop offset="1" stop-color="#2684FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_2298_2489"
                          x1="15.7666"
                          y1="22.7614"
                          x2="22.4476"
                          y2="19.8599"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.18" stop-color="#0052CC" />
                          <stop offset="1" stop-color="#2684FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-center items-center w-20 h-20 relative bg-gradient-to-b from-white to-[#f2f2f5] rounded-[21.33px] border border-neutral-700  overflow-hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_2298_2494)">
                        <path
                          d="M15.0094 0C15.8568 0.00155665 16.6901 0.0731627 17.5003 0.208591V8.9414L23.6914 2.76617C24.3752 3.25184 25.0149 3.792 25.6064 4.38197C26.1981 4.97195 26.7413 5.61175 27.2281 6.29355L21.0367 12.4688H29.7923C29.9282 13.2767 30 14.1048 30 14.9517V14.9719C30 15.8187 29.9282 16.6484 29.7923 17.4563H21.0352L27.2281 23.63C26.7413 24.3118 26.1981 24.9516 25.6082 25.5416H25.6064C25.0149 26.1315 24.3752 26.6732 23.6932 27.1574L17.5003 20.9821V29.7149C16.6916 29.8504 15.8583 29.9219 15.0109 29.9237H14.9891C14.1414 29.9219 13.3114 29.8504 12.5012 29.7149V20.9821L6.31005 27.1574C4.94274 26.1875 3.74736 24.9936 2.77335 23.63L8.96481 17.4563H0.209163C0.0718067 16.6468 0 15.814 0 14.9672V14.9237C0.0014233 14.704 0.0158133 14.4355 0.0364819 14.1578L0.042864 14.0742C0.104062 13.2924 0.209163 12.4688 0.209163 12.4688H8.96481L2.77335 6.29355C3.25871 5.61175 3.80039 4.9735 4.39183 4.3851L4.39481 4.38197C4.98505 3.792 5.62625 3.25184 6.31005 2.76617L12.5012 8.9414V0.208591C13.3114 0.0731627 14.1432 0.00155665 14.9921 0H15.0094ZM15.0079 11.2219H14.9936C13.8792 11.2219 12.812 11.4258 11.8255 11.7963C11.4557 12.7786 11.251 13.8433 11.2495 14.9547V14.9688C11.251 16.0802 11.4557 17.145 11.8269 18.1272C12.812 18.4977 13.8792 18.7016 14.9936 18.7016H15.0079C16.1222 18.7016 17.1895 18.4977 18.1745 18.1272C18.5458 17.1434 18.7505 16.0802 18.7505 14.9688V14.9547C18.7505 13.8433 18.5458 12.7786 18.1745 11.7963C17.1895 11.4258 16.1222 11.2219 15.0079 11.2219Z"
                          fill="#FF4A00"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2298_2494">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 p-[1px] bg-border-fade rounded-[36px]">
            <div className="grow shrink basis-0 p-9 bg-light-to-dark rounded-[36px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[220px] text-white text-base font-semibold font-['SF Pro Display'] leading-7">
                Information Architecture
              </div>
              <div className="self-stretch">
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  The architecture is designed with{" "}
                </span>
                <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                  customization
                </span>
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  {" "}
                  in mind, allowing teams to{" "}
                </span>
                <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                  adapt workflows
                </span>
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  {" "}
                  based on their specific needs without compromising usability.
                  From{" "}
                </span>
                <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                  project timelines{" "}
                </span>
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  to{" "}
                </span>
                <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                  task assignments
                </span>
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  {" "}
                  and{" "}
                </span>
                <span className="text-[#62f186] text-sm font-bold font-['Kalam'] leading-normal">
                  approval systems,
                </span>
                <span className="text-white/80 text-sm font-normal font-['SF Pro Text'] leading-normal">
                  {" "}
                  the layout ensures an intuitive experience for both designers
                  and managers.
                </span>
              </div>
              <img className="w-[436px] h-[212.36px]" src={ss} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchDesign;
