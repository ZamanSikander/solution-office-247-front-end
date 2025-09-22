import React, { useEffect, useState } from "react";
import { client } from "@/services/sanityClient";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Blog {
  title: string;
  slug: { current: string };
  date: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(date desc){title, slug, date}`)
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative mt-20 py-10 md:py-20 pb-16 bg-gradient-hero bg-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-premium mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and stories from our team at Solution Office 24/7.
              Stay updated with the latest trends in development, eCommerce, and academic writing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 min-h-screen border container mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card key={blog.slug.current} className="service-card-premium h-full">
                <CardHeader>
                  <CardTitle className="text-md md:text-xl font-semibold text-foreground hover:text-primary transition-colors">
                    <Link to={`/blog/${blog.slug.current}`}>
                      {blog.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {blog.date
                      ? new Date(blog.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      : "Date not set"}
                  </p>
                  <Link
                    to={`/blog/${blog.slug.current}`}
                    className="btn-premium text-sm px-4 py-2 inline-block"
                  >
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogList;
