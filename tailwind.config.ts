import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-gradient-to-bl",
    "from-neutral-600",
    "to-neutral-800",
    "from-slate-700",
    "to-gray-900",
    "from-green-500/40",
    "to-yellow-600/40",
  ],
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
