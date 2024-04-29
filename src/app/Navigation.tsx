"use client";
import { useState } from "react";
import { poppins } from "./fonts";
// import { MouseEventHandler } from "react";

function SocialMediaLinks() {
  const profileAnchorTailwind = [
    "no-underline",
    "hover:no-underline",
    "cursor-pointer",
  ];
  const imageTailwind = [
    "mx-auto",
    "block",
    "w-48",
    "border-8",
    "border-solid",
    "border-gray-900",
    "rounded-full",
  ];
  const h1Tailwind = [
    "text-2xl",
    "font-semibold",
    "text-center",
    "text-white",
    poppins.className,
  ];
  const socialLinksTailwind = ["mt-3", "flex", "justify-center"];
  const socialAnchorTailwind = [
    "text-sm",
    "flex", // Flex container
    "items-center", // Center items vertically
    "justify-center", // Center items horizontally
    "bg-medDarkGray",
    "text-white",
    "leading-none",
    "mr-1",
    "rounded-full",
    "text-center",
    "w-9",
    "h-9",
    "transition",
    "duration-300",
    "hover:bg-anchorBlue",
    "hover:text-white",
    "hover:no-underline",
  ];

  return (
    <div className="profile">
      <a href="#hero" className={profileAnchorTailwind.join(" ")}>
        <img
          src="img/profile-img.jpg"
          alt=""
          className={imageTailwind.join(" ")}
        />
        <h1 className={h1Tailwind.join(" ")}>Megan Chantosa</h1>
      </a>
      <div className={socialLinksTailwind.join(" ")}>
        <a
          href="https://twitter.com/MChantosa"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-twitter bx-xs"></i>
        </a>
        <a
          href="https://www.facebook.com/megan.chantosa"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-facebook bx-xs"></i>
        </a>
        <a
          href="https://www.instagram.com/mchantosa/"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-instagram bx-xs"></i>
        </a>
        <a
          href="https://github.com/mchantosa"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-github bx-xs"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mchantosa/"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-linkedin bx-xs"></i>
        </a>
      </div>
    </div>
  );
}

function PageLink(props: { href: string; boxicon: string; text: string }) {
  const aTailwind = [
    //nav-link scrollto active
    "focus: flex",
    "items-center",
    "text-gray-300",
    "p-3",
    "mb-2",
    "transition",
    "duration-300",
    "ease-in-out",
    "text-base",
  ];

  const aHoverTailwind = ["text-white", "no-underline"].map(
    (el) => "hover:" + el
  );

  const iTailwind = ["text-3xl", "pr-2", "text-gray-500"];

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a
        href={props.href}
        className={[...aTailwind, ...aHoverTailwind].join(" ")}
      >
        <i
          className={[
            props.boxicon,
            ...iTailwind,
            isHovered ? "text-anchorBlue" : "",
          ].join(" ")}
        ></i>
        <span>{props.text}</span>
      </a>
    </div>
  );
}

function PageLinks() {
  const navLinksTailwind = ["pt-30"]; //navbar
  // const navLinksChildrenTailwind = ["m-0", "p-0", "list-none"]; //scrollto active
  const ulTailwind = ["relative", "whitespace-nowrap"];
  const liTailwind = [...ulTailwind];

  return (
    <nav id="navbar" className={navLinksTailwind.join(" ")}>
      <ul className={ulTailwind.join(" ")}>
        <li className={liTailwind.join(" ")}>
          <PageLink href="#hero" text="Home" boxicon="bx bx-home bx-sm" />
        </li>
        <li className={liTailwind.join(" ")}>
          <PageLink href="#about" text="About" boxicon="bx bx-user bx-sm" />
        </li>
        <li className={liTailwind.join(" ")}>
          <PageLink
            href="#resume"
            text="Resume"
            boxicon="bx bx-file-blank bx-sm"
          />
        </li>
        <li className={liTailwind.join(" ")}>
          <PageLink
            href="#portfolio"
            text="Portfolio"
            boxicon="bx bx-book-content bx-sm"
          />
        </li>
        {/* <!-- <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> --> */}
        <li className={liTailwind.join(" ")}>
          <PageLink
            href="#contact"
            text="Contact"
            boxicon="bx bx-envelope bx-sm"
          />
        </li>
      </ul>
    </nav>
  );
}

function Menu() {
  //   const menuStyle: React.CSSProperties = {
  //     position: "fixed",
  //     top: 0,
  //     left: 0,
  //     bottom: 0,
  //     width: "300px",
  //     zIndex: 9997,
  //     padding: "0 15px",
  //     background: "#040b14",
  //     // transition: "all 0.5s",
  //     overflowY: "auto",
  //   };
  const menuTailwind = [
    "fixed",
    "top-0",
    "left-0",
    "bottom-0",
    "w-72",
    "z-50",
    "px-4",
    "py-6",
    "bg-darkGrayBlackBlue",
    "overflow-y-auto",
  ];

  return (
    <div className={menuTailwind.join(" ")}>
      <SocialMediaLinks />
      <PageLinks />
    </div>
  );
}

function Hamburger() {
  //const [menuOpen, setMenuOpen] = useState(false);
  const hamburgerTailwind = ["absolute", "top-0", "right-0", "m-8"];
  return (
    <>
      <i
        onClick={() => console.log("hello from hamburger")}
        className={"bx bx-menu" + hamburgerTailwind.join(" ")}
      ></i>
      <i
        onClick={() => console.log("hello from close hamburger")}
        className={"bx bx-x" + hamburgerTailwind.join(" ")}
      ></i>
    </>
  );
}

export default function Navigation() {
  return (
    <>
      <Hamburger />
      <Menu />
    </>
  );
}
