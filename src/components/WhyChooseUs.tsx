import { Clock, Shield, Star, Users, Zap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and service delivery to meet your deadlines",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with unlimited revisions until you're happy",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Star,
      title: "Expert Team",
      description: "Seasoned professionals with years of experience in their respective fields",
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Personalized approach tailored to your specific needs and requirements",
      color: "text-accent-lilac",
      bgColor: "bg-accent-lilac/10"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients across all services",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Why Choose Office 24/7
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Built for Excellence,
            <span className="block text-secondary">Delivered with Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine expertise, reliability, and innovation to deliver exceptional results 
            that exceed expectations and drive your success forward.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="service-card text-center border-0 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mx-auto mb-4`}>
                    <IconComponent className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-slide-in-up">
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div className="animate-slide-in-up animate-delay-100">
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
            <div className="animate-slide-in-up animate-delay-200">
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Support Available</div>
            </div>
            <div className="animate-slide-in-up animate-delay-300">
              <div className="text-4xl lg:text-5xl font-bold mb-2">5+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;