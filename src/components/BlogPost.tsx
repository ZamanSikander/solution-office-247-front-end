"use client";
import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

interface Blog {
  _id: string;
  title: string;
  date: string;
  slug: string;
  content: any[];
}

interface BlogPostProps {
  blog: Blog;
}

const components = {
  types: {
    // Example: render images if you add them in content
    image: ({ value }: { value?: { asset?: { url: string } } }) => (
      <img
        src={value?.asset?.url}
        alt=""
        className="rounded-lg my-6 mx-auto w-full max-w-md md:max-w-lg"
      />
    ),
  },
  block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-2xl md:text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-xl md:text-3xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-lg md:text-2xl font-semibold my-3">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base md:text-lg leading-relaxed my-2">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600 text-sm md:text-base">
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

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  useScrollToTop();

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-6">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/blog"
          className="flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back to blog link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>

          {/* Blog Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {blog.title}
          </h1>

          {/* Blog Date */}
          <p className="text-gray-500 mb-8 text-sm md:text-base">
            {blog.date
              ? new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Date not set"}
          </p>

          {/* Blog Content */}
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            {blog.content && Array.isArray(blog.content) ? (
              <PortableText value={blog.content} components={components} />
            ) : (
              <p className="text-gray-500">No content available.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
