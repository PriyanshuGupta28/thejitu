import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Journey: React.FC = () => {
  useGSAP(() => {
    const path = document.querySelector("path") as SVGPathElement;
    const length = path.getTotalLength();

    gsap.fromTo(
      path,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 5, ease: "bounce.inOut" }
    );
  }, []);
  return (
    <div className="h-[498.28px] pb-12 flex-col justify-center items-start gap-[11.37px] inline-flex relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1024"
        height="421"
        viewBox="0 0 1024 421"
        fill="none"
        className="absolute stroke-[1.066px] h-[418.554px]"
      >
        <path
          d="M0 180.925H98.8061C126.641 180.925 149.43 201.877 149.43 227.497V372.982C149.43 398.589 172.205 419.554 200.053 419.554H275.034C302.869 419.554 325.658 398.602 325.658 372.982V126.299C325.658 100.692 348.433 79.7274 376.281 79.7274H448.194C476.029 79.7274 498.817 100.68 498.817 126.299V294.932C498.817 320.539 521.593 341.504 549.441 341.504H623.44C651.275 341.504 674.064 320.552 674.064 294.932V47.5715C674.064 21.9647 696.839 1 724.687 1H795.618C823.466 1 846.241 21.9522 846.241 47.5715V155.895C846.241 181.502 869.016 202.467 896.865 202.467H1141.25"
          stroke="url(#paint0_linear_2216_10195)"
          strokeWidth="1.06593"
          strokeMiterlimit="10"
          // strokeDasharray="3.55 3.55"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2216_10195"
            x1="1141.25"
            y1="210.277"
            x2="0"
            y2="210.277"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E43D19" />
            <stop offset="0.5" stopColor="#3472BC" />
            <stop offset="1" stopColor="#06D7D7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="w-[1141.25px] h-[450.28px] relative">
        <div className="origin-top-left rotate-90 w-[28.42px] h-[2.57px] left-[77.12px] top-[139.28px] absolute"></div>
        <div className="w-[34.11px] h-[34.11px] left-[78.27px] top-[165.57px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-[15px] absolute bg-[#224341] rounded-full" />
          <div className="flex justify-center items-center w-[17.05px] h-[17.05px] left-[7.73px] top-[23.53px] absolute  overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.0533 4.51426L8.61469 3.94576V7.2075C8.61469 7.39597 8.68956 7.57671 8.82282 7.70998C8.95609 7.84325 9.13684 7.91812 9.3253 7.91812C9.51377 7.91812 9.69452 7.84325 9.82779 7.70998C9.96105 7.57671 10.0359 7.39597 10.0359 7.2075V3.94576L10.5973 4.51426C10.6634 4.58086 10.742 4.63373 10.8286 4.66981C10.9152 4.70588 11.008 4.72446 11.1018 4.72446C11.1957 4.72446 11.2885 4.70588 11.3751 4.66981C11.4617 4.63373 11.5403 4.58086 11.6064 4.51426C11.673 4.4482 11.7259 4.3696 11.7619 4.28301C11.798 4.19641 11.8166 4.10353 11.8166 4.00972C11.8166 3.91591 11.798 3.82303 11.7619 3.73643C11.7259 3.64984 11.673 3.57124 11.6064 3.50518L9.82984 1.72864C9.76226 1.66394 9.68257 1.61323 9.59534 1.57941C9.42233 1.50833 9.22828 1.50833 9.05527 1.57941C8.96804 1.61323 8.88835 1.66394 8.82077 1.72864L7.04422 3.50518C6.91041 3.63899 6.83524 3.82048 6.83524 4.00972C6.83524 4.19896 6.91041 4.38045 7.04422 4.51426C7.17803 4.64807 7.35952 4.72324 7.54876 4.72324C7.738 4.72324 7.91949 4.64807 8.0533 4.51426ZM13.589 5.47359C13.5218 5.4064 13.4421 5.3531 13.3543 5.31674C13.2665 5.28038 13.1724 5.26166 13.0774 5.26166C12.9823 5.26166 12.8883 5.28038 12.8005 5.31674C12.7127 5.3531 12.6329 5.4064 12.5657 5.47359C12.4985 5.54078 12.4452 5.62055 12.4089 5.70834C12.3725 5.79612 12.3538 5.89021 12.3538 5.98524C12.3538 6.08026 12.3725 6.17435 12.4089 6.26214C12.4452 6.34992 12.4985 6.42969 12.5657 6.49688C13.2069 7.13783 13.6436 7.95452 13.8206 8.84368C13.9976 9.73283 13.9069 10.6545 13.5601 11.4921C13.2132 12.3297 12.6257 13.0457 11.8719 13.5494C11.1181 14.0531 10.2319 14.322 9.3253 14.322C8.41871 14.322 7.53247 14.0531 6.77868 13.5494C6.0249 13.0457 5.43742 12.3297 5.09056 11.4921C4.74369 10.6545 4.65302 9.73283 4.83001 8.84368C5.00701 7.95452 5.44371 7.13783 6.08489 6.49688C6.15208 6.42969 6.20538 6.34992 6.24174 6.26214C6.2781 6.17435 6.29682 6.08026 6.29682 5.98524C6.29682 5.89021 6.2781 5.79612 6.24174 5.70834C6.20538 5.62055 6.15208 5.54078 6.08489 5.47359C6.0177 5.4064 5.93793 5.3531 5.85014 5.31674C5.76236 5.28038 5.66826 5.26166 5.57324 5.26166C5.47822 5.26166 5.38413 5.28038 5.29634 5.31674C5.20856 5.3531 5.12879 5.4064 5.0616 5.47359C4.22443 6.31579 3.65543 7.38705 3.42638 8.55224C3.19732 9.71743 3.31848 10.9244 3.77455 12.0208C4.23063 13.1172 5.0012 14.054 5.98905 14.713C6.97691 15.372 8.13781 15.7237 9.3253 15.7237C10.5128 15.7237 11.6737 15.372 12.6616 14.713C13.6494 14.054 14.42 13.1172 14.8761 12.0208C15.3321 10.9244 15.4533 9.71743 15.2242 8.55224C14.9952 7.38705 14.4262 6.31579 13.589 5.47359Z"
                fill="#00C7BE"
              />
            </svg>
          </div>
        </div>
        <div className="w-[34.11px] h-[34.11px] left-[132.17px] top-[253.69px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
            <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute bg-[#26313e] rounded-full" />
            <div className="w-[25.58px] h-[25.58px] left-[8.26px] top-[8.26px] absolute rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M15.0303 12.1776L13.5594 10.6711C13.243 10.3703 12.8438 10.171 12.4133 10.0988C11.9827 10.0267 11.5405 10.0849 11.1433 10.266L10.5037 9.62647C11.2574 8.61946 11.6015 7.36434 11.467 6.11377C11.3324 4.86319 10.7291 3.71003 9.77847 2.8864C8.82784 2.06278 7.6005 1.62986 6.34351 1.67479C5.08652 1.71972 3.89322 2.23917 3.00382 3.12856C2.11443 4.01795 1.59498 5.21126 1.55005 6.46825C1.50512 7.72524 1.93804 8.95258 2.76167 9.9032C3.58529 10.8538 4.73846 11.4571 5.98903 11.5917C7.23961 11.7263 8.49473 11.3821 9.50173 10.6284L10.1342 11.2609C9.93172 11.6586 9.85916 12.1098 9.92673 12.5509C9.9943 12.992 10.1986 13.4008 10.5108 13.7196L12.0173 15.2261C12.417 15.6254 12.9589 15.8496 13.5238 15.8496C14.0888 15.8496 14.6306 15.6254 15.0303 15.2261C15.2334 15.0276 15.3947 14.7905 15.5049 14.5287C15.615 14.267 15.6718 13.9858 15.6718 13.7019C15.6718 13.4179 15.615 13.1367 15.5049 12.875C15.3947 12.6132 15.2334 12.3761 15.0303 12.1776ZM9.0043 9.16457C8.50704 9.66058 7.87392 9.99808 7.18493 10.1345C6.49595 10.2708 5.782 10.1999 5.13328 9.93075C4.48456 9.66156 3.93018 9.20614 3.54016 8.62204C3.15014 8.03793 2.94198 7.35133 2.94198 6.64898C2.94198 5.94663 3.15014 5.26003 3.54016 4.67592C3.93018 4.09182 4.48456 3.6364 5.13328 3.36722C5.782 3.09803 6.49595 3.02714 7.18493 3.16351C7.87392 3.29988 8.50704 3.63738 9.0043 4.13339C9.33519 4.46345 9.59771 4.85553 9.77683 5.2872C9.95595 5.71886 10.0482 6.18163 10.0482 6.64898C10.0482 7.11633 9.95595 7.5791 9.77683 8.01076C9.59771 8.44243 9.33519 8.83452 9.0043 9.16457ZM14.0284 14.1886C13.9623 14.2552 13.8837 14.3081 13.7971 14.3442C13.7105 14.3803 13.6176 14.3988 13.5238 14.3988C13.43 14.3988 13.3371 14.3803 13.2505 14.3442C13.1639 14.3081 13.0854 14.2552 13.0193 14.1886L11.5128 12.6821C11.4462 12.6161 11.3933 12.5375 11.3572 12.4509C11.3212 12.3643 11.3026 12.2714 11.3026 12.1776C11.3026 12.0838 11.3212 11.9909 11.3572 11.9043C11.3933 11.8177 11.4462 11.7391 11.5128 11.673C11.5788 11.6064 11.6574 11.5536 11.744 11.5175C11.8306 11.4814 11.9235 11.4628 12.0173 11.4628C12.1111 11.4628 12.204 11.4814 12.2906 11.5175C12.3772 11.5536 12.4558 11.6064 12.5219 11.673L14.0284 13.1796C14.095 13.2456 14.1478 13.3242 14.1839 13.4108C14.22 13.4974 14.2386 13.5903 14.2386 13.6841C14.2386 13.7779 14.22 13.8708 14.1839 13.9574C14.1478 14.044 14.095 14.1226 14.0284 14.1886Z"
                  fill="#32ADE6"
                />
              </svg>
            </div>
          </div>
          <div className="w-[17.05px] h-[17.05px] left-[8.88px] top-[8.53px] absolute  overflow-hidden" />
        </div>
        <div className="w-[34.11px] h-[34.11px] left-[481.80px] top-[210.34px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
            <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute bg-[#26394f] rounded-full" />
            <div className="flex justify-center items-center w-[25.58px] h-[25.58px] left-[4.26px] top-[4.26px] absolute bg-[#26394f] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_2290_7486)">
                  <path
                    d="M9.20898 14.372L14.1833 9.39764L16.3152 11.5295L11.3408 16.5038L9.20898 14.372Z"
                    fill="#007AFF"
                    stroke="#007AFF"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4724 10.1083L12.4065 4.77863L2.10254 2.29147L4.5897 12.5954L9.91933 13.6613L13.4724 10.1083Z"
                    stroke="#007AFF"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.10254 2.29147L7.49328 7.68221"
                    stroke="#007AFF"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.49838 10.1083C9.28331 10.1083 9.91962 9.47195 9.91962 8.68702C9.91962 7.9021 9.28331 7.26579 8.49838 7.26579C7.71346 7.26579 7.07715 7.9021 7.07715 8.68702C7.07715 9.47195 7.71346 10.1083 8.49838 10.1083Z"
                    stroke="#007AFF"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2290_7486">
                    <rect
                      width="17.0548"
                      height="17.0548"
                      fill="white"
                      transform="translate(0.681641 0.870232)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="w-[17.05px] h-[17.05px] left-[8.88px] top-[8.53px] absolute  overflow-hidden" />
        </div>
        <div className="w-[34.11px] h-[34.11px] left-[656.61px] top-[289.93px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
            <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute bg-[#402f49] rounded-full" />
            <div className="flex justify-center items-center w-[25.58px] h-[25.58px] left-[4.26px] top-[4.26px] absolute bg-[#402f49] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_2290_7492)">
                  <path
                    d="M9.01955 11.1187C10.1969 11.1187 11.1514 10.1642 11.1514 8.98682C11.1514 7.80943 10.1969 6.85497 9.01955 6.85497C7.84216 6.85497 6.8877 7.80943 6.8877 8.98682C6.8877 10.1642 7.84216 11.1187 9.01955 11.1187Z"
                    fill="#AF52DE"
                    stroke="#AF52DE"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.2785 11.1187C14.1839 11.333 14.1557 11.5708 14.1975 11.8013C14.2393 12.0318 14.3492 12.2445 14.513 12.412L14.5556 12.4546C14.6878 12.5866 14.7926 12.7434 14.8641 12.9159C14.9356 13.0884 14.9725 13.2734 14.9725 13.4602C14.9725 13.6469 14.9356 13.8319 14.8641 14.0044C14.7926 14.1769 14.6878 14.3337 14.5556 14.4657C14.4236 14.5978 14.2669 14.7027 14.0944 14.7742C13.9218 14.8457 13.7369 14.8825 13.5501 14.8825C13.3633 14.8825 13.1784 14.8457 13.0059 14.7742C12.8333 14.7027 12.6766 14.5978 12.5446 14.4657L12.5019 14.423C12.3345 14.2592 12.1218 14.1493 11.8912 14.1075C11.6607 14.0657 11.423 14.0939 11.2086 14.1885C10.9984 14.2786 10.8192 14.4282 10.6929 14.6188C10.5667 14.8095 10.4989 15.0329 10.498 15.2616V15.3824C10.498 15.7593 10.3483 16.1208 10.0817 16.3873C9.8152 16.6539 9.4537 16.8036 9.07677 16.8036C8.69983 16.8036 8.33834 16.6539 8.0718 16.3873C7.80527 16.1208 7.65553 15.7593 7.65553 15.3824V15.3184C7.65003 15.0832 7.5739 14.8551 7.43703 14.6637C7.30015 14.4724 7.10888 14.3266 6.88807 14.2454C6.67373 14.1508 6.43598 14.1226 6.20545 14.1644C5.97493 14.2062 5.76222 14.3161 5.59474 14.4799L5.5521 14.5225C5.42011 14.6547 5.26336 14.7595 5.09083 14.831C4.91829 14.9025 4.73335 14.9394 4.54658 14.9394C4.35981 14.9394 4.17487 14.9025 4.00233 14.831C3.8298 14.7595 3.67305 14.6547 3.54106 14.5225C3.40892 14.3905 3.30409 14.2338 3.23256 14.0613C3.16104 13.8887 3.12423 13.7038 3.12423 13.517C3.12423 13.3302 3.16104 13.1453 3.23256 12.9728C3.30409 12.8002 3.40892 12.6435 3.54106 12.5115L3.58369 12.4688C3.74752 12.3014 3.85741 12.0887 3.89921 11.8581C3.94101 11.6276 3.91279 11.3899 3.8182 11.1755C3.72812 10.9653 3.57855 10.7861 3.38789 10.6598C3.19724 10.5336 2.97383 10.4658 2.74517 10.4649H2.62436C2.24743 10.4649 1.88593 10.3152 1.6194 10.0486C1.35286 9.7821 1.20313 9.42061 1.20312 9.04367C1.20312 8.66674 1.35286 8.30524 1.6194 8.03871C1.88593 7.77217 2.24743 7.62244 2.62436 7.62244H2.68832C2.92353 7.61693 3.15164 7.5408 3.34301 7.40393C3.53437 7.26706 3.68014 7.07578 3.76135 6.85497C3.85594 6.64064 3.88416 6.40288 3.84236 6.17236C3.80056 5.94184 3.69067 5.72912 3.52684 5.56165L3.48421 5.51901C3.35207 5.38701 3.24724 5.23027 3.17571 5.05773C3.10419 4.8852 3.06738 4.70026 3.06738 4.51348C3.06738 4.32671 3.10419 4.14177 3.17571 3.96924C3.24724 3.7967 3.35207 3.63996 3.48421 3.50796C3.6162 3.37582 3.77295 3.27099 3.94548 3.19947C4.11802 3.12794 4.30296 3.09113 4.48973 3.09113C4.6765 3.09113 4.86144 3.12794 5.03398 3.19947C5.20651 3.27099 5.36326 3.37582 5.49526 3.50796L5.53789 3.5506C5.70537 3.71442 5.91808 3.82432 6.14861 3.86612C6.37913 3.90791 6.61688 3.8797 6.83122 3.7851H6.88807C7.09824 3.69502 7.2775 3.54545 7.40376 3.3548C7.53002 3.16415 7.59777 2.94074 7.59868 2.71207V2.59126C7.59868 2.21433 7.74842 1.85283 8.01495 1.5863C8.28149 1.31977 8.64298 1.17003 9.01992 1.17003C9.39685 1.17003 9.75835 1.31977 10.0249 1.5863C10.2914 1.85283 10.4412 2.21433 10.4412 2.59126V2.65522C10.4421 2.88389 10.5098 3.1073 10.6361 3.29795C10.7623 3.4886 10.9416 3.63817 11.1518 3.72825C11.3661 3.82285 11.6039 3.85106 11.8344 3.80927C12.0649 3.76747 12.2776 3.65757 12.4451 3.49375L12.4877 3.45111C12.6197 3.31897 12.7765 3.21414 12.949 3.14262C13.1215 3.0711 13.3065 3.03428 13.4933 3.03428C13.68 3.03428 13.865 3.0711 14.0375 3.14262C14.21 3.21414 14.3668 3.31897 14.4988 3.45111C14.6309 3.58311 14.7358 3.73985 14.8073 3.91239C14.8788 4.08492 14.9156 4.26986 14.9156 4.45664C14.9156 4.64341 14.8788 4.82835 14.8073 5.00088C14.7358 5.17342 14.6309 5.33016 14.4988 5.46216L14.4561 5.5048C14.2923 5.67227 14.1824 5.88499 14.1406 6.11551C14.0988 6.34603 14.127 6.58379 14.2216 6.79812V6.85497C14.3117 7.06515 14.4613 7.2444 14.6519 7.37066C14.8426 7.49692 15.066 7.56468 15.2947 7.56559H15.4155C15.7924 7.56559 16.1539 7.71532 16.4204 7.98186C16.687 8.24839 16.8367 8.60989 16.8367 8.98682C16.8367 9.36376 16.687 9.72525 16.4204 9.99179C16.1539 10.2583 15.7924 10.4081 15.4155 10.4081H15.3515C15.1229 10.409 14.8994 10.4767 14.7088 10.603C14.5181 10.7292 14.3686 10.9085 14.2785 11.1187V11.1187Z"
                    stroke="#AF52DE"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2290_7492">
                    <rect
                      width="17.0548"
                      height="17.0548"
                      fill="white"
                      transform="translate(0.492188 0.459412)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="w-[17.05px] h-[17.05px] left-[8.88px] top-[8.53px] absolute  overflow-hidden" />
        </div>
        <div className="w-[34.11px] h-[34.11px] left-[656.61px] top-[90.25px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
            <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute bg-[#402f49] rounded-full" />
            <div className="flex justify-center items-center w-[25.58px] h-[25.58px] left-[4.26px] top-[4.26px] absolute bg-[#402f49] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9.01926 2.19708L11.2151 6.64555L16.1254 7.36327L12.5723 10.824L13.4109 15.713L9.01926 13.4035L4.62765 15.713L5.46617 10.824L1.91309 7.36327L6.82345 6.64555L9.01926 2.19708Z"
                  stroke="#AF52DE"
                  strokeWidth="1.42124"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="w-[17.05px] h-[17.05px] left-[8.88px] top-[8.53px] absolute  overflow-hidden" />
        </div>
        <div className="w-[34.11px] h-[34.11px] left-[821.47px] top-[10.66px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-[14.26px] absolute bg-[#5f1f1c] rounded-full" />
          <div className="flex justify-center items-center w-[25.58px] h-[25.58px] left-[4.37px] top-[18.26px] absolute bg-[#5f1f1c] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <g clipPath="url(#clip0_2290_7502)">
                <path
                  d="M8.88254 15.8203C12.8072 15.8203 15.9887 12.6387 15.9887 8.71409C15.9887 4.78945 12.8072 1.60791 8.88254 1.60791C4.95791 1.60791 1.77637 4.78945 1.77637 8.71409C1.77637 12.6387 4.95791 15.8203 8.88254 15.8203Z"
                  stroke="#FF2D55"
                  strokeWidth="1.42124"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.725 8.71408L8.88251 5.87161L6.04004 8.71408"
                  stroke="#FF2D55"
                  strokeWidth="1.42124"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.88281 11.5566V5.87161"
                  stroke="#FF2D55"
                  strokeWidth="1.42124"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2290_7502">
                  <rect
                    width="17.0548"
                    height="17.0548"
                    fill="white"
                    transform="translate(0.355469 0.186676)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="w-[17.05px] h-[17.05px] left-[8.88px] top-[8.53px] absolute  overflow-hidden" />
        </div>
        <div className="w-[34.11px] h-[34.11px] left-[906.75px] top-[184.76px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
            <div className="w-[34.11px] h-[34.11px] left-0 top-[14.26px] absolute bg-[#ff3b30] rounded-full" />
            <div className="flex justify-center items-center w-[28.42px] h-[28.42px] left-[2.84px] top-[18.26px] absolute bg-[#ff2d55] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#clip0_2290_7507)">
                  <path
                    d="M13.4219 5.97295H14.1325C14.8864 5.97295 15.6094 6.27242 16.1424 6.80549C16.6755 7.33855 16.975 8.06155 16.975 8.81542C16.975 9.56929 16.6755 10.2923 16.1424 10.8253C15.6094 11.3584 14.8864 11.6579 14.1325 11.6579H13.4219"
                    stroke="white"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.05176 5.97295H13.4216V12.3685C13.4216 13.1224 13.1222 13.8454 12.5891 14.3784C12.056 14.9115 11.333 15.211 10.5792 15.211H4.89423C4.14036 15.211 3.41736 14.9115 2.8843 14.3784C2.35123 13.8454 2.05176 13.1224 2.05176 12.3685V5.97295Z"
                    stroke="white"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5791 0.998619V3.13047"
                    stroke="white"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.7373 0.998619V3.13047"
                    stroke="white"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.89453 0.998619V3.13047"
                    stroke="white"
                    strokeWidth="1.42124"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2290_7507">
                    <rect
                      width="17.0548"
                      height="17.0548"
                      fill="white"
                      transform="translate(0.630859 0.288002)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="w-[17.05px] h-[17.05px] left-[8.88px] top-[8.53px] absolute  overflow-hidden" />
        </div>
        <div className="origin-top-left rotate-90 w-[28.42px] h-[2.57px] left-[77.12px] top-[139.28px] absolute"></div>
        <div className="w-52 h-[58.74px] left-[73.19px] top-[78.17px] absolute">
          <div className="w-[100.45px] h-[26px] left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-[#d7dfe7] text-[17.05px] font-bold font-text leading-relaxed tracking-tight">
              2020
            </div>
            <div className="left-[50.45px] top-[7.82px] absolute text-[#00c7be] text-[9.95px] font-text leading-[14.92px] tracking-tight">
              December
            </div>
          </div>
          <div className="left-0 top-[22.74px] absolute text-[#d7dfe7] text-xs font-normal font-text leading-[18px] tracking-tight">
            Initiate revamping the platfrom from <br />
            v1 to v2
          </div>
        </div>
        <div className="w-[122.45px] h-[76.74px] left-[174.81px] top-[253.69px] absolute">
          <div className="w-[122.45px] h-[26px] left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-[#d7dfe7] text-[17.05px] font-bold font-text leading-relaxed tracking-tight">
              2020
            </div>
            <div className="left-[50.45px] top-[7.82px] absolute text-[#32ade6] text-[9.95px] font-text leading-[14.92px] tracking-tight">
              December-Mid
            </div>
          </div>
          <div className="w-[120.81px] left-0 top-[22.74px] absolute text-[#d7dfe7] text-xs font-normal font-text leading-[18px] tracking-tight">
            Start Researching and creating moodboard
          </div>
        </div>
        <div className="w-[174.10px] h-[76.74px] left-[309.12px] top-[117.96px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
            <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
              <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute bg-[#26394f] rounded-full" />
              <div className="flex justify-center items-center w-[25.58px] h-[25.58px] left-[4.26px] top-[4.26px] absolute bg-[#26394f] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2290_7528)">
                    <path
                      d="M14.2137 11.8598C13.7726 11.8621 13.343 12.0011 12.9843 12.2578L11.2433 11.2274C11.3254 10.9724 11.3685 10.7065 11.3712 10.4386C11.3691 9.81 11.1588 9.19982 10.7731 8.70351C10.3873 8.2072 9.84795 7.85274 9.23933 7.6956V6.04697C9.71346 5.87933 10.1131 5.54948 10.3675 5.11572C10.622 4.68195 10.7149 4.17219 10.6299 3.67653C10.5448 3.18088 10.2873 2.73125 9.9028 2.40711C9.51831 2.08296 9.0316 1.90518 8.52871 1.90518C8.02581 1.90518 7.53911 2.08296 7.15462 2.40711C6.77012 2.73125 6.5126 3.18088 6.42756 3.67653C6.34252 4.17219 6.43544 4.68195 6.68989 5.11572C6.94435 5.54948 7.34396 5.87933 7.81809 6.04697V7.6956C7.20947 7.85274 6.67009 8.2072 6.28436 8.70351C5.89862 9.19982 5.68828 9.81 5.68624 10.4386C5.68888 10.7065 5.732 10.9724 5.81415 11.2274L4.07314 12.2578C3.71438 12.0011 3.28486 11.8621 2.84377 11.8598C2.42213 11.8598 2.00996 11.9848 1.65937 12.2191C1.30879 12.4534 1.03555 12.7863 0.874193 13.1758C0.712838 13.5654 0.67062 13.994 0.752878 14.4076C0.835136 14.8211 1.03818 15.201 1.33632 15.4991C1.63447 15.7973 2.01433 16.0003 2.42786 16.0826C2.8414 16.1648 3.27005 16.1226 3.65959 15.9612C4.04914 15.7999 4.38209 15.5266 4.61634 15.1761C4.85059 14.8255 4.97562 14.4133 4.97562 13.9917C4.97299 13.7992 4.94431 13.608 4.89035 13.4232L6.52477 12.4496C7.05734 12.979 7.77777 13.2762 8.52871 13.2762C9.27965 13.2762 10.0001 12.979 10.5327 12.4496L12.1671 13.4232C12.048 13.8535 12.0671 14.3104 12.2216 14.7293C12.3761 15.1483 12.6582 15.5081 13.0282 15.7581C13.3982 16.0081 13.8374 16.1356 14.2837 16.1226C14.73 16.1096 15.161 15.9568 15.5159 15.6858C15.8707 15.4147 16.1315 15.0391 16.2614 14.6119C16.3913 14.1847 16.3838 13.7275 16.2399 13.3048C16.096 12.882 15.8231 12.5152 15.4595 12.2559C15.0959 11.9967 14.6602 11.8581 14.2137 11.8598ZM2.84377 14.7023C2.70322 14.7023 2.56583 14.6606 2.44897 14.5825C2.33211 14.5044 2.24103 14.3935 2.18724 14.2636C2.13346 14.1338 2.11939 13.9909 2.1468 13.853C2.17422 13.7152 2.2419 13.5886 2.34129 13.4892C2.44067 13.3898 2.56729 13.3221 2.70513 13.2947C2.84298 13.2673 2.98586 13.2814 3.11571 13.3351C3.24556 13.3889 3.35654 13.48 3.43463 13.5969C3.51271 13.7137 3.55439 13.8511 3.55439 13.9917C3.55439 14.1801 3.47952 14.3609 3.34625 14.4942C3.21298 14.6274 3.03224 14.7023 2.84377 14.7023ZM8.52871 3.33241C8.66926 3.33241 8.80665 3.37408 8.92351 3.45217C9.04037 3.53025 9.13145 3.64123 9.18524 3.77108C9.23902 3.90093 9.25309 4.04381 9.22567 4.18166C9.19825 4.3195 9.13057 4.44612 9.03119 4.54551C8.93181 4.64489 8.80519 4.71257 8.66734 4.73999C8.5295 4.76741 8.38662 4.75333 8.25677 4.69955C8.12692 4.64576 8.01594 4.55468 7.93785 4.43782C7.85977 4.32096 7.81809 4.18357 7.81809 4.04302C7.81809 3.85456 7.89296 3.67381 8.02623 3.54054C8.15949 3.40727 8.34024 3.33241 8.52871 3.33241ZM8.52871 11.8598C8.24762 11.8598 7.97283 11.7765 7.73911 11.6203C7.50539 11.4641 7.32323 11.2422 7.21566 10.9825C7.10809 10.7228 7.07994 10.437 7.13478 10.1613C7.18962 9.88562 7.32498 9.63238 7.52374 9.43362C7.72251 9.23486 7.97575 9.09949 8.25144 9.04466C8.52713 8.98982 8.8129 9.01796 9.07259 9.12553C9.33229 9.2331 9.55426 9.41527 9.71042 9.64899C9.86659 9.88271 9.94995 10.1575 9.94995 10.4386C9.94995 10.8155 9.80021 11.177 9.53367 11.4435C9.26714 11.7101 8.90564 11.8598 8.52871 11.8598ZM14.2137 14.7023C14.0731 14.7023 13.9357 14.6606 13.8189 14.5825C13.702 14.5044 13.6109 14.3935 13.5571 14.2636C13.5033 14.1338 13.4893 13.9909 13.5167 13.853C13.5441 13.7152 13.6118 13.5886 13.7112 13.4892C13.8106 13.3898 13.9372 13.3221 14.075 13.2947C14.2129 13.2673 14.3557 13.2814 14.4856 13.3351C14.6154 13.3889 14.7264 13.48 14.8045 13.5969C14.8826 13.7137 14.9243 13.8511 14.9243 13.9917C14.9243 14.1801 14.8494 14.3609 14.7161 14.4942C14.5829 14.6274 14.4021 14.7023 14.2137 14.7023Z"
                      fill="#007AFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2290_7528">
                      <rect
                        width="17.0548"
                        height="17.0548"
                        fill="white"
                        transform="translate(0.00146484 0.489929)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="w-[17.05px] h-[17.05px] left-[8.88px] top-[8.53px] absolute  overflow-hidden" />
          </div>
          <div className="w-[131.46px] h-[76.74px] left-[42.64px] top-[-0px] absolute">
            <div className="w-[82.35px] h-[26px] left-0 top-0 absolute">
              <div className="left-0 top-0 absolute text-[#d7dfe7] text-[17.05px] font-bold font-text leading-relaxed tracking-tight">
                2021
              </div>
              <div className="left-[43.35px] top-[7.82px] absolute text-[#007aff] text-[9.95px] font-text leading-[14.92px] tracking-tight">
                January
              </div>
            </div>
            <div className="w-[131.46px] left-[-0px] top-[22.74px] absolute text-[#d7dfe7] text-xs font-normal font-text leading-[18px] tracking-tight">
              Start defining foundations and elements
            </div>
          </div>
        </div>
        <div className="w-[166.09px] h-[112.74px] left-[309.12px] top-[337.54px] absolute">
          <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
            <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute">
              <div className="w-[34.11px] h-[34.11px] left-0 top-0 absolute bg-[#26313e] rounded-full" />
              <div className="w-[25.58px] h-[25.58px] left-[8.76px] top-[8.26px] absolute rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M13.5034 8.59819H8.52903V3.62386C8.52903 3.19749 8.24478 2.91325 7.81841 2.91325C4.26532 2.91325 1.42285 5.75572 1.42285 9.30881C1.42285 12.8619 4.26532 15.7044 7.81841 15.7044C11.3715 15.7044 14.214 12.8619 14.214 9.30881C14.214 8.88243 13.9297 8.59819 13.5034 8.59819ZM8.52903 14.2121C5.82868 14.6384 3.27046 12.7198 2.91515 10.0194C2.48878 7.31908 4.40745 4.76085 7.10779 4.40554V9.30881C7.10779 9.73518 7.39204 10.0194 7.81841 10.0194H12.7217C12.4374 12.2223 10.7319 13.9278 8.52903 14.2121ZM10.6609 1.49201C10.2345 1.49201 9.95026 1.77626 9.95026 2.20263V6.46634C9.95026 6.89271 10.2345 7.17695 10.6609 7.17695H14.9246C15.351 7.17695 15.6352 6.89271 15.6352 6.46634C15.6352 3.69493 13.4323 1.49201 10.6609 1.49201ZM11.3715 5.75572V2.98431C12.7927 3.26856 13.8587 4.33448 14.1429 5.75572H11.3715Z"
                    fill="#32ADE6"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[17.05px] h-[17.05px] left-[8.88px] top-[8.53px] absolute  overflow-hidden" />
          </div>
          <div className="w-[123.45px] h-[112.74px] left-[42.64px] top-[-0px] absolute">
            <div className="w-[123.45px] h-[26px] left-0 top-0 absolute">
              <div className="left-0 top-0 absolute text-[#d7dfe7] text-[17.05px] font-bold font-text leading-relaxed tracking-tight">
                2020
              </div>
              <div className="left-[50.45px] top-[7.82px] absolute text-[#32ade6] text-[9.95px] font-text leading-[14.92px] tracking-tight">
                December-End
              </div>
            </div>
            <div className="w-[117.25px] left-[-0px] top-[22.74px] absolute text-[#d7dfe7] text-xs font-normal font-text leading-[18px] tracking-tight">
              Taking Insights from CSM Team, Conducting User Interview to create
              from scratch
            </div>
          </div>
        </div>
        <div className="w-[117.25px] h-[76.74px] left-[524.44px] top-[210.34px] absolute">
          <div className="w-[104.35px] h-[26px] left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-[#d7dfe7] text-[17.05px] font-bold font-text leading-relaxed tracking-tight">
              2021
            </div>
            <div className="left-[43.35px] top-[7.82px] absolute text-[#007aff] text-[9.95px] font-text leading-[14.92px] tracking-tight">
              January-Mid
            </div>
          </div>
          <div className="w-[117.25px] left-0 top-[22.74px] absolute text-[#d7dfe7] text-xs font-normal font-text leading-[18px] tracking-tight">
            Design System is now complete and ready for use
          </div>
        </div>
        <div className="w-[117.25px] h-[76.74px] left-[699.25px] top-[289.93px] absolute">
          <div className="w-[110.35px] h-[26px] left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-[#d7dfe7] text-[17.05px] font-bold font-text leading-relaxed tracking-tight">
              2021
            </div>
            <div className="left-[43.35px] top-[7.82px] absolute text-[#af52de] text-[9.95px] font-text leading-[14.92px] tracking-tight">
              February-End
            </div>
          </div>
          <div className="w-[117.25px] left-[-0px] top-[22.74px] absolute text-[#d7dfe7] text-xs font-normal font-text leading-[18px] tracking-tight">
            Handovered all new design files to product engineers
          </div>
        </div>
        <div className="w-[117.25px] h-[76.74px] left-[699.25px] top-[90.25px] absolute">
          <div className="w-[63.35px] h-[26px] left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-[#d7dfe7] text-[17.05px] font-bold font-text leading-relaxed tracking-tight">
              2021
            </div>
            <div className="left-[43.35px] top-[7.82px] absolute text-[#af52de] text-[9.95px] font-text leading-[14.92px] tracking-tight">
              July
            </div>
          </div>
          <div className="w-[117.25px] left-[-0px] top-[22.74px] absolute text-[#d7dfe7] text-xs font-normal font-text leading-[18px] tracking-tight">
            New platform get launched successfully!
          </div>
        </div>
        <div className="w-[117.25px] h-[76.74px] left-[864.11px] top-[10.66px] absolute">
          <div className="w-[83.35px] h-[26px] left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-[#d7dfe7] text-[17.05px] font-bold font-text leading-relaxed tracking-tight">
              2021
            </div>
            <div className="left-[41.35px] top-[7.82px] absolute text-[#ff2d55] text-[9.95px] font-text leading-[14.92px] tracking-tight">
              October
            </div>
          </div>
          <div className="w-[117.25px] left-[-0px] top-[22.74px] absolute text-[#d7dfe7] text-xs font-normal font-text leading-[18px] tracking-tight">
            Design System gets a new version upgrade as 2.1
          </div>
        </div>
      </div>
      <div className="w-[58px] h-[60px] left-0 top-[190px] absolute bg-gradient-to-l from-black to-black" />
      <div className="w-[58px] h-[60px] left-[1024px] top-[210px] absolute origin-top-left rotate-180 bg-gradient-to-l from-black to-black" />
    </div>
  );
};

export default Journey;
