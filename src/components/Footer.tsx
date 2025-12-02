import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="font-display text-3xl text-primary text-glow tracking-wider"
            >
              SAM KHARASHFEH
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(190_100%_50%/0.4)] transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(190_100%_50%/0.4)] transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(190_100%_50%/0.4)] transition-all duration-300"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(190_100%_50%/0.4)] transition-all duration-300"
            >
              <Music2 size={18} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Sam Kharashfeh. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
