import React, { ReactNode } from "react";
import Section from "@/app/utils/Section";
import Row from "@/app/utils/Row";

const pageTailwind = ["bg-white"];
const containerTailwind = [];

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
      <div /*className={containerTailwind.join(" ")}*/>
        <div>
          <Row
            scale="large"
            additionalClassName="items-center justify-center lg:justify-start pb-14 gap-8"
          >
            <div className="w-full max-w-2xl lg:w-5/12 animate-fade-in-fast">
              {projectCarousel}
            </div>
            <div className="w-full max-w-2xl lg:w-5/12 animate-slide-in-right">
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
