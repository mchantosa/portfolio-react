import { ThemeProvider } from "@material-tailwind/react";
import { CarouselProps, Carousel } from "@material-tailwind/react";

const projectCarouselTheme = {
  carousel: {
    styles: {
      base: {
        carousel: {
          display: "flex items-center",
        },
        slide: {
          height: "h-8/12",
          padding: "p-8",
        },
      },
    },
  },
};

const carouselProps: CarouselProps = {
  transition: { type: "tween", duration: 0.4 },
  autoplay: true,
  children: undefined,
  loop: true,
  navigation: ({ setActiveIndex, activeIndex, length }) => (
    <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
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
export default function ProjectCarousel(props: { children: any }) {
  const { children } = props;
  return (
    <ThemeProvider value={projectCarouselTheme}>
      <Carousel
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        {...carouselProps}
      >
        {children}
      </Carousel>
    </ThemeProvider>
  );
}
