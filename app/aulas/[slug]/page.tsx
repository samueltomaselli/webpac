import { useEffect } from "react";
import { getBlogBySlug, getAllBlogSlug, getBlogs } from "../fetchers";
import Variaveis from "@/app/aulas/_mdx-content/variaveis.mdx";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blogs = await getBlogs();
  const blog = await getBlogBySlug(params.slug);

  return (
    <main className="md:px-16 md:py-10 px-10 py-5 ">

      <article className="flex flex-col prose max-w-4xl prose-sm prose-h1:font-bold prose-h1:text-2xl prose-img:max-w-96 prose-img:shadow-md prose-h1:dark:text-white prose-h2:dark:text-gray-200 prose-h3:dark:text-gray-200 prose-p:dark:text-[#7F8EA3] prose-ul:dark:text-[#7F8EA3] ">
        {blog.content}
      </article>
    </main>
  );
}
