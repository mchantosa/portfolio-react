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
        "fade-in-fast": "fade-in 1s ease-in-out",
        "slide-in-right": "slide-in-right 0.5s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" }, // Start with opacity 0
          "100%": { opacity: "1" }, // End with opacity 1
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      colors: {
        darkGrayBlackBlue: "#040b14",
        darkGray: "#2c2f3f",
        medDarkGray: "#212431",
        anchorBlue: "#149ddd",
        anchorBlueHover: "#37b3ed",
        headerBlue: "#173b6c",
        headerGray: "#050d18",
        backgroundGray: "#f5f8fd",
        backgroundLightBlue: "#e4edf9",
        backgroundLightBlue2: "#dff3fc",
        backgroundGray2: "#f9f9f9",
        paragraphText: "#272829",
        borderBlue: "#1f5297",
        borderGray: "#eee",
        shade: "rgba(5, 13, 24, 0.08)",
        creditColor: "##eaebf0",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
});
