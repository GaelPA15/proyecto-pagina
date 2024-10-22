"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import Link from "next/link";
import { Alert } from "@/components/ui/alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Por favor, rellena todos los campos");
    } else {
      setError("");
      // Aquí manejarías la lógica de autenticación.
      console.log("Login con:", { email, password });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <Form onSubmit={handleLogin}>
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
          {error && <Alert variant="destructive">{error}</Alert>}
          <Button type="submit" className="w-full mb-4">
            Iniciar sesión
          </Button>
        </Form>
        <div className="text-center">
          <p>
            ¿Olvidaste tu contraseña?
            <Link href="/forgot-password" className="text-blue-600 ml-2">
              Restablecer aquí
            </Link>
          </p>
          <p>
            ¿No tienes cuenta?
            <Link href="/register" className="text-blue-600 ml-2">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
