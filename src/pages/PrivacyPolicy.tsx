import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const policySections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information (name, email, phone number)",
        "Service-related information and project details",
        "Payment and billing information",
        "Communication records and correspondence",
        "Website usage data and analytics"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: FileText,
      content: [
        "Provide and improve our services",
        "Process payments and transactions",
        "Communicate with you about projects",
        "Send important updates and notifications",
        "Analyze and enhance user experience"
      ]
    },
    {
      title: "Information Security",
      icon: Lock,
      content: [
        "Encrypted data transmission (SSL/TLS)",
        "Secure data storage and access controls",
        "Regular security audits and monitoring",
        "Limited employee access to personal data",
        "Compliance with data protection regulations"
      ]
    },
    {
      title: "Data Sharing and Disclosure",
      icon: Shield,
      content: [
        "We do not sell your personal information",
        "Limited sharing with service providers",
        "Legal compliance when required",
        "Business transfers with your consent",
        "Aggregated, non-personal data only"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://solutionoffice247.com/privacy-policy" />
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-2xl lg:text-4xl font-display font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-md lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            
            <div className="text-sm text-white/80 mt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-2xl lg:text-3xl font-display font-bold mb-6 text-neutral-800">
                Introduction
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Solution Office 24/7 ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our website and any related applications.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Policy Sections */}
            <div className="space-y-12">
              {policySections.map((section, index) => {
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
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Your Rights and Choices</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  You have the right to access, update, or delete your personal information. You can also opt out of certain communications and request data portability. To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Cookies and Tracking</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us analyze traffic, personalize content, and provide relevant advertisements.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Data Retention</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">International Data Transfers</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Changes to This Policy</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  We encourage you to review this policy periodically to stay informed about how we protect your information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-neutral-800">Contact Us</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-neutral-50 p-6 rounded-2xl">
                  <div className="space-y-2 text-neutral-700">
                    <p><strong>Email:</strong> privacy@solutionoffice247.com</p>
                    <p><strong>Phone:</strong> +92-323-6180902</p>
                    <p><strong>Address:</strong> Global Service Available</p>
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
              Questions About Your Privacy?
            </h2>
            <p className="text-neutral-600 mb-8">
              We're here to help. Contact our privacy team for any concerns or questions about how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pages/contact">
                <Button className="btn-premium text-lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/terms-of-service">
                <Button variant="outline" className="text-lg">
                  View Terms of Service
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

export default PrivacyPolicy;
