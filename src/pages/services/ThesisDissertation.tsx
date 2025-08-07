
import { BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ResearchPapers = () => {
  const features = [
    "Custom-written content based on your research topic and academic requirements",
    "Thorough literature review with credible scholarly sources",
    "Detailed methodology, data analysis, and discussion",
    "Proper citation in APA, MLA, Harvard, or Chicago style",
    "100% plagiarism-free content with originality report",
    "Professional formatting and structured chapters (Introduction to Conclusion)",
    "Unlimited revisions until you’re fully satisfied",
    "24/7 expert support and guidance throughout your project"
  ];

  const process = [
    {
      step: "Research & Planning",
      description: "We start by understanding your thesis or dissertation requirements, defining clear research objectives, and preparing a detailed outline supported by credible academic sources."
    },
    {
      step: "Writing & Development",
      description: "Our experienced academic writers develop each chapter—from introduction to conclusion—with original content, proper citations, and a strong focus on research methodology and critical analysis."
    },
    {
      step: "Review & Quality Check",
      description: "Your work undergoes multiple stages of editing, formatting, and plagiarism checks to ensure it meets academic guidelines and maintains the highest quality standards."
    },
    {
      step: "Delivery & Support",
      description: "We deliver your completed thesis or dissertation within the agreed timeframe and offer continued support for revisions or questions until final approval."
    }
  ];

  const pricing = [
    {
      plan: "Standard",
      price: "$15/page",
      features: [
        "14-day delivery",
        "Bachelor-level thesis writing",
        "Basic research & references",
        "2 free revisions",
        "Plagiarism report",
        "24/7 support"
      ]
    },
    {
      plan: "Premium",
      price: "$25/page",
      features: [
        " 10-day delivery",
        "Master's-level dissertation writing",
        "Advanced research & in-depth analysis",
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
        "7-day delivery",
        "PhD-level dissertation writing",
        " Extensive research & scholarly citations",
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
        title="Thesis Dissertations"
        description="Get professional research papers written by academic experts with original content, proper citations, and in-depth analysis that meets the highest academic standards."
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
