import { Leaf } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-60 py-8 px-5 bg-gray-950 flex flex-col justify-between">
      <div>
        <div className="flex gap-5">
          <Leaf color="green" size={20} /> <p>PlantaFácil</p>
        </div>
        <p>
          Seu guia completo para cultivar plantas de forma fácil e sustentável
        </p>
      </div>
      <div className="border-t border-white text-center text-white mx-50 pt-2">
        <p className="text-center">
          &copy; {new Date().getFullYear()} PlantaFacil
        </p>
      </div>
    </footer>
  );
};

export default Footer;
