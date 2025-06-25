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
};

export default function Sementes() {
  const [semente, setSemente] = useState<sementes[]>([]);
  useEffect(() => {
    fetch("/sementes.json")
      .then((res) => res.json())
      .then((json) => setSemente(json))
      .catch((error) => `ocorreu um em: ${error}`);
  });
  return (
    <>
      <main className="max-w-full flex flex-col justify-center items-center h-full py-5">
        <Card.Root>
          {semente.length > 0 ? (
            semente.map((sem) => (
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
                <Card.Heading className="text-center text-base mb-2 mt-2 text-stone-500 text-shadow-stone-800 font-extrabold text-shadow-sm">
                  Solo Recomendado
                </Card.Heading>
                <Card.Text className="text-center pt-1.5">
                  {sem.soloRecomendado}
                </Card.Text>
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
