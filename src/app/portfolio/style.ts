import { headersTailwind } from "@/app/styles/style";
const { header2Tailwind, header3Tailwind } = headersTailwind;
const portfolioTailwind = {
  projectInfoTailwind: {
    containerTailwind: ["p-7", "bg-backgroundLightGray", "shadow-2xl"],
    h3Tailwind: [
      ...header3Tailwind,
      "pb-4",
      "mb-4",
      "border-b",
      "border-borderGray",
    ],
    ulTailwind: ["list-none", "p-0", "text-base"],
    liTailwind: ["mt-2", "first:mt-0"],
  },
  projectDescriptionTailwind: {
    containerTailwind: ["pt-7"],
    h2Tailwind: [...header2Tailwind, "text-2xl", "font-bold", "mb-4"],
    pTailwind: ["pb-6"],
  },
};

export default portfolioTailwind;
