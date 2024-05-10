"use client";
import { anchorTailwind } from "../styles/style";
import { useGlobalState } from "../utils/GlobalStateContexts";

const footerTailwind = [
  "p-4",
  "text-white",
  "text-sm",
  "bg-darkGrayBlackBlue",
  "lg:pr-12",
  "lg:pl-8",
];

const footerNavTailwind = ["w-72", "fixed", "left-0", "bottom-0", "z-50"];
const copyrightTailwind = ["text-center"];
const creditsTailwind = ["pt-2", "text-center", "text-sm", "text-creditColor"];
const unStyledFooter = (classNames: string[]) => {
  return (
    <footer className={classNames.join(" ")} style={{ zIndex: 50 }}>
      <div className="container">
        <div className={copyrightTailwind.join(" ")}>
          &copy; Copyright{" "}
          <strong>
            <span>iPortfolio</span>
          </strong>
        </div>
        <div className={creditsTailwind.join(" ")}>
          {/* <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ --> */}
          Designed by{" "}
          <a
            href="https://bootstrapmade.com/"
            className={anchorTailwind.join(" ")}
          >
            BootstrapMade
          </a>
        </div>
      </div>
    </footer>
  );
};
export default function Footer() {
  const { openMenu } = useGlobalState();
  if (!openMenu) {
    return unStyledFooter(footerTailwind);
  }
}

export function FooterNav() {
  const { openMenu } = useGlobalState();
  if (openMenu) {
    return unStyledFooter([...footerNavTailwind, ...footerTailwind]);
  }
}
