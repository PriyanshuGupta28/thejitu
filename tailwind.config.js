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
        compact: ["SF Pro Compact", "sans-serif"],
        rounded: ['"SF Pro Compact Rounded"', "sans-serif"],
        edu: ['"Edu QLD Beginner"', "sans-serif"],
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
        // "overlay-fade": "linear-gradient(to top, #000000, rgba(0, 0, 0, 0))",
        // "overlay-fade": "linear-gradient(to top, #000000, rgba(0, 0, 0, 0.25))",
        "light-to-dark": "linear-gradient(to bottom right, #101010, #000000)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
