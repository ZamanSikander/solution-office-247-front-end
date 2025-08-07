
import { Code } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicePageLayout from '@/components/ServicePageLayout';

const ReactDevelopment = () => {
  const features = [
    "Custom WordPress themes",
    "WooCommerce setup and configuration",
    "Responsive and mobile-friendly design",
    "Plugin integration and customization",
    "Secure payment gateway setupv",
    "SEO-optimized structure",
    "Speed and performance tuning",
    "Easy-to-manage admin panel"
  ];

  const process = [
    {
      step: "Requirement Discovery",
      description: "We discuss your site goals, content structure, and desired features to craft a suitable WordPress architecture."
    },
    {
      step: "Design & Development",
      description: "We design your layout or convert your Figma design into a custom WordPress theme with WooCommerce if needed."
    },
    {
        step: "Testing & Optimization",
        description: "We test for functionality, security, speed, and responsiveness before launch."
    },
    {
      step: "Launch & Training",
      description: "We deploy your site/store, provide basic training, and offer ongoing maintenance/support options."
    }
  ];

  const pricing = [
    {
      plan: "Basic",
      price: "$200",
      features: [
        "1–3 page WordPress site",
        "basic WooCommerce setup (if needed)",
        " responsive design",
        "1 week delivery",
        "1-month support"
      ]
    },
    {
      plan: "Professional",
      price: "$350",
      features: [
        "5–7 page site/store",
        "custom theme",
        "plugins + payment setup",
        "performance optimization",
        "2-week delivery",
        "3-month suppor"
      ]
    },
    {
      plan: "Enterprise",
      price: "$700+",
      features: [
        "Full eCommerce site",
        "advanced filtering + features",
        "custom plugins",
        "multilingual support",
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
      <Header />
      <ServicePageLayout
        title="🌐 WordPress & WooCommerce Development"
        description="Create a powerful, scalable website or online store using WordPress and WooCommerce. We build secure, fast-loading, and fully customizable sites to grow your business."
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
