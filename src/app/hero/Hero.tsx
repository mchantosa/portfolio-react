"use client";
import { raleway } from "../styles/fonts";
import { useEffect, useRef, useState } from "react";
import { useMounted } from "../utils/hooks";
import { isElementVisible } from "../utils/helpers";
import Section from "../utils/Section";
import HeroTypeAnimation from "./HeroTypeAnimation";

export default function Hero() {
  // Define styles
  const heroTailwind = "flex flex-col justify-center items-center";
  const overlayStyle: React.CSSProperties = {
    content: "",
    background: "rgba(5, 13, 24, 0.3)",
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  };
  const heroStyle: React.CSSProperties = {
    width: "100%",
    height: "100vh",
    background: "url(/images/hero-bg.jpg) top center",
    backgroundSize: "cover",
  };
  const heroContainerStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    minWidth: "300px",
  };
  const h1Style = {
    margin: "0 0 10px 0",
    fontSize: "64px",
    fontWeight: "700",
    lineHeight: "56px",
    color: "#fff",
  };

  //Trigger media query on window resize
  const [size, setSize] = useState(0);
  const mounted = useMounted();

  if (mounted) {
    // Responsive styling
    if (window.innerWidth >= 1024) {
      heroStyle.backgroundAttachment = "fixed";
    }
    if (window.innerWidth <= 786) {
      h1Style.fontSize = "36px";
      heroContainerStyle.width = "calc(100vw - 200px)";
    }
    if (window.innerWidth <= 500) {
      h1Style.fontSize = "28px";
      h1Style.lineHeight = "36px";
      heroContainerStyle.width = "calc(100vw - 75px)";
    }
  }

  const hero = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      console.log("watch me resize");
      setSize(window.innerWidth);
    };

    const handleScroll = () => {
      console.log("watch me scroll");
      const isHeroVisible = isElementVisible(hero.current);
      console.log("hero: ", isHeroVisible);
    };

    // Listen for resize events
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <>
      <Section
        id="hero"
        theme="white"
        additionalClassName={heroTailwind}
        additionalStyle={heroStyle}
      >
        <div style={overlayStyle}></div>
        <div className="animate-fade-in" style={heroContainerStyle}>
          <h1 className={raleway.className} style={h1Style}>
            Megan Chantosa
          </h1>
          <HeroTypeAnimation />
        </div>
      </Section>
    </>
  );
}
