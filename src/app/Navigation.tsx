"use client";
import { useEffect } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import PageLinks from "./PageLinks";
import { Drawer } from "@material-tailwind/react";
import { useGlobalState } from "./contexts/GlobalStateContexts";

function Menu() {
  const { openMenu } = useGlobalState();
  const menuTailwind = [
    "fixed",
    "top-0",
    "left-0",
    "bottom-0",
    "w-72",
    "p-4",
    "bg-darkGrayBlackBlue",
    "overflow-y-auto",
  ];

  return (
    <Drawer
      open={openMenu}
      overlay={false}
      className={menuTailwind.join(" ")}
      // onClose={() => setIsOpen(false)}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="mb-6">
        <SocialMediaLinks />
        <PageLinks />
      </div>
    </Drawer>
  );
}

function Hamburger() {
  const { openMenu, setOpenMenu, hasMobileToggle } = useGlobalState();
  const hamburgerTailwind = [
    "flex", // Flex container
    "items-center", // Center items vertically
    "justify-center", // Center items horizontally
    "fixed",
    "top-4",
    "right-4",
    "w-10",
    "h-10",
    "text-white",
    "bg-anchorBlue",
    "cursor-pointer",
    "rounded-full",
  ];

  return (
    <>
      {hasMobileToggle && (
        <div className={hamburgerTailwind.join(" ")} style={{ zIndex: 9999 }}>
          <i
            onClick={() => {
              setOpenMenu(true);
              document.body.style.overflow = "hidden";
            }}
            className="bx bx-menu bx-sm"
          ></i>
        </div>
      )}
      {openMenu && (
        <div className={hamburgerTailwind.join(" ")} style={{ zIndex: 9999 }}>
          <i
            onClick={() => {
              setOpenMenu(false);
              document.body.style.overflow = "auto";
            }}
            className="bx bx-x bx-sm"
          ></i>
        </div>
      )}
    </>
  );
}

export default function Navigation() {
  const { hasMobileToggle, setHasMobileToggle, openMenu, setOpenMenu } =
    useGlobalState();

  const handleResize = () => {
    if (window.innerWidth > 1240) {
      setHasMobileToggle(false);
      setOpenMenu(true);
    } else {
      setHasMobileToggle(true);
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    handleResize(); //Call on initial render
    window.addEventListener("resize", handleResize); // Handle resize

    return () => {
      // Cleanup function
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {hasMobileToggle && <Hamburger />}
      {openMenu && <Menu />}
    </>
  );
}

export function ScrollToTop() {
  return (
    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}
