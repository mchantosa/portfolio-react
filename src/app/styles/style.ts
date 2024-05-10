// widths: sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536
// max-w:  sm: 700, md: 900, lg: 1100, xl: max-w-1240
import { raleway } from "./fonts";
import { poppins } from "./fonts";

const headersTailwind = {
  header1Tailwind: [`${raleway.className}`],
  header2Tailwind: [`${raleway.className}`],
  header3Tailwind: [`${raleway.className}`, "text-2xl", "font-bold"],
  header4Tailwind: [
    `${raleway.className}`,
    "text-lg",
    "font-semibold",
    "uppercase",
  ],
  header5Tailwind: [
    `${raleway.className}`,
    "text-base",
    "bg-backgroundLightBlue",
    "inline-block",
    "font-bold",
  ],
  header6Tailwind: [
    `${raleway.className}`,
    "text-md",
    "font-semibold",
    "uppercase",
  ],
};
const paragraphTailwind = ["text-paragraphText", "text-md"];
const anchorTailwind = [
  "text-anchorBlue",
  "no-underline",
  "hover:text-anchorBlueHover",
  "hover:underline",
  "hover:decoration-anchorBlueHover",
];
const unorderedListTailwind = ["pl-6", "list-disc", "list-outside"];
const listItemTailwind = ["pb-2"];

export {
  headersTailwind,
  paragraphTailwind,
  anchorTailwind,
  unorderedListTailwind,
  listItemTailwind,
};
