// "use client";
import type { Metadata } from "next";
import { open_sans } from "./styles/fonts";
import "./styles/globals.css";
import "boxicons/css/boxicons.min.css";
import Navigation from "./navigation/Navigation";
import Footer from "./navigation/Footer";
import AppContainer from "./utils/AppContainer";
import ScrollToTop from "./navigation/ScrollToTop";
import Menu from "./navigation/Menu";

export const metadata: Metadata = {
  title: "Megan Chantosa",
  description: "Megan Chantosa's portfolio site",
  icons: {
    icon: "/images/favicons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={open_sans.className}>
      <body>
        <AppContainer>
          {/* <Menu /> */}
          <Navigation />
          {children}
          <Footer />
          <ScrollToTop />
        </AppContainer>
      </body>
    </html>
  );
}
