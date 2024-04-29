"use client";
import { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import PageLinks from "./PageLinks";

function Menu() {
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
