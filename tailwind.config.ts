import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#190019",
          900: "#2B124C",
          800: "#522B5B",
          700: "#854F6C",
          300: "#DFB6B2",
          100: "#FBE4D8"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-manrope)", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(133,79,108,.24)"
      }
    }
  },
  plugins: []
};

export default config;