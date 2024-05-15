const ulTailwind = ["list-none", "p-0"];
const liTailwind = ["pb-4", "flex", "items-center"];
const liStrongTailwind = ["mr-4"];
const liIconTailwind = [
  "bx",
  "bx-chevron-right",
  "bx-sm",
  "mr-4",
  "text-anchorBlue",
  "leading-none",
];

export default function LeftCarrotList(props: {
  listItems: { title: string; value: string }[];
}) {
  const { listItems } = props;
  return (
    <ul className={ulTailwind.join(" ")}>
      {listItems.map((item, index) => (
        <li className={liTailwind.join(" ")} key={index}>
          <i className={liIconTailwind.join(" ")}></i>{" "}
          <strong className={liStrongTailwind.join(" ")}>{item.title}:</strong>{" "}
          <span>{item.value}</span>
        </li>
      ))}
    </ul>
  );
}
