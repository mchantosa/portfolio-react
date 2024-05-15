const ulTailwind = [
  "flex",
  "align-center",
  "justify-center",
  "flex-wrap",
  "gap-8",
  "px-8",
  "py-2",
  "my-8",
  "bg-backgroundGray",
  "rounded-full",
  "text-base",
  "font-semibold",
  "uppercase",
  "animate-fade-in-fast",
  "shadow-md",
];
const liTailwind = [
  "cursor-pointer",
  "text-base",
  "font-semibold",
  "uppercase",
  "hover:text-anchorBlue",
  "animate-fade-in-fast",
];
const liActiveTailwind = ["text-anchorBlue"];
const liInactiveTailwind = ["text-paragraphGray"];

const activeFilters = [
  { filter: "*", title: "All" },
  { filter: "react", title: "React" },
  { filter: "htmlcssjavascript", title: "HTML/CSS/JavaScript" },
];

export default function FilterMenu(props: {
  activeFilter: string;
  setActiveFilter: (activeFilter: string) => void;
}) {
  const { activeFilter, setActiveFilter } = props;
  return (
    <ul className={ulTailwind.join(" ")}>
      {activeFilters.map((filter, index) => (
        <li
          onClick={() => setActiveFilter(filter.filter)}
          className={[
            ...liTailwind,
            activeFilter === filter.filter
              ? liActiveTailwind.join(" ")
              : liInactiveTailwind.join(" "),
          ].join(" ")}
          key={index}
        >
          {filter.title}
        </li>
      ))}
    </ul>
  );
}
