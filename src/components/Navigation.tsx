import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navItems = [{
  label: "Home",
  href: "#home"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Music",
  href: "#music"
}, {
  label: "Gigs",
  href: "#gigs"
}, {
  label: "Gallery",
  href: "#gallery"
}, {
  label: "Contact",
  href: "#contact"
}];
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="container-custom px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl md:text-3xl text-primary text-glow tracking-wider">SΛM RΛSH</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide">
                {item.label}
              </a>)}
            <Button variant="neon" size="sm">
              Book Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map(item => <a key={item.label} href={item.href} className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </a>)}
              <Button variant="neon" className="mt-2">
                Book Me
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;