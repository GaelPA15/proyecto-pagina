// src/components/ui/Navbar.tsx

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          MGX- May GeXo
        </Link>
        <div>
          <Link href="/login" className="mr-4">
            Iniciar Sesión
          </Link>
          <Link href="/register">
            <Button>Registrarse</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
