import React from "react";

type CardRootProps = {
  children: React.ReactNode;
};

const CardRoot = ({ children }: CardRootProps) => {
  return (
    <section className="flex gap-4 dark:bg-[#2F3D40] dark:text-white not-dark:text-black not-dark:bg-white flex-wrap justify-center items-center p-2">
      {children}
    </section>
  );
};

export default CardRoot;
