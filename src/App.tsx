
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
import NotFound from "./pages/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
