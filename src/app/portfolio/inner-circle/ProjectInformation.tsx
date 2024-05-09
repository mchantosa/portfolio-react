import { anchorTailwind } from "@/app/styles/style";
import portfolioTailwind from "../style";

const { containerTailwind, h3Tailwind, ulTailwind, liTailwind } =
  portfolioTailwind.projectInfoTailwind;

const aTailwind = anchorTailwind;
export default function ProjectInformation() {
  return (
    <div className={containerTailwind.join(" ")}>
      <h3 className={h3Tailwind.join(" ")}>Project information</h3>
      <ul className={ulTailwind.join(" ")}>
        <li className={liTailwind.join(" ")}>
          <strong>Category</strong>: Web Application and API
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Client</strong>: Independent project
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Project date</strong>: Published October 2023
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Project status</strong>: Maintained and receiving regular
          updates
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Project URL</strong>:{" "}
          <a
            href="https://innercircleprm.com/"
            target="_blank"
            className={aTailwind.join(" ")}
          >
            InnerCirlce
          </a>
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Code</strong>:{" "}
          <a
            href="https://github.com/mchantosa/smooth-kitty/tree/main"
            target="_blank"
            className={aTailwind.join(" ")}
          >
            Github repo
          </a>
        </li>
        <li className={liTailwind.join(" ")}>
          <strong>Stack</strong>: TypeScript, Deno, Fresh framework, Preact,
          Tailwind, Daisy UI, Deno-KV
        </li>
      </ul>
    </div>
  );
}
