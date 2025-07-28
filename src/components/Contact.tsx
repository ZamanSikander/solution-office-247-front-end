import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@office247.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
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
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Start Your
            <span className="block text-accent-lilac">Next Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question or ready to get started? We're here to help 24/7. 
            Reach out to us and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-up">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="academic-writing">Academic Writing</option>
                      <option value="frontend-development">Front-End Development</option>
                      <option value="wordpress-ecommerce">WordPress & eCommerce</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button type="submit" className="btn-gradient w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-up animate-delay-200">
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
      </div>
    </section>
  );
};

export default Contact;