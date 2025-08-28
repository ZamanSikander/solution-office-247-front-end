import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, CheckCircle, AlertTriangle, Users, CreditCard, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const termsSections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        "By accessing and using our services, you accept and agree to be bound by these terms",
        "These terms apply to all users, clients, and visitors of our website and services",
        "If you disagree with any part of these terms, you may not access our services",
        "We reserve the right to modify these terms at any time with notice"
      ]
    },
    {
      title: "Service Description",
      icon: FileText,
      content: [
        "Academic writing and research services",
        "Front-end development and web design",
        "eCommerce platform development and management",
        "Consulting and project management services",
        "24/7 customer support and assistance"
      ]
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: [
        "Provide accurate and complete information",
        "Maintain the security of your account",
        "Comply with all applicable laws and regulations",
        "Respect intellectual property rights",
        "Use services for lawful purposes only"
      ]
    },
    {
      title: "Payment and Billing",
      icon: CreditCard,
      content: [
        "All fees are due upon service completion",
        "Payment methods accepted: Credit cards, bank transfers",
        "Late payments may result in service suspension",
        "Refunds are processed according to our refund policy",
        "Prices are subject to change with notice"
      ]
    },
    {
      title: "Intellectual Property",
      icon: Shield,
      content: [
        "We retain rights to our proprietary materials",
        "Delivered work becomes your property upon full payment",
        "You grant us license to use your content for service delivery",
        "Third-party materials remain under their respective licenses",
        "No unauthorized copying or distribution permitted"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: [
        "Our liability is limited to the amount paid for services",
        "We are not liable for indirect or consequential damages",
        "Services are provided 'as is' without warranties",
        "Force majeure events may affect service delivery",
        "Disputes will be resolved through arbitration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://solutionoffice247.com/terms-of-service" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/">
              <Button variant="ghost" className="mb-8 text-white hover:bg-white/10">
                <FileText className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 mx-auto mb-8 shadow-premium">
              <FileText className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-2xl lg:text-4xl font-display font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-md lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Please read these terms carefully before using our services. These terms govern your use of Solution Office 24/7 services.
            </p>
            
            <div className="text-sm text-white/80 mt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-6 text-neutral-800">
                Introduction
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the services provided by Solution Office 24/7 ("Company," "we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our services include academic writing, front-end development, eCommerce solutions, and related consulting services. These terms apply to all users, clients, and visitors of our website and services.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              {termsSections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="service-card-premium border-0">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-display font-bold">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-neutral-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Sections */}
            <div className="mt-16 space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Service Delivery and Quality</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We are committed to delivering high-quality services within agreed timelines. However, service delivery may be affected by factors beyond our control, including but not limited to technical issues, third-party dependencies, or client feedback delays.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We provide revision opportunities for most services to ensure your satisfaction. Specific revision policies vary by service type and will be communicated during project initiation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Confidentiality and Privacy</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We treat all client information and project details as confidential. Our privacy practices are detailed in our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We implement appropriate security measures to protect your information and maintain client confidentiality in accordance with industry standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Termination and Suspension</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Either party may terminate services with written notice. We may suspend services for violations of these terms, non-payment, or other reasonable causes.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Upon termination, you remain responsible for payment of completed services and any outstanding balances.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Dispute Resolution</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We encourage open communication to resolve any issues or concerns. If disputes cannot be resolved informally, they will be subject to binding arbitration in accordance with applicable laws.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  These Terms are governed by the laws of the jurisdiction where our company is registered, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Changes to Terms</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of services after changes constitutes acceptance of the new Terms.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We will notify you of material changes via email or prominent website notice. It is your responsibility to review these Terms periodically.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Contact Information</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-neutral-50 p-6 rounded-2xl">
                  <div className="space-y-2 text-neutral-700">
                    <p><strong>Email:</strong> legal@solutionoffice247.com</p>
                    <p><strong>Phone:</strong> +92-323-6180902</p>
                    <p><strong>Address:</strong> Global Service Available</p>
                    <p><strong>Business Hours:</strong> 24/7 Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-neutral-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-neutral-600 mb-8">
              By using our services, you agree to these terms. If you have any questions, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pages/contact">
                <Button className="btn-premium text-lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/privacy-policy">
                <Button variant="outline" className="text-lg">
                  View Privacy Policy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
