import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-green-700 p-5 w-full h-15 flex items-center">
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
