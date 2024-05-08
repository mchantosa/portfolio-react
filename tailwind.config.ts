import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
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
        anchorBlueHover: "#37b3ed",
        headerBlue: "#173b6c",
        headerGray: "#050d18",
        backgroundGray: "#f5f8fd",
        backgroundLightBlue: "#e4edf9",
        backgroundGray2: "#f9f9f9",
        paragraphText: "#272829",
        borderBlue: "#1f5297",
      },
    },
  },
  plugins: [],
});
