import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@solutionoffice247.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+92-323-6180902",
      description: "Available 24/7 for urgent requests"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Global Service",
      description: "Serving clients worldwide"
    },
    {
      icon: Clock,
      title: "Availability",
      content: "24/7 Support",
      description: "Always here when you need us"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="inline-block px-4 py-2 bg-accent-lilac/10 text-accent-lilac rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Start Your
            <span className="block text-accent-lilac">Next Project?</span>
          </h2>
          <p className="text-md lg:text-xl  text-muted-foreground max-w-3xl mx-auto">
            Have a question or ready to get started? We're here to help 24/7. 
            Reach out to us and let's discuss how we can bring your vision to life.
          </p>
          <div className="mt-8">
            <Link to="/pages/contact">
              <Button className="btn-gradient px-6 py-6 text-base">Get a quote</Button>
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="animate-slide-in-up animate-delay-200 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="service-card border-0 text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <p className="text-foreground font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Response Promise */}
            <div className="mt-8 bg-gradient-primary rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-semibold mb-3">⚡ Quick Response Guarantee</h3>
              <p className="text-white/90 mb-4">
                We typically respond to all inquiries within 2 hours during business hours, 
                and within 6 hours during weekends and holidays.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">&lt; 2 hrs</div>
                  <div className="text-sm text-white/80">Business Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">&lt; 6 hrs</div>
                  <div className="text-sm text-white/80">Weekends</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;