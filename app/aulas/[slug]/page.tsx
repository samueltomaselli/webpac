import { useEffect } from "react";
import { getBlogBySlug, getAllBlogSlug, getBlogs } from "../fetchers";
import "@/styles/highlightJs/github-dark.css";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();
  const blog = await getBlogBySlug(params.slug);

  return (
    <main className="md:px-16 md:py-10 px-5 py-5 ">
      <article className="flex flex-col prose prose-code:text-xs max-w-4xl prose-sm prose-h1:font-bold prose-h1:text-2xl prose-img:max-w-96 dark:prose-invert prose-pre:dark:bg-[#1f2937]">
        {blog.content}
      </article>
    </main>
  );
}
