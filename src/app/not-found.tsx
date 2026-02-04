"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const NotFound = () => {
  const pathname = usePathname();
  useScrollToTop();

  useEffect(() => {
    console.log("Page not found:", pathname);
  }, [pathname]);

  return (
    <>
      <main className="pt-24 pb-12 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <div className="text-center max-w-md mx-auto">
              <div className="relative mb-6">
                <div className="text-9xl font-bold text-primary/10">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-4xl sm:text-5xl font-bold text-primary">
                    Page Not Found
                  </h1>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="default" size="lg" className="gap-2">
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Return to Home
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/blog">
                    <ArrowLeft className="h-4 w-4" />
                    Visit Our Blog
                  </Link>
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  If you believe this is an error, please contact our support
                  team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
