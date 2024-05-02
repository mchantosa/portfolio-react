import {
  sectionWhiteTailwindGroup,
  sectionGrayTailwindGroup,
} from "./styles/sectionStyling";

export default function Section(props: {
  id: string;
  title: string;
  theme: string;
  children?: any;
}) {
  const { id, title, theme, children } = props;
  const { sectionTailwind, sectionTitleTailwind, sectionTitleAfterTailwind } =
    theme === "white" ? sectionWhiteTailwindGroup : sectionGrayTailwindGroup;
  return (
    <section id={id} className={sectionTailwind.join(" ")}>
      <div className="container">
        <div className={sectionTitleTailwind.join(" ")}>
          <h1 className={sectionTitleAfterTailwind.join(" ")}>{title}</h1>
        </div>
        {children}
      </div>
    </section>
  );
}
