import type { Metadata } from "next";
import { open_sans } from "./styles/fonts";
import "./styles/globals.css";
import "boxicons/css/boxicons.min.css";

export const metadata: Metadata = {
  title: "Megan Chantosa",
  description: "Megan Chantosa's portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={open_sans.className}>
      <body>{children}</body>
    </html>
  );
}
