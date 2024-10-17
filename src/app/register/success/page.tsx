"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">¡Registro exitoso!</h1>
        <p className="mb-4">Tu registro ha sido completado con éxito.</p>
        <Link href="/">
          <Button className="w-full">Ir a la página principal</Button>
        </Link>
      </div>
    </div>
  );
}
