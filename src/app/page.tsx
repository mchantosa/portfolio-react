import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./about";
import Resume from "./resume";
import { useRef } from "react";

export default function Home() {
  return (
    <>
      <Navigation /> {/* */}
      <Hero />
      <About />
      <Resume />
    </>
  );
}
