import { useEffect } from "react";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";
import Variaveis from "@/app/aulas/_mdx-content/variaveis.mdx";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <main className="px-16 py-10   ">
      <article className="flex flex-col prose max-w-4xl prose-sm ">{blog.content}</article>
    </main>
  );
}
