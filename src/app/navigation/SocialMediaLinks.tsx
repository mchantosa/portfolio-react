import { poppins } from "../styles/fonts";
import { ProfilePic } from "../utils/GetImage";

function SocialMediaLink(props: { href: string; icon: string }) {
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
    "animate-fade-in-fast",
    "hover:bg-anchorBlue",
    "hover:text-white",
    "hover:no-underline",
  ];

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={socialAnchorTailwind.join(" ")}
    >
      <i className={props.icon} />
    </a>
  );
}

export default function SocialMediaLinks() {
  const profileAnchorTailwind = [
    "no-underline",
    "hover:no-underline",
    "cursor-pointer",
  ];
  const imageTailwind = [
    "mx-auto",
    "block",
    // "w-36",
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
    "mt-4",
    poppins.className,
  ];
  const socialLinksTailwind = ["mt-3", "flex", "justify-center"];

  return (
    <div className="profile">
      <a href="#hero" className={profileAnchorTailwind.join(" ")}>
        <ProfilePic additionalClassName={imageTailwind.join(" ")} />
        <h1 className={h1Tailwind.join(" ")}>Megan Chantosa</h1>
      </a>
      <div className={socialLinksTailwind.join(" ")}>
        <SocialMediaLink
          href="https://twitter.com/MChantosa"
          icon="bx bxl-twitter bx-xs"
        />
        <SocialMediaLink
          href="https://www.facebook.com/megan.chantosa"
          icon="bx bxl-facebook bx-xs"
        />
        <SocialMediaLink
          href="https://www.instagram.com/mchantosa/"
          icon="bx bxl-instagram bx-xs"
        />
        <SocialMediaLink
          href="https://github.com/mchantosa"
          icon="bx bxl-github bx-xs"
        />
        <SocialMediaLink
          href="https://www.linkedin.com/in/mchantosa/"
          icon="bx bxl-linkedin bx-xs"
        />
      </div>
    </div>
  );
}
