
import { BookOpen } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ResearchPapers = () => {
  const features = [
    "Custom-written essays and assignments for all subjects and academic levels",
    "Well-researched content using credible academic sources",
    "Proper citation in APA, MLA, Harvard, or Chicago style",
    "100% plagiarism-free content with originality report",
    "Clear structure with introduction, body, and conclusion",
    "Unlimited revisions until satisfaction",
    "24/7 customer support",
    "On-time delivery guaranteed"
  ];

  const process = [
    {
      step: "Research & Planning",
      description: "We understand your assignment brief, gather relevant sources, and prepare a solid outline that aligns with your academic goals."
    },
    {
      step: "Writing & Development",
      description: "Our academic writers create original content with strong arguments, critical analysis, and proper referencing in your preferred style."
    },
    {
      step: "Review & Quality Check",
      description: "We thoroughly proofread, edit, and run plagiarism checks to ensure your essay or assignment meets academic standards."
    },
    {
      step: "Delivery & Support",
      description: "We deliver on time and stay available for revisions or clarification to ensure you’re 100% satisfied."
    }
  ];

  const pricing = [
    {
      plan: "Standard",
      price: "$12/page",
      features: [
        "5-day delivery",
        "Bachelor level writing",
        "Basic research & citations",
        "2 free revisions",
        "Plagiarism report",
        "24/7 support"
      ]
    },
    {
      plan: "Premium",
      price: "$20/page",
      features: [
        "3-day delivery",
        "Master level writing",
        "Advanced research & analysis",
        "4 free revisions",
        "Plagiarism report",
        "Progressive delivery",
        "Priority support"
      ]
    },
    {
      plan: "Ultimate",
      price: "$30/page",
      features: [
        "2-day delivery",
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
      <Helmet>
        <link rel="canonical" href="https://solutionoffice247.com/services/essay-assignments" />
      </Helmet>
      <Header />
      <ServicePageLayout
        title="Essay & Assignment Writing"
        description="High-quality essay and assignment writing services tailored to meet your academic requirements with proper research, structure, and originality."
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
