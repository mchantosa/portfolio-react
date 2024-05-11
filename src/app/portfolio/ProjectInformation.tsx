import React, { ReactNode } from "react";
import {headersTailwind} from "@/app/styles/style";


const projectInformationTailwind = {
  containerTailwind: ["p-7", "bg-backgroundLightGray", "shadow-2xl"],
  h3Tailwind: [
    ...headersTailwind.header3Tailwind,
    "pb-4",
    "mb-4",
    "border-b",
    "border-borderGray",
  ],
  ulTailwind: ["list-none", "p-0", "text-base"],
  liTailwind: ["mt-2", "first:mt-0"],
};
const { containerTailwind, h3Tailwind, ulTailwind, liTailwind } =
  projectInformationTailwind;

interface Props {
  content: { heading: string; description: string | ReactNode }[];
  children?: ReactNode;
}

const ProjectInformation: React.FC<Props> = ({ content, children }) => {
  return (
    <div className={containerTailwind.join(" ")}>
      <h3 className={h3Tailwind.join(" ")}>Project information</h3>
      <ul className={ulTailwind.join(" ")}>
        {content.map((c) => {
          return (
            <>
              <li className={liTailwind.join(" ")}>
                <strong>{c.heading}</strong>: {c.description}
              </li>
            </>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default ProjectInformation;
