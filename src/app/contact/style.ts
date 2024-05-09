import { headersTailwind, paragraphTailwind } from "@/app/styles/style";
import { poppins } from "../styles/fonts";

const infoTailwind = ["p-7", "bg-white", "w-full", "shadow-2xl"];

const iWrapperTailwind = [
  "flex",
  "justify-center",
  "items-center",
  "float-left",
  "w-11",
  "h-11",
  "text-anchorBlue",
  "bg-backgroundLightBlue2",
  "text-xl",
  "rounded-full",
  "transition",
  "duration-300",
  "ease-in-out",
];

const h4Tailwind = [
  ...headersTailwind.header4Tailwind,
  "pl-14",
  "text-2xl",
  "font-semibold",
  "text-headerGray",
];
const pTailwind = [...paragraphTailwind, "pb-5"];
const pInfoTailwind = [
  ...paragraphTailwind,
  poppins.className,
  "pl-14",
  "mb-5",
  "text-sm",
  "text-headerBlue",
];

export const contactTailwindGroup: {
  infoTailwind: string[];
  iWrapperTailwind: string[];
  h4Tailwind: string[];
  pTailwind: string[];
  pInfoTailwind: string[];
} = {
  infoTailwind,
  iWrapperTailwind,
  h4Tailwind,
  pTailwind,
  pInfoTailwind,
};
