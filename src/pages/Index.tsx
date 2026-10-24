import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import GigsSection from "@/components/GigsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    const scrollToHash = () => {
      const sectionId = decodeURIComponent(window.location.hash.slice(1));
      if (!sectionId) return;
      requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView());
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [location.pathname, location.hash]);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      {site.showGigs && <GigsSection />}
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
