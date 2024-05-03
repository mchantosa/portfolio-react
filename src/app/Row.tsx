export default function Row(props: { scale: string; children: any }) {
  const { scale, children } = props;
  const rowLargeTailwind = [
    "flex",
    "flex-row",
    "items-center",
    "justify-around",
    "flex-wrap",
    "lg:flex-nowrap",
    "mb-5",
  ];
  const rowSmallTailwind = [
    "flex",
    "flex-row",
    "items-center",
    "justify-around",
    "flex-wrap",
    "sm:flex-nowrap",
    "mb-5",
  ];
  if (scale === "small") {
    return (
      <div className={[...rowSmallTailwind, `sm:gap-2`].join(" ")}>
        {children}
      </div>
    );
  } else {
    return (
      <div className={[...rowLargeTailwind, `lg:gap-8`].join(" ")}>
        {children}
      </div>
    );
  }
}
