
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

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
    { name: 'Research Papers', href: '/services/research-papers' },
    { name: 'Thesis & Dissertations', href: '/services/thesis-dissertations' },
    { name: 'Essays & Assignments', href: '/services/essays-assignments' },
    { name: 'Editing & Proofreading', href: '/services/editing-proofreading' },
  ];

  const developmentServices = [
    { name: 'React.js Development', href: '/services/react-development' },
    { name: 'Tailwind CSS Integration', href: '/services/tailwind-integration' },
    { name: 'Motion & Animation Design', href: '/services/animation-design' },
    { name: 'Responsive UI Design', href: '/services/responsive-design' },
  ];

  const ecommerceServices = [
    { name: 'WordPress Development', href: '/services/wordpress-development' },
    { name: 'WooCommerce Setup', href: '/services/woocommerce-setup' },
    { name: 'Shopify Store Creation', href: '/services/shopify-development' },
    { name: 'Amazon Listings', href: '/services/amazon-optimization' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card shadow-premium' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-display font-bold text-gradient-premium">
              Solution Office 24/7
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <a href="/" className="nav-link px-4 py-2">Home</a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link px-4 py-2 bg-transparent hover:bg-transparent">
                    Academic Writing
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-3 p-6">
                      {academicServices.map((service) => (
                        <NavigationMenuLink
                          key={service.name}
                          href={service.href}
                          className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-coral/10 hover:text-accent-coral focus:bg-accent-coral/10 focus:text-accent-coral"
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
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
                    <div className="grid w-80 gap-3 p-6">
                      {developmentServices.map((service) => (
                        <NavigationMenuLink
                          key={service.name}
                          href={service.href}
                          className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-teal/10 hover:text-accent-teal focus:bg-accent-teal/10 focus:text-accent-teal"
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link px-4 py-2 bg-transparent hover:bg-transparent">
                    eCommerce
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-80 gap-3 p-6">
                      {ecommerceServices.map((service) => (
                        <NavigationMenuLink
                          key={service.name}
                          href={service.href}
                          className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-lilac/10 hover:text-accent-lilac focus:bg-accent-lilac/10 focus:text-accent-lilac"
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="/about" className="nav-link px-4 py-2">About</a>
            <a href="/contact" className="nav-link px-4 py-2">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="btn-premium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="glass-card px-2 pt-2 pb-3 space-y-1 mt-2 rounded-2xl">
              <a href="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Academic Writing</div>
                <div className="pl-4 space-y-1">
                  {academicServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block py-1 text-sm text-foreground hover:text-accent-coral transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Development</div>
                <div className="pl-4 space-y-1">
                  {developmentServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block py-1 text-sm text-foreground hover:text-accent-teal transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">eCommerce</div>
                <div className="pl-4 space-y-1">
                  {ecommerceServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block py-1 text-sm text-foreground hover:text-accent-lilac transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
              <a href="/about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="btn-premium w-full" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
