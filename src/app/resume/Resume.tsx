import React from "react";
import Section from "../utils/Section";
import Row from "../utils/Row";
import Summary from "./Summary";
import Education from "./Education";
import Military from "./Military";
import Skills from "./Skills";
import Experience from "./Experience";
import { pTailwind, aTailwind } from "../resume/resumeStyles";

export default function Resume() {
  return (
    <Section id="resume" title="Resume" theme="gray" additionalClassName="">
      <p className={(pTailwind.join(" "), "pb-4")}>
        <a
          href="./printable-resume.html"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          Printable Resume
        </a>
      </p>
      <Row scale="large" additionalClassName="pb-4">
        <p className={pTailwind.join(" ")}>
          I live in the greater Seattle area. When I moved to Seattle, I brought
          lessons learned from my commutes in DC. We picked the loveliest
          commute (by ferry) and kept going until we could afford a home. I do
          enjoy a hybrid schedule. My favorite schedule has been weekly, 2-3
          days in, 2-3 days remote. That gives me the best of both worlds, the
          occasional happy hour/team lunch and parent teacher conference
          availability with time to devote to physical fitness.
        </p>
      </Row>
      <Row scale="large">
        <div className="lg:w-5/12">
          <Summary />
          <Education />
          <Military />
          <Skills />
        </div>
        <div className="lg:w-6/12">
          <Experience />
        </div>
      </Row>
    </Section>
  );
}
