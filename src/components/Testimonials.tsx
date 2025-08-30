import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "PhD Student",
      service: "Academic Writing",
      content: "Office 24/7 helped me complete my dissertation with exceptional quality. Their attention to detail and research capabilities are outstanding. I couldn't have finished without their support!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b0b2c0d0?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Startup Founder",
      service: "Front-End Development",
      content: "The React.js application they built for us is exactly what we needed. Modern, responsive, and beautifully designed. The team's expertise in front-end development is impressive.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Small Business Owner",
      service: "WordPress & eCommerce",
      content: "Our WooCommerce store has been a game-changer for our business. Sales have increased by 300% since launch. The team's eCommerce expertise is unmatched!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Marketing Director",
      service: "Academic Writing",
      content: "Professional, timely, and high-quality work. The research papers they've helped us with have been instrumental in our content marketing strategy. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "E-commerce Entrepreneur",
      service: "WordPress & eCommerce",
      content: "The Shopify store they created for us is not only beautiful but also highly functional. Our conversion rates have improved significantly. Amazing work!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  });

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-block px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold mb-6">
            What Our Clients
            <span className="block text-accent-orange">Say About Us</span>
          </h2>
          <p className="text-md lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say
            about their experience working with Office 24/7.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="bg-background border-0 shadow-card mx-4">
                    <CardContent className="p-8 lg:p-12">
                      <div className="text-center">
                        {/* Quote Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                          <Quote className="h-8 w-8 text-primary" />
                        </div>

                        {/* Rating */}
                        <div className="flex justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-accent-orange fill-current" />
                          ))}
                        </div>

                        {/* Content */}
                        <blockquote className="text-sm lg:text-2xl text-foreground leading-relaxed mb-8 italic">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center space-x-4">

                          <div className="text-left">
                            <div className="font-semibold text-md">{testimonial.name}</div>
                            <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                            <div className="text-sm text-primary font-medium">{testimonial.service}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12"
              aria-label="Previous slide" // 👈 Adds accessible name
            >
              <ChevronLeft
                className="h-5 w-5"
                aria-hidden="true" // 👈 Icon is decorative
              />
            </Button>


            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-muted'
                    }`}
                  aria-label={`Go to slide ${index + 1}`} // 👈 Makes it descriptive
                  aria-current={index === currentSlide ? "true" : "false"} // 👈 Indicates active slide
                />

              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12"
              aria-label="Next slide" // 👈 Accessible name
            >
              <ChevronRight
                className="h-5 w-5"
                aria-hidden="true" // 👈 Icon hidden from screen readers
              />
            </Button>

          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-xl md:text-2xl font-heading font-semibold mb-4">
            Ready to Join Our Happy Clients?
          </h3>
          <p className="text-muted-foreground mb-8">
            Experience the same level of quality and service that made these clients successful.
          </p>
          <HashLink smooth to='#services'>

            <Button className="btn-gradient">
              Start Your Project Today
            </Button>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;