import Image from "next/image";

export function ProfilePic(props: { additionalClassName?: string }) {
  const { additionalClassName } = props;
  return (
    <Image
      src="/images/profile.jpg"
      alt="Picture of me"
      width={144}
      height={144}
      className={additionalClassName ? additionalClassName : ""}
    />
  );
}

export function CarouselPic(props: {
  imageLocation: string;
  alt?: string;
  additionalClassName?: string;
}) {
  const { imageLocation, alt, additionalClassName } = props;
  return (
    <Image
      src={imageLocation}
      alt={alt ? alt : "Carousel image"}
      width={350}
      height={350}
      className={[
        "w-full h-auto",
        additionalClassName ? additionalClassName : "",
      ].join(" ")}
    />
  );
}
