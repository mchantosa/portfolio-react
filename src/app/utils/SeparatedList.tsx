import React from "react";
import { paragraphTailwind } from "../styles/style";
const spanTailwind = ["text-anchorBlue", "font-bold"];
export default function SeparatedList(props: {
  list: string[];
  children?: React.ReactNode;
  additionalClassName?: string;
}) {
  const { list, children, additionalClassName } = props;
  return (
    <div className={additionalClassName}>
      {list.map((item, index) => (
        <React.Fragment key={item}>
          {index > 0 && (
            <span className={spanTailwind.join(" ")}>&nbsp;&#x25AA;&nbsp;</span>
          )}
          {item}
        </React.Fragment>
      ))}
      {children}
    </div>
  );
}
