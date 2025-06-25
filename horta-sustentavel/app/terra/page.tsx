"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../components/card";

type planta = {
  nome: string;
  cor: string;
};

type terraProp = {
  nome: string;
  imagem: string;
  descricao: string;
  caracteristicas: string;
  hortalicasIndicadas: planta[];
};
const Terra = () => {
  const [terras, setTerras] = useState<terraProp[]>([]);
  useEffect(() => {
    fetch(`/data/terras.json`)
      .then((res) => res.json())
      .then((json) => setTerras(json))
      .catch((err) => `ocorreu um erro: ${err}`);
  }, []);
  return (
    <>
      <main className="max-w-full flex flex-col justify-center items-center h-full py-5">
        <Card.Root>
          {terras.length > 0 ? (
            terras.map((terra) => (
              <Card.Div key={terra.nome}>
                <Card.Image src={terra.imagem} alt={terra.nome}></Card.Image>
                <Card.Text className={`text-center text-base mb-2 pb-3`}>
                  {terra.nome}
                </Card.Text>
                <div>
                  <Card.Heading className="pb-2">Descrição:</Card.Heading>
                  <Card.Text>{terra.descricao}</Card.Text>
                </div>
                <div>
                  <Card.Heading className="pb-2 pt-4">
                    Características:
                  </Card.Heading>
                  <Card.Text>{terra.caracteristicas}</Card.Text>
                </div>
                <div>
                  <Card.Heading className="pb-2 pt-4">
                    Plantas Indicadas
                  </Card.Heading>
                  <ul>
                    {terra.hortalicasIndicadas.map((plantas) => (
                      <li className={`${plantas.cor}`} key={plantas.nome}>
                        {plantas.nome}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card.Div>
            ))
          ) : (
            <Card.Text>... Carregando</Card.Text>
          )}
        </Card.Root>
      </main>
    </>
  );
};

export default Terra;
