"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
      // Redirige al siguiente paso si las contraseñas coinciden
      // Aquí es donde permitirás continuar a la siguiente página
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Crea una cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingresa tu nombre"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="surname">Apellidos</Label>
            <Input
              id="surname"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Ingresa tus apellidos"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirma tu contraseña"
              className="mt-1"
              required
            />
          </div>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          {password === confirmPassword && password !== "" ? (
            <Link href="/register/information-basic">
              <Button type="button" className="w-full mb-4">
                Continuar
              </Button>
            </Link>
          ) : (
            <Button type="submit" className="w-full mb-4">
              Continuar
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
