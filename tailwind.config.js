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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
