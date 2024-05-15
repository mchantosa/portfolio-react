import Section from "../utils/Section";
import Row from "../utils/Row";
import PortfolioItem from "./PortfolioItem";
import FilterMenu from "./FilterMenu";
import React from "react";
import { paragraphTailwind } from "../styles/style";
import { projectCarousel as projectCarouselInnerCircle } from "./inner-circle/data";
import { projectInformation as projectInformationInnerCircle } from "./inner-circle/data";
import { projectCarousel as projectCarouselAWordle } from "./a-wordle/data";
import { projectInformation as projectInformationAWordle } from "./a-wordle/data";
import { projectCarousel as projectCarouselPortfolio } from "./portfolio/data";
import { projectInformation as projectInformationPortfolio } from "./portfolio/data";
const pTailwind = paragraphTailwind;
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = React.useState("*");
  const portfolioItems = [
    {
      imageLocation: "/images/portfolio/inner-circle/logo.png",
      link: "/portfolio/inner-circle",
      title: "InnerCircle",
      filter: "*react",
      projectCarousel: projectCarouselInnerCircle(),
      projectInformation: projectInformationInnerCircle(),
    },
    {
      imageLocation: "/images/portfolio/a-wordle/game.png",
      link: "/portfolio/a-wordle",
      title: "A Wordle Game",
      filter: "*htmlcssjavascript",
      projectCarousel: projectCarouselAWordle(),
      projectInformation: projectInformationAWordle(),
    },
    {
      imageLocation: "/images/portfolio/portfolio/screenCapture.gif",
      link: "/portfolio/portfolio",
      title: "My Portfolio",
      filter: "*reacthtmlcssjavascript",
      projectCarousel: projectCarouselPortfolio(),
      projectInformation: projectInformationPortfolio(),
    },
  ];
  return (
    <Section id="portfolio" title="Portfolio" theme="white">
      <Row scale="large" additionalClassName="pb-4">
        <p className={(pTailwind.join(" "), "pb-4")}>
          I have created a web application called InnerCircle and a Wordle
          inspired game, as well as this website to showcase my skill set.
          InnerCircle is uses the Fresh framework, Preact, Tailwind, and Daisy
          UI on Deno with Deno-KV for a datastore. The Wordle inspired
          application is an example of a single page web application that uses
          strictly JavaScript, CSS, and HTML and not hosted, but served through
          githubraw. This website is done with React and Tailwind in a NextJS
          framework.
        </p>
      </Row>
      <Row scale="large" additionalClassName="my-5, justify-center">
        <FilterMenu
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </Row>
      <Row
        scale="large"
        additionalClassName="flex justify-center flex-wrap items-center"
      >
        {portfolioItems
          .filter((item) => item.filter.includes(activeFilter))
          .map((item, index) => (
            <div className="w-3/12 min-w-[350px]" key={index}>
              <PortfolioItem
                imageLocation={item.imageLocation}
                link={item.link}
                title={item.title}
                projectCarousel={item.projectCarousel}
                projectInformation={item.projectInformation}
              />{" "}
            </div>
          ))}
      </Row>
    </Section>
  );
}
