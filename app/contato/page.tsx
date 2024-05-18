import React from "react";

function Contato() {
  return (
    <div className="w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Contato</h1>
        </div>
      </main>
    </div>
  );
}

export default Contato;
