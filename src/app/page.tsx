"use client";

import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Resume from "./Resume";
import { GlobalStateProvider } from "./contexts/GlobalStateContexts";

export default function Home() {
  const mainTailwind = ["bg-white", "text-paragraphText"];
  return (
    <GlobalStateProvider>
      <main className={mainTailwind.join(" ")}>
        <Navigation /> {/* */}
        <Hero />
        <About />
        <Resume />
      </main>
    </GlobalStateProvider> 
  );
}
