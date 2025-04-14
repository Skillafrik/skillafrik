
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import AffiliationPage from "./pages/AffiliationPage";
import AffiliationRegistrationPage from "./pages/AffiliationRegistrationPage";
import PartnershipPage from "./pages/PartnershipPage";
import PartnerRegistrationPage from "./pages/PartnerRegistrationPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

// Categories Pages
import BusinessPage from "./pages/categories/BusinessPage";
import AgriculturePage from "./pages/categories/AgriculturePage";
import TechnologiePage from "./pages/categories/TechnologiePage";
import IAPage from "./pages/categories/IAPage";
import MarketingPage from "./pages/categories/MarketingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cours" element={<CoursesPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/affiliation" element={<AffiliationPage />} />
        <Route path="/affiliation/inscription" element={<AffiliationRegistrationPage />} />
        <Route path="/partenaire" element={<PartnershipPage />} />
        <Route path="/partenaire/inscription" element={<PartnerRegistrationPage />} />
        <Route path="/connexion" element={<LoginPage />} />
        
        {/* Routes pour les catégories */}
        <Route path="/categories/business" element={<BusinessPage />} />
        <Route path="/categories/agriculture" element={<AgriculturePage />} />
        <Route path="/categories/technologie" element={<TechnologiePage />} />
        <Route path="/categories/ia" element={<IAPage />} />
        <Route path="/categories/marketing" element={<MarketingPage />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
