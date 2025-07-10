import Image from "next/image";
import React from "react";
type CardImageProps = React.HtmlHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

const CardImage = ({ src, alt }: CardImageProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={`Imagem da ${alt}`}
        width={160}
        height={30}
        className="pb-2 w-full h-70 object-contain aspect-video"
      />
    </div>
  );
};

export default CardImage;
