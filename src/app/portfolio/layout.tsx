"use client";
import Header from "@/app/portfolio/Header";
import { usePathname } from "next/navigation";
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");
  const dir = segments[segments.length - 1];
  const title = dir
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  const crumbs = [
    { title: "Home", link: "/" },
    { title: "Portfolio", link: "/#portfolio" },
    { title: title, link: "" },
  ];
  return (
    <>
      <Header title={title + " Details"} crumbs={crumbs} />
      <div>{children}</div>
    </>
  );
}
