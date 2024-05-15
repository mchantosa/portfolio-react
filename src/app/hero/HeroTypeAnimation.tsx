import { poppins } from "../styles/fonts";
import { TypeAnimation } from "react-type-animation";
import { useMounted } from "../utils/hooks";
export default function HeroTypeAnimation() {
  const mounted = useMounted();
  // Define styles
  const pStyle = {
    color: "#fff",
    marginBottom: "50px",
    fontSize: "26px",
  };
  const typeAnimationStyle = {
    display: "inline-block",
    color: "white",
    textDecoration: "underline",
    textDecorationColor: "#149ddd",
    textUnderlineOffset: "10px",
    textDecorationThickness: "3px",
    letterSpacing: "1px",
  };

  if (mounted && window.innerWidth <= 500) {
    pStyle.fontSize = "20px";
  }

  return (
    <div className={poppins.className}>
      <p style={pStyle}>
        <span>I&apos;m a </span>
        <TypeAnimation
          sequence={[
            "software engineer",
            1000, //delay
            "fullstack developer",
            1000,
            "web developer",
            1000,
            "mathematician",
            1000,
            "mushroom enthusiast",
            1000,
          ]}
          wrapper="span"
          speed={15}
          style={typeAnimationStyle}
          repeat={Infinity}
        />
      </p>
    </div>
  );
}
