"use client";
import { raleway } from "./fonts";
import { poppins } from "./fonts";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
/* 
  - Uses inline styles
  - Media query wrapped in event handler 
  - Triggered with state change on window resize
  - Window not defined error controlled with mount state
*/

export const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>();
  // effects run only client-side
  // so we can detect when the component is hydrated/mounted
  // @see https://react.dev/reference/react/useEffect
  useEffect(() => {
    setMounted(true); //fires once at the beginning and when the dependencies [] change
  }, []);
  return mounted;
};

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

  // Responsive styling
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
  //Trigger media query on window resize
  const [size, setSize] = useState(0);
  const handleWindowSizeChange = () => {
    setSize(window.innerWidth); //Updates state
  };
  const mounted = useMounted();
  if (mounted) {
    window.addEventListener("resize", handleWindowSizeChange); //trigger a rerender on window resize
  }

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

  return (
    <>
      <section id="hero" className={heroTailwind} style={heroStyle}>
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
      </section>
    </>
  );
}
