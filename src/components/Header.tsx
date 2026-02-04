"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo6_1 from "@/assets/logo6_1.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler for hash links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    // If already on home page → just scroll
    if (pathname === "/") {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Navigate to home with hash
      router.push(`/#${targetId}`);
    }

    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card shadow-premium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo6_1}
                alt="Solution Office Logo"
                width="512"
                height="128"
                className="w-48 sm:w-56 md:w-64"
              />
            </Link>
            {/* <div className="text-md sm:text-xl font-display font-bold text-gradient-premium">
              Solution Office 24/7
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link href="/" className="nav-link px-4 py-2 text-sm">
              Home
            </Link>
            <Link href="/ecommerce" className="nav-link px-4 py-2  text-sm">
              E-commerce
            </Link>
            <Link href="/frontend" className="nav-link px-4 py-2 text-sm">
              Web Development
            </Link>
            <Link href="/academicswriting" className="nav-link py-2 text-sm">
              Academics Writing
            </Link>
            <Link href="/about" className="nav-link px-4 py-2 text-sm">
              About
            </Link>
            <Link href="/contact" className="nav-link px-4 py-2 text-sm">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="btn-premium p-3 m-3 text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"} // 👈 Dynamic label
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" /> // 👈 Hide decorative icons
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="glass-card px-2 pb-3 rounded-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/ecommerce"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                E-commerce
              </Link>
              <Link
                href="/frontend"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Web Development
              </Link>
              <Link
                href="/academicswriting"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Academics Writing
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link
                  href="/#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="btn-premium p-2 text-xs w-full"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
