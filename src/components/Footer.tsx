import { Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";
import { useLocale, useLocalizedPath } from "@/lib/locale";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PressKitButton from "@/components/PressKitButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const locale = useLocale();
  const path = useLocalizedPath();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <Link
              to={`${path("/")}#home`}
              className="font-display text-3xl text-primary text-glow tracking-wider"
            >
              SΛM RΛSH
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to={path("/artist-profile")} className="text-sm text-foreground/75 transition-colors hover:text-primary">Artist Profile</Link>
            <PressKitButton compact />
            <a
              href={site.soundCloudProfile}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={locale === "de" ? "SoundCloud-Profil öffnen" : "Open SoundCloud profile"}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:shadow-[0_0_15px_hsl(190_100%_50%/0.4)] transition-all duration-300"
            >
              <Music2 size={18} />
            </a>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} SΛM RΛSH. {locale === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}</p>
          <div className="flex gap-6">
            <Link to={path("/impressum")} className="hover:text-primary transition-colors">
              {locale === "de" ? "Impressum" : "Legal notice"}
            </Link>
            <Link to={path("/datenschutz")} className="hover:text-primary transition-colors">
              {locale === "de" ? "Datenschutz" : "Privacy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
