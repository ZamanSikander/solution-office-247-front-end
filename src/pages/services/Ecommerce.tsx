import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import MainServicesLayout from "@/components/MainServicesLayout";
import { ShoppingCart, Store, Users,  CheckCircle, Clock, Shield, Zap, MessageSquare,  TrendingUp, Globe, Headphones } from "lucide-react";

export default function Ecommerce() {
  return (
    <>
      <Helmet>
        <title>E-commerce Management Services | Virtual Assistant for Online Stores</title>
        <meta
          name="description"
          content="Solution Office 24/7 offers expert e-commerce management services, including store handling, site management, and customer support for e-commerce businesses."
        />
        <link rel="canonical" href="https://solutionoffice247.com/ecommerce" />
      </Helmet>
      <Header />
      <MainServicesLayout
        // hero secttion
        hero={{
          eyebrow: "E-commerce Management",
          title: "E-commerce Store Handling Services",
          intro:
            "Solution Office 24/7 provides end-to-end e-commerce management services. From product listings and inventory control to customer support for e-commerce, our virtual assistant services ensure your store runs smoothly while you focus on growth.",
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
          intro: "We manage e-commerce stores across Amazon, Shopify, Walmart, eBay, TikTok, and more. Our e-commerce site management services keep your business organized, optimized, and ready to scale.",
          learnMoreLabel: "Learn More →",
          items: [
            {
              title: "Amazon Store Handling",
              description: "Drive more sales with optimized Amazon product listings and marketplace management.",
              icon: ShoppingCart,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
              link: "/services/amazon-services",
            },
            {
              title: "Shopify Development",
              description: "Launch professional Shopify stores with custom design, seamless checkout, and integrated apps.",
              icon: Store,
              color: "text-accent-teal",
              bgColor: "bg-accent-teal/10",
              gradientFrom: "from-accent-teal/20",
              gradientTo: "to-accent-teal/5",
              link: "/services/shopify-services",
            },
            {
              title: "TikTok Commerce",
              description: "Engage new audiences with TikTok store integration and social commerce strategies.",
              icon: Users,
              color: "text-accent-lilac",
              bgColor: "bg-accent-lilac/10",
              gradientFrom: "from-accent-lilac/20",
              gradientTo: "to-accent-lilac/5",
              link: "/services/tiktok-services",
            },
            {
              title: "Walmart Marketplace",
              description: "Expand your reach with fully managed Walmart store setup and product optimization.",
              icon: Users,
              color: "text-primary",
              bgColor: "bg-primary/10",
              gradientFrom: "from-primary/20",
              gradientTo: "to-primary/5",
              link: "/services/walmart-services",
            },
            {
              title: "eBay Management",
              description: "Boost visibility and maximize profits with optimized eBay listings and store setup.",
              icon: Users,
              color: "text-secondary",
              bgColor: "bg-secondary/10",
              gradientFrom: "from-secondary/20",
              gradientTo: "to-secondary/5",
              link: "/services/ebay-services",
            },
          ],
        }}

        // what we do section
        whatWeDo={{
          eyebrow: "Our Expertise",
          heading: "What We Do",
          description: "Our virtual assistant for e-commerce services cover everything from store setup to 24/7 customer care, ensuring smooth operations across platforms",
          items: [
            {
              title: "Store Management",
              description: "Complete day-to-day e-commerce site management including order processing, store updates, and reporting.",
              icon: Store,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
            {
              title: "Product Optimization",
              description: "SEO-optimized product listings, ecommerce content writing, and conversion rate strategies—because SEO is important for e-commerce growth.",
              icon: TrendingUp,
              color: "text-accent-teal",
              bgColor: "bg-accent-teal/10",
              gradientFrom: "from-accent-teal/20",
              gradientTo: "to-accent-teal/5",
            },
            {
              title: "Customer Support",
              description: "Dedicated virtual assistants providing 24/7 customer service, order tracking, and dispute resolution.",
              icon: Headphones,
              color: "text-accent-lilac",
              bgColor: "bg-accent-lilac/10",
              gradientFrom: "from-accent-lilac/20",
              gradientTo: "to-accent-lilac/5",
            },
            {
              title: "Inventory Management",
              description: "Real-time stock tracking, automated reorder systems, and accurate inventory updates.",
              icon: CheckCircle,
              color: "text-primary",
              bgColor: "bg-primary/10",
              gradientFrom: "from-primary/20",
              gradientTo: "to-primary/5",
            },
            {
              title: "Marketing & Ads",
              description: "PPC campaigns, social media marketing, and promotional strategies tailored to e-commerce.",
              icon: Zap,
              color: "text-secondary",
              bgColor: "bg-secondary/10",
              gradientFrom: "from-secondary/20",
              gradientTo: "to-secondary/5",
            },
            {
              title: "Global Expansion",
              description: "Scale globally with multi-marketplace expansion, international shipping, and localization.",
              icon: Globe,
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
          description: "Our streamlined process helps you launch and scale faster with expert e-commerce virtual assistant services.",
          steps: [
            {
              number: "01",
              title: "Initial Consultation",
              description: "We analyze your business needs and design a custom e-commerce management strategy.",
              icon: MessageSquare,
            },
            {
              number: "02", title: "Store Setup", description: "From store configuration to product uploads and optimization, we handle it all.",
              icon: Store,
            },
            {
              number: "03", title: "Launch & Monitor", description: "Go live with continuous monitoring, performance tracking, and updates.",
              icon: Zap,
            },
            {
              number: "04", title: "Scale & Grow", description: "Expand into new markets and scale operations with flexible e-commerce solutions.",
              icon: TrendingUp,
            },
          ],
        }}

        // benefits section
        benefits={{
          eyebrow: "Why Choose Us",
          heading: "Key Benefits",
          description: "Trusted by global brands, we deliver scalable and cost-effective e-commerce solutions.",
          benefits: [
            {
              title: "24/7 Support", description: "Round-the-clock customer service and store monitoring for uninterrupted performance.",
              icon: Clock,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
            {
              title: "Expert Team", description: "Certified specialists with experience in e-commerce management and digital growth.",
              icon: Users,
              color: "text-accent-teal",
              bgColor: "bg-accent-teal/10",
              gradientFrom: "from-accent-teal/20",
              gradientTo: "to-accent-teal/5",
            },
            {
              title: "Secure Operations", description: "Advanced security with compliance across platforms to protect your business.",
              icon: Shield,
              color: "text-accent-lilac",
              bgColor: "bg-accent-lilac/10",
              gradientFrom: "from-accent-lilac/20",
              gradientTo: "to-accent-lilac/5",
            },
            {
              title: "Fast Results", description: "Quick setup and measurable results within the first month of service.",
              icon: Zap,
              color: "text-primary",
              bgColor: "bg-primary/10",
              gradientFrom: "from-primary/20",
              gradientTo: "to-primary/5",
            },
            {
              title: "Cost Effective", description: "Affordable e-commerce solution company with transparent pricing—no hidden fees.",
              icon: CheckCircle,
              color: "text-secondary",
              bgColor: "bg-secondary/10",
              gradientFrom: "from-secondary/20",
              gradientTo: "to-secondary/5",
            },
            {
              title: "Scalable Solutions", description: "Flexible services that grow with you, from startup to enterprise.",
              icon: TrendingUp,
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
          description: "Don't just take our word for it. Here's what our satisfied clients have to say about our e-commerce services.",
          testimonials: [
            {
              name: "Sarah Johnson",
              role: "E-commerce Manager",
              company: "TechGear Solutions",
              content: "SolutionOffice247 transformed our Amazon store completely. With their e-commerce management service, sales grew 300% in 6 months.",
              rating: 5,
            },
            {
              name: "Michael Chen",
              role: "Founder",
              company: "Fashion Forward",
              content: "The Shopify store they built boosted our conversions. Their e-commerce virtual assistant services keep our operations smooth.",
              rating: 5,
            },
            {
              name: "Emily Rodriguez",
              role: "Business Owner",
              company: "Home Decor Plus",
              content: "Managing multiple marketplaces was overwhelming. Now their e-commerce site management team handles everything while we focus on products.",
              rating: 5,
            },
          ],
        }}

        // cta section
        cta={{
          heading: "Ready to Transform Your E-commerce Business?",
          subheading: "Join 500+ businesses that trust our e-commerce management services. Get started with a free consultation today.",
          primaryLabel: "Get Free Consultation",
          primaryHref: "/pages/contact",
          secondaryLabel: "View Our Portfolio",
          secondaryHref: "/portfolio",
          note: "No setup fees • No long-term contracts • 30-day money-back guarantee",
        }}
      />
      <Footer />
    </>
  );
}
