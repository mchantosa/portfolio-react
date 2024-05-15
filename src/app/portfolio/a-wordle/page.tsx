"use client";
import React from "react";
import {
  projectCarousel,
  projectDescription,
  projectInformation,
}  from "./data";
import ProjectPageTemplate from "../ProjectPageTemplate";


export default function Page() {
  return (
    <ProjectPageTemplate
      projectCarousel={projectCarousel()}
      projectInformation={projectInformation()}
      projectDescription={projectDescription()}
    />
  );
}
