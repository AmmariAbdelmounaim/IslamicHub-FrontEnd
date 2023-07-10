import Image from "next/image";

const Logo = ({
  src,
  alt,
  width,
  height,
}: {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      priority={true}
      src={src || "IslamicHub.svg"}
      alt={alt || "Islamic Hub Logo"}
      width={width || 71}
      height={height || 71}
    />
  );
};
export default Logo;
