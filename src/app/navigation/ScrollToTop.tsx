const aTailwind = [
  "fixed",
  "right-6",
  "bottom-6",
  "flex",
  "items-center",
  "justify-center",
  "bg-anchorBlue",
  "w-8",
  "h-8",
  "rounded-full",
  "hover:bg-anchorBlueHover",
  "animate-fade-in-fast",
];

const aVisibleTailwind = ["visible", "opacity-100"];
const iTailwind = ["text-28", "text-white"];

export default function ScrollToTop() {
  return (
    <a
      href="#"
      className={[...aTailwind, ...aVisibleTailwind].join(" ")}
      style={{ zIndex: 40 }}
    >
      <i className={[...iTailwind, "bx bx-up-arrow-alt bx-sm"].join(" ")}></i>
    </a>
  );
}
