import Image from "next/image";

const CustomImage = (props) => {
  const { src, width, height, alt, sizes } = props;
  return (
    <Image src={src} width={width} height={height} alt={alt} sizes={sizes} />
  );
};
