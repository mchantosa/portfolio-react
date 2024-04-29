import { Open_Sans, Raleway, Poppins } from "next/font/google";

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
