"use client";
import React from "react";
import ProjectCarousel from "../ProjectCarousel";
import ProjectDescription from "../ProjectDescription";
import ProjectInformation from "../ProjectInformation";
import ProjectPageTemplate from "../ProjectPageTemplate";
import { anchorTailwind } from "@/app/styles/style";
const aTailwind = anchorTailwind;

const projectCarousel = () => {
  return (
    <ProjectCarousel>
      <img src="/img/portfolio/awordle/game.png" alt="" />
      <img src="/img/portfolio/awordle/dictionary.jpg" alt="" />
      <img src="/img/portfolio/awordle/brunch.jpg" alt="" />
    </ProjectCarousel>
  );
};

const projectInformation = () => {
  const content = [
    { heading: "Category", description: "Dynamic web application" },
    { heading: "Client", description: "Independent project" },
    { heading: "Project date", description: "Published May 2023" },
    {
      heading: "Project status",
      description: "Maintained, bug fixes and updates",
    },
    {
      heading: "Project URL",
      description: (
        <a
          href="https://githubraw.com/mchantosa/demos/main/awordle.html"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          Play A Wordle
        </a>
      ),
    },
    {
      heading: "Code",
      description: (
        <a
          href="https://github.com/mchantosa/demos/blob/main/awordle.html"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          Github repo
        </a>
      ),
    },
    { heading: "Stack", description: "JavaScript, HTML, CSS" },
  ];
  return <ProjectInformation content={content} />;
};

const projectDescription = () => {
  const content = [
    {
      heading: "About A Wordle",
      description:
        "This was an application I made for a technical challenge that requested a simple demo of code that could be communicated via gist. It took me a day to throw together and I had a lot of fun making it. I used two different dictionary APIs, one to generate a random word and one for definitions and checking that a user entered work is valid. I use ajax calls with each turn to validate then update the game state.",
    },
    {
      heading: "Use case",
      description:
        "My family loves this game because the dictionaries are really really mean. This has become a family game we play communally when we go out and are waiting, usually food. The game does give you the definition in the end, so it can be a learning experience as well.",
    },
  ];

  return <ProjectDescription content={content} />;
};

export default function Page() {
  return (
    <ProjectPageTemplate
      projectCarousel={projectCarousel()}
      projectInformation={projectInformation()}
      projectDescription={projectDescription()}
    />
  );
}
