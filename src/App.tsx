
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
import InscriptionPage from "./pages/InscriptionPage";
import DevenirFormateurPage from "./pages/DevenirFormateurPage";
import NotFound from "./pages/NotFound";

// Categories Pages
import BusinessPage from "./pages/categories/BusinessPage";
import AgriculturePage from "./pages/categories/AgriculturePage";
import TechnologiePage from "./pages/categories/TechnologiePage";
import IAPage from "./pages/categories/IAPage";
import MarketingPage from "./pages/categories/MarketingPage";

// Panel Pages
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminCourseEdit from "./pages/admin/AdminCourseEdit";
import AdminInstructors from "./pages/admin/AdminInstructors";
import AdminAffiliates from "./pages/admin/AdminAffiliates";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

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
        <Route path="/inscription" element={<InscriptionPage />} />
        <Route path="/devenir-formateur" element={<DevenirFormateurPage />} />
        
        {/* Routes pour les catégories */}
        <Route path="/categories/business" element={<BusinessPage />} />
        <Route path="/categories/agriculture" element={<AgriculturePage />} />
        <Route path="/categories/technologie" element={<TechnologiePage />} />
        <Route path="/categories/ia" element={<IAPage />} />
        <Route path="/categories/marketing" element={<MarketingPage />} />
        
        {/* Routes pour le panel d'administration */}
        <Route path="/panel" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="utilisateurs" element={<AdminUsers />} />
          <Route path="cours" element={<AdminCourses />} />
          <Route path="cours/:id" element={<AdminCourseEdit />} />
          <Route path="cours/new" element={<AdminCourseEdit />} />
          <Route path="formateurs" element={<AdminInstructors />} />
          <Route path="affilies" element={<AdminAffiliates />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="parametres" element={<AdminSettings />} />
          <Route path="parametres/paiements" element={<AdminSettings />} />
          <Route path="parametres/notifications" element={<AdminSettings />} />
          <Route path="parametres/securite" element={<AdminSettings />} />
          <Route path="parametres/systeme" element={<AdminSettings />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
