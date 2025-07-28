import React, { useState } from 'react';
import { BookOpen, Code, ShoppingCart, ChevronRight, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: "Academic Writing",
      description: "Professional academic support for students and researchers",
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      subcategories: [
        { name: "Research Papers", description: "In-depth research and analysis for academic papers" },
        { name: "Thesis and Dissertations", description: "Comprehensive support for graduate-level work" },
        { name: "Essays and Assignments", description: "High-quality essays and coursework assistance" },
        { name: "Editing & Proofreading", description: "Professional editing and proofreading services" }
      ]
    },
    {
      id: 1,
      title: "Front-End Development",
      description: "Modern, responsive web applications and user interfaces",
      icon: Code,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      subcategories: [
        { name: "React.js Development", description: "Interactive and dynamic React applications" },
        { name: "Tailwind CSS Integration", description: "Beautiful, responsive designs with Tailwind" },
        { name: "Motion & Animation Design", description: "Engaging animations and micro-interactions" },
        { name: "Responsive UI Design", description: "Mobile-first, cross-device compatibility" }
      ]
    },
    {
      id: 2,
      title: "WordPress & eCommerce",
      description: "Complete eCommerce solutions and WordPress development",
      icon: ShoppingCart,
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10",
      subcategories: [
        { name: "WordPress Site Design", description: "Custom WordPress websites and themes" },
        { name: "WooCommerce Integration", description: "Full-featured online stores with WooCommerce" },
        { name: "Shopify Store Setup", description: "Professional Shopify store development" },
        { name: "Amazon Product Listings", description: "Optimized product listings and store management" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Comprehensive Solutions for
            <span className="block text-primary">Every Digital Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer three core service areas, each designed to deliver exceptional results 
            and help you achieve your goals with professional excellence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className={`service-card cursor-pointer border-2 transition-all duration-300 animate-slide-in-up ${
                  activeService === index 
                    ? 'border-primary shadow-glow' 
                    : 'border-transparent hover:border-primary/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveService(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.bgColor} mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant={activeService === index ? "default" : "outline"}
                    className="group"
                  >
                    Learn More 
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed Subcategories */}
        <div className="bg-background rounded-3xl p-8 lg:p-12 shadow-card">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6">
                {services[activeService].title}
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {services[activeService].description}
              </p>
              
              <div className="space-y-6">
                {services[activeService].subcategories.map((sub, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {sub.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="btn-gradient">
                  Get Quote for {services[activeService].title}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className={`w-full h-80 rounded-2xl ${services[activeService].bgColor} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                <div className={`text-8xl ${services[activeService].color} opacity-20`}>
                  {React.createElement(services[activeService].icon)}
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold">{services[activeService].subcategories.length}</div>
                    <div className="text-sm text-muted-foreground">Specialized Services</div>
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