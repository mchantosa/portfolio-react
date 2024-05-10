"use client";
import AboutCarousel from "./AboutCarousel";
import AboutDetailed from "./AboutDetailed";
import Section from "../utils/Section";
import Row from "../utils/Row";
import { paragraphTailwind } from "../styles/style";

export default function About() {
  const pTailwind = paragraphTailwind;
  return (
    <Section id="about" title="About" theme="white" additionalClassName="">
      <Row scale="large" additionalClassName="pb-4">
        <p className={pTailwind.join(" ")}>
          I am a software engineer, veteran, and mathematician. My passion lies
          in problem-solving, games, and puzzles. I spent several years doing
          Modeling and Simulation (primarily for DOD and DHS), then did a career
          transition to the software development space. In my spare time you
          would likely find me reading <u>The Expanse</u>, playing MTG,
          patronizing my local coffee shop, working out, or hiking in the
          beautiful PNW. I am enthusiastic, pragmatic, and committed to personal
          and professional development.
        </p>
      </Row>
      <Row scale="large">
        <div className="lg:w-5/12 w-full max-w-2xl pb-4 lg:pb-0 animate-fade-in-fast">
          <AboutCarousel />
        </div>
        <div className="w-full lg:w-7/12 animate-slide-in-right">
          <AboutDetailed />
        </div>
      </Row>
    </Section>
  );
}
