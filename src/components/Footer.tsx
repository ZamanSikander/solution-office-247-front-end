import Mail from 'lucide-react/dist/esm/icons/mail';
import Phone from 'lucide-react/dist/esm/icons/phone';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Twitter from 'lucide-react/dist/esm/icons/twitter';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Facebook from 'lucide-react/dist/esm/icons/facebook';
import Instagram from 'lucide-react/dist/esm/icons/instagram';

import { Link } from 'react-router-dom';

const Footer = () => {
  const ecommerceServices = [
    { name: "E-Commerce Services", href: '/ecommerce' },
    { name: 'Ebay Services', href: '/services/ebay-services' },
    { name: 'Walmart Services', href: '/services/walmart-services' },
    { name: 'Tiktok Services', href: '/services/tiktok-services' },
    { name: 'Amazon Services', href: '/services/amazon-services' },
    { name: 'Shopify Services', href: '/services/shopify-services' }
  ];

  const academicServices = [
    { name: 'Academics Writing Services', href: '/academicswriting' },
    { name: 'Research Papers', href: '/services/research-papers' },
    { name: 'Thesis & Dissertations', href: '/services/thesis-dissertation' },
    { name: 'Essays & Assignments', href: '/services/essay-assignments' },
    { name: 'Editing & Proofreading', href: '/services/editing-proofreading' },
  ];

  const developmentServices = [
    { name: 'Front-end development', href: '/frontend' },
    { name: 'React.js Development', href: '/services/react-development' },
    { name: 'Responsive UI Design', href: '/services/responsive-design' },
    { name: 'Motion & Animation Design', href: '/services/animation-design' },
    { name: 'WordPress Development', href: '/services/wordpress-development' },
  ];



  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "/pages/contact" },
    { name: "Blog", href: "/blog" }
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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-heading font-bold mb-4">
              Solution Office 24/7
            </div>
            <p className="mb-6 leading-relaxed">
              Your trusted partner for academic writing, front-end development,
              and eCommerce solutions. Quality work delivered 24/7.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent-orange" />
                <span className="text-sm">solutionoffice247@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent-orange" />
                <span className="text-sm">+92-323-6180902</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent-orange" />
                <span className="text-sm">Global Service Available</span>
              </div>
            </div>
          </div>
          {/* eCommerce Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">eCommerce</h3>
           
            <ul className="space-y-2 ml-3">
              {ecommerceServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Development</h3>
            <ul className="space-y-2">
              {developmentServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Academic Writing Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academic Writing</h3>
            <ul className="space-y-2">
              {academicServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Quick Links Row */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <p className=" text-sm mb-4">
                Subscribe to our newsletter for updates and tips.
              </p>

              <div className="flex mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-md border border-background/20 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange text-gray-600"
                />

                <button className="px-2 lg:px-4 py-2 bg-accent-orange hover:bg-accent-orange-light transition-colors rounded-r-md text-white text-sm font-medium">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2024 Office 24/7. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;