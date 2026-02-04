"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: any[];
  mainImage?: any;
  date: string;
}

interface BlogListProps {
  blogs: Blog[];
}
const getExcerpt = (content: any[], maxLength = 150) => {
  if (!Array.isArray(content)) return "";

  const text = content
    .map((block) => block.children?.map((child: any) => child.text).join(""))
    .join(" ");

  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative mt-20 py-10 md:py-20 pb-16 bg-gradient-hero bg-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-premium mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and stories from our team at Solution Office 24/7.
              Stay updated with the latest trends in development, eCommerce, and
              academic writing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 min-h-screen border container mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs && blogs.length > 0 ? (
              blogs.map((blog) => (
                <Card key={blog._id} className="service-card-premium h-full">
                  <CardHeader>
                    <CardTitle className="text-md md:text-xl font-semibold text-foreground hover:text-primary transition-colors">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {blog.date
                        ? new Date(blog.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Date not set"}
                    </p>
                    {blog.content && (
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {getExcerpt(blog.content)}
                      </p>
                    )}

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="btn-premium text-sm px-4 py-2 inline-block"
                    >
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No blog posts found.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
