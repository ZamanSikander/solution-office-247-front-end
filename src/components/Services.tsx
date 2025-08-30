
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, ShoppingCart, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrowserRouter } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const detailRef = useRef(null);
  useEffect(() => {
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeService]);
  const services = [
    {
      id: 2,
      title: "eCommerce",
      description: "Complete eCommerce solutions with excellent results",
      icon: ShoppingCart,
      color: "text-accent-lilac",
      bgColor: "bg-accent-lilac/10",
      gradientFrom: "from-accent-lilac/20",
      gradientTo: "to-accent-lilac/5",
      subcategories: [
        {
          name: "Ebay Services",
          description: "Custom WordPress sites with premium themes and plugins",
          link: "/services/ebay-services"
        },
        {
          name: "Walmart Services",
          description: "Full-featured online stores with payment integration",
          link: "/services/walmart-services"
        },
        {
          name: "Tiktok Services",
          description: "Professional Shopify development and customization",
          link: "/services/tiktok-services"
        },
        {
          name: "Amazon Services",
          description: "Optimized product listings and marketplace management",
          link: "/services/amazon-services"
        },
        {
          name: "Shopify Services",
          description: "Optimized product listings and marketplace management",
          link: "/services/shopify-services"
        }
      ]
    },

    {
      id: 1,
      title: "Front-End Development",
      description: "Modern, responsive applications with cutting-edge technology",
      icon: Code,
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      gradientFrom: "from-accent-teal/20",
      gradientTo: "to-accent-teal/5",
      subcategories: [
        {
          name: "React.js Development",
          description: "Interactive React applications with modern best practices",
          link: "/services/react-development"
        },
        {
          name: "Responsive UI Design",
          description: "Beautiful, responsive designs with utility-first CSS",
          link: "/services/responsive-design"
        },
        {
          name: "Motion & Animation Design",
          description: "Engaging animations and smooth micro-interactions",
          link: "/services/animation-design"
        },
        {
          name: "WordPress Development",
          description: "Professional WordPress and WooCommerce development for fast, secure, and fully customized websites and online stores.",
          link: "/services/wordpress-development"
        }
      ]
    },
    {
      id: 0,
      title: "Academic Writing",
      description: "Premium academic support with expert research and analysis",
      icon: BookOpen,
      color: "text-accent-coral",
      bgColor: "bg-accent-coral/10",
      gradientFrom: "from-accent-coral/20",
      gradientTo: "to-accent-coral/5",
      subcategories: [
        {
          name: "Research Papers",
          description: "In-depth research with scholarly analysis and citations",
          link: "/services/research-papers"
        },
        {
          name: "Thesis & Dissertations",
          description: "Comprehensive graduate-level academic support",
          link: "/services/thesis-dissertation"
        },
        {
          name: "Essays & Assignments",
          description: "High-quality essays with original content and analysis",
          link: "/services/essay-assignments"
        },
        {
          name: "Editing & Proofreading",
          description: "Professional editing with grammar and style enhancement",
          link: "/services/editing-proofreading"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal animate">
          <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Premium Services
          </div>
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 text-balance">
            Comprehensive Solutions for
            <span className="block m-1 text-gradient-premium">Every Digital Need</span>
          </h2>
          <p className="text-md lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            We offer three specialized service areas, each designed to deliver exceptional results
            and help you achieve your goals with premium quality and professional excellence.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            return (
              <Card
                key={service.id}
                className={`service-card-premium cursor-pointer border-0 transition-all duration-500 scroll-reveal animate ${isActive ? 'scale-105 shadow-premium' : 'hover:scale-105'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveService(index)}
              >
                <CardHeader className="text-center pb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} rounded-t-2xl`}></div>
                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${service.bgColor} mx-auto mb-6 shadow-medium`}>
                      <IconComponent className={`h-10 w-10 ${service.color}`} />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-display font-bold mb-4">{service.title}</CardTitle>
                    <CardDescription className="text-base text-neutral-600 leading-relaxed">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="text-center relative">
                  <Button
                    variant={isActive ? "default" : "outline"}
                    className={`group transition-all duration-300 ${isActive ? 'btn-premium' : 'btn-outline-premium'
                      }`}
                  >
                    Explore Services
                    <ArrowRight
                      className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true" // Hides icon from screen readers
                    />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Service Breakdown */}
        <div className="glass-card rounded-3xl p-2 lg:p-16 shadow-premium"
          ref={detailRef}
        >

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${services[activeService].bgColor} ${services[activeService].color}`}>
                  Featured Service
                </div>
                <h3 className="text-xl  lg:text-4xl font-display font-bold text-neutral-800">
                  {services[activeService].title}
                </h3>
                <p className="text-sm lg:text-lg text-neutral-600 leading-relaxed">
                  {services[activeService].description}
                </p>
              </div>

              <div className="space-y-6">
                {services[activeService].subcategories.map((sub, index) => (
                  <div key={index} className="group cursor-pointer">
                    <a
                      href={sub.link}
                      className="flex items-start space-x-2 p-1 lg:p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-medium"
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${services[activeService].bgColor}`}>
                        <CheckCircle2 className={`h-5 w-5 ${services[activeService].color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold text-lg mb-2 group-hover:${services[activeService].color} transition-colors`}>
                          {sub.name}
                        </h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {sub.description}
                        </p>
                      </div>
                      <ArrowRight className={`h-5 w-5 text-neutral-400 group-hover:${services[activeService].color} group-hover:translate-x-1 transition-all flex-shrink-0 mt-1`} />
                    </a>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link to='/pages/contact'>
                  <Button className="btn-premium text-sm lg:text-lg">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" 
                    aria-hidden="true"
                    />
                  </Button>
                </Link>

              </div>
            </div>

            <div className="relative">
              <div className={`w-full h-96 rounded-3xl bg-gradient-to-br ${services[activeService].gradientFrom} ${services[activeService].gradientTo} flex items-center justify-center relative overflow-hidden shadow-premium`}>
                <div className="absolute inset-0 bg-mesh opacity-30"></div>
                <div className={`relative text-8xl ${services[activeService].color} opacity-30`}>
                  {React.createElement(services[activeService].icon)}
                </div>
                <div className="absolute bottom-8 left-8">
                  <div className="glass-card rounded-2xl p-6">
                    <div className="text-3xl font-bold text-neutral-800">{services[activeService].subcategories.length}</div>
                    <div className="text-sm text-neutral-600 font-medium">Specialized Services</div>
                  </div>
                </div>
                <div className="absolute top-8 right-8">
                  <div className={`w-12 h-12 rounded-full ${services[activeService].bgColor} flex items-center justify-center animate-pulse`}>
                    <Sparkles className={`h-6 w-6 ${services[activeService].color}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
