import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    "Research Papers",
    "Thesis Writing",
    "React Development",
    "WordPress Design",
    "eCommerce Solutions",
    "SEO Optimization"
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Our Services", href: "#services" },
    { name: "Portfolio", href: "#" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-heading font-bold mb-4">
              Office 24/7
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for academic writing, front-end development, 
              and eCommerce solutions. Quality work delivered 24/7.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-orange" />
                <span className="text-sm">hello@office247.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-orange" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-orange" />
                <span className="text-sm">Global Service Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent-orange transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent-orange transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for updates and tips.
            </p>
            
            <div className="flex space-x-1 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-md bg-background/10 border border-background/20 text-primary-foreground placeholder-primary-foreground/60 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange"
              />
              <button className="px-4 py-2 bg-accent-orange hover:bg-accent-orange-light transition-colors rounded-r-md text-white text-sm font-medium">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="inline-flex items-center justify-center w-10 h-10 bg-background/10 hover:bg-accent-orange rounded-full transition-colors duration-200 group"
                  >
                    <IconComponent className="h-4 w-4 text-primary-foreground group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 Office 24/7. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent-orange transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent-orange transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;