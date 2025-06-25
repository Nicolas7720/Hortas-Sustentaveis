import React from "react";
type CardTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};
const CardText = ({ children, ...rest }: CardTextProps) => {
  return <p {...rest}>{children}</p>;
};

export default CardText;
