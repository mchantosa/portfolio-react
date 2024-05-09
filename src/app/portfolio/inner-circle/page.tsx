"use client";
import React from "react";
import Header from "@/app/portfolio/Header";
import Row from "@/app/utils/Row";
import ProjectCarousel from "../ProjectCarousel";
import ProjectInformation from "./ProjectInformation";
import ProjectDetails from "./ProjectDescription";

const pageTailwind = ["bg-white"];
const containerTailwind = ["px-8", "md:px-16"];

export default function Page() {
  return (
    <main id="main" className={pageTailwind.join(" ")}>
      <Header
        title="InnerCircle Details"
        crumbs={[
          { title: "Home", link: "/" },
          { title: "Portfolio", link: "/#portfolio" },
          { title: "InnerCircle", link: "" },
        ]}
      />
      <div className={containerTailwind.join(" ")}>
        <section>
          <div>
            <Row scale="large" additionalClassName="items-center justify-start">
              <div className="w-full lg:w-4/12">
                <ProjectCarousel>
                  <img
                    src="/img/portfolio/innercircle/logo.png"
                    className="h-full y-full object-cover"
                    alt=""
                  />
                  <img
                    src="/img/portfolio/innercircle/coffee_desk.jpg"
                    alt=""
                  />
                  <img
                    src="/img/portfolio/innercircle/avatar_icon.png"
                    alt=""
                  />
                  <img
                    src="/img/portfolio/innercircle/coffee_toast.jpg"
                    alt=""
                  />
                  <img src="/img/portfolio/innercircle/letter.jpg" alt="" />
                </ProjectCarousel>
              </div>
              <div className="w-full lg:w-6/12">
                <ProjectInformation />
              </div>
            </Row>
            <Row scale="large">
              <ProjectDetails />
            </Row>
          </div>
        </section>
      </div>
    </main>
  );
}
