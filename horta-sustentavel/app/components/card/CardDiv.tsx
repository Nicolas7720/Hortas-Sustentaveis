import React from "react";
type CardDivProps = {
  children: React.ReactNode;
};
const CardDiv = ({ children }: CardDivProps) => {
  return (
    <div className="flex flex-col sm:w-full md:w-100 border-2 border-stone-500 bg-gray-700 text-gray-100 p-6 py-8 rounded-2xl hover:shadow-neutral-400 hover:shadow-xl gap-2">
      {children}
    </div>
  );
};

export default CardDiv;
