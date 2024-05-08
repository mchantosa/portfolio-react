import SubSection from "./Subsection";
import ResumeItem from "./ResumeItem";
import { h4Tailwind, h5Tailwind, pTailwind } from "../resume/resumeStyles";

export default function Education() {
  return (
    <SubSection title="Education">
      <ResumeItem>
        <h4 className={h4Tailwind.join(" ")}>Code Academy, Launch School</h4>
        <h5 className={h5Tailwind.join(" ")}>2021 - 2023</h5>
        <p className={pTailwind.join(" ")}>
          <em>Completed fullstack JavaScript track</em>
        </p>
      </ResumeItem>
      <ResumeItem>
        <h4 className={h4Tailwind.join(" ")}>MA, Wake Forest University</h4>
        <h5 className={h5Tailwind.join(" ")}>2006 - 2008</h5>
        <p className={pTailwind.join(" ")}>
          <em>Mathematics</em>
        </p>
      </ResumeItem>
      <ResumeItem>
        <h4 className={h4Tailwind.join(" ")}>
          BS, North Carolina State University
        </h4>
        <h5 className={h5Tailwind.join(" ")}>2004 - 2006</h5>
        <p className={pTailwind.join(" ")}>
          <em>Mathematics</em>
        </p>
      </ResumeItem>
    </SubSection>
  );
}
