import { truncate } from "fs";
import React from "react";

export default function PortfolioItem(props: {
  imageName: string;
  link: string;
  title: string;
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

  const { imageName, link, title } = props;
  const [hovering, setHovering] = React.useState(false);

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
      <img
        src={"/img/portfolio/" + imageName}
        className={imgTailwind.join(" ")}
        alt=""
      />
      {hovering && (
        <div className={[...linksTailwind, "-mt-16"].join(" ")}>
          <a
            href={"/img/portfolio/" + imageName}
            className={aTailwind.join(" ")}
            title={title + "Logo"}
          >
            <i className="bx bx-plus"></i>
          </a>
          <a href={link} className={aTailwind.join(" ")}>
            <i className="bx bx-link"></i>
          </a>
        </div>
      )}
    </div>
  );
}
