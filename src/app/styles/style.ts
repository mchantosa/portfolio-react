// const sectionTailwind = ["p-8", "md:p-16", "overflow-hidden", "lg:ml-72"];
// widths: sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536
// max-w:  sm: 700, md: 900, lg: 1100, xl: max-w-1240

const sectionTailwind = ["flex", "flex-col", "items-center", "overflow-hidden"];
const sectionWhiteTailwind = [...sectionTailwind, "bg-white"];
const sectionGrayTailwind = [...sectionTailwind, "bg-backgroundGray"];
const sectionContainerTailwind = [
  "p-8",
  // "sm:max-w-xl",
  // "md:max-w-2xl",
  // "lg:max-w-3xl",
  // "xl:max-w-4xl",
  // "px-4",
];
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

const paragraphTailwind = ["text-paragraphText", "text-md"];

const anchorTailwind = [
  "text-anchorBlue",
  "no-underline",
  "hover:text-anchorBlueHover",
  "hover:underline",
  "hover:decoration-anchorBlueHover",
];

export {
  sectionWhiteTailwindGroup,
  sectionGrayTailwindGroup,
  paragraphTailwind,
  anchorTailwind,
};
