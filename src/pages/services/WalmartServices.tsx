
import { BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ResearchPapers = () => {
  const features = [
    "Walmart product listing creation & optimization",
    "SEO-friendly descriptions & keyword targeting",
    "Image editing & enhancement",
    "Order & inventory management",
    "Pricing strategy to stay competitive",
    "Compliance with Walmart guidelines",
    "Customer service support",
    "Monthly sales performance tracking"
  ];

  const process = [
    {
      step: "Marketplace Setup",
      description: "Create or optimize your Walmart seller account."
    },
    {
      step: "Product Optimization ",
      description: "SEO-focused titles, descriptions, and categories."
    },
    {
      step: "Inventory Sync",
      description: "Ensure stock accuracy across channels."
    },
    {
      step: "Ongoing Management",
      description: "Track performance and make data-driven adjustments."
    }
  ];

  const pricing = [
    {
      plan: "Standard",
      price: "$200",
      features: [
        "15 optimized listings",
        "keyword targeting",
        "monthly reporting"
      ]
    },
    {
      plan: "Premium",
      price: "$400",
      features: [
        "40 optimized listings",
        "pricing strategy",
        "customer service support",
        "ongoing updates"
      ]
    },
    {
      plan: "Ultimate",
      price: "$700",
      features: [
        "Unlimited listings",
        "store branding",
        "compliance handling",
        "VIP support"
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
        title="Walmart Marketplace Management"
        description="End-to-end Walmart marketplace solutions to optimize your product visibility, compliance, and profitability."
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

export default ResearchPapers;
