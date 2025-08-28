
import { BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const AmazonServices = () => {
  const features = [
    "Amazon product listing creation & optimization",
    "Keyword research & SEO integration",
    "Enhanced Brand Content (A+ Content) creation",
    "Inventory & FBA shipment management",
    "PPC advertising campaigns setup & optimization",
    "Competitor & market analysis",
    "Customer review management",
    "Monthly sales reports & insights"
  ];

  const process = [
    {
      step: "Account & Store Audit",
      description: "Review current performance and compliance."
    },
    {
      step: "Listing Optimization",
      description: "Improve product titles, bullet points, and images."
    },
    {
      step: "Ad Campaigns",
      description: "Launch and manage Amazon PPC for higher visibility."
    },
    {
      step: "Growth Strategy",
      description: "Track results and implement scaling tactics."
    }
  ];

  const pricing = [
    {
      plan: "Basic",
      price: "$250/month",
      features: [
        "15 listings optimized",
        "keyword research",
        "monthly report"
      ]
    },
    {
      plan: "Standard",
      price: "$500/month",
      features: [
        "40 listings",
        "PPC management",
        "A+ content"
      ]
    },
    {
      plan: "Premium",
      price: "$900/month",
      features: [
        "Unlimited listings",
        "full FBA management",
        "premium analytics"
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
        <link rel="canonical" href="https://solutionoffice247.com/services/amazon-services" />
      </Helmet>
      <Header />
      <ServicePageLayout
        title="Amazon FBA & Seller Central Management"
        description="Complete Amazon selling solutions to optimize listings, improve rankings, and maximize revenue."
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

export default AmazonServices;
