import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        whiteTransparent: "rgba(255, 255, 255, 0.5)",
        primary: "#590bd8",
        primaryLighter: "#DDD5EA",
        primaryMiddle: "#c5b2e1",
        primaryDarker: "#312a4f",
        secondaryGray: "#717171",
        grayLight: "#9ca3af",
      },
      textColor: {
        dark: "#717171",
      },
    },
  },
  plugins: [],
};
export default config;
