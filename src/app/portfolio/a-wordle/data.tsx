import { CarouselPic } from "@/app/utils/GetImage";
import ProjectCarousel from "../ProjectCarousel";
import ProjectDescription from "../ProjectDescription";
import ProjectInformation from "../ProjectInformation";
import { anchorTailwind } from "@/app/styles/style";
import SeparatedList from "@/app/utils/SeparatedList";
import { skillDivTailwind } from "../style";
const aTailwind = anchorTailwind;

export const projectCarousel: () => React.ReactNode = () => {
  return (
    <ProjectCarousel>
      <CarouselPic imageLocation="/images/portfolio/a-wordle/game.png" />
      <CarouselPic imageLocation="/images/portfolio/a-wordle/dictionary.jpg" />
      <CarouselPic imageLocation="/images/portfolio/a-wordle/brunch.jpg" />
    </ProjectCarousel>
  );
};

export const projectInformation: () => React.ReactNode = () => {
  const content = [
    {
      heading: "Description",
      description: "Single-page, vanilla, HTML/CSS/JavaScript application",
    },
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
    {
      heading: "Stack",
      description: (
        <SeparatedList
          list={["HTML", "CSS", "JavaScript"]}
          additionalClassName={skillDivTailwind.join(" ")}
        />
      ),
    },
  ];
  return <ProjectInformation content={content} />;
};

export const projectDescription: () => React.ReactNode = () => {
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
