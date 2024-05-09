"use client";
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
        title="A Wordle Details"
        crumbs={[
          { title: "Home", link: "/" },
          { title: "Portfolio", link: "/#portfolio" },
          { title: "A Wordle", link: "" },
        ]}
      />
      <div className={containerTailwind.join(" ")}>
        <section>
          <div>
            <Row scale="large" additionalClassName="items-center justify-start">
              <div className="w-full lg:w-4/12">
                <ProjectCarousel>
                  <img src="/img/portfolio/awordle/game.png" alt="" />
                  <img src="/img/portfolio/awordle/dictionary.jpg" alt="" />
                  <img src="/img/portfolio/awordle/brunch.jpg" alt="" />
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
