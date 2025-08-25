import React from 'react'
import MainServicesLayout from '@/components/MainServicesLayout';
import { ShoppingCart, Store, Users } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const Ecommerce = () => {
    return (
        <div>
            <Header />
            <MainServicesLayout
                title="E-commerce Store Handling Services"
                intro="We manage Amazon, Shopify, and multi-channel stores to help you scale globally."
                subServices={[
                    {
                        title: "Amazon Store Handling",
                        description: "Drive more sales with optimized Amazon product listings and marketplace management.",
                        icon: ShoppingCart,
                        color: "text-accent-coral",
                        bgColor: "bg-accent-coral/10",
                        gradientFrom: "from-accent-coral/20",
                        gradientTo: "to-accent-coral/5",
                        link: "/ecommerce/amazon",
                    },
                    {
                        title: "Shopify Development",
                        description: "Launch professional Shopify stores with custom design and seamless checkout flows.",
                        icon: Store,
                        color: "text-accent-teal",
                        bgColor: "bg-accent-teal/10",
                        gradientFrom: "from-accent-teal/20",
                        gradientTo: "to-accent-teal/5",
                        link: "/ecommerce/shopify",
                    },
                    {
                        title: "TikTok Commerce",
                        description: "Engage new audiences with TikTok store integration and social commerce solutions.",
                        icon: Users,
                        color: "text-accent-lilac",
                        bgColor: "bg-accent-lilac/10",
                        gradientFrom: "from-accent-lilac/20",
                        gradientTo: "to-accent-lilac/5",
                        link: "/ecommerce/virtual-assistant",
                    },
                    {
                        title: "Walmart Marketplace",
                        description: "Expand your reach with fully managed Walmart store setup and product optimization.",
                        icon: Users,
                        color: "text-primary",
                        bgColor: "bg-primary/10",
                        gradientFrom: "from-primary/20",
                        gradientTo: "to-primary/5",
                        link: "/ecommerce/virtual-assistant",
                    },
                    {
                        title: "eBay Management",
                        description: "Boost visibility and maximize profits with optimized eBay listings and store setup.",
                        icon: Users,
                        color: "text-secondary",
                        bgColor: "bg-secondary/10",
                        gradientFrom: "from-secondary/20",
                        gradientTo: "to-secondary/5",
                        link: "/ecommerce/virtual-assistant",
                    }
                ]}
                benefits={[
                    "Boost product visibility & sales",
                    "24/7 global support",
                    "Affordable & scalable solutions",
                    "Expert Amazon & Shopify management",
                ]}
                ctaText="Get a Free Consultation"
                ctaLink="/contact"
            />
            <Footer />
        </div>

    );
}

export default Ecommerce