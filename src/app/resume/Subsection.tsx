import { h3Tailwind } from "./style";
export default function SubSection(props: {
  id?: string;
  title: string;
  children: any;
}) {
  const { id, title, children } = props;
  return (
    <>
      {id ? (
        <h3 id={id} className={h3Tailwind.join(" ")}>
          {title}
        </h3>
      ) : (
        <h3 className={h3Tailwind.join(" ")}>{title}</h3>
      )}
      {children}
    </>
  );
}
