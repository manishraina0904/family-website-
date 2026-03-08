import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { About } from "./pages/About";
import { FamilyMembers } from "./pages/FamilyMembers";
import { Father } from "./pages/Father";
import { Mother } from "./pages/Mother";
import { Sister } from "./pages/Sister";
import { Brother } from "./pages/Brother";
import { Gallery } from "./pages/Gallery";
import { Calendar } from "./pages/Calendar";
import { Contact } from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/family" element={<FamilyMembers />} />
          <Route path="/family/father" element={<Father />} />
          <Route path="/family/mother" element={<Mother />} />
          <Route path="/family/sister" element={<Sister />} />
          <Route path="/family/brother" element={<Brother />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
