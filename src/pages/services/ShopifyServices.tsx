
import { BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ShopifyServices = () => {
  const features = [
    "Custom Shopify store design & theme customization",
    "Product upload & SEO optimization",
    "Payment gateway setup & testing",
    "Mobile-friendly & responsive design",
    "Integration with apps & tools (email, analytics, etc.)",
    "Social media integration & marketing setup",
    "Conversion rate optimization strategies",
    "Ongoing maintenance & updates"
  ];

  const process = [
    {
      step: "Consultation & Planning",
      description: "Understand your business needs and store goals."
    },
    {
      step: "Store Development",
      description: "Design, customize, and populate your store."
    },
    {
      step: "Optimization",
      description: "Implement SEO and conversion-focused strategies."
    },
    {
      step: "Launch & Support",
      description: "Test, launch, and provide post-launch support."
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$400 one-time",
      features: [
        "Basic store setup",
        "up to 10 products",
        "essential features"
      ]
    },
    {
      plan: "Growth",
      price: "$800 one-time",
      features: [
        "Advanced store customization",
        "30 products",
        "marketing integration"
      ]
    },
    {
      plan: "Pro",
      price: "$1,500 one-time",
      features: [
        "Fully customized store",
        "unlimited products",
        "complete marketing setup"
      ]
    }
  ];

  const testimonial = {
    name: "Sarah Johnson",
    role: "Graduate Student, University of California",
    content: "The research paper I received was exceptional. The depth of analysis and quality of sources exceeded my expectations. I received an A+ on my assignment!"
  };

  return (
    <div>
      <Header />
      <ServicePageLayout
        title="Shopify Store Setup & Marketing"
        description="High-converting Shopify store design, setup, and marketing to launch and scale your e-commerce business."
        icon={BookOpen}
        color="text-accent-coral"
        bgColor="bg-accent-coral/10"
        HbgColor='bg-accent-coral/60'
        features={features}
        process={process}
        pricing={pricing}
        testimonial={testimonial}
      />
      <Footer />
    </div>
  );
};

export default ShopifyServices;
