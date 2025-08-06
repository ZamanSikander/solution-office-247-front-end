
import { BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ResearchPapers = () => {
  const features = [
    "Comprehensive grammar, spelling, and punctuation correction",
    "Sentence structure improvement and clarity enhancement",
    "Consistent formatting and citation style (APA, MLA, Harvard, etc.)",
    "Academic tone and language refinement",
    "Feedback on coherence and logical flow",
    "Track changes file for transparency",
    "Unlimited revisions upon request",
    "24/7 support and timely delivery"
  ];

  const process = [
    {
      step: " Initial Review",
      description: "We examine your document’s overall structure, tone, and writing quality to plan the editing strategy."
    },
    {
      step: "Detailed Editing",
      description: "Our editors correct grammar, punctuation, sentence structure, and ensure academic clarity and consistency"
    },
    {
      step: " Proofreading & Final Check",
      description: "We conduct a final proofread to eliminate any remaining errors and deliver both clean and track-changed versions."
    },
    {
      step: "Delivery & Support",
      description: "We deliver the polished document on time and provide continuous support for any questions or additional edits."
    }
  ];

  const pricing = [
    {
      plan: "Standard",
      price: "$8/page",
      features: [
        "3-day delivery",
        "Grammar, spelling & punctuation check",
        "Light editing & formatting",
        " 1 revision included",
        " Track changes file",
        "24/7 support"
      ]
    },
    {
      plan: "Premium",
      price: "$12/page",
      features: [
        "2-day delivery",
        " Academic tone enhancement",
        "In-depth editing for clarity & structure",
        " 3 revisions included",
        "Track changes + feedback",
        " Priority support"
      ]
    },
    {
      plan: "Ultimate",
      price: "$18/page",
      features: [
        "1-day delivery",
        "Advanced editing + rewriting suggestions",
        "Citation & formatting check (APA/MLA/etc.)",
        "Unlimited revisions",
        "Plagiarism report",
        " One-on-one editor consultation",
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
        title="Editing & Proofreading"
        description="Professional editing and proofreading services to refine your academic writing, correct errors, and ensure clarity, consistency, and academic tone."
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
