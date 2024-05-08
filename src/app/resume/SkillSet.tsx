import React from "react";
import { paragraphTailwind } from "../styles/style";
import { h6Tailwind } from "../resume/resumeStyles";

const spanTailwind = ["text-anchorBlue", "font-bold"];
const skillDivTailwind = [
    ...paragraphTailwind,
    "flex",
    "flex-row",
    "flex-wrap",
    "items-center",
    "justify-center",
    "gap-2",
    "pb-4",
    "px-8",
  ];
export default function SkillSet(props: {
  skillTitle: string;
  skills: string[];
  children: any;
}) {

  const { skillTitle, skills } = props;

  return (
    <>
      <h6 className={h6Tailwind.join(" ")}>{skillTitle}</h6>
      <div className={skillDivTailwind.join(" ")}>
        {skills.map((item, index) => (
          <React.Fragment key={item}>
            {index > 0 && (
              <span className={spanTailwind.join(" ")}>
                &nbsp;&#x25AA;&nbsp;
              </span>
            )}
            {item}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
