"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

import { Search } from "lucide-react";
import Link from "next/link";

const AULAS_ITEMS = [
  "Lógica de programação",
  "Linguagem de programação em C",
  "Bibliotecas básicas em C1",
  "Declaração de variáveis",
  "Comandos de entrada e saída",
  "Condicional",
  "Laços de repetição",
  "Conhecendo o arduino",
  "Componentes básicos do arduino",
  "Simuladores de robótica",
];

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    setFilteredWords(
      AULAS_ITEMS.filter((word) => word.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push(`/aulas?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="w-full flex-1">
      <form onSubmit={handleSearchSubmit}>
        <div className="relative max-w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Encontre aulas por tema..."
            className="w-full appearance-none bg-background pl-8 shadow-none "
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <div className="absolute top-full mt-2 w-full flex flex-col bg-[#f2f2f2]  rounded shadow-lg text-sm">
              {filteredWords.map((item, index) => (
                <Link
                  onClick={() => setSearchTerm("")}
                  href={`/aulas/${item
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  key={index}
                  className="p-2 hover:bg-muted"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
