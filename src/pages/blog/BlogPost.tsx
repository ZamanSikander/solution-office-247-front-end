import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { client } from "@/services/sanityClient";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

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

const BlogPost: React.FC = () => {
  useScrollToTop();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
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
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Solution Office 24/7 Blog</title>
        <meta name="description" content={`Read our blog post about ${post.title}`} />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Back to blog link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            
            {/* Blog Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>

            {/* Blog Date */}
            <p className="text-gray-500 mb-8 text-sm md:text-base">
              {post.date
                ? new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                : "Date not set"}
            </p>

            {/* Blog Content */}
            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
              {post.content && Array.isArray(post.content) ? (
                <PortableText value={post.content} components={components} />
              ) : (
                <p className="text-gray-500">No content available.</p>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPost;
