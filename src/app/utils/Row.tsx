export default function Row(props: {
  scale: string;
  additionalClassName?: string;
  children: any;
}) {
  const { scale, additionalClassName, children } = props;
  const rowLargeTailwind = [
    "flex",
    "flex-row",
    "flex-wrap",
    "lg:flex-nowrap",
    "justify-center",
    "items-top",
  ];
  const rowSmallTailwind = [
    "flex",
    "flex-row",
    "flex-wrap",
    "md:flex-nowrap",
    "items-center",
  ];
  if (scale === "small") {
    return (
      <div
        className={[...rowSmallTailwind, additionalClassName, `gap-2`].join(
          " "
        )}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        className={[...rowLargeTailwind, additionalClassName, `gap-4`].join(
          " "
        )}
      >
        {children}
      </div>
    );
  }
}
