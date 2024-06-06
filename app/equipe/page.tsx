

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Aboutus() {
    return (
        <div className=" md:px-16 md:py-10 px-5 py-5 flex flex-col ">
            <h1 className="text-lg font-bold md:text-2xl mb-10">Quem somos</h1>
            <div className="flex-col flex">
                <Card>
                    <CardContent className="grid gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                <AvatarFallback>ST</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">Samuel Henrique Tomaselli</p>
                                <p className="text-sm text-muted-foreground">
                                    samueltomasellidev@gmail.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">Desenvolvimento web</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/02.png" alt="Avatar" />
                                <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">Vinícius Leitempergher</p>
                                <p className="text-sm text-muted-foreground">
                                    vinileitempergher@gmail.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">Criação de conteúdo e UI/UX</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/03.png" alt="Avatar" />
                                <AvatarFallback>IN</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">Hallan Rauber Sbardellati</p>
                                <p className="text-sm text-muted-foreground">
                                    hallansbardelatti@gmail.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">Criação de conteúdo e UI/UX</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/04.png" alt="Avatar" />
                                <AvatarFallback>WK</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">Davi Scheuer</p>
                                <p className="text-sm text-muted-foreground">davischeuer2006@gmail.com</p>
                            </div>
                            <div className="ml-auto font-medium">Criação de conteúdo e UI/UX</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/05.png" alt="Avatar" />
                                <AvatarFallback>SD</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">Valdeci Novak Junior</p>
                                <p className="text-sm text-muted-foreground">
                                    valdecinovakjr@email.com
                                </p>
                            </div>
                            <div className="ml-auto font-medium">Criação de conteúdo e UI/UX</div>
                        </div>
                    </CardContent>
                </Card>


            </div>
        </div>
    );
}