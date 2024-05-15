import { truncate } from "fs";
import React from "react";
import ProjectModal from "./ProjectModal";
import Image from "next/image";

export default function PortfolioItem(props: {
  imageLocation: string;
  link: string;
  title: string;
  projectCarousel: React.ReactNode;
  projectInformation: React.ReactNode;
}) {
  const wrapTailwind = [
    "flex",
    "flex-col",
    "relative",
    "animate-slide-in-right",
    "overflow-hidden",
  ];

  const imgTailwind = ["w-full", "h-auto", "relative", "z-10"];

  const linksTailwind = [
    "flex",
    "justify-center",
    "z-30",
    "animate-slide-in-bottom",
    "bg-anchorBlue/75",
  ];
  const aTailwind = [
    "text-white",
    "text-4xl",
    "text-center",
    "w-6/12",
    "hover:bg-anchorBlue",
  ];

  const { imageLocation, link, projectCarousel, projectInformation } = props;
  const [hovering, setHovering] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      className={[...wrapTailwind].join(" ")}
    >
      <Image
        src={imageLocation}
        alt=""
        width={350}
        height={350}
        className={imgTailwind.join(" ")}
      />
      {hovering && (
        <div className={[...linksTailwind, "-mt-16"].join(" ")}>
          <span
            onClick={() => {
              setModal(true);
            }}
            className={aTailwind.join(" ")}
          >
            <i className="bx bx-plus"></i>
          </span>
          <a href={link} className={aTailwind.join(" ")}>
            <i className="bx bx-link"></i>
          </a>
        </div>
      )}
      {modal && (
        <ProjectModal
          projectCarousel={projectCarousel}
          ProjectDescription={projectInformation}
          setModal={setModal}
          setHovering={setHovering}
        />
      )}
    </div>
  );
}
