import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import GigsSection from "@/components/GigsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <GigsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
