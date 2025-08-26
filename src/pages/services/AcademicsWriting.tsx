
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainServicesLayout from "@/components/MainServicesLayout";
import { ShoppingCart, Store, Users, Sparkles } from "lucide-react";

export default function AcademicsWriting() {
  return (
    <>
      <Header />
      <MainServicesLayout
        hero={{
          title: "Academic Writing Services for Students & Professionals",
          intro:
            "Struggling with academic deadlines? At SolutionOffice247, we provide professional academic writing services online—helping students, researchers, and professionals with essays, assignments, research papers, and dissertations. Our team of expert writers ensures originality, accuracy, and timely delivery."
        }}
        subServices={{
           heading: "What We Offer",
            intro: "We provide professional academic writing services tailored to students and researchers, ensuring well-researched, original, and high-quality work that meets academic standards.",
            learnMoreLabel: "Learn More →",
            items: [
            {
            title: "Research Papers",
            description: "Expertly written, properly cited, and plagiarism-free research papers.",
            icon: ShoppingCart,
            color: "text-accent-coral",
            bgColor: "bg-accent-coral/10",
            gradientFrom: "from-accent-coral/20",
            gradientTo: "to-accent-coral/5",
            link: "/services/research-papers",
            },
            {
            title: "Thesis & Dissertation",
            description: "Comprehensive guidance and writing support for graduate and postgraduate projects.",
            icon: Store,
            color: "text-accent-teal",
            bgColor: "bg-accent-teal/10",
            gradientFrom: "from-accent-teal/20",
            gradientTo: "to-accent-teal/5",
            link: "/services/thesis-dissertation",
            },
            {
            title: "Essays & Assignments",
            description: "Clear, structured, and high-quality academic essays and coursework solutions.",
            icon: Users,
            color: "text-accent-lilac",
            bgColor: "bg-accent-lilac/10",
            gradientFrom: "from-accent-lilac/20",
            gradientTo: "to-accent-lilac/5",
            link: "/services/essay-assignments",
            },
            {
            title: "Editing & Proofreading",
            description: "Refined content with error-free grammar, style, and formatting.",
            icon: Users,
            color: "text-primary",
            bgColor: "bg-primary/10",
            gradientFrom: "from-primary/20",
            gradientTo: "to-primary/5",
            link: "/services/editing-proofreading",
            },
            ],
            }}
        whyChooseUs={{
          eyebrowIcon: Sparkles,
          eyebrow: "Why Outsource Your E-commerce Store to Us?",
          heading: "Why Choose Our",
          highlight: "Academics Writing Services",
          description:
            "We combine subject expertise, rigorous research, and attention to detail to deliver reliable academic support that helps you excel.",
          bullets: [
            "Expert Academic Writers",
            "Plagiarism-Free Content",
            "On-Time Delivery",
            "Confidential & Reliable",
          ],
        }}
        cta={{
          heading: "Ready to grow?",
          subheading: "Get a free consultation with our Academics Writing Experts.",
          primaryLabel: "Get a Free Consultation",
          primaryHref: "/pages/contact",
        }}
      />
      <Footer />
    </>
  );
}
