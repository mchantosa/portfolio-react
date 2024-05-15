import { CarouselPic } from "@/app/utils/GetImage";
import ProjectCarousel from "../ProjectCarousel";
import ProjectDescription from "../ProjectDescription";
import ProjectInformation from "../ProjectInformation";
import { anchorTailwind } from "@/app/styles/style";
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
          description: "My professional website site",
        },
        {
          heading: "Published",
          description: "Latest update: 2024-05-14",
        },
        {
          heading: "Project Url",
          description: (
            <a
              href="https://megan.chantosa.com"
              target="_blank"
              className={aTailwind.join(" ")}
            >
              megan.chantosa.com
            </a>
          ),
        },
        {
          heading: "Code",
          description: (
            <a
              href="https://github.com/mchantosa/portfolio-react"
              target="_blank"
              className={aTailwind.join(" ")}
            >
              Github repo
            </a>
          ),
        },
        {
          heading: "Stack",
          description: "React/Tailwind/HTML/CSS",
        },
      ]}
    />
  );
};

export const projectDescription = () => {
  const content = [
    {
      heading: "About Portfolio",
      description:
        "Perhaps this is a bit of Inception, a portfolio that self references. I had a lot of fun creating this portfolio. I left the bootstrap copyright reference in the footer. The template I used for this was HTML/JavaScript/CSS/Bootstrap. There is very little of the original code left, I kept the theme in spirit, but completely rebuilt and customized it using React and Tailwind. The only remaining HTML/CSS in this website is the printable resume I added to the template.",
    },
  ];
  return <ProjectDescription content={content} />;
};
