"use client";
import { useEffect } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import PageLinks from "./PageLinks";
import { useGlobalState } from "../utils/GlobalStateContexts";
import { FooterNav } from "./Footer";
import React from "react";

function Menu() {
  const { openMenu } = useGlobalState();

  const menuTailwind = [
    "fixed",
    "top-0",
    "left-0",
    "bottom-0",
    "w-72",
    "p-4",
    "bg-darkGrayBlackBlue",
    "overflow-y-auto",
    openMenu ? "animate-slide-in-left" : "animate-slide-out-left",
    "z-40",
  ];

  return (
    <div className={menuTailwind.join(" ")}>
      <div className="mb-6">
        <SocialMediaLinks />
        <PageLinks />
      </div>
      <FooterNav />
    </div>
  );
}

function Hamburger() {
  const { openMenu, setOpenMenu, hasMobileToggle } = useGlobalState();

  const hamburgerTailwind = [
    "flex", // Flex container
    "items-center", // Center items vertically
    "justify-center", // Center items horizontally
    "fixed",
    "top-4",
    "right-4",
    "w-10",
    "h-10",
    "text-white",
    "bg-anchorBlue",
    "cursor-pointer",
    "rounded-full",
  ];

  return (
    <>
      {hasMobileToggle && (
        <div className={hamburgerTailwind.join(" ")} style={{ zIndex: 50 }}>
          <i
            onClick={() => {
              setOpenMenu(true);
              document.body.style.overflow = "hidden";
            }}
            className="bx bx-menu bx-sm"
          ></i>
        </div>
      )}
      {openMenu && (
        <div className={hamburgerTailwind.join(" ")} style={{ zIndex: 50 }}>
          <i
            onClick={() => {
              setOpenMenu(false);
              document.body.style.overflow = "auto";
            }}
            className="bx bx-x bx-sm"
          ></i>
        </div>
      )}
    </>
  );
}

export default function Navigation() {
  const { hasMobileToggle, setHasMobileToggle, openMenu, setOpenMenu } =
    useGlobalState();

  const handleResize = () => {
    if (window.innerWidth > 1140) {
      setHasMobileToggle(false);
      setOpenMenu(true);
    } else {
      setHasMobileToggle(true);
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    handleResize(); //Call on initial render
    window.addEventListener("resize", handleResize); // Handle resize

    return () => {
      // Cleanup function
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      {hasMobileToggle && <Hamburger />}
      {openMenu && <Menu />}
    </>
  );
}
