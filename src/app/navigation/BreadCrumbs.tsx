import { anchorTailwind } from "../styles/style";

const aTailwind = anchorTailwind;

const olTailwind = [
  "flex",
  "flex-wrap",
  "list-none",
  "p-0",
  "m-0",
  "text-base",
];
const liTailwind = [
  "pl-2",
  "before:inline-block",
  "before:pr-2",
  "before:inline",
  "before:content-['/']",
  "first:before:content-['']",
  "first:pl-0",
  "first:before:pr-0",
];

export default function Breadcrumbs(props: {
  crumbs: { title: string; link: string }[];
}) {
  const { crumbs } = props;
  return (
    <ol className={[...olTailwind].join(" ")}>
      {crumbs.map((crumb) =>
        crumb.link ? (
          <li className={liTailwind.join(" ")}>
            <a href={crumb.link} className={aTailwind.join(" ")}>
              {crumb.title}
            </a>
          </li>
        ) : (
          <li className={liTailwind.join(" ")}>{crumb.title}</li>
        )
      )}
    </ol>
  );
}
