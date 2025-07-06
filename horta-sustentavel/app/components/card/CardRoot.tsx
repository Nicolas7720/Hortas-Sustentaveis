import React from "react";

type CardRootProps = {
  children: React.ReactNode;
};

const CardRoot = ({ children }: CardRootProps) => {
  return (
    <section className="flex gap-6 flex-wrap justify-center items-center p-2">
      {children}
    </section>
  );
};

export default CardRoot;
