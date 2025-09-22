import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "@/services/sanityClient";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

interface Blog {
  title: string;
  date: string;
  content: PortableTextBlock[];
}

const components = {
  types: {
    // Example: render images if you add them in content
    image: ({ value }: { value?: { asset?: { url: string } } }) => (
      <img
        src={value?.asset?.url}
        alt=""
        className="rounded-lg my-6 mx-auto"
      />
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-lg leading-relaxed my-2">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-black">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic text-gray-700">{children}</em>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href: string };
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {children}
      </a>
    ),
  },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Blog | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          date,
          content
        }`,
        { slug }
      )
      .then((data) => {
        console.log("Fetched post data:", data);
        setPost(data);
      });
  }, [slug]);

  if (!post) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

      {/* Blog Date */}
      <p className="text-gray-500 mb-6">
  {post.date
    ? new Date(post.date).toDateString()
    : "Date not set"}
</p>


      {/* Blog Content */}
      {post.content && Array.isArray(post.content) ? (
        <PortableText value={post.content} components={components} />
      ) : (
        <p className="text-gray-500">No content available.</p>
      )}
    </div>
  );
};

export default BlogPost;
