import Image from "next/image";

export function ProfilePic(props: { additionalClassName?: string }) {
  const { additionalClassName } = props;
  return (
    <Image
      src="/img/profile.jpg"
      alt="Picture of me"
      width={144}
      height={144}
      className={additionalClassName ? additionalClassName : ""}
    />
  );
}
