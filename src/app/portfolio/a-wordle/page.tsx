"use client";
import Section from "@/app/utils/Section";
import Row from "@/app/utils/Row";
import ProjectCarousel from "../ProjectCarousel";
import ProjectInformation from "./ProjectInformation";
import ProjectDetails from "./ProjectDescription";
import { portfolioDetailsTailwindGroup } from "../style";
const { pageTailwind, containerTailwind } = portfolioDetailsTailwindGroup;

export default function Page() {
  return (
    <Section
      id="a-wordle"
      theme="gray"
      additionalClassName={pageTailwind.join(" ")}
    >
      <div className={containerTailwind.join(" ")}>
        <Row scale="large" additionalClassName="items-center justify-start">
          <div className="w-full lg:w-4/12">
            <ProjectCarousel>
              <img src="/img/portfolio/awordle/game.png" alt="" />
              <img src="/img/portfolio/awordle/dictionary.jpg" alt="" />
              <img src="/img/portfolio/awordle/brunch.jpg" alt="" />
            </ProjectCarousel>
          </div>
          <div className="w-full lg:w-6/12">
            <ProjectInformation />
          </div>
        </Row>
        <Row scale="large">
          <ProjectDetails />
        </Row>
      </div>
    </Section>
  );
}
