
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ResearchPapers from "./pages/services/ResearchPapers";
import ThesisDissertation from "./pages/services/ThesisDissertation";
import ReactDevelopment from "./pages/services/ReactDevelopment";
import EssayAssignments from "./pages/services/EssayAssignments";
import EditingProofreading from "./pages/services/EditingProofreading";
import ResponsiveUi from "./pages/services/ResponsiveUi";
import AnimationDesign from "./pages/services/AnimationDesign";
import WordPressDevelopment from "./pages/services/WordPressDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/pages/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
