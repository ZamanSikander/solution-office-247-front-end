import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Heart, Rocket, Shield, Target, Users } from 'lucide-react';

const AboutPage = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'Empower students, entrepreneurs, and teams with premium writing and development services that are reliable, fast, and results-driven.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description:
        'Integrity, transparency, and craftsmanship. We obsess over details and deliver with care.',
    },
    {
      icon: Rocket,
      title: 'What We Do',
      description:
        'Academic writing, React/WordPress development, responsive UI, and motion design — tailored to your goals.',
    },
  ];

  const stats = [
    { title: 'Projects Delivered', value: '1,000+' },
    { title: 'Avg. Response Time', value: '< 2 hrs' },
    { title: 'Client Satisfaction', value: '98%' },
    { title: 'Support', value: '24/7' },
  ];

  const assurances = [
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Confidential handling and secure collaboration on every engagement.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Specialists across research, engineering, and design to cover end‑to‑end needs.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Rigorous reviews and standards ensure consistently excellent outcomes.',
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
            <h1 className="text-xl md:text-4xl font-display font-bold mb-4">About Solution Office 24/7</h1>
            <p className="text-sm  text-center md:text-lg text-white/90">
              Your on‑demand partner for academic excellence and modern web experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 m-11">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="service-card border-0 text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-4 md:m-11">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-md md:text-xl font-bold mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assurances */}
      <section className="py-12 md:m-11">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-lg md:text-2xl font-heading font-semibold">Why Clients Choose Us</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-lg">
              We combine academic rigor and modern engineering to deliver dependable outcomes fast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {assurances.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <span className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </span>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;


