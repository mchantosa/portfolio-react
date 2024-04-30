import { useState } from "react";

function PageLink(props: {
  active: string;
  setActive: Function;
  href: string;
  boxicon: string;
  text: string;
}) {
  const aTailwind = [
    "focus: flex",
    "items-center",
    "p-3",
    "mb-2",
    "text-sm",
    "transition",
    "duration-300",
    "ease-in-out",
  ];

  const aHoverTailwind = ["text-white", "no-underline"].map(
    (el) => "hover:" + el
  );

  const iTailwind = [
    "text-3xl",
    "pr-2",
    "transition",
    "duration-300",
    "ease-in-out",
  ];

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => props.setActive(props.href)}
    >
      <a
        href={props.href}
        className={[
          ...aTailwind,
          ...aHoverTailwind,
          props.active === props.href ? "text-white" : "text-gray-400",
        ].join(" ")}
      >
        <i
          className={[
            props.boxicon,
            ...iTailwind,
            isHovered || props.active === props.href
              ? "text-anchorBlue"
              : "text-gray-500",
          ].join(" ")}
        ></i>
        <span>{props.text}</span>
      </a>
    </div>
  );
}

export default function PageLinks() {
  const navLinksTailwind = ["pt-8"]; //navbar
  // const navLinksChildrenTailwind = ["m-0", "p-0", "list-none"]; //scrollto active
  const ulTailwind = ["relative", "whitespace-nowrap"];
  const liTailwind = [...ulTailwind];

  const [active, setActive] = useState("#hero");

  return (
    <nav id="navbar" className={navLinksTailwind.join(" ")}>
      <ul className={ulTailwind.join(" ")}>
        <li className={liTailwind.join(" ")}>
          <PageLink
            active={active}
            setActive={setActive}
            href="#hero"
            text="Home"
            boxicon="bx bx-home bx-sm"
          />
        </li>
        <li className={liTailwind.join(" ")}>
          <PageLink
            active={active}
            setActive={setActive}
            href="#about"
            text="About"
            boxicon="bx bx-user bx-sm"
          />
        </li>
        <li className={liTailwind.join(" ")}>
          <PageLink
            active={active}
            setActive={setActive}
            href="#resume"
            text="Resume"
            boxicon="bx bx-file-blank bx-sm"
          />
        </li>
        <li className={liTailwind.join(" ")}>
          <PageLink
            active={active}
            setActive={setActive}
            href="#portfolio"
            text="Portfolio"
            boxicon="bx bx-book-content bx-sm"
          />
        </li>
        {/* <!-- <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> --> */}
        <li className={liTailwind.join(" ")}>
          <PageLink
            active={active}
            setActive={setActive}
            href="#contact"
            text="Contact"
            boxicon="bx bx-envelope bx-sm"
          />
        </li>
      </ul>
    </nav>
  );
}
