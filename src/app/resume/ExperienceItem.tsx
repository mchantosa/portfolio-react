import ResumeItem from "./ResumeItem";
import { h4Tailwind, h5Tailwind, pTailwind } from "../resume/resumeStyles";
export default function ExperienceItem(props: {
  jobTitle: string;
  fromTo: string;
  where: string;
  children: any;
}) {
  const { jobTitle, fromTo, where, children } = props;

  return (
    <ResumeItem>
      <h4 className={h4Tailwind.join(" ")}>{jobTitle}</h4>
      <h5 className={h5Tailwind.join(" ")}>{fromTo}</h5>
      <p className={pTailwind.join(" ")}>
        <em>{where}</em>
      </p>
      {children}
    </ResumeItem>
  );
}
