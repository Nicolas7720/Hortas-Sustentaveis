import sementes from "../../data/sementes.json";

import React from "react";

const Card: React.FC = () => {
  return (
    <section className="flex gap-4 bg-white text-black flex-wrap justify-center items-center">
      {sementes.map((semente) => (
        <div
          className="flex flex-col w-3/12 border-2 border-green-400 bg-gray-700 text-gray-100 p-5 rounded-2xl"
          key={semente.nome}
        >
          <h1 className="text-center text-2xl mb-2">{semente.nome}</h1>
          <img src={semente.imagem} alt={`Imagem da ${semente.nome}`} />
          <p>{semente.descricao}</p>
        </div>
      ))}
    </section>
  );
};

export default Card;
