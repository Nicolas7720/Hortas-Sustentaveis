import { Leaf } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-green-700 p-5 w-full h-20 flex items-center justify-between">
      <div className="flex gap-2">
        <Leaf color="#101828" size={30} />
        <p className="text-gray-900 text-lg">PlantaFácil</p>
      </div>
      <nav className="text-white flex">
        <Link href="/" className="text-lg hover:text-zinc-600 hover:font-bold">
          Sementes
        </Link>
        <Link
          href="/terra"
          className="pl-5 text-white hover:text-stone-700 hover:font-bold text-lg"
        >
          Terras
        </Link>
      </nav>
    </header>
  );
};

export default Header;
