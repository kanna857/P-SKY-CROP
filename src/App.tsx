import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Index = lazy(() => import("./pages/Index"));
const AnalyzePage = lazy(() => import("./pages/AnalyzePage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const CompareFieldsPage = lazy(() => import("./pages/CompareFieldsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FuturePage = lazy(() => import("./pages/FuturePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const DiagnosePage = lazy(() => import("./pages/DiagnosePage"));
const ChatbotPage = lazy(() => import("./pages/ChatbotPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/sky-crop-health">
        <Suspense fallback={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0a0f1e", color: "#4ade80", fontSize: "1.2rem" }}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/analyze" element={<AnalyzePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/compare" element={<CompareFieldsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/future" element={<FuturePage />} />
            <Route path="/diagnose" element={<DiagnosePage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
