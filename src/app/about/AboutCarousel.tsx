import {
  Carousel,
  CarouselProps,
  ThemeProvider,
} from "@material-tailwind/react";
import { CarouselPic } from "../utils/GetImage";
const imgTailwind = ["w-full", "h-full", "object-cover"];

const projectCarouselTheme = {
  carousel: {
    styles: {
      base: {
        carousel: {
          display: "flex items-center",
        },
        slide: {
          height: "h-full",
          padding: "pb-8",
        },
      },
    },
  },
};

export default function AboutCarousel() {
  const carouselProps: CarouselProps = {
    transition: { type: "tween", duration: 0.3 },
    autoplay: true,
    children: undefined,
    loop: true,
    navigation: ({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-1 left-2/4 -translate-x-2/4 z-10 flex gap-2">
        {/*  */}
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-3 w-3 cursor-pointer rounded-full transition-colors animate-fade-in-fast content-[''] ${
              activeIndex === i
                ? "bg-anchorBlue"
                : "bg-white border border-anchorBlue"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    ),
  };

  return (
    <ThemeProvider value={projectCarouselTheme}>
      <Carousel
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        {...carouselProps}
        className="rounded-xl"
      >
        <CarouselPic
          imageLocation="/images/about/carousel1.jpg"
          alt="Me and my daughter at the beach"
          additionalClassName={imgTailwind.join(" ")}
        />
        <CarouselPic
          imageLocation="/images/about/carousel2.jpg"
          alt="Shrooms I grew"
          additionalClassName={imgTailwind.join(" ")}
        />
        <CarouselPic
          imageLocation="/images/about/carousel3.jpg"
          alt="Me and my naked cat"
          additionalClassName={imgTailwind.join(" ")}
        />
        <CarouselPic
          imageLocation="/images/about/carousel4.jpg"
          alt="A fancy cup of coffee and holiday hot chocolate with an enormous peppermint marshmallow"
          additionalClassName={imgTailwind.join(" ")}
        />
        <CarouselPic
          imageLocation="/images/about/carousel5.jpg"
          alt="My dog and I enjoying the view at Cape Flattery"
          additionalClassName={imgTailwind.join(" ")}
        />
      </Carousel>
    </ThemeProvider>
  );
}
