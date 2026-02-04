import { client } from "@/lib/sanityClient";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";

// The query needs to fetch "content" and "date" to match your component
const BLOG_QUERY = `
  *[_type == "post"  && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    content,
    mainImage,
    date
  }
`;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Await params for Next.js 15
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    notFound();
  }

  // 2. Fetch the data using the slug
  const blog = await client.fetch(BLOG_QUERY, {
    slug: slug,
  });

  // 3. If Sanity returns nothing, show 404
  if (!blog) {
    notFound();
  }

  // 4. Send the blog data to your BlogPost component
  return <BlogPost blog={blog} />;
}
