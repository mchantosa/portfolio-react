"use client";
import { useState, useEffect } from "react";

const aTailwind = [
  "fixed",
  "right-6",
  "bottom-6",
  "flex",
  "items-center",
  "justify-center",
  "bg-anchorBlue",
  "w-8",
  "h-8",
  "rounded-full",
  "hover:bg-anchorBlueHover",
  "animate-fade-in-fast",
];
const iTailwind = ["text-28", "text-white"];

export default function ScrollToTop() {
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    // Function to check if the #hero section is not on screen
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroSectionRect = heroSection.getBoundingClientRect();
        const isHeroPartiallyVisible =
          heroSectionRect.top < -0.5 * window.innerHeight;
        //heroSectionRect.bottom > 0;
        //heroSectionRect.top < window.innerHeight;
        setHeroVisible(!isHeroPartiallyVisible);
      }
    };

    handleScroll();

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // Only render the button if the hero section is significantly not on screen and
    !heroVisible && (
      <div
        id="scrollToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={aTailwind.join(" ")}
        style={{ zIndex: 40 }}
      >
        <i className={[...iTailwind, "bx bx-up-arrow-alt bx-sm"].join(" ")}></i>
      </div>
    )
  );
}
