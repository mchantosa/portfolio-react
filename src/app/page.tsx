"use client";

import Navigation from "./Navigation";
import ScrollToTop from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import { GlobalStateProvider } from "./contexts/GlobalStateContexts";

export default function Home() {
  const mainTailwind = ["bg-white", "text-paragraphText"];
  return (
    <GlobalStateProvider>
      <main className={mainTailwind.join(" ")}>
        <Navigation />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </GlobalStateProvider>
  );
}
