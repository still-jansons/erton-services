import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary"  : "#024985",
        "primary-light": "#096ABC",
        "primary-dark": "#07253F",
        "secondary": "#FFB100"
      },
    },
  },
  plugins: [],
};
export default config;
