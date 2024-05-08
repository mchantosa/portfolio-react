"use client";
import { GlobalStateProvider } from "./utils/GlobalStateContexts";
import Navigation from "./navigation/Navigation";
import ScrollToTop from "./navigation/Navigation";
import Hero from "./hero/Hero";
import About from "./about/About";
import Resume from "./resume/Resume";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Footer from "./navigation/Footer";

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
