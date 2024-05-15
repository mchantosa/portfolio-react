import React from "react";
import { paragraphTailwind } from "../styles/style";
import { h6Tailwind } from "./style";
import SeparatedList from "../utils/SeparatedList";

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
      <SeparatedList
        list={skills}
        additionalClassName={skillDivTailwind.join(" ")}
      />
    </>
  );
}
