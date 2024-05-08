export default function Row(props: {
  scale: string;
  additionalClassName?: string;
  children: any;
}) {
  const { scale, additionalClassName, children } = props;
  const rowLargeTailwind = [
    "flex",
    "flex-row",
    "items-top",
    "justify-around",
    "flex-wrap",
    "lg:flex-nowrap",
  ];
  const rowSmallTailwind = [
    "flex",
    "flex-row",
    "items-center",
    "justify-around",
    "flex-wrap",
    "sm:flex-nowrap",
  ];
  if (scale === "small") {
    return (
      <div
        className={[...rowSmallTailwind, `sm:gap-2`, additionalClassName].join(
          " "
        )}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        className={[...rowLargeTailwind, `lg:gap-8`, additionalClassName].join(
          " "
        )}
      >
        {children}
      </div>
    );
  }
}
