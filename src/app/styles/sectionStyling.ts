const sectionWhiteTailwind = ["py-16", "overflow-hidden", "bg-white"];
const sectionGrayTailwind = ["py-16", "overflow-hidden", "bg-backgroundGray"];
const sectionTitleTailwind = [
  "pb-8",
  "text-2xl",
  "font-bold",
  "mb-5",
  "pb-5",
  "relative",
  "text-headerBlue",
];
const sectionTitleAfterTailwind = [
  "content-['']",
  "absolute",
  "block",
  "w-12",
  "h-1",
  "bg-anchorBlue",
  "bottom-0",
  "left-0",
].map((el) => "after:" + el);

const sectionWhiteTailwindGroup: {
  sectionTailwind: string[];
  sectionTitleTailwind: string[];
  sectionTitleAfterTailwind: string[];
} = {
  sectionTailwind: sectionWhiteTailwind,
  sectionTitleTailwind: sectionTitleTailwind,
  sectionTitleAfterTailwind: sectionTitleAfterTailwind,
};

const sectionGrayTailwindGroup: {
  sectionTailwind: string[];
  sectionTitleTailwind: string[];
  sectionTitleAfterTailwind: string[];
} = {
  sectionTailwind: sectionGrayTailwind,
  sectionTitleTailwind: sectionTitleTailwind,
  sectionTitleAfterTailwind: sectionTitleAfterTailwind,
};

const mediaQueries = {
  mobile: "screen and (max-width: 768px)",
  tablet: "screen and (max-width: 1024px)",
  desktop: "screen and (max-width: 1440px)",
}

export { sectionWhiteTailwindGroup, sectionGrayTailwindGroup, mediaQueries};
