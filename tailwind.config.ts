import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["hover:bg-green-600", "hover:bg-blue-600", "hover:bg-white"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gradientLight: "var(--gradientLight)",
        gradientDark: "var(--graidentDark)",
      },
      screens: {
        "md-lg": "980px",
      },
    },
  },
  plugins: [],
};
export default config;
