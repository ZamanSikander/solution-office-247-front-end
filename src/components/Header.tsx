
import { useState, useEffect } from 'react';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo6_1 from "@/assets/logo6_1.webp"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card shadow-premium' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
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
            <Link to="/" className="nav-link px-4 py-2 text-sm">Home</Link>
            <Link to="/ecommerce" className="nav-link px-4 py-2  text-sm">E-commerce</Link>
            <Link to="/frontend" className="nav-link px-4 py-2 text-sm">Web Development</Link>
            <Link to="/academicswriting" className="nav-link py-2 text-sm">Academics Writing</Link>
            <Link to="/about" className="nav-link px-4 py-2 text-sm">About</Link>
            <Link to="/pages/contact" className="nav-link px-4 py-2 text-sm">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <HashLink smooth to="/#services" className="btn-premium p-3 m-3 text-sm">Get Started</HashLink>
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
                <X className="h-6 w-6" aria-hidden="true" />   // 👈 Hide decorative icons
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
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/ecommerce" className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                E-commerce
              </Link>
              <Link to="/frontend" className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                Web Development
              </Link>
              <Link to="/academicswriting" className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                Academics Writing
              </Link>
              <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/pages/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="px-3 py-2">

                <HashLink smooth to="/#services" className="btn-premium p-2 text-xs w-full" onClick={() => setIsMenuOpen(false)}>Get Started</HashLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
