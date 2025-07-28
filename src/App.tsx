import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AdoptionPage from "./pages/AdoptionPage";
import AbandonedCatsReport from "./pages/AbandonedCatsReport";
import NotFound from "./pages/NotFound";
import { LoginForm } from "./components/auth/LoginForm";
import { RegisterForm } from "./components/auth/RegisterForm";
import ReportDetail from "./pages/ReportDetail";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SuccessStories from "./pages/SuccessStories";
import HelpCenter from "./pages/HelpCenter";
import GuiaBusquedaMascotas from "./pages/GuiaBusquedaMascotas";
import PrevencionPerdidas from "./pages/PrevencionPerdidas";
import PrimerosAuxilios from "./pages/PrimerosAuxilios";
import RefugiosCercanos from "./pages/RefugiosCercanos";
import Veterinarios from "./pages/Veterinarios";
import Blog from "./pages/Blog";
import { MichiBot } from '@/components/michibot/MichiBot';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/adopcion" element={<AdoptionPage />} />
            <Route path="/abandonados" element={<AbandonedCatsReport />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/report/:id" element={<ReportDetail />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/testimonios" element={<SuccessStories />} />
            <Route path="/ayuda" element={<HelpCenter />} />
            <Route path="/guia" element={<GuiaBusquedaMascotas />} />
            <Route path="/prevencion" element={<PrevencionPerdidas />} />
            <Route path="/primeros-auxilios" element={<PrimerosAuxilios />} />
            <Route path="/refugios" element={<RefugiosCercanos />} />
            <Route path="/veterinarios" element={<Veterinarios />} />
            <Route path="/blog" element={<Blog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <MichiBot /* position="bottom-right"
                    primaryColor="#4f46e5" */
                    title="MichiBot"
                    subtitle="Tu asistente virtual"
          />
          <Toaster />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
