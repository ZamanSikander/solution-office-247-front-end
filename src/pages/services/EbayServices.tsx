
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
      {/* Meta Title */}
      <title>
      Top Ebay Store Management Services to Boost Sales
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Maximize your sales with expert Ebay store management services. Let us help you optimize and grow your business."
        />
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
