"use client";
import { useEffect, useState } from "react";
import { Card } from "../card";

type sementes = {
  nome: string;
  descricao: string;
  soloRecomendado: string;
  beneficios: string;
  imagem: string;
  cor: string;
  periodoPlantio: string;
  formaPlantio: string;
  tempoCrescimento: string;
};

export default function Sementes() {
  const [sementes, setSementes] = useState<sementes[]>([]);
  const [busca, setBusca] = useState("");
  useEffect(() => {
    fetch("/data/sementes.json")
      .then((res) => res.json())
      .then((json) => setSementes(json))
      .catch((error) => `ocorreu um em: ${error}`);
  });
  const sementesFiltradas = sementes.filter((semente) =>
    semente.nome.toLowerCase().includes(busca.toLowerCase())
  );
  return (
    <>
      <main className="max-w-full flex flex-col justify-center items-center h-full py-5 dark:bg-gradient-to-r dark:bg-gray-900 not-dark:bg-white flex-wrap p-2">
        <div className="min-h-40 sm:w-[calc(100%-200px)] xl:w-[calc(100%-400px)] p-4 bg-green-600 mb-5 rounded-4xl flex items-center flex-col border-4 border-green-500 hover:bg-gray-900 transition ease-in-out duration-500 delay-150 hover:shadow-sky-100 hover:shadow-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Catálogo de Hortaliças
          </h1>
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="border-2 border-white rounded-md w-auto px-3 py-1 shadow-sm shadow-green-900 focus:outline-none focus:ring-4 focus:ring-green-800 focus:border-none"
          />
        </div>
        <Card.Root>
          {sementesFiltradas.length > 0 ? (
            sementesFiltradas.map((sem) => (
              <Card.Div key={sem.nome}>
                <Card.Image src={sem.imagem} alt={sem.nome} />
                <div>
                  <Card.Heading
                    className={`text-center text-base mb-2 ${sem.cor}`}
                  >
                    {sem.nome}
                  </Card.Heading>

                  <Card.Text className="text-leading-7">
                    {sem.descricao}
                  </Card.Text>
                </div>
                <div className="flex justify-center items-center gap-2 mx-20">
                  <Card.Heading className="text-stone-500 text-shadow-stone-800">
                    Solo Recomendado:
                  </Card.Heading>
                  <Card.Text>{sem.soloRecomendado}</Card.Text>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Card.Heading className="text-indigo-300 text-shadow-indigo-800 w-auto">
                    Período Recomendado:
                  </Card.Heading>
                  <Card.Text>{sem.periodoPlantio}</Card.Text>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <Card.Heading className="text-emerald-600 text-shadow-emerald-800">
                    Como Plantar:
                  </Card.Heading>
                  <Card.Text className="mx-5 text-justify">
                    {sem.formaPlantio}
                  </Card.Text>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Card.Heading className="text-sky-300 text-shadow-skye-800">
                    Tempo de crescimento:
                  </Card.Heading>
                  <Card.Text>{sem.tempoCrescimento}</Card.Text>
                </div>
              </Card.Div>
            ))
          ) : (
            <>
              <Card.Text>... Carregando Sementes</Card.Text>
            </>
          )}
        </Card.Root>
      </main>
    </>
  );
}
