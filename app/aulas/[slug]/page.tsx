import React from "react";
import temas, { TemaKey } from "@/lib/content";

function Page({ params }: { params: { slug: string } }) {
  const tema = decodeURIComponent(params.slug) as TemaKey;
  const descricao: string = temas[tema];

  return (
    <div className="w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Aulas</h1>
        </div>
        <div
          className="flex rounded-lg border border-dashed shadow-sm p-4"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold tracking-tight">{tema}</h3>
            <p
              className="text-base text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: descricao }}
            ></p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page;
