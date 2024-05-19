import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

function Contato() {
  return (
    <div className="flex flex-col  ">
      <h1 className="text-lg font-semibold md:text-2xl md:px-16 md:py-10 px-10 py-5">Contato</h1>
      <div className="w-full h-full flex justify-center items-center px-2">
        <Card className=" max-w-sm  ">
          <CardHeader>
            <CardTitle className="text-xl">Fale conosco</CardTitle>
            <CardDescription>Escreva-nos sugestões de conteúdos.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Primeiro nome</Label>
                  <Input id="first-name" placeholder="João" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Último nome</Label>
                  <Input id="last-name" placeholder="Pessoa" required />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Sugestão</Label>
                <Textarea placeholder="Envie sua sugestão aqui." />
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Contato;
