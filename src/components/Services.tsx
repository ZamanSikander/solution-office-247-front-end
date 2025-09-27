
import React from 'react';
import { Link } from 'react-router-dom';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import Code from 'lucide-react/dist/esm/icons/code';
import ShoppingCart from 'lucide-react/dist/esm/icons/shopping-cart';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
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
      link: "/ecommerce",
     
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
      link: "/frontend",
      
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
      link: "/academicswriting",
      
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal animate">
          <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Our Premium Services
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold mb-8 text-balance">
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
            return (
              <Card
                key={service.id}
                className="service-card-premium border-0 transition-all duration-500 scroll-reveal animate hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <Link to={service.link}>
                    <Button
                      variant="outline"
                      className="group transition-all duration-300 btn-outline-premium"
                    >
                      Explore Services
                      <ArrowRight
                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
