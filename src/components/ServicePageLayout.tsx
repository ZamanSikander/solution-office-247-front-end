
import {useState} from 'react';
import ChoosePlanModal from './ChoosePlanModal';
import { ArrowLeft, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ServicePageProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  HbgColor: string;
  features: string[];
  process: { step: string; description: string }[];
  pricing?: { plan: string; price: string; features: string[] }[];
  testimonial?: { name: string; role: string; content: string };
}

const ServicePageLayout: React.FC<ServicePageProps> = ({
  title,
  description,
  icon: Icon,
  color,
  bgColor,
  HbgColor,
  features,
  process,
  pricing,
  testimonial
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedPlan, setSelectedPlan] = useState('');
const [selectedService, setSelectedService] = useState('');

const handleChoosePlan = (planName: string, serviceName: string) => {
  setSelectedPlan(planName);
  setSelectedService(serviceName);
  setIsModalOpen(true);
};

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 ${HbgColor} overflow-hidden`}>
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/">
              <Button variant="ghost" className="mb-8 text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${bgColor} mx-auto mb-8 shadow-premium`}>
              <Icon className={`h-10 w-10 ${color}`} />
            </div>
            
            <h1 className="text-2xl lg:text-4xl font-display font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-md lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button className="btn-premium text-lg">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="text-lg">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl lg:text-3xl font-display font-bold text-center mb-12">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 glass-card rounded-2xl">
                  <CheckCircle2 className={`h-6 w-6 ${color} flex-shrink-0`} />
                  <span className="text-md md:text-lg text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-center mb-12">
              Our Process
            </h2>
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${bgColor} flex items-center justify-center font-bold text-lg ${color}`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-md md:text-xl font-semibold mb-2">{step.step}</h3>
                    <p className="text-neutral-600 text-sm md:text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {pricing && (
        <section className="py-20 bg-neutral-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-center mb-12">
                Pricing Plans
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <Card key={index} className="service-card-premium border-0">
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-2xl font-display font-bold mb-4">{plan.plan}</CardTitle>
                      <div className="text-2xl md:text-4xl font-bold text-primary">{plan.price}</div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle2 className={`h-5 w-5 ${color} flex-shrink-0`} />
                          <span className="text-neutral-600">{feature}</span>
                        </div>
                      ))}
                      <Button
                        className="btn-premium w-full mt-6"
                        onClick={() => handleChoosePlan(plan.plan, title)} // ⬅ open modal
                      >
                        Choose Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}


 {/* Modal Component */}
 <ChoosePlanModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  selectedPlan={selectedPlan}
  selectedService={selectedService}
/>

      {/* Testimonial Section */}
      {testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-card border-0 text-center">
                <CardContent className="p-12">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-md lg:text-2xl text-neutral-700 leading-relaxed mb-8">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-lg text-neutral-800">{testimonial.name}</div>
                    <div className="text-neutral-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-md md:text-xl text-white/90 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-2xl text-lg">
                Start Your Project
              </Button>
              <Button className=" border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;
