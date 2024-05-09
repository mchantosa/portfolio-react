import SubSection from "./Subsection";
import ResumeItem from "./ResumeItem";
import { h4Tailwind, pTailwind, ulTailwind, liTailwind } from "./style";

export default function Summary() {
  return (
    <SubSection title="Summary">
      <ResumeItem>
        <h4 className={h4Tailwind.join(" ")}>Megan Chantosa</h4>
        <p className={pTailwind.join(" ")}>
          <em>
            I am a software engineer, currently open to data science, fullstack,
            frontend, and backend development and quality assurance engineer
            opportunities.
          </em>
        </p>
        <ul className={ulTailwind.join(" ")}>
          <li className={liTailwind.join(" ")}>Seattle, WA</li>
          <li className={liTailwind.join(" ")}>336-978-4359</li>
          <li className={liTailwind.join(" ")}>meganemmamoore@gmail.com</li>
        </ul>
      </ResumeItem>
    </SubSection>
  );
}
