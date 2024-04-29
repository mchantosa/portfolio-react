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
      animation: {
        "fade-in": "fade-in 5s ease-in-out", // Define the custom animation
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" }, // Start with opacity 0
          "100%": { opacity: "1" }, // End with opacity 1
        },
      },
      colors: {
        darkGrayBlackBlue: "#040b14", // Define your specific color here
        darkGray: "#2c2f3f",
        medDarkGray: "#212431",
        anchorBlue: "#149ddd",
      },
    },
  },
  plugins: [],
};
export default config;
