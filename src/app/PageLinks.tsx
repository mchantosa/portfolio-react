import { useState } from "react";

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

export default function PageLinks() {
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
