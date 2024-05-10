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

export { sectionWhiteTailwindGroup, sectionGrayTailwindGroup };
