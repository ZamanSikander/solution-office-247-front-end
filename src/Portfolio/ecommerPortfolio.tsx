import React from 'react';
import { ShoppingBag, Video, Store, Package, ShoppingCart, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EcommercePortfolio = () => {
    const services = [
        {
            title: "eBay Management",
            description: "Full-service eBay store management, listing optimization, and sales growth strategies.",
            icon: ShoppingBag,
            color: "text-accent-coral",
            bgColor: "bg-accent-coral/10",
        },
        {
            title: "TikTok Commerce",
            description: "Viral marketing campaigns and TikTok Shop setup to reach the next generation of buyers.",
            icon: Video,
            color: "text-primary",
            bgColor: "bg-primary/10",
        },
        {
            title: "Walmart Experts",
            description: "Walmart Marketplace onboarding, fulfillment solutions, and buy-box optimization.",
            icon: Store,
            color: "text-secondary",
            bgColor: "bg-secondary/10",
        },
        {
            title: "Amazon Store Handling",
            description: "A-Z Amazon FBA/FBM management, PPC advertising, and brand registry protection.",
            icon: Package,
            color: "text-accent-terracotta",
            bgColor: "bg-accent-terracotta/10",
        },
        {
            title: "Shopify Development",
            description: "Custom Shopify themes, app integration, and conversion rate optimization.",
            icon: ShoppingCart,
            color: "text-accent-sage",
            bgColor: "bg-accent-sage/10",
        }
    ];

    return (
        <section className="py-20 bg-neutral-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 scroll-reveal animate">
                    <div className="inline-flex items-center px-6 py-3 glass-card text-primary rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="h-4 w-4 mr-2" />
                        Our Expertise
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
                        Ecommerce <span className="text-gradient-premium">Portfolio</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                        Driving success across major platforms with tailored strategies and expert management.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card key={index} className="service-card-premium border-0 hover:shadow-premium transition-all duration-300">
                                <CardHeader>
                                    <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 mx-auto`}>
                                        <Icon className={`h-8 w-8 ${service.color}`} />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-center mb-3">{service.title}</CardTitle>
                                    <CardDescription className="text-center text-neutral-600">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <Button variant="ghost" className="group text-primary font-semibold hover:bg-primary/5">
                                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default EcommercePortfolio;
