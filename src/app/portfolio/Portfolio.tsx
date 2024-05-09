import Section from "../utils/Section";
import Row from "../utils/Row";
import PortfolioItem from "./PortfolioItem";
import FilterMenu from "./FilterMenu";

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      title="Portfolio"
      theme="white"
      additionalClassName=""
    >
      <p>
        I have created a web application called InnerCircle and a Wordle
        inspired game, as well as this website to showcase my skill set.
        InnerCircle is uses the Fresh framework, Preact, Tailwind, and Daisy UI
        on Deno with Deno-KV for a datastore. The Wordle inspired application is
        an example of a single page web application that uses strictly
        JavaScript, CSS, and HTML and not hosted, but served through githubraw.
        This website is derived from a bootstrap template and hosted on Deno.
      </p>
      <Row scale="large">
        <div className="col-lg-12 d-flex justify-content-center">
          <FilterMenu />
        </div>
      </Row>
      <Row scale="large">
        <div className="w-4/12">
          <PortfolioItem
            imageName="innercircle/logo.png"
            link="/innercircle"
            title="Introduction to InnerCircle"
          />
        </div>
        <div className="w-4/12 ">
          <PortfolioItem
            imageName="awordle/game.png"
            link="/aWordle"
            title="A Wordle inspired game"
          />
        </div>
      </Row>
    </Section>
  );
}
