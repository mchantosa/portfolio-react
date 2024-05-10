import { anchorTailwind } from "@/app/styles/style";
import { portfolioTailwindGroup } from "../style";

const { containerTailwind, h3Tailwind, ulTailwind, liTailwind } =
  portfolioTailwindGroup.projectInfoTailwind;

const aTailwind = anchorTailwind;
export default function ProjectInformation() {
  return (
    <div className={containerTailwind.join(" ")}>
      <h3 className={h3Tailwind.join(" ")}>Project information</h3>
      <ul className={ulTailwind.join(" ")}>
        <li className={liTailwind.join(" ")}>
          <strong>Category</strong>: Dynamic web application
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Client</strong>: Independent project
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Project date</strong>: Published May 2023
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Project status</strong>: Maintained, bug fixes and updates
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Project URL</strong>:{" "}
          <a
            href="https://githubraw.com/mchantosa/demos/main/awordle.html"
            target="_blank"
            className={aTailwind.join(" ")}
          >
            Play A Wordle
          </a>
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Code</strong>:{" "}
          <a
            href="https://github.com/mchantosa/demos/blob/main/awordle.html"
            target="_blank"
            className={aTailwind.join(" ")}
          >
            Github repo
          </a>
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Stack</strong>: JavaScript, HTML, CSS
        </li>
      </ul>
    </div>
  );
}
