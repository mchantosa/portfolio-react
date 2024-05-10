export default function PortfolioItem(props: {
  imageName: string;
  link: string;
  title: string;
}) {
  const imgTailwind = ["w-full", "h-auto"];
  const wrapTailwind = [
    "animate-slide-in-right",
    "relative",
    "overflow-hidden",
    "z-10",
  ];
  const wrapBeforeTailwind = [
    "before:absolute",
    "before:inset-0",
    "before:bg-backgroundGray",
    "before:bg-opacity-50",
    "before:transition-opacity",
    "before:duration-300",
    "before:z-20",
    "before:opacity-0",
  ];
  const linksTailwind = [
    "opacity-100",
    "left-0",
    "right-0",
    // "bottom-[-60px]",
    "z-30",
    "absolute",
    "transition-all",
    "duration-300",
    "flex",
    "justify-center",
  ];
  const aTailwind = [
    "text-white",
    "text-4xl",
    "text-center",
    "bg-blue-400",
    "bg-opacity-75",
    "transition",
    "duration-300",
    "w-1/2",
    "hover:bg-opacity-95",
  ];

  const { imageName, link, title } = props;

  return (
    <div className={[...wrapTailwind, ...wrapBeforeTailwind].join(" ")}>
      <img
        src={"/img/portfolio/" + imageName}
        className={imgTailwind.join(" ")}
        alt=""
      />
      <div className={[...linksTailwind].join(" ")}>
        <a
          href={"/img/portfolio/" + imageName}
          data-gallery="portfolioGallery"
          className="portfolio-lightbox"
          title="InnerCircle logo"
        >
          <i className={["bx bx-plus", ...aTailwind].join(" ")}></i>
        </a>
        <a href={link} title={title}>
          <i className={["bx bx-link", ...aTailwind].join(" ")}></i>
        </a>
      </div>
    </div>
  );
}
