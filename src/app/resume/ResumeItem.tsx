const resumeItemTailwind = [
  "pl-5",
  "pt-0",
  "pb-5",
  "mt-n2",
  "border-l-2",
  "border-borderBlue",
  "relative",
];

const resumeItemBeforeTailwind = [
  "before:absolute",
  "before:w-4",
  "before:h-4",
  "before:rounded-full",
  "before:left-[-9px]",
  "before:top-0",
  "before:bg-white",
  "before:border-2",
  "before:border-borderBlue",
];

export default function ResumeItem(props: { children: any }) {
  const { children } = props;
  return (
    <>
      <div
        className={[...resumeItemTailwind, ...resumeItemBeforeTailwind].join(
          " "
        )}
      >
        {children}
      </div>
    </>
  );
}
