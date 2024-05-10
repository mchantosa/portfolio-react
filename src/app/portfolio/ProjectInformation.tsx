import React, { ReactNode } from "react";
import { portfolioTailwindGroup } from "./style";

const { containerTailwind, h3Tailwind, ulTailwind, liTailwind } =
  portfolioTailwindGroup.projectInfoTailwind;

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
