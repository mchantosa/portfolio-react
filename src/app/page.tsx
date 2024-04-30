import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import { useRef } from "react";

export default function Home() {
  const sectionTailwind: {
    section: string[];
    sectionTitle: string[];
    sectionTitleAfter: string[];
  } = {
    section: ["py-16", "overflow-hidden", "background: #f5f8fd;"],
    sectionTitle: [
      "pb-8",
      "text-2xl",
      "font-bold",
      "mb-5",
      "pb-5",
      "relative",
      "text-blue-800",
    ],
    sectionTitleAfter: [
      "absolute",
      "block",
      "w-50",
      "h-3",
      "bg-blue-500",
      "bottom-0",
      "left-0",
    ],
  };
  return (
    <>
      <Navigation /> {/* */}
      <Hero />
      <About />
      <Resume />
    </>
  );
}
