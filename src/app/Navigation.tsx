"use client";
import { useState, useEffect } from "react";
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

function Hamburger(props: { isOpen: boolean; setIsOpen: Function }) {
  const hamburgerTailwind = [
    "flex", // Flex container
    "items-center", // Center items vertically
    "justify-center", // Center items horizontally
    "fixed",
    "top-4",
    "right-4",
    "w-10",
    "h-10",
    "z-50",
    "text-white",
    "bg-anchorBlue",
    "cursor-pointer",
    "rounded-full",
  ];

  return (
    <>
      {!props.isOpen && (
        <div className={[...hamburgerTailwind].join(" ")}>
          <i
            onClick={() => props.setIsOpen(true)}
            className="bx bx-menu bx-sm"
          ></i>
        </div>
      )}
      {props.isOpen && (
        <div className={[...hamburgerTailwind].join(" ")}>
          <i
            onClick={() => props.setIsOpen(false)}
            className="bx bx-x bx-sm"
          ></i>
        </div>
      )}
    </>
  );
}

export default function Navigation() {
  const [hasMobileToggle, setHasMobileToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check the window size after the component is mounted
    const handleResize = () => {
      if (window.innerWidth > 1240) {
        setHasMobileToggle(false);
        setIsOpen(true);
      } else {
        setHasMobileToggle(true);
        setIsOpen(false);
      }
    };

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <>
      {hasMobileToggle && <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />}
      {isOpen && <Menu />}
    </>
  );
}
