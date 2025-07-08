import React from "react";
import { twMerge } from "tailwind-merge";

type CardHeading = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
  text?: string;
};
const CardHeading = ({ children, text, ...rest }: CardHeading) => {
  return (
    <h2
      {...rest}
      className={twMerge(
        "text-base mb-2 mt-2 font-extrabold text-shadow-sm",
        rest.className
      )}
    >
      {children}
      <span className="text-leading-7 text-white ml-3 font-medium">{text}</span>
    </h2>
  );
};

export default CardHeading;
