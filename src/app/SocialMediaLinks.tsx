import { poppins } from "./fonts";

export default function SocialMediaLinks() {
  const profileAnchorTailwind = [
    "no-underline",
    "hover:no-underline",
    "cursor-pointer",
  ];
  const imageTailwind = [
    "mx-auto",
    "block",
    "w-48",
    "border-8",
    "border-solid",
    "border-gray-900",
    "rounded-full",
  ];
  const h1Tailwind = [
    "text-2xl",
    "font-semibold",
    "text-center",
    "text-white",
    poppins.className,
  ];
  const socialLinksTailwind = ["mt-3", "flex", "justify-center"];
  const socialAnchorTailwind = [
    "text-sm",
    "flex", // Flex container
    "items-center", // Center items vertically
    "justify-center", // Center items horizontally
    "bg-medDarkGray",
    "text-white",
    "leading-none",
    "mr-1",
    "rounded-full",
    "text-center",
    "w-9",
    "h-9",
    "transition",
    "duration-300",
    "hover:bg-anchorBlue",
    "hover:text-white",
    "hover:no-underline",
  ];

  return (
    <div className="profile">
      <a href="#hero" className={profileAnchorTailwind.join(" ")}>
        <img
          src="img/profile-img.jpg"
          alt=""
          className={imageTailwind.join(" ")}
        />
        <h1 className={h1Tailwind.join(" ")}>Megan Chantosa</h1>
      </a>
      <div className={socialLinksTailwind.join(" ")}>
        <a
          href="https://twitter.com/MChantosa"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-twitter bx-xs"></i>
        </a>
        <a
          href="https://www.facebook.com/megan.chantosa"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-facebook bx-xs"></i>
        </a>
        <a
          href="https://www.instagram.com/mchantosa/"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-instagram bx-xs"></i>
        </a>
        <a
          href="https://github.com/mchantosa"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-github bx-xs"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mchantosa/"
          className={socialAnchorTailwind.join(" ")}
          target="_blank"
        >
          <i className="bx bxl-linkedin bx-xs"></i>
        </a>
      </div>
    </div>
  );
}
