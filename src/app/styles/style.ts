// widths: sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536
// max-w:  sm: 700, md: 900, lg: 1100, xl: max-w-1240
import { raleway } from "./fonts";
import { poppins } from "./fonts";

const sectionTailwind = ["flex", "flex-col", "items-center", "overflow-hidden"];
const sectionWhiteTailwind = [...sectionTailwind, "bg-white"];
const sectionGrayTailwind = [...sectionTailwind, "bg-backgroundGray"];
const sectionContainerTailwind = ["px-4", "py-14", "md:px-8"];
const sectionTitleTailwind = [
  "text-4xl",
  "font-bold",
  "mb-5",
  "pb-5",
  "relative",
  "text-headerBlue",
];
const sectionTitleAfterTailwind = [
  "after:block",
  "after:absolute",
  "after:bottom-0",
  "after:left-0",
  "after:w-12",
  "after:h-1",
  "after:bg-anchorBlue",
  "after:content-['']",
];

const sectionWhiteTailwindGroup: {
  sectionTailwind: string[];
  containerTailwind: string[];
  sectionTitleTailwind: string[];
  sectionTitleAfterTailwind: string[];
} = {
  sectionTailwind: sectionWhiteTailwind,
  containerTailwind: sectionContainerTailwind,
  sectionTitleTailwind: sectionTitleTailwind,
  sectionTitleAfterTailwind: sectionTitleAfterTailwind,
};

const sectionGrayTailwindGroup: {
  sectionTailwind: string[];
  containerTailwind: string[];
  sectionTitleTailwind: string[];
  sectionTitleAfterTailwind: string[];
} = {
  sectionTailwind: sectionGrayTailwind,
  containerTailwind: sectionContainerTailwind,
  sectionTitleTailwind: sectionTitleTailwind,
  sectionTitleAfterTailwind: sectionTitleAfterTailwind,
};

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
  sectionWhiteTailwindGroup,
  sectionGrayTailwindGroup,
  headersTailwind,
  paragraphTailwind,
  anchorTailwind,
  unorderedListTailwind,
  listItemTailwind,
};
