const ulTailwind = [
  "cursor-pointer",
  "inline-block",
  "px-15",
  "py-8",
  "text-base",
  "font-semibold",
  "uppercase",
  "text-paragraphText",
  "mb-5",
  "animate-fade-in-fast",
];
const liTailwind = [
  "cursor-pointer",
  "inline-block",
  "px-4",
  "py-2",
  "text-base",
  "font-semibold",
  "uppercase",
  "text-paragraphText",
  "mb-5",
  "animate-fade-in-fast",
  "hover:text-anchorBlue",
];

export default function FilterMenu() {
  return (
    <ul className={ulTailwind.join(" ")}>
      <li data-filter="*" className={[...liTailwind].join(" ")}>
        All
      </li>
      <li data-filter=".filter-dynamic" className={[...liTailwind].join(" ")}>
        React
      </li>

      <li data-filter=".filter-webapp" className={[...liTailwind].join(" ")}>
        HTML/CSS/JavaScript
      </li>
    </ul>
  );
}
