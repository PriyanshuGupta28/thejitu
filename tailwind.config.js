/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"SF Pro Display"', "sans-serif"],
        text: ['"SF Pro Text"', "sans-serif"],
        textThin: ['"SF Pro Text Thin"', "sans-serif"],
        compact: ['"SF Pro Compact"', "sans-serif"],
        rounded: ['"SF Pro Compact Rounded"', "sans-serif"],
        edu: ['"Edu QLD Beginner"', "sans-serif"],
        kalam: ['"Kalam"', "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      backgroundImage: {
        "apple-ai": "linear-gradient(to left, #e43d19, #3472bc, #06d6d6)",
        "border-fade": "linear-gradient(to bottom, #404040, black)",
        "red-border-fade": "linear-gradient(to bottom, #F61768, black)",
        "blue-border-fade": "linear-gradient(to bottom, #5D60DE, black)",
        "yellow-border-fade": "linear-gradient(to bottom, #F7E034, black)",
        "orange-border-fade": "linear-gradient(to bottom, #FC7F83, black)",
        "light-to-dark": "linear-gradient(to bottom right, #101010, #000000)",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-vertical": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
      },
      animation: {
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
