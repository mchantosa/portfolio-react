import {
  anchorTailwind,
  unorderedListTailwind,
  listItemTailwind,
  paragraphTailwind,
  headersTailwind,
} from "../styles/style";
import { poppins } from "../styles/fonts";

const aTailwind = anchorTailwind;
const ulTailwind = unorderedListTailwind;
const liTailwind = listItemTailwind;
const pTailwind = [...paragraphTailwind, "pb-2"];

const h3Tailwind = [
  ...headersTailwind.header3Tailwind,
  "mt-5",
  "mb-5",
  "text-headerGray",
];

const h4Tailwind = [
  ...headersTailwind.header4Tailwind,
  poppins.className,
  "text-headerBlue",
  "leading-5",
  "mb-2",
];

const h5Tailwind = [...headersTailwind.header5Tailwind, "px-4", "py-1", "mb-2"];

const h6Tailwind = [
  ...headersTailwind.header6Tailwind,
  "text-borderBlue",
  "mb-4",
];

export {
  aTailwind,
  ulTailwind,
  liTailwind,
  pTailwind,
  h3Tailwind,
  h4Tailwind,
  h5Tailwind,
  h6Tailwind,
};
