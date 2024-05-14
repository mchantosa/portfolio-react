"use client";
import ProjectPageTemplate from "@/app/portfolio/ProjectPageTemplate";
import ProjectCarousel from "@/app/portfolio/ProjectCarousel";
import ProjectInformation from "@/app/portfolio/ProjectInformation";
import ProjectDescription from "@/app/portfolio/ProjectDescription";
import { anchorTailwind } from "@/app/styles/style";
import { CarouselPic } from "@/app/utils/GetImage";
const aTailwind = anchorTailwind;

export const projectCarousel = () => {
  return (
    <ProjectCarousel>
      <CarouselPic imageLocation="/images/portfolio/portfolio/screenCapture.gif" />
      <CarouselPic imageLocation="/images/profile.jpg" />
      <CarouselPic imageLocation="/images/portfolio/portfolio/resume.gif" />
    </ProjectCarousel>
  );
};
export const projectInformation = () => {
  return (
    <ProjectInformation
      content={[
        {
          heading: "Description",
          description:
            "An aggregation and demo of skill, experience, education, and personality",
        },
        {
          heading: "Client",
          description: "My personal website site",
        },
        {
          heading: "Published",
          description: "My personal website site",
        },
        {
          heading: "Project Url",
          description: (
            <a
              href="https://megan.chantosa.com"
              target="_blank"
              className={[aTailwind].join(" ")}
            >
              megan.chantosa.com
            </a>
          ),
        },
        {
          heading: "Code",
          description: "",
        },
        {
          heading: "Stack",
          description: "React/Tailwind",
        },
      ]}
    />
  );
};

const projectDescription = () => {
  const content = [
    {
      heading: "About A Wordle",
      description:
        "A Wordle is a single page web application that uses strictly",
    },
    {
      heading: "About A Wordle",
      description:
        "A Wordle is a single page web application that uses strictly",
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
