
import { Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ReactDevelopment = () => {
  const features = [
    "Mobile-first and responsive layout",
    "Tailwind CSS for fast, scalable styling",
    "Pixel-perfect design implementation",
    "Figma to code conversion",
    "Accessible (a11y) interfaces",
    "Cross-browser compatibility",
    "Reusable UI components",
    "Design system integration"
  ];

  const process = [
    {
      step: "Design Audit & Planning",
      description: "We assess your brand identity, style guide, and goals to define a clear UI strategy for your target audience."
    },
    {
      step: "Wireframing & Prototyping",
      description: "We craft low/high-fidelity wireframes and interactive prototypes using Figma or Adobe XD to finalize the structure and flow."
    },
    {
      step: "UI Development",
      description: "We implement responsive UIs using semantic HTML and Tailwind CSS, ensuring both design fidelity and performance."
    },
    {
      step: "Testing & Delivery",
      description: "We test the UI across all devices and browsers, then deliver pixel-perfect, production-ready code."
    }
  ];

  const pricing = [
    {
      plan: "Basic",
      price: "$300",
      features: [
        "Single page application",
        "Upto 3 responsive screens",
        "5-7 components",
        "Basic responsive design",
        "API integration",
        "2 weeks delivery",
        "1 month support"
      ]
    },
    {
      plan: "Professional",
      price: "$600",
      features: [
        "6-7 pages application",
        "Upto 5-6 responsive screens",
        "Advanced responsive design",
        "State management",
        "Reuseable components",
        "3 weeks delivery",
        "3 months support"
      ]
    },
    {
      plan: "Enterprise",
      price: "$1,000+",
      features: [
        "Upto 10 pages application",
        "Custom components",
        "Authentications",
        "Performance optimization",
        "Testing suite",
        "Custom timeline",
        "6 months support"
      ]
    }
  ];

  const testimonial = {
    name: "Mike Chen",
    role: "CTO, TechStartup Inc.",
    content: "The React application they built for us is incredibly fast and user-friendly. Their attention to detail and modern development practices really impressed our team."
  };

  return (
    <div>
      <Helmet>
        <link rel="canonical" href="https://solutionoffice247.com/services/responsive-design" />
      </Helmet>
      <Header />
      <ServicePageLayout
        title="📱 Responsive UI Design"
        description="Design beautiful, responsive, and user-friendly interfaces for all devices. We convert your ideas or Figma designs into clean, scalable UI using Tailwind CSS and modern front-end best practices."
        icon={Code}
        color="text-accent-teal"
        bgColor="bg-accent-teal/10"
        HbgColor='bg-accent-sage/90'
        features={features}
        process={process}
        pricing={pricing}
        testimonial={testimonial}
      />
      <Footer />
    </div>
  );
};

export default ReactDevelopment;
