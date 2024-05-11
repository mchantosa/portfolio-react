import { headersTailwind } from "@/app/styles/style";

const projectDetailsTailwindGroup = {
  containerTailwind: ["px-4", "md:px-8"],
  h2Tailwind: [
    headersTailwind.header2Tailwind,
    "text-2xl",
    "font-bold",
    "text-headerGray",
  ],
  pTailwind: ["text-paragraphText"],
};
const { containerTailwind, h2Tailwind, pTailwind } =
  projectDetailsTailwindGroup;

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
