import { headersTailwind } from "../styles/style";
import { useGlobalState } from "./GlobalStateContexts";
import { sectionWhiteTailwindGroup, sectionGrayTailwindGroup } from "./style";

export default function Section(props: {
  id: string;
  title?: string;
  theme: string;
  additionalClassName?: string | undefined;
  additionalStyle?: React.CSSProperties;
  children?: any;
}) {
  const { openMenu } = useGlobalState();
  const { id, title, theme, additionalClassName, additionalStyle, children } =
    props;
  let {
    sectionTailwind,
    containerTailwind,
    sectionTitleTailwind,
    sectionTitleAfterTailwind,
  } = theme === "white" ? sectionWhiteTailwindGroup : sectionGrayTailwindGroup;

  if (openMenu) {
    sectionTailwind = [...sectionTailwind, "transition"]; //"ml-72"
  }
  return (
    <section
      id={id}
      className={[...sectionTailwind, additionalClassName].join(" ")}
      style={additionalStyle}
    >
      <div className={[...containerTailwind, "xl:ml-72"].join(" ")}>
        {title && (
          <h1
            className={[
              ...headersTailwind.header1Tailwind,
              ...sectionTitleTailwind,
              ...sectionTitleAfterTailwind,
            ].join(" ")}
          >
            {title}
          </h1>
        )}
        {children}
      </div>
    </section>
  );
}
