import { Carousel, CarouselProps } from "@material-tailwind/react";
const imgTailwind = ["w-full", "h-full", "object-cover"];

export default function AboutCarousel() {
  const carouselProps: CarouselProps = {
    transition: { type: "tween", duration: 0.4 },
    autoplay: true,
    children: undefined,
    loop: true,
  };

  return (
    <Carousel
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      {...carouselProps}
      className="rounded-xl"
    >
      <img
        src="/img/aboutme/about-me-1.jpg"
        className={imgTailwind.join(" ")}
        alt=""
      />
      <img
        src="/img/aboutme/about-me-2.jpg"
        className={imgTailwind.join(" ")}
        alt=""
      />
      <img
        src="/img/aboutme/about-me-3.jpg"
        className={imgTailwind.join(" ")}
        alt=""
      />
      <img
        src="/img/aboutme/about-me-4.jpg"
        className={imgTailwind.join(" ")}
        alt=""
      />
      <img
        src="/img/aboutme/about-me-5.jpg"
        className={imgTailwind.join(" ")}
        alt=""
      />
    </Carousel>
  );
}
