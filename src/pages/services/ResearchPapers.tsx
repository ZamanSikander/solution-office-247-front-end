
import { BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ResearchPapers = () => {
  const features = [
    "Original research with credible academic sources",
    "Proper citation in APA, MLA, Harvard, or Chicago style",
    "In-depth analysis and critical thinking",
    "Plagiarism-free content with originality report",
    "Professional formatting and structure",
    "Unlimited revisions until satisfied",
    "24/7 customer support",
    "On-time delivery guaranteed"
  ];

  const process = [
    {
      step: "Research & Planning",
      description: "We begin by understanding your research requirements, gathering credible sources, and creating a comprehensive outline for your paper."
    },
    {
      step: "Writing & Development",
      description: "Our expert writers craft your research paper with original content, proper citations, and academic rigor while maintaining your voice."
    },
    {
      step: "Review & Quality Check",
      description: "Multiple rounds of editing, proofreading, and plagiarism checking ensure your paper meets the highest academic standards."
    },
    {
      step: "Delivery & Support",
      description: "We deliver your completed research paper on time and provide ongoing support for any revisions or questions you may have."
    }
  ];

  const pricing = [
    {
      plan: "Standard",
      price: "$15/page",
      features: [
        "7-day delivery",
        "Bachelor level writing",
        "Basic research & citations",
        "2 free revisions",
        "Plagiarism report",
        "24/7 support"
      ]
    },
    {
      plan: "Premium",
      price: "$25/page",
      features: [
        "5-day delivery",
        "Master level writing",
        "Advanced research & analysis",
        "5 free revisions",
        "Plagiarism report",
        "Progressive delivery",
        "Priority support"
      ]
    },
    {
      plan: "Ultimate",
      price: "$35/page",
      features: [
        "3-day delivery",
        "PhD level writing",
        "Extensive research & citations",
        "Unlimited revisions",
        "Plagiarism report",
        "Progressive delivery",
        "One-on-one consultation",
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
        title="Research Papers"
        description="Get professional research papers written by academic experts with original content, proper citations, and in-depth analysis that meets the highest academic standards."
        icon={BookOpen}
        color="text-accent-coral"
        bgColor="bg-accent-coral/10"
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
