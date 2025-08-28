
import { Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ReactDevelopment = () => {
  const features = [
    "Framer Motion + Motion.dev integration",
    "Smooth page transitions",
    "Interactive UI elements",
    "Scroll-based animations",
    "Gesture interactions (tap, drag, hover)",
    "Modular animation components",
    "Performance optimized animations",
    "Dark/light mode animations"
  ];

  const process = [
    {
      step: "Animation Strategy",
      description: "We analyze your user flows and brand personality to define where animations can add the most value."
    },
    {
      step: "Motion Planning",
      description: "We design motion blueprints for UI interactions, transitions, and micro-interactions with timing and easing."
    },
    {
        step: "Implementation",
        description: "Using Framer Motion and Motion.dev, we integrate performant, fluid animations directly into your React project."
    },
    {
      step: "Optimization & Delivery",
      description: "Animations are tested for smoothness, responsiveness, and accessibility before final deployment."
    }
  ];

  const pricing = [
    {
      plan: "Basic",
      price: "$250",
      features: [
        "Animations for homepage or 3 key elements",
        "smooth transitions",
        " mobile-ready",
        "1 week delivery",
        "1-month support"
      ]
    },
    {
      plan: "Professional",
      price: "$550",
      features: [
        "Full site/page animations",
        " scroll/hover/drag effects",
        "reusable motion components",
        "2-week delivery",
        "3-month suppor"
      ]
    },
    {
      plan: "Enterprise",
      price: "$900+",
      features: [
        "Advanced motion system",
        "animation guidelines",
        "animation + dark mode toggle support",
        "performance audits",
        "4-week delivery",
        "6-month support"
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
        <link rel="canonical" href="https://solutionoffice247.com/services/animation-design" />
      </Helmet>
      <Header />
      <ServicePageLayout
        title="🎞️ Motion & Animation Design (using Motion.dev)"
        description="Bring life to your interfaces with stunning animations and interactions powered by Motion.dev. We use motion to enhance user experience while keeping performance in mind."
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
