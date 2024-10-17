"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";

export default function InformationBasic() {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Información básica</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="birthDay">Día de nacimiento</Label>
            <Input
              id="birthDay"
              type="number"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              placeholder="DD"
              className="mt-1"
              required
              min={1}
              max={31}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="birthMonth">Mes de nacimiento</Label>
            <Input
              id="birthMonth"
              type="number"
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              placeholder="MM"
              className="mt-1"
              required
              min={1}
              max={12}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="birthYear">Año de nacimiento</Label>
            <Input
              id="birthYear"
              type="number"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              placeholder="YYYY"
              className="mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="gender">Género</Label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="mt-1 block w-full"
              required
            >
              <option value="">Selecciona tu género</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>
          <Link href="/register/address">
            <Button type="button" className="w-full mb-4">
              Continuar
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
}
