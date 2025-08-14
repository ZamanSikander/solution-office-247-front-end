
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./components/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ResearchPapers from "./pages/services/ResearchPapers";
import ThesisDissertation from "./pages/services/ThesisDissertation";
import ReactDevelopment from "./pages/services/ReactDevelopment";
import EssayAssignments from "./pages/services/EssayAssignments";
import EditingProofreading from "./pages/services/EditingProofreading";
import ResponsiveUi from "./pages/services/ResponsiveUi";
import AnimationDesign from "./pages/services/AnimationDesign";
import WordPressDevelopment from "./pages/services/WordPressDevelopment";
import EbayServices from "./pages/services/EbayServices";
import WalmartServices from "./pages/services/WalmartServices";
import TiktokServices from "./pages/services/TiktokServices";
import AmazonServices from "./pages/services/AmazonServices";
import ShopifyServices from "./pages/services/ShopifyServices";
const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/pages/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      
      {/* Academic Writing Services */}
      <Route path="/services/research-papers" element={<ResearchPapers />} />
      <Route path="/services/thesis-dissertation" element={<ThesisDissertation/>} />
      <Route path="/services/essay-assignments" element={<EssayAssignments/>}/>
      <Route path="/services/editing-proofreading" element={<EditingProofreading/>}/>
      {/* Development Services */}
      <Route path="/services/react-development" element={<ReactDevelopment />} />
      <Route path="/services/responsive-design" element={<ResponsiveUi />} />
      <Route path="/services/animation-design" element={<AnimationDesign />} />
      <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />

      {/* {Ecommerce services} */}
      <Route path="/services/ebay-services" element={<EbayServices />} />
      <Route path="/services/walmart-services" element={<WalmartServices />} />
      <Route path="/services/tiktok-services" element={<TiktokServices />} />
      <Route path="/services/amazon-services" element={<AmazonServices />} />

      <Route path="/services/shopify-services" element={<ShopifyServices />} />

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="/pages/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
