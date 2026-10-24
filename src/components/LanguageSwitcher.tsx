import { Link, useLocation } from "react-router-dom";
import { localeFromPath, localizedPath } from "@/lib/locale";

const LanguageSwitcher = ({ onSelect }: { onSelect?: () => void }) => {
  const location = useLocation();
  const locale = localeFromPath(location.pathname);

  return (
    <div className="inline-flex shrink-0 items-center rounded-full border border-border bg-background/55 p-1 text-xs font-semibold tracking-wider" role="group" aria-label={locale === "de" ? "Sprache wählen" : "Choose language"}>
      {(["de", "en"] as const).map((language) => (
        <Link
          key={language}
          to={`${localizedPath(language, location.pathname)}${location.search}${location.hash}`}
          lang={language}
          hrefLang={language}
          aria-current={locale === language ? "page" : undefined}
          onClick={onSelect}
          className={`rounded-full px-2.5 py-1.5 transition-colors ${locale === language ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"}`}
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
