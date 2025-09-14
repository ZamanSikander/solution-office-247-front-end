
import { BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const TiktokServices = () => {
  const features = [
    "TikTok shop setup & product listing",
    "TikTok ads campaign creation & optimization",
    "Influencer marketing strategy & partnerships",
    "Short-form video content creation",
    "Trend research & hashtag targeting",
    "Sales tracking & performance reports",
    "Customer engagement & DM management",
    "Cross-platform promotion integration"
  ];

  const process = [
    {
      step: "Account Setup",
      description: "Create or optimize your TikTok shop and seller account."
    },
    {
      step: "Content Strategy",
      description: "Develop video concepts aligned with trends."
    },
    {
      step: "Campaign Launch",
      description: "Run ad campaigns and influencer collaborations."
    },
    {
      step: "Performance Optimization",
      description: "Monitor metrics and refine strategies."
    }
  ];

  const pricing = [
    {
      plan: "Standard",
      price: "$100",
      features: [
        "Product Hunting",
        "List Creation",
        "List Optimization",
        "Order Management"
      ]
    },
    {
      plan: "Premium",
      price: "$300",
      features: [
        "Product Hunting",
        "List Creation",
        "List Optimization",
        "Order Management",
        "Ad Management",
        "Customer Care",
        "Store Optimization",
        "Financial Statement"
      ]
    },
    {
      plan: "Ultimate",
      price: "$500",
      features: [
        "Product Hunting",
        "List Creation",
        "List Optimization",
        "Order Management",
        "Ad Management",
        "Customer Care",
        "Store Optimization",
        "Financial Statement",
        "Store Health",
        "Reverse the negative reviews",
        "Cost Optimization"
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
      <Helmet>
        <link rel="canonical" href="https://solutionoffice247.com/services/tiktok-services" />
      </Helmet>
      <Header />
      <ServicePageLayout
        title="TikTok Shop & Marketing Solutions"
        description="Leverage TikTok's massive audience to grow your brand, boost product sales, and create viral marketing campaigns."
        icon={BookOpen}
        color="text-accent-coral"
        bgColor="bg-accent-coral/10"
        HbgColor='bg-accent-coral/80'
        features={features}
        process={process}
        pricing={pricing}
        testimonial={testimonial}
      />
      <Footer />
    </div>
  );
};

export default TiktokServices;
