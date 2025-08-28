
 import Header from "@/components/Header";
 import { Helmet } from "react-helmet-async";
 import Footer from "@/components/Footer";
 import MainServicesLayout from "@/components/MainServicesLayout";
 import { ShoppingCart, Store, Users, Sparkles } from "lucide-react";

 export default function Ecommerce() {
   return (
     <>
     <Helmet>
      <link rel="canonical" href="https://solutionoffice247.com/services/pages/ecommerce" />
     </Helmet>
       <Header />
       <MainServicesLayout
         hero={{
           title: "E-commerce Store Handling Services for Global Businesses",
           intro:
             "Running a successful e-commerce business requires constant attention to detail—product listings, inventory updates, customer queries, and sales optimization. At SolutionOffice247, we provide end-to-end e-commerce store handling services so you can focus on scaling your business while we manage operations seamlessly."
         }}
         subServices={{
            heading: "What We Offer",
             intro: "We specialize in managing e-commerce stores across multiple platforms, ensuring smooth operations and sales growth.",
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
             description: "Launch professional Shopify stores with custom design and seamless checkout flows.",
             icon: Store,
             color: "text-accent-teal",
             bgColor: "bg-accent-teal/10",
             gradientFrom: "from-accent-teal/20",
             gradientTo: "to-accent-teal/5",
             link: "/services/shopify-services",
             },
             {
             title: "TikTok Commerce",
             description: "Engage new audiences with TikTok store integration and social commerce solutions.",
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
         whyChooseUs={{
           eyebrowIcon: Sparkles,
           eyebrow: "Why Outsource Your E-commerce Store to Us?",
           heading: "Built for Excellence,",
           highlight: "Delivered with Care",
           description:
             "We deliver complete e-commerce solutions that simplify store management and boost online sales. From marketplaces like Amazon, eBay, and Walmart to custom Shopify and WordPress stores, our services are built for excellence and delivered with care.",
           bullets: [
             "Boost product visibility & sales",
             "24/7 global support",
             "Affordable & scalable solutions",
             "Expert Amazon & Shopify management",
           ],
         }}
         cta={{
           heading: "Ready to grow?",
           subheading: "Get a free consultation with our e-commerce experts.",
           primaryLabel: "Get a Free Consultation",
           primaryHref: "/pages/contact",
         }}
       />
       <Footer />
     </>
   );
 }
