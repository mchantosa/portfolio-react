import React, { ReactNode } from "react";
import Section from "@/app/utils/Section";
import Row from "@/app/utils/Row";
import { portfolioDetailsTailwindGroup } from "./style";
const { pageTailwind, containerTailwind } = portfolioDetailsTailwindGroup;

export default function Page(props: {
  projectCarousel: React.ReactNode;
  projectInformation: React.ReactNode;
  projectDescription: React.ReactNode;
  children?: any;
}) {
  const { projectCarousel, projectInformation, projectDescription, children } =
    props;
  return (
    <Section
      id="inner-circle"
      theme="gray"
      additionalClassName={pageTailwind.join(" ")}
    >
      <div className={containerTailwind.join(" ")}>
        <div>
          <Row scale="large" additionalClassName="items-center justify-start">
            <div className="w-full lg:w-4/12 animate-fade-in-fast">
              {projectCarousel}
            </div>
            <div className="w-full lg:w-6/12 animate-slide-in-right">
              {projectInformation}
              {children}
            </div>
          </Row>
          <Row scale="large"> {projectDescription}</Row>
        </div>
      </div>
    </Section>
  );
}
