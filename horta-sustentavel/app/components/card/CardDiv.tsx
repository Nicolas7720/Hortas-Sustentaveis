import React from "react";
type CardDivProps = {
  children: React.ReactNode;
};
const CardDiv = ({ children }: CardDivProps) => {
  return (
    <div className="flex flex-col max-w-60 min-h-72 max-h-170 border-2 border-stone-500 bg-gray-700 text-gray-100 p-6 py-8 rounded-2xl">
      {children}
    </div>
  );
};

export default CardDiv;
