import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import MainServicesLayout from "@/components/MainServicesLayout";
import { ShoppingCart, Store, Users, CheckCircle, Clock, Shield, Zap, MessageSquare, TrendingUp, Globe, Headphones } from "lucide-react";

export default function FrontEnd() {
  return (
    <>
      <Helmet>
        <title>Front-End Development Services | Responsive Web Development Company</title>
        <meta
          name="description"
          content="SolutionOffice247 delivers professional front end development services—from responsive web design to full stack development. Partner with a trusted front end development company for scalable, SEO-friendly, and user-focused web solutions."
        />
        <link rel="canonical" href="https://solutionoffice247.com/frontend" />
      </Helmet>
      <Header />
      <MainServicesLayout
        // hero secttion
        hero={{
          eyebrow: "Front-End Development",
          title: "Professional Front-End Development Services",
          intro:
            "At Solution Office 24/7, we deliver front end development services that combine creativity, performance, and usability. From startups to enterprises, our team builds responsive, user-friendly interfaces using best practices for responsive web design—ensuring your site looks great and performs flawlessly on every device.",
          actions: (
            <>
              <a href="#what-we-do" className="btn-premium text-md group flex justify-center items-center gap-3">
                <span>Explore Services</span>
                <Users className=" h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/pages/contact"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-1 rounded-2xl text-md font-semibold transition-all flex items-center justify-center"
              >
                Get Free Quote
              </Link>
            </>
          )
        }}

        // subservices section
        subServices={{
          heading: "What We Offer",
          intro: "Our team delivers modern, reliable, and scalable front end web development services. Whether it’s a custom React.js application, a responsive web interface, we bring designs to life with precision and performance",
          learnMoreLabel: "Learn More →",
          items: [
            {
              title: "React JS Development",
              description: "We build scalable and dynamic web applications with React, offering interactive and seamless user experiences.",
              icon: ShoppingCart,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
              link: "/services/amazon-services",
            },
            {
              title: "Responsive UI Design",
              description: "We follow responsive web development best practices to craft interfaces that adapt beautifully across desktops, tablets, and mobile devices.",
              icon: Store,
              color: "text-accent-teal",
              bgColor: "bg-accent-teal/10",
              gradientFrom: "from-accent-teal/20",
              gradientTo: "to-accent-teal/5",
              link: "/services/shopify-services",
            },
            {
              title: "Motion & Animation Design",
              description: "We enhance digital experiences with smooth animations that improve engagement and storytelling.",
              icon: Users,
              color: "text-accent-lilac",
              bgColor: "bg-accent-lilac/10",
              gradientFrom: "from-accent-lilac/20",
              gradientTo: "to-accent-lilac/5",
              link: "/services/tiktok-services",
            },
            {
              title: "WordPress Development",
              description: "As a flexible web design and development agency, we deliver custom WordPress websites that are easy to manage and optimized for growth",
              icon: Users,
              color: "text-primary",
              bgColor: "bg-primary/10",
              gradientFrom: "from-primary/20",
              gradientTo: "to-primary/5",
              link: "/services/walmart-services",
            },
          ],
        }}

        // what we do section
        whatWeDo={{
          eyebrow: "Our Expertise",
          heading: "What We Do",
          description: "We craft high-performing, accessible, and pixel-perfect user interfaces using modern frameworks and best practices.",
          items: [
            {
              title: "Design System Implementation",
              description: "Create cohesive UI kits and component libraries for consistent, scalable front-end.",
              icon: CheckCircle,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
            {
              title: "React & Next.js Apps",
              description: "Build interactive SPAs and SSR apps with clean architecture and type-safe code.",
              icon: TrendingUp,
              color: "text-accent-teal",
              bgColor: "bg-accent-teal/10",
              gradientFrom: "from-accent-teal/20",
              gradientTo: "to-accent-teal/5",
            },
            {
              title: "Performance Optimization",
              description: "Improve Core Web Vitals with code-splitting, lazy loading, and image optimization.",
              icon: Zap,
              color: "text-accent-lilac",
              bgColor: "bg-accent-lilac/10",
              gradientFrom: "from-accent-lilac/20",
              gradientTo: "to-accent-lilac/5",
            },
            {
              title: "Accessibility (a11y)",
              description: "Deliver inclusive experiences with semantic markup, ARIA, and keyboard navigation.",
              icon: Shield,
              color: "text-primary",
              bgColor: "bg-primary/10",
              gradientFrom: "from-primary/20",
              gradientTo: "to-primary/5",
            },
            {
              title: "State Management",
              description: "Reliable app state with React Query, Zustand, or Redux Toolkit where appropriate.",
              icon: Globe,
              color: "text-secondary",
              bgColor: "bg-secondary/10",
              gradientFrom: "from-secondary/20",
              gradientTo: "to-secondary/5",
            },
            {
              title: "Animation & UX",
              description: "Micro-interactions with Framer Motion and CSS transitions that feel delightful.",
              icon: Users,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
          ],
        }}

        // how it works section
        howItWorks={{
          eyebrow: "Simple Process",
          heading: "How It Works",
          description: "A collaborative, iterative workflow designed to ship faster with quality.",
          steps: [
            {
              number: "01",
              title: "Discovery & Audit",
              description: "Understand goals, audit existing UI, and align on scope and success metrics.",
              icon: MessageSquare,
            },
            {
              number: "02",
              title: "Design & Architecture",
              description: "Define IA, component contracts, routing strategy, and performance budget.",
              icon: Store,
            },
            {
              number: "03",
              title: "Implementation",
              description: "Develop responsive, accessible components with rigorous code review and testing.",
              icon: CheckCircle,
            },
            {
              number: "04",
              title: "Optimize & Launch",
              description: "Polish performance, track CWV, and deploy with CI/CD and monitoring in place.",
              icon: TrendingUp,
            },
          ],
        }}

        // benefits section
        benefits={{
          eyebrow: "Why Choose Us",
          heading: "Key Benefits",
          description: "Engineer-grade front-end development focused on quality, speed, and maintainability.",
          benefits: [
            {
              title: "Pixel-Perfect UI",
              description: "Faithful implementation from Figma with consistent spacing, typography, and states.",
              icon: CheckCircle,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
            {
              title: "SEO & Performance",
              description: "Best practices baked-in to improve discoverability and Core Web Vitals.",
              icon: Zap,
              color: "text-accent-teal",
              bgColor: "bg-accent-teal/10",
              gradientFrom: "from-accent-teal/20",
              gradientTo: "to-accent-teal/5",
            },
            {
              title: "Accessible by Default",
              description: "Meet WCAG guidelines with semantic HTML, contrast, and keyboard navigation.",
              icon: Shield,
              color: "text-accent-lilac",
              bgColor: "bg-accent-lilac/10",
              gradientFrom: "from-accent-lilac/20",
              gradientTo: "to-accent-lilac/5",
            },
            {
              title: "Scalable Architecture",
              description: "Clean, modular code that is easy to extend, test, and onboard to.",
              icon: Globe,
              color: "text-primary",
              bgColor: "bg-primary/10",
              gradientFrom: "from-primary/20",
              gradientTo: "to-primary/5",
            },
            {
              title: "Rapid Delivery",
              description: "Agile delivery with short feedback loops to ship value quickly.",
              icon: Clock,
              color: "text-secondary",
              bgColor: "bg-secondary/10",
              gradientFrom: "from-secondary/20",
              gradientTo: "to-secondary/5",
            },
            {
              title: "Ongoing Support",
              description: "Post-launch support for enhancements, A/B tests, and continuous improvement.",
              icon: Headphones,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
          ],
        }}

        // testimonials sectoion
        testimonials={{
          eyebrow: "Client Success",
          heading: "What Our Clients Say",
          description: "Teams trust us to deliver front-end that looks great and performs even better.",
          testimonials: [
            {
              name: "Amina K.",
              role: "Product Manager",
              company: "SaaS Platform",
              content: "They rebuilt our React front-end with a design system. Velocity went up and bugs went down.",
              rating: 5,
            },
            {
              name: "Daniel R.",
              role: "Founder",
              company: "D2C Brand",
              content: "Core Web Vitals improved across the board. Our conversion rate increased noticeably after launch.",
              rating: 5,
            },
            {
              name: "Sophia L.",
              role: "Marketing Lead",
              company: "Fintech App",
              content: "Pixel-perfect implementation from Figma and lightning fast pages. Great communication throughout.",
              rating: 5,
            },
          ],
        }}

        // cta section
        cta={{
          heading: "Ready to Elevate Your Front-End?",
          subheading: "Let’s ship a fast, inclusive, and beautiful experience—on time and on budget.",
          primaryLabel: "Start a Project",
          primaryHref: "/pages/contact",
          secondaryLabel: "See Our Work",
          secondaryHref: "/portfolio",
          note: "Performance-first • Accessibility-focused • Built for scale",
        }}
      />
      <Footer />
    </>
  );
}
