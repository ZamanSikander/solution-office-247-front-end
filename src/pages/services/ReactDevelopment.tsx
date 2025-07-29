
import { Code } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ReactDevelopment = () => {
  const features = [
    "Modern React 18+ with latest features",
    "TypeScript for type-safe development",
    "Responsive design with Tailwind CSS",
    "State management with Redux/Zustand",
    "API integration and data fetching",
    "Component testing with Jest & RTL",
    "Performance optimization",
    "SEO-friendly implementation"
  ];

  const process = [
    {
      step: "Requirements Analysis",
      description: "We thoroughly analyze your project requirements, target audience, and technical specifications to create a detailed development plan."
    },
    {
      step: "Design & Architecture",
      description: "Our team designs the application architecture, component structure, and creates wireframes or prototypes for your approval."
    },
    {
      step: "Development & Testing",
      description: "We build your React application using modern best practices, conduct thorough testing, and ensure cross-browser compatibility."
    },
    {
      step: "Deployment & Support",
      description: "We deploy your application to your preferred hosting platform and provide ongoing maintenance and support as needed."
    }
  ];

  const pricing = [
    {
      plan: "Basic",
      price: "$2,500",
      features: [
        "Single page application",
        "5-7 components",
        "Basic responsive design",
        "API integration",
        "2 weeks delivery",
        "1 month support"
      ]
    },
    {
      plan: "Professional",
      price: "$5,000",
      features: [
        "Multi-page application",
        "15-20 components",
        "Advanced responsive design",
        "State management",
        "Authentication system",
        "3 weeks delivery",
        "3 months support"
      ]
    },
    {
      plan: "Enterprise",
      price: "$10,000+",
      features: [
        "Complex application",
        "Custom components",
        "Advanced features",
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
      <Header />
      <ServicePageLayout
        title="React.js Development"
        description="Build modern, interactive web applications with React.js. We create scalable, maintainable, and performance-optimized applications using the latest React features and best practices."
        icon={Code}
        color="text-accent-teal"
        bgColor="bg-accent-teal/10"
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
