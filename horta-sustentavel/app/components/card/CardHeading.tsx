import React from "react";
import { twMerge } from "tailwind-merge";

type CardHeading = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};
const CardHeading = ({ children, ...rest }: CardHeading) => {
  return (
    <h2
      {...rest}
      className={twMerge(
        "text-base mb-2 mt-2 font-extrabold text-shadow-sm",
        rest.className
      )}
    >
      {children}
    </h2>
  );
};

export default CardHeading;
