import { headersTailwind } from "../styles/style";
import Breadcrumbs from "@/app/navigation/BreadCrumbs";

export default function Header(props: {
  title: string;
  crumbs: { title: string; link: string }[];
}) {
  const { title, crumbs } = props;
  const headerTailwind = ["py-6", "bg-backgroundGray2"];
  const h2Tailwind = [
    ...headersTailwind.header2Tailwind,
    "text-2xl",
    "font-light",
  ];
  const crumbContainerTailwind = [
    "flex",
    "flex-wrap",
    "items-center",
    "justify-between",
    "gap-2",
    "px-4",
    "md:px-8",
  ];

  return (
    <header className={headerTailwind.join(" ")}>
      <div className={crumbContainerTailwind.join(" ")}>
        <h2 className={h2Tailwind.join(" ")}>{title}</h2>
        <Breadcrumbs crumbs={crumbs} />
      </div>
    </header>
  );
}
