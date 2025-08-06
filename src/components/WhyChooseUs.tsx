
import { Clock, Shield, Star, Users, Zap, Award, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support and service delivery to meet your deadlines, no matter your timezone",
      color: "text-accent-coral",
      bgColor: "bg-accent-coral/10",
      gradientFrom: "from-accent-coral/20",
      gradientTo: "to-accent-coral/5"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with unlimited revisions until you're completely happy with the results",
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
      gradientFrom: "from-accent-teal/20",
      gradientTo: "to-accent-teal/5"
    },
    {
      icon: Star,
      title: "Expert Team",
      description: "Seasoned professionals with years of experience and proven track records in their respective fields",
      color: "text-accent-lilac",
      bgColor: "bg-accent-lilac/10",
      gradientFrom: "from-accent-lilac/20",
      gradientTo: "to-accent-lilac/5"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Personalized approach tailored to your specific needs, requirements, and business objectives",
      color: "text-primary",
      bgColor: "bg-primary/10",
      gradientFrom: "from-primary/20",
      gradientTo: "to-primary/5"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality, attention to detail, or professional standards",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      gradientFrom: "from-secondary/20",
      gradientTo: "to-secondary/5"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Impressive track record of successful projects and satisfied clients across all service categories",
      color: "text-accent-coral",
      bgColor: "bg-accent-coral/10",
      gradientFrom: "from-accent-coral/20",
      gradientTo: "to-accent-coral/5"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-reveal animate">
          <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Why Choose Solution Office 24/7
          </div>
          <h2 className="text-2xl sm:text-5xl lg:text-6xlfont-display font-bold mb-8 text-balance">
            Built for Excellence,
            <span className="block text-gradient-premium">Delivered with Care</span>
          </h2>
          <p className="text-md lg:text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            We combine expertise, reliability, and innovation to deliver exceptional results 
            that exceed expectations and drive your success forward every single time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="service-card-premium border-0 text-center scroll-reveal animate overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo}`}></div>
                <CardHeader className="pb-6 relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${feature.bgColor} mx-auto mb-6 shadow-medium`}>
                    <IconComponent className={`h-10 w-10 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-bold mb-4 text-neutral-800">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-neutral-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Premium Stats Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-16 shadow-premium bg-gradient-to-br from-primary/5 to-secondary/5">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
    <div className="scroll-reveal animate">
      <div className="text-4xl lg:text-6xl font-display font-bold mb-3 text-gradient-premium">500+</div>
      <div className="text-neutral-600 font-medium text-sm lg:text-lg">Projects Completed</div>
    </div>
    <div className="scroll-reveal animate" style={{ animationDelay: '0.1s' }}>
      <div className="text-4xl lg:text-6xl font-display font-bold mb-3 text-gradient-premium">98%</div>
      <div className="text-neutral-600 font-medium text-sm lg:text-lg">Client Satisfaction</div>
    </div>
    <div className="scroll-reveal animate" style={{ animationDelay: '0.2s' }}>
      <div className="text-4xl lg:text-6xl font-display font-bold mb-3 text-gradient-premium">24/7</div>
      <div className="text-neutral-600 font-medium text-sm lg:text-lg">Support Available</div>
    </div>
    <div className="scroll-reveal animate" style={{ animationDelay: '0.3s' }}>
      <div className="text-4xl lg:text-6xl font-display font-bold mb-3 text-gradient-premium">5+</div>
      <div className="text-neutral-600 font-medium text-sm lg:text-lg">Years Experience</div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
