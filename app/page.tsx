"use client"

import Card from "@/components/sections/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { CodeXml, Bot, Lightbulb } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex  md:px-16 md:py-10 px-10 py-5 flex-col gap-10">
      <div className="w-full prose max-w-4xl">
        <h1 className="text-lg font-bold md:text-2xl">Projeto de Aprendizagem Colaborativa (PAC)</h1>
        <p>O Projeto de Aprendizagem Colaborativa (PAC) é uma atividade curricular obrigatória desenvolvida nos cursos de graduação presenciais da Católica de Santa Catarina, a partir do primeiro semestre dos cursos.</p>
        <p>É uma atividade que objetiva:</p>
        <ul>
          <li>Integrar diferentes conceitos na inter-relação entre as disciplinas do semestre, em uma perspectiva interdisciplinar, para a compreensão do fenômeno estudado.</li>
          <li>Promover a articulação entre teoria e prática e tem, como princípio educativo e organizador da ação, a pesquisa, considerando os conhecimentos gerais, específicos, científicos, tecnológicos, artísticos, culturais, sociais, integrando-os com o contexto local, regional e nacional.</li>
        </ul>
      </div>
      <div className="text-lg font-bold md:text-2xl flex flex-col">
        <h2>Conteúdos abordados:</h2>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-6 py-6 sm:grid-cols-2">
          <Card title={"Lógica"} desc={"Desenvolva habilidades de raciocínio lógico."} icon={CodeXml} />
          <Card title={"Fundamentos da Programação"} desc={"Aprenda os conceitos básicos da programação."} icon={Bot} />
          <Card title={"Arduino e Robótica"} desc={"Explore o mundo da eletrônica e robótica. "} icon={Lightbulb} />
        </ul>
      </div>

    </div>

  );
}
