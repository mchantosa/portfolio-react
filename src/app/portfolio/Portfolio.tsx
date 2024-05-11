import Section from "../utils/Section";
import Row from "../utils/Row";
import PortfolioItem from "./PortfolioItem";
import FilterMenu from "./FilterMenu";
import React from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = React.useState("*");
  const portfolioItems = [
    {
      imageName: "innercircle/logo.png",
      link: "/innercircle",
      title: "InnerCircle",
      filter: "*react",
    },
    {
      imageName: "awordle/game.png",
      link: "/aWordle",
      title: "A Wordle Game",
      filter: "*htmlcssjavascript",
    },
  ];
  return (
    <Section id="portfolio" title="Portfolio" theme="white">
      <p>
        I have created a web application called InnerCircle and a Wordle
        inspired game, as well as this website to showcase my skill set.
        InnerCircle is uses the Fresh framework, Preact, Tailwind, and Daisy UI
        on Deno with Deno-KV for a datastore. The Wordle inspired application is
        an example of a single page web application that uses strictly
        JavaScript, CSS, and HTML and not hosted, but served through githubraw.
        This website is derived from a bootstrap template and hosted on Deno.
      </p>
      <Row scale="large" additionalClassName="my-5, justify-center">
        <FilterMenu
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </Row>
      <Row scale="large" additionalClassName="flex flex-wrap justify-left">
        {portfolioItems
          .filter((item) => item.filter.includes(activeFilter))
          .map((item) => (
            <div className="w-4/12">
              <PortfolioItem
                imageName={item.imageName}
                link={item.link}
                title={item.title}
              />{" "}
            </div>
          ))}
      </Row>
    </Section>
  );
}
