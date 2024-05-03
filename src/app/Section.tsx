import {
  sectionWhiteTailwindGroup,
  sectionGrayTailwindGroup,
} from "./styles/style";
import { useGlobalState } from "./contexts/GlobalStateContexts";

export default function Section(props: {
  id: string;
  title: string;
  theme: string;
  children?: any;
}) {
  const { openMenu, setOpenMenu, hasMobileToggle, setHasMobileToggle } =
    useGlobalState();
  const { id, title, theme, children } = props;
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
    <section id={id} className={sectionTailwind.join(" ")}>
      <div className={[...containerTailwind].join(" ")}>
        <h1
          className={[
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
