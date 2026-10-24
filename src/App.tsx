import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { localeFromPath } from "@/lib/locale";
import Index from "./pages/Index";
import EPK from "./pages/EPK";
import ArtistProfile from "./pages/ArtistProfile";
import NotFound from "./pages/NotFound";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

const queryClient = new QueryClient();

const DocumentLanguage = () => {
  const location = useLocation();
  useEffect(() => {
    const locale = localeFromPath(location.pathname);
    document.documentElement.lang = locale;
    const page = location.pathname.replace(/^\/en(?=\/|$)/, "").replace(/\/$/, "") || "/";
    const titles = {
      de: { "/": "SΛM RΛSH | Elektronische Musik & Booking", "/epk": "Electronic Press Kit | SΛM RΛSH", "/artist-profile": "Artist Profile | SΛM RΛSH", "/impressum": "Impressum | SΛM RΛSH", "/datenschutz": "Datenschutz | SΛM RΛSH" },
      en: { "/": "SΛM RΛSH | Electronic Music & Booking", "/epk": "Electronic Press Kit | SΛM RΛSH", "/artist-profile": "Artist Profile | SΛM RΛSH", "/impressum": "Legal Notice | SΛM RΛSH", "/datenschutz": "Privacy Policy | SΛM RΛSH" },
    };
    const descriptions = {
      de: { "/": "SΛM RΛSH: elektronische Musik, aktuelle Mixe und Booking-Kontakt.", "/epk": "Musik, Kurzprofil und Booking-Kontakt für Veranstalter und Presse.", "/artist-profile": "Biografie, Sound und Pressekit von SΛM RΛSH. House, Techno und Organic House mit orientalischen Einflüssen.", "/impressum": "Impressum und Anbieterangaben der Website SΛM RΛSH.", "/datenschutz": "Informationen zur Verarbeitung personenbezogener Daten auf der Website SΛM RΛSH." },
      en: { "/": "SΛM RΛSH: electronic music, latest mixes and booking information.", "/epk": "Music, short bio and booking details for promoters and press.", "/artist-profile": "Biography, sound and press kit of SΛM RΛSH. House, techno and organic house with Orient influences.", "/impressum": "Legal notice and provider details for the SΛM RΛSH website.", "/datenschutz": "Information about personal data processing on the SΛM RΛSH website." },
    };
    document.title = titles[locale][page as keyof typeof titles.de] || `404 | SΛM RΛSH`;
    const description = descriptions[locale][page as keyof typeof descriptions.de];
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    }
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", document.title);
  }, [location.pathname]);
  return null;
};

const ScrollOnRouteChange = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DocumentLanguage />
        <ScrollOnRouteChange />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/en" element={<Index />} />
          <Route path="/epk" element={<EPK />} />
          <Route path="/en/epk" element={<EPK />} />
          <Route path="/artist-profile" element={<ArtistProfile />} />
          <Route path="/en/artist-profile" element={<ArtistProfile />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/en/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/en/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
