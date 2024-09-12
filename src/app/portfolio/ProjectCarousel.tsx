import { IconButton, ThemeProvider } from "@material-tailwind/react";
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
        // arrow: {
        //   color: "text-anchorBlue", // Match arrow color to dots
        // },
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
  prevArrow: ({ handlePrev }) => (
    <IconButton
      variant="text"
      size="lg"
      onClick={handlePrev}
      className="text-anchorBlue !absolute top-2/4 -translate-y-2/4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          //d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          d="M10.5 19.5L3 12l7.5-7.5"
        />
      </svg>
    </IconButton>
  ),
  nextArrow: ({ handleNext }) => (
    <IconButton
      variant="text"
      size="lg"
      onClick={handleNext}
      className="text-anchorBlue !absolute top-2/4 !right-0 -translate-y-2/4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          // d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5"
        />
      </svg>
    </IconButton>
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
