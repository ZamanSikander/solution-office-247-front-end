
import { BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ResearchPapers = () => {
  const features = [
    "SEO-optimized product titles and descriptions",
    "High-quality image editing for product listings",
    "Competitor analysis & pricing strategy",
    "Category & keyword optimization",
    "Bulk product uploads & inventory management",
    "eBay store design customization",
    "Order processing & customer communication support",
    "Monthly performance reports"
  ];

  const process = [
    {
      step: "Store Audit",
      description: "We review your current store setup, listings, and performance metrics."
    },
    {
      step: "Optimization ",
      description: "Improve listing SEO, titles, descriptions, and product images."
    },
    {
      step: "Inventory Management",
      description: " Organize and manage bulk uploads, stock levels, and pricing."
    },
    {
      step: "Monitoring & Support ",
      description: "Track results, send reports, and provide ongoing assistance."
    }
  ];

  const pricing = [
    {
      plan: "Standard",
      price: "$150",
      features: [
        " Basic listing optimization (up to 20 products)",
        "SEO tweaks",
        "monthly report"
      ]
    },
    {
      plan: "Premium",
      price: "$300",
      features: [
        "Up to 50 optimized listings",
        "competitor research",
        "store branding",
        "ongoing updates"
      ]
    },
    {
      plan: "Ultimate",
      price: "$500",
      features: [
        "Unlimited product optimization",
        "store redesign",
        "monthly strategy calls",
        "premium support"
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
        <link rel="canonical" href="https://solutionoffice247.com/services/ebay-services" />
      </Helmet>
      <Header />
      <ServicePageLayout
        title="eBay Store Management & Optimization"
        description="Comprehensive eBay services to boost your store’s visibility, optimize listings, and drive more sales with proven e-commerce strategies."
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

export default ResearchPapers;
