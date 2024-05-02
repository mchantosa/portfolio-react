"use client";
import { Carousel } from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";
import Section from "./Section";
function AboutMeCarousel() {
  const carouselProps: CarouselProps = {
    transition: { type: "tween", duration: 0.4 },
    autoplay: true,
    children: undefined,
    loop: true,
  };
  return (
    <Carousel
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      {...carouselProps}
      className="rounded-xl"
    >
      <img
        src="/img/aboutme/about-me-1.jpg"
        className="h-full w-full object-cover"
        alt=""
      />
      <img
        src="/img/aboutme/about-me-2.jpg"
        className="h-full w-full object-cover"
        alt=""
      />
      <img
        src="/img/aboutme/about-me-3.jpg"
        className="h-full w-full object-cover"
        alt=""
      />
      <img
        src="/img/aboutme/about-me-4.jpg"
        className="h-full w-full object-cover"
        alt=""
      />
      <img
        src="/img/aboutme/about-me-5.jpg"
        className="h-full w-full object-cover"
        alt=""
      />
    </Carousel>
  );
}
function AboutMeDetailed() {
  const h3Tailwind = ["font-bold", "text-2xl", "text-headerBlue"];
  const pTailwind = ["italic"];
  const ulTailwind = ["list-none", "p-0"];
  const liTailwind = ["mb-20", "flex", "items-center"];
  const liStrongTailwind = ["mr-10"];
  const liIconTailwind = [
    "bx",
    "bx-chevron-right",
    "bx-xs",
    "mr-4",
    "text-anchorBlue",
    "leading-none",
  ];
  return (
    <>
      <h3 className={h3Tailwind.join(" ")}>
        Software Engineer, Fullstack Developer, Frontend, Backend, Web Developer
        &amp; Quality Assurance Engineer.
      </h3>
      <p className={pTailwind.join(" ")}>
        I enjoy hiking, reading, pushups, cuddling my naked cat, fire pits,
        coffee, tea, good food, Star Trek, SciFi, Scrabble, and puzzles.
      </p>
      <div className="row">
        <div className="w-6/12">
          <ul className={ulTailwind.join(" ")}>
            <li className={liTailwind.join(" ")}>
              <i className={liIconTailwind.join(" ")}></i>{" "}
              <strong className={liStrongTailwind.join(" ")}>Degree:</strong>{" "}
              <span>MA Mathematics</span>
            </li>
            <li className={liTailwind.join(" ")}>
              <i className={liIconTailwind.join(" ")}></i>{" "}
              <strong className={liStrongTailwind.join(" ")}>
                Availability:
              </strong>{" "}
              <span>Open to work</span>
            </li>
            <li className={liTailwind.join(" ")}>
              <i className={liIconTailwind.join(" ")}></i>{" "}
              <strong className={liStrongTailwind.join(" ")}>Freelance:</strong>{" "}
              <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="w-6/12">
          <ul className={ulTailwind.join(" ")}>
            <li className={liTailwind.join(" ")}>
              <i className={liIconTailwind.join(" ")}></i>{" "}
              <strong className={liStrongTailwind.join(" ")}>Email:</strong>{" "}
              <span>meganemmamoore@gmail.com</span>
            </li>
            <li className={liTailwind.join(" ")}>
              <i className={liIconTailwind.join(" ")}></i>{" "}
              <strong className={liStrongTailwind.join(" ")}>Phone:</strong>{" "}
              <span>336-978-4359</span>
            </li>
            <li className={liTailwind.join(" ")}>
              <i className={liIconTailwind.join(" ")}></i>{" "}
              <strong className={liStrongTailwind.join(" ")}>City:</strong>{" "}
              <span>Seattle, WA</span>
            </li>
          </ul>
        </div>
      </div>
      <p>
        I am currently training AI through code evaluation and annotation with{" "}
        <a href="https://www.dataannotation.tech/" target="_blank">
          DataAnnotation
        </a>
        . I also do freelance development on the side. Feel free to reach out if
        you have a project on which you would like to collaborate. Checkout my
        projects and portfolio for more information.
      </p>
    </>
  );
}
export default function About() {
  const pTailwind = ["text-sm"];
  return (
    <Section id="about" title="About" theme="white">
      <p className={pTailwind.join(" ")}>
        I am a software engineer, veteran, and mathematician. My passion lies in
        problem-solving, games, and puzzles. I spent several years doing
        Modeling and Simulation (primarily for DOD and DHS), then did a career
        transition to the software development space. In my spare time you would
        likely find me reading <u>The Expanse</u>, playing MTG, patronizing my
        local coffee shop, working out, or hiking in the beautiful PNW. I am
        enthusiastic, pragmatic, and committed to personal and professional
        development.
      </p>
      <div>
        <div className="w-5/12">
          <AboutMeCarousel />
        </div>
        <div className="w-7/12 pt-4 pt-lg-0 content" data-aos="fade-left">
          <AboutMeDetailed />
        </div>
      </div>
    </Section>
  );
}
