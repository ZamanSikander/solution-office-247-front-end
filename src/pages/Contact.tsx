import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description:
        "Thank you for your message. We'll get back to you within 24 hours.",
    });
    setFormData({ fullName: '', email: '', contact: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@solutionoffice247.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+92-323-6180902',
      description: 'Available 24/7 for urgent requests',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Global Service',
      description: 'Serving clients worldwide',
    },
    {
      icon: Clock,
      title: 'Availability',
      content: '24/7 Support',
      description: 'Always here when you need us',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-md md:text-lg text-white/90">
              Have a question or ready to get started? Were here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-up">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-heading">
                    Send us a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
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

                      <div>
                        <label htmlFor="contact" className="block text-sm font-medium mb-2">
                          Contact Number
                        </label>
                        <Input
                          id="contact"
                          name="contact"
                          type="tel"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="+1 555 0123 456"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full"
                        placeholder="Tell us about your project or question..."
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

      <Footer />
    </div>
  );
};

export default ContactPage;


