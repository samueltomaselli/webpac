"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

export default function Dashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date('2024-05-25'));
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([
    new Date('2024-05-22'),
    new Date('2024-06-15'),
    new Date('2024-07-30')
  ]);
  return (
    <div className="flex  md:px-16 md:py-10 px-10 py-5 flex-col">
      <h1 className="text-lg font-bold md:text-2xl">Home</h1>
      <Calendar mode="multiple"
        selected={selectedDates}
        className="" />
    </div>
  );
}
