import {
  sectionWhiteTailwindGroup,
  sectionGrayTailwindGroup,
  headersTailwind,
} from "../styles/style";
import { useGlobalState } from "./GlobalStateContexts";

export default function Section(props: {
  id: string;
  title: string;
  theme: string;
  additionalClassName?: string;
  children?: any;
}) {
  const { openMenu, setOpenMenu, hasMobileToggle, setHasMobileToggle } =
    useGlobalState();
  const { id, title, theme, additionalClassName, children } = props;
  let {
    sectionTailwind,
    containerTailwind,
    sectionTitleTailwind,
    sectionTitleAfterTailwind,
  } = theme === "white" ? sectionWhiteTailwindGroup : sectionGrayTailwindGroup;

  if (openMenu) {
    sectionTailwind = [...sectionTailwind, "transition", "ml-72"];
  }
  return (
    <section
      id={id}
      className={[...sectionTailwind, additionalClassName].join(" ")}
    >
      <div className={[...containerTailwind].join(" ")}>
        <h1
          className={[
            ...headersTailwind.header1Tailwind,
            ...sectionTitleTailwind,
            ...sectionTitleAfterTailwind,
          ].join(" ")}
        >
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
