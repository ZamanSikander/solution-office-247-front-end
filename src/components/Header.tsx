
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
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

  const academicServices = [
    { name: 'Academics Writing', href: '/services/pages/academicswriting' },
    { name: 'Research Papers', href: '/services/research-papers' },
    { name: 'Thesis & Dissertations', href: '/services/thesis-dissertation' },
    { name: 'Essays & Assignments', href: '/services/essay-assignments' },
    { name: 'Editing & Proofreading', href: '/services/editing-proofreading' },
  ];

  const developmentServices = [
    { name: 'Front-end development', href: '/services/pages/frontend' },
    { name: 'React.js Development', href: '/services/react-development' },
    { name: 'Responsive UI Design', href: '/services/responsive-design' },
    { name: 'Motion & Animation Design', href: '/services/animation-design' },
    { name: 'WordPress Development', href: '/services/wordpress-development' },
  ];

  const ecommerceServices = [
    { name: "E-Commerce Services", href: '/services/pages/ecommerce' },
    { name: 'Ebay Services', href: '/services/ebay-services' },
    { name: 'Walmart Services', href: '/services/walmart-services' },
    { name: 'Tiktok Services', href: '/services/tiktok-services' },
    { name: 'Amazon Services', href: '/services/amazon-services' },
    { name: 'Shopify Services', href: '/services/shopify-services' }
  ];

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
                className="w-48 sm:w-56 md:w-64 h-auto"
              />

            </Link>
            {/* <div className="text-md sm:text-xl font-display font-bold text-gradient-premium">
              Solution Office 24/7
            </div> */}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link to="/" className="nav-link px-4 py-2">Home</Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link px-4 py-2 bg-transparent hover:bg-transparent">
                    eCommerce
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-3 p-6 bg-white">
                      {ecommerceServices.map((service) => (
                        <NavigationMenuLink
                          key={service.name}
                          asChild
                        >
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-terracotta/10 hover:text-accent-terracotta focus:bg-accent-terracotta/10 focus:text-accent-terracotta"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link px-4 py-2 bg-transparent hover:bg-transparent">
                    Development
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-3 p-6 bg-white">
                      {developmentServices.map((service) => (
                        <NavigationMenuLink
                          key={service.name}
                          asChild
                        >
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-sage/10 hover:text-accent-sage focus:bg-accent-sage/10 focus:text-accent-sage"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link px-2 py-2 bg-transparent hover:bg-transparent">
                    Academic Writing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-3 p-6 bg-white">
                      {academicServices.map((service) => (
                        <NavigationMenuLink
                          key={service.name}
                          asChild
                        >
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-coral/10 hover:text-accent-coral focus:bg-accent-coral/10 focus:text-accent-coral"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/about" className="nav-link px-4 py-2">About</Link>
            <Link to="/pages/contact" className="nav-link px-4 py-2">Contact</Link>
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
              <Link to="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">eCommerce</div>
                <div className="pl-4 space-y-1">
                  {ecommerceServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block py-1 text-sm text-foreground hover:text-accent-terracotta transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Development</div>
                <div className="pl-4 space-y-1">
                  {developmentServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block py-1 text-sm text-foreground hover:text-accent-sage transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Academic Writing</div>
                <div className="pl-4 space-y-1">
                  {academicServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block py-1 text-sm text-foreground hover:text-accent-coral transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/pages/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
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
