
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import MainServicesLayout from "@/components/MainServicesLayout";
import { ShoppingCart, Store, Users, Sparkles } from "lucide-react";

export default function FrontEnd() {
  return (
    <>
    <Helmet>
      <link rel="canonical" href="https://solutionoffice247.com/services/pages/frontend" />
    </Helmet>
      <Header />
      <MainServicesLayout
        hero={{
          title: "Professional Front-End Development Services",
          intro:
            "Your website is the face of your business. At SolutionOffice247, we deliver professional front-end development services that combine design, performance, and usability. Whether you’re a startup or an established enterprise, our developers create responsive, modern websites that engage users and drive conversions"
        }}
        subServices={{
           heading: "What We Offer",
            intro: "We craft fast, responsive, and user-friendly front-end experiences using modern frameworks and clean design to bring your ideas to life.",
            learnMoreLabel: "Learn More →",
            items: [
            {
            title: "React JS Development",
            description: "We build scalable and dynamic web applications with React for seamless performance.",
            icon: ShoppingCart,
            color: "text-accent-coral",
            bgColor: "bg-accent-coral/10",
            gradientFrom: "from-accent-coral/20",
            gradientTo: "to-accent-coral/5",
            link: "/services/react-development",
            },
            {
            title: "Responsive UI Design",
            description: "We design interfaces that adapt beautifully across all devices and screen sizes.",
            icon: Store,
            color: "text-accent-teal",
            bgColor: "bg-accent-teal/10",
            gradientFrom: "from-accent-teal/20",
            gradientTo: "to-accent-teal/5",
            link: "/services/responsive-design",
            },
            {
            title: "Motion & Animation Design",
            description: "We create smooth, engaging animations that enhance user interaction and storytelling.",
            icon: Users,
            color: "text-accent-lilac",
            bgColor: "bg-accent-lilac/10",
            gradientFrom: "from-accent-lilac/20",
            gradientTo: "to-accent-lilac/5",
            link: "/services/animation-design",
            },
            {
            title: "WordPress Development",
            description: "We deliver custom, flexible, and easy-to-manage WordPress websites tailored to your needs.",
            icon: Users,
            color: "text-primary",
            bgColor: "bg-primary/10",
            gradientFrom: "from-primary/20",
            gradientTo: "to-primary/5",
            link: "/services/wordpress-development",
            },
            ],
            }}
        whyChooseUs={{
          eyebrowIcon: Sparkles,
          eyebrow: "Why Outsource Your E-commerce Store to Us?",
          heading: "Why Choose Our",
          highlight: "Frontend Development Services",
          description:
            "Our expert team delivers fast, responsive, and SEO-friendly web solutions with clean code, modern design, and optimized performance—helping your business stand out, engage users, and rank higher in search engines.",
          bullets: [
            "Expert Development Team",
            "Responsive Modern Design",
            "SEO & Speed Optimized",
            "On-Time Project Delivery",
          ],
        }}
        cta={{
          heading: "Ready to grow?",
          subheading: "Get a free consultation with our Front-end development experts.",
          primaryLabel: "Get a Free Consultation",
          primaryHref: "/pages/contact",
        }}
      />
      <Footer />
    </>
  );
}
