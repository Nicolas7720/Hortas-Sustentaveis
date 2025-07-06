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
  const [buscaTerras, setBuscaTerras] = useState("");
  const [buscaHortalicas, setBuscaHortalicas] = useState("");
  useEffect(() => {
    fetch(`/data/terras.json`)
      .then((res) => res.json())
      .then((json) => setTerras(json))
      .catch((err) => `ocorreu um erro: ${err}`);
  }, []);

  const pesquisaTerras = terras.filter((terra) =>
    terra.nome.toLowerCase().includes(buscaTerras.toLowerCase())
  );
  const pesquisaHortalicas = terras.filter((terra) =>
    terra.hortalicasIndicadas.some((hortalica) =>
      hortalica.nome.toLowerCase().includes(buscaHortalicas.toLowerCase())
    )
  );
  let terrasExibidas: terraProp[] = terras;

  if (buscaTerras && !buscaHortalicas) {
    terrasExibidas = pesquisaTerras;
  } else if (!buscaTerras && buscaHortalicas) {
    terrasExibidas = pesquisaHortalicas;
  } else if (buscaTerras && buscaHortalicas) {
    terrasExibidas = terras
      .filter((terra) =>
        terra.nome.toLowerCase().includes(buscaTerras.toLowerCase())
      )
      .filter((terra) =>
        terra.hortalicasIndicadas.some((hortalica) =>
          hortalica.nome.toLowerCase().includes(buscaHortalicas.toLowerCase())
        )
      );
  }

  return (
    <>
      <main className="max-w-full flex flex-col justify-center items-center h-full py-5">
        <div className="min-h-40 sm:w-[calc(100%-200px)] xl:w-[calc(100%-400px)] p-4 bg-stone-600 mb-5 rounded-4xl flex items-center flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Catálogo de Solos e Hortaliças
          </h1>
          <input
            type="text"
            placeholder="Buscar por nome de solos..."
            value={buscaTerras}
            onChange={(e) => setBuscaTerras(e.target.value)}
            className="border-2 border-white rounded-md w-auto px-3 py-1 shadow-sm shadow-green-900 outline-none focus:ring-2 focus:ring-stone-400 focus:border-none"
          />
          <input
            type="text"
            placeholder="Buscar por nome de planta..."
            onChange={(e) => setBuscaHortalicas(e.target.value)}
            className="outline-none border-2 border-white rounded w-auto px-3 py-1 shadow-sm mt-2 shadow-stone-900 focus:ring-2 focus:ring-green-400 focus:border-none"
          />
        </div>
        <Card.Root>
          {terrasExibidas.length > 0 ? (
            terrasExibidas.map((terra) => (
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
                      <li key={plantas.nome} className={plantas.cor}>
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
