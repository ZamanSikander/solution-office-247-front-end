import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Freelance Web Developer, Writer & eCommerce Assistant | Solution Office 24/7
        </title>
        <meta
          name="description"
          content="Hire a skilled freelance web developer, academic writer, and eCommerce store manager. Get expert front-end development, writing, and online store support."
        />
        <link rel="canonical" href="https://solutionoffice247.com" />
      </Helmet>

      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
