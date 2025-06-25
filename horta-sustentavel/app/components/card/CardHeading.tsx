import React from "react";

type CardHeading = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};
const CardHeading = ({ children, ...rest }: CardHeading) => {
  return <h2 {...rest}>{children}</h2>;
};

export default CardHeading;
