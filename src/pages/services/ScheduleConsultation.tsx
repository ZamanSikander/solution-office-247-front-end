// src/pages/ScheduleConsultation.tsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Calendar, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ScheduleConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://solutionoffice247.com/schedule-consultation" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 mx-auto mb-8 shadow-premium">
              <Calendar className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-2xl lg:text-4xl font-display font-bold text-white mb-6">
              Let's Talk About Your Project
            </h1>
            <p className="text-sm lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Book a free 30-minute consultation to discuss your needs and explore the best
              solutions for your business. Our experts are here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl lg:text-3xl font-display font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Pick a Time",
                  desc: "Choose a slot that fits your schedule from our available calendar.",
                  icon: Calendar,
                },
                {
                  step: "2",
                  title: "Tell Us About Your Project",
                  desc: "Share some basic details so we can prepare for our discussion.",
                  icon: MessageCircle,
                },
                {
                  step: "3",
                  title: "Get Expert Advice",
                  desc: "We'll discuss solutions tailored to your specific needs and goals.",
                  icon: CheckCircle2,
                },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card key={item.step} className="service-card border-0 text-center">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full font-bold text-lg mx-auto mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-xl mb-3 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-center mb-6">
              Book Your Consultation
            </h2>
            <p className="text-center text-muted-foreground text-md mb-8 max-w-2xl mx-auto">
              Select your preferred date and time below. You'll receive a confirmation email
              with all the details and a calendar invite.
            </p>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="bg-neutral-50 rounded-xl md:p-4">
                  {/* Replace src with your Calendly link */}
                  <iframe 
                    src="https://calendly.com/solutionoffice247/30min" 
                    width="100%" 
                    height="600" 
                    frameBorder="0"
                    title="Schedule Consultation Calendar"
                    aria-label="Book your consultation appointment"
                  ></iframe>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Book Section */}
      <section className="py-20 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-center mb-12">
              Why Book a Consultation?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Tailored Recommendations",
                  description: "Get personalized solutions that fit your specific business needs and goals.",
                  icon: CheckCircle2,
                },
                {
                  title: "Clear Understanding",
                  description: "Understand pricing, timelines, and deliverables upfront with no surprises.",
                  icon: Clock,
                },
                {
                  title: "No Obligation",
                  description: "Just friendly, expert advice to help you make informed decisions.",
                  icon: MessageCircle,
                },
              ].map((reason, idx) => {
                const IconComponent = reason.icon;
                return (
                  <Card key={idx} className="service-card border-0 text-center">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-3 text-foreground">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* Contact Alternative */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="glass-card border-0">
              <CardContent className="p-12">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 text-foreground">
                  Not Ready to Schedule Yet?
                </h3>
                <p className="text-muted-foreground text-md mb-6">
                  You can still reach out to us for general inquiries or to learn more about our services.
                </p>
                <Link to="/pages/contact">
                  <Button className="btn-premium text-lg">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScheduleConsultation;
