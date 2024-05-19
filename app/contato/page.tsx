"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Contato() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [send, setSend] = useState(false);

  const fullName = firstName + " " + lastName;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const response = await fetch("/api/email/send/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        suggestion,
      }),
    });

    if (response.ok) {
      console.log("Dados enviados com sucesso");
      setFirstName("");
      setLastName("");
      setEmail("");
      setSuggestion("");
      setSend(true);
    } else {
      console.log("Erro ao enviar dados");
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
      setSend(false);
    };

  return (
    <div className="flex flex-col md:px-16 md:py-10 px-10 py-5 gap-5">
      <h1 className="text-lg font-bold md:text-2xl">Fale conosco</h1>
      <div className="w-full h-full flex">
        <Card className="flex flex-col gap-5">
          <CardHeader>
            <CardDescription>Escreva-nos sugestões de conteúdos.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-6 py-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Primeiro nome</Label>
                  <Input
                    id="first-name"
                    value={firstName}
                    onChange={handleInputChange(setFirstName)}
                    placeholder="João"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Último nome</Label>
                  <Input
                    id="last-name"
                    onChange={handleInputChange(setLastName)}
                    value={lastName}
                    placeholder="Pessoa"
                    required
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  onChange={handleInputChange(setEmail)}
                  value={email}
                  type="email"
                  placeholder="email@exemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Sugestão</Label>
                <Textarea
                  onChange={handleInputChange(setSuggestion)}
                  value={suggestion}
                  placeholder="Envie sua sugestão aqui."
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
            {send && <p>Sugestão enviada com sucesso!</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Contato;
