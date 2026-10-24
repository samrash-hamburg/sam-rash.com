import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/lib/locale";
import { site } from "@/lib/site";

const Navigation = () => {
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { label: locale === "de" ? "Start" : "Home", href: "#home" },
    { label: locale === "de" ? "Über mich" : "About", href: "#about" },
    { label: locale === "de" ? "Musik" : "Music", href: "#music" },
    ...(site.showGigs ? [{ label: "Gigs", href: "#gigs" }] : []),
    { label: locale === "de" ? "Galerie" : "Gallery", href: "#gallery" },
    { label: locale === "de" ? "Kontakt" : "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`} aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}>
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <a href="#home" className="font-display text-2xl md:text-3xl text-primary text-glow tracking-wider shrink-0">SΛM RΛSH</a>
          <div className="hidden lg:flex items-center gap-4 lg:gap-7">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide">{item.label}</a>)}
            <LanguageSwitcher />
            <Button variant="neon" size="sm" asChild><a href="#contact">{locale === "de" ? "Booking" : "Book Me"}</a></Button>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher onSelect={() => setIsMobileMenuOpen(false)} />
            <button className="text-foreground p-2" aria-label={isMobileMenuOpen ? (locale === "de" ? "Menü schließen" : "Close menu") : (locale === "de" ? "Menü öffnen" : "Open menu")} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
        {isMobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="flex flex-col p-4 gap-4">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>{item.label}</a>)}
            <Button variant="neon" className="mt-2" asChild><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{locale === "de" ? "Booking" : "Book Me"}</a></Button>
          </div>
        </div>}
      </div>
    </nav>
  );
};

export default Navigation;
