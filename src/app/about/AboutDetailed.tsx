import Row from "../utils/Row";
import LeftCarrotList from "../utils/LeftCarrotList";
import {
  anchorTailwind,
  paragraphTailwind,
  headersTailwind,
} from "../styles/style";

const h3Tailwind = [
  ...headersTailwind.header3Tailwind,
  "text-headerBlue",
  "pb-4",
];
const pTailwind = [...paragraphTailwind, "italic", "pb-4"];

export default function AboutMeDetailed() {
  return (
    <>
      <h3 className={h3Tailwind.join(" ")}>
        Software Engineer, Fullstack Developer, Web Developer, Mathematician, QA
        Engineer
      </h3>
      <p className={pTailwind.join(" ")}>
        I enjoy hiking, reading, pushups, cuddling my naked cat, fire pits,
        coffee, tea, good food, Star Trek, SciFi, Scrabble, and puzzles.
      </p>
      <Row scale="small" additionalClassName="pb-4">
        <div className="w-full sm:w-6/12">
          <LeftCarrotList
            listItems={[
              { title: "Degree", value: "MA Mathematics" },
              { title: "Availability", value: "Open to work" },
              { title: "Freelance", value: "Available" },
            ]}
          />
        </div>
        <div className="w-full sm:w-6/12">
          <LeftCarrotList
            listItems={[
              { title: "Email", value: "meganemmamoore@gmail" },
              { title: "Phone", value: "336-978-4359" },
              { title: "City", value: "Seattle, WA" },
            ]}
          />
        </div>
      </Row>
      <p>
        I am currently training AI through code evaluation and annotation with{" "}
        <a
          href="https://www.dataannotation.tech/"
          className={anchorTailwind.join(" ")}
          target="_blank"
        >
          DataAnnotation
        </a>
        . I also do freelance development on the side. Feel free to reach out if
        you have a project on which you would like to collaborate. Checkout my
        projects and portfolio for more information.
      </p>
    </>
  );
}
