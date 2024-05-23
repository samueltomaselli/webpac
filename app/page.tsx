"use client";

import Card from "@/components/sections/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { CodeXml, Bot, Lightbulb, CalendarCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const features = [
    {
      name: "Lógica",
      description: "Desenvolva habilidades de raciocínio lógico.",
      icon: Lightbulb,
    },
    {
      name: "Fundamentos da Programação",
      description: "Aprenda os conceitos fundamentais da programação em C.",
      icon: CodeXml,
    },
    {
      name: "Arduino e Robótica",
      description: "Explore o mundo da eletrônica e robótica.",
      icon: Bot,
    },
    {
      name: "Organização e Produtividade",
      description: "Fique antenado aos próximos eventos e datas importantes.",
      icon: CalendarCheck,
    },
  ];
  return (
    <div className="md:px-16 md:py-10 px-10 py-5 my-auto ">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7">Aprenda de forma simples e compacta</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
            Todo o conteúdo que você precisa em um só lugar
          </p>
          <p className="mt-6 text-lg leading-8 ">
            O WebPac é a sua plataforma centralizada para acessar todos os conteúdos educacionais e
            calendários de aulas do PAC. Criado para facilitar a sua jornada de aprendizado, aqui
            você encontra materiais didáticos e muito mais, tudo organizado de forma intuitiva e
            acessível.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                    <feature.icon className="h-6 w-6 text-background" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
