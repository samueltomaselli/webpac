"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function Dashboard() {
    const [selectedDates, setSelectedDates] = React.useState<Date[]>([
        new Date('2024-06-8'),
        new Date('2024-06-16'),
        new Date('2024-06-23'),
        new Date('2024-06-30'),
    ]);
    return (
        <div className=" md:px-16 md:py-10 px-10 py-5 flex flex-col ">
            <h1 className="text-lg font-bold md:text-2xl mb-10">Calendário de aulas</h1>
            <div className="flex-col flex">
                <Calendar mode="multiple"
                    selected={selectedDates}
                    className="w-full h-full" />
                <section className="mt-12">
                    <h2 className="text-base font-semibold leading-6 ">Próximas aulas</h2>
                    <ol className="mt-2 divide-y text-sm leading-6 ">
                        <li className="py-4 sm:flex">
                            <time dateTime="2022-01-19" className="w-28 flex-none">
                                Sábado, Jun 8
                            </time>
                            <p className="mt-2 flex-auto font-semibold  sm:mt-0">Aula 01</p>
                            <p className="flex-none sm:ml-6">
                                <time dateTime="2022-01-13T14:30">07:00 AM</time> - <time dateTime="2022-01-13T16:30">10:15 AM</time>
                            </p>
                        </li>
                        <li className="py-4 sm:flex">
                            <time dateTime="2022-01-18" className="w-28 flex-none">
                                Sábado, Jun 15
                            </time>
                            <p className="mt-2 flex-auto font-semibold  sm:mt-0">Aula 02</p>
                            <p className="flex-none sm:ml-6">
                                <time dateTime="2022-01-17T10:00">07:00 AM</time> - <time dateTime="2022-01-17T10:15">10:15 AM</time>
                            </p>
                        </li>
                        <li className="py-4 sm:flex">
                            <time dateTime="2022-01-18" className="w-28 flex-none">
                                Sábado, Jun 22
                            </time>
                            <p className="mt-2 flex-auto font-semibold  sm:mt-0">Aula 03</p>
                            <p className="flex-none sm:ml-6">
                                <time dateTime="2022-01-17T10:00">07:00 AM</time> - <time dateTime="2022-01-17T10:15">10:15 AM</time>
                            </p>
                        </li>
                        <li className="py-4 sm:flex">
                            <time dateTime="2022-01-18" className="w-28 flex-none">
                                Sábado, Jun 29
                            </time>
                            <p className="mt-2 flex-auto font-semibold  sm:mt-0">Aula 04</p>
                            <p className="flex-none sm:ml-6">
                                <time dateTime="2022-01-17T10:00">07:00 AM</time> - <time dateTime="2022-01-17T10:15">10:15 AM</time>
                            </p>
                        </li>
                    </ol>

                </section>
            </div>
        </div>
    );
}
