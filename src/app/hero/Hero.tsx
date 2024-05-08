"use client";
import { raleway } from "../styles/fonts";
import { poppins } from "../styles/fonts";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { useMounted } from "../utils/hooks";

/* 
  - Uses inline styles
  - Media query wrapped in event handler 
  - Triggered with state change on window resize
  - Window not defined error controlled with mount state
*/

const HeroTypeAnimation = () => {
  const mounted = useMounted();
  // Define styles
  const pStyle = {
    color: "#fff",
    marginBottom: "50px",
    fontSize: "26px",
  };
  const typeAnimationStyle = {
    display: "inline-block",
    color: "white",
    textDecoration: "underline",
    textDecorationColor: "#149ddd",
    textUnderlineOffset: "10px",
    textDecorationThickness: "3px",
    letterSpacing: "1px",
  };

  if (mounted && window.innerWidth <= 500) {
    pStyle.fontSize = "20px";
  }

  return (
    <div className={poppins.className}>
      <p style={pStyle}>
        <span>I'm a </span>
        <TypeAnimation
          sequence={[
            "software engineer",
            1000, //delay
            "fullstack developer",
            1000,
            "web developer",
            1000,
            "mathematician",
            1000,
            "mushroom enthusiast",
            1000,
          ]}
          wrapper="span"
          speed={15}
          style={typeAnimationStyle}
          repeat={Infinity}
        />
      </p>
    </div>
  );
};

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
  const heroStyle: React.CSSProperties & { backgroundAttachment?: string } = {
    width: "100%",
    height: "100vh",
    background: "url(/img/hero-bg.jpg) top center",
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

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
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
      <section id="hero" className={heroTailwind} style={heroStyle}>
        {/* <Section id="hero" title="" theme="hero"> */}
        {/* Pseudo-element for background overlay */}
        <div style={overlayStyle}></div>
        <div
          className="hero-container animate-fade-in"
          style={heroContainerStyle}
        >
          <h1 className={raleway.className} style={h1Style}>
            Megan Chantosa
          </h1>
          <HeroTypeAnimation />
        </div>
        {/* </Section> */}
      </section>
    </>
  );
}
