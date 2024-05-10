import { portfolioTailwindGroup } from "./style";
const { containerTailwind, h2Tailwind, pTailwind } =
  portfolioTailwindGroup.projectDescriptionTailwind;

export default function ProjectDetails(props: {
  content: { heading: string; description: string }[];
  children?: any;
}) {
  const { content, children } = props;
  return (
    <div className={containerTailwind.join(" ")}>
      {content.map((c) => {
        return (
          <>
            <h2 className={h2Tailwind.join(" ")}>{c.heading}</h2>
            <p className={pTailwind.join(" ")}>{c.description}</p>
          </>
        );
      })}
      {children}
    </div>
  );
}
