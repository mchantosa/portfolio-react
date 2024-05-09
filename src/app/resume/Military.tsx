import SubSection from "./Subsection";
import ResumeItem from "./ResumeItem";
import { h4Tailwind, h5Tailwind, pTailwind } from "./style";

export default function Military() {
  return (
    <SubSection title="Military">
      <ResumeItem>
        <h4 className={h4Tailwind.join(" ")}>
          US Army, Non Commissioned Officer, E5
        </h4>
        <h5 className={h5Tailwind.join(" ")}>1999 - 2003</h5>
        <p className={pTailwind.join(" ")}>
          <em> Nuclear, Biological, and Chemical Reconnaissance</em>
        </p>
      </ResumeItem>
    </SubSection>
  );
}
