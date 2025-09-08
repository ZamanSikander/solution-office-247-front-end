
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import MainServicesLayout from "@/components/MainServicesLayout";
import { ShoppingCart, Store, Users, Sparkles, CheckCircle, Clock, Shield, Zap, MessageSquare, TrendingUp, Globe, Headphones, Star } from "lucide-react";

export default function AcademicsWriting() {
  return (
    <>
      <Helmet>
        <title>Academic Writing Services | Professional Essay, Dissertation & Thesis Help</title>
        <meta
          name="description"
          content="Get expert academic writing services with SolutionOffice247. We provide professional essay help, dissertation writing services, and thesis support—plagiarism-free, affordable, and always delivered on time."
        />
        <link rel="canonical" href="https://solutionoffice247.com/academicswriting" />
      </Helmet>
      <Header />
      <MainServicesLayout
        hero={{
          eyebrow: "Academics Writing",
          title: "Professional Academic Writing Services for Students & Researchers",
          intro:
            "At Solution Office 247, we provide reliable academic writing services including essays, dissertations, and thesis support. Our expert writers deliver original, plagiarism-free work tailored to meet academic standards—on time, every time.",
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
        whatWeDo={{
          eyebrow: "Our Expertise",
          heading: "What We Do",
          description: "We deliver academically sound, well-researched, and publication-ready documents across disciplines.",
          items: [
            {
              title: "Topic Selection & Outlines",
              description: "Help define strong research topics, problem statements, and logical paper structures.",
              icon: CheckCircle,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
            {
              title: "Literature Review",
              description: "Synthesize credible sources and build theoretical frameworks with proper citations.",
              icon: Globe,
              color: "text-accent-teal",
              bgColor: "bg-accent-teal/10",
              gradientFrom: "from-accent-teal/20",
              gradientTo: "to-accent-teal/5",
            },
            {
              title: "Methodology & Analysis",
              description: "Design sound methodologies and present clear qualitative/quantitative analysis.",
              icon: TrendingUp,
              color: "text-accent-lilac",
              bgColor: "bg-accent-lilac/10",
              gradientFrom: "from-accent-lilac/20",
              gradientTo: "to-accent-lilac/5",
            },
            {
              title: "Editing & Formatting",
              description: "Polish drafts for clarity, academic tone, and adherence to style guides.",
              icon: Shield,
              color: "text-primary",
              bgColor: "bg-primary/10",
              gradientFrom: "from-primary/20",
              gradientTo: "to-primary/5",
            },
            {
              title: "Plagiarism Checks",
              description: "Ensure originality with thorough checks and proper paraphrasing and referencing.",
              icon: Zap,
              color: "text-secondary",
              bgColor: "bg-secondary/10",
              gradientFrom: "from-secondary/20",
              gradientTo: "to-secondary/5",
            },
            {
              title: "Supervisor Feedback Revisions",
              description: "Iterative improvements based on feedback to align with academic expectations.",
              icon: Headphones,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
          ],
        }}
        howItWorks={{
          eyebrow: "Simple Process",
          heading: "How It Works",
          description: "Structured collaboration designed to meet academic standards and deadlines.",
          steps: [
            {
              number: "01",
              title: "Requirement Gathering",
              description: "Share topic, rubric, deadlines, and preferred citation style (APA/MLA/Chicago).",
              icon: MessageSquare,
            },
            {
              number: "02",
              title: "Research & Drafting",
              description: "We conduct credible research and prepare a well-structured draft for review.",
              icon: Store,
            },
            {
              number: "03",
              title: "Review & Revisions",
              description: "Refine content through edits, proofreading, and supervisor/committee feedback.",
              icon: CheckCircle,
            },
            {
              number: "04",
              title: "Finalize & Deliver",
              description: "Deliver polished, formatted, and plagiarism-free documents on time.",
              icon: TrendingUp,
            },
          ],
        }}
        benefits={{
          eyebrow: "Why Choose Us",
          heading: "Key Benefits",
          description: "Academic integrity, rigorous research, and on-time delivery—every project.",
          benefits: [
            {
              title: "Expert Academic Writers",
              description: "Subject matter specialists with proven academic and research experience.",
              icon: Star,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
            {
              title: "Original & Cited",
              description: "100% plagiarism-free with accurate citations and references.",
              icon: Shield,
              color: "text-accent-teal",
              bgColor: "bg-accent-teal/10",
              gradientFrom: "from-accent-teal/20",
              gradientTo: "to-accent-teal/5",
            },
            {
              title: "On-Time Delivery",
              description: "Commitment to deadlines with transparent progress updates.",
              icon: Clock,
              color: "text-accent-lilac",
              bgColor: "bg-accent-lilac/10",
              gradientFrom: "from-accent-lilac/20",
              gradientTo: "to-accent-lilac/5",
            },
            {
              title: "Confidential & Secure",
              description: "Your data and identity remain private and protected.",
              icon: Shield,
              color: "text-primary",
              bgColor: "bg-primary/10",
              gradientFrom: "from-primary/20",
              gradientTo: "to-primary/5",
            },
            {
              title: "Free Revisions",
              description: "Iterative edits to align with supervisor and rubric requirements.",
              icon: Headphones,
              color: "text-secondary",
              bgColor: "bg-secondary/10",
              gradientFrom: "from-secondary/20",
              gradientTo: "to-secondary/5",
            },
            {
              title: "Affordable Pricing",
              description: "Transparent, student-friendly pricing with no hidden charges.",
              icon: CheckCircle,
              color: "text-accent-coral",
              bgColor: "bg-accent-coral/10",
              gradientFrom: "from-accent-coral/20",
              gradientTo: "to-accent-coral/5",
            },
          ],
        }}
        testimonials={{
          eyebrow: "Client Success",
          heading: "What Our Clients Say",
          description: "Students and researchers trust us for quality, originality, and timely delivery.",
          testimonials: [
            {
              name: "Hannah R.",
              role: "Graduate Student",
              company: "Psychology",
              content: "My thesis structure and literature review improved dramatically. The team’s feedback was precise and insightful.",
              rating: 5,
            },
            {
              name: "Omar S.",
              role: "Master’s Candidate",
              company: "Business Administration",
              content: "They met every deadline and followed my university’s formatting guidelines perfectly.",
              rating: 5,
            },
            {
              name: "Priya M.",
              role: "Research Scholar",
              company: "Computer Science",
              content: "Zero plagiarism and strong methodology support. Helped me pass my committee review.",
              rating: 5,
            },
          ],
        }}
        whyChooseUs={{
          eyebrowIcon: Sparkles,
          eyebrow: "Why Choose Our Academic Writing Services?",
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
          heading: "Need Help With Your Academic Work?",
          subheading: "Get expert writing support that is original, well-researched, and on time.",
          primaryLabel: "Get a Free Consultation",
          primaryHref: "/pages/contact",
          secondaryLabel: "View Services",
          secondaryHref: "/services/essay-assignments",
          note: "Student-friendly pricing • Free revisions • Confidential service",
        }}
      />
      <Footer />
    </>
  );
}
