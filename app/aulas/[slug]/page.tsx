import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <main className="p-4 text-xl ">
      <article className="flex flex-col gap-2">{blog.content}</article>
    </main>
  );
}
