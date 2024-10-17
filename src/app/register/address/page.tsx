"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";

export default function Address() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [colony, setColony] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el registro
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Agregar una dirección</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="country">País</Label>
            <Input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Ingresa tu país"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="city">Ciudad</Label>
            <Input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ingresa tu ciudad"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="colony">Colonia</Label>
            <Input
              id="colony"
              type="text"
              value={colony}
              onChange={(e) => setColony(e.target.value)}
              placeholder="Ingresa tu colonia"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="street">Calle</Label>
            <Input
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Ingresa tu calle"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="postalCode">Código postal</Label>
            <Input
              id="postalCode"
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Ingresa tu código postal"
              className="mt-1"
              required
            />
          </div>
          <Link href="/register/success">
            <Button type="button" className="w-full mb-4">
              Continuar
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
