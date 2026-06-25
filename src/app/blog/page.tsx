import { client } from "@/lib/sanityClient";
import BlogList from "@/components/BlogList";

const BLOGS_QUERY = `
  *[_type == "post"] {
    _id,
    title,
    "slug": slug.current,
    content,
    mainImage,
    date
  }
`;

export const dynamic = "force-static";

export default async function BlogPage() {
  const blogs = await client.fetch(BLOGS_QUERY);

  return <BlogList blogs={blogs} />;
}
