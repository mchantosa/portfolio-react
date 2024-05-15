"use client";
import ProjectPageTemplate from "@/app/portfolio/ProjectPageTemplate";
import {
  projectCarousel,
  projectDescription,
  projectInformation,
} from "./data";

export default function Page() {
  return (
    <ProjectPageTemplate
      projectCarousel={projectCarousel()}
      projectInformation={projectInformation()}
      projectDescription={projectDescription()}
    />
  );
}
