import { useLocation } from "react-router-dom";

export type Locale = "de" | "en";

export const localeFromPath = (pathname: string): Locale =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";

export const localizedPath = (locale: Locale, pathname = "/") => {
  const barePath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === "en" ? `/en${barePath === "/" ? "/" : barePath}` : barePath;
};

export const useLocale = () => localeFromPath(useLocation().pathname);

export const useLocalizedPath = () => {
  const locale = useLocale();
  return (pathname = "/") => localizedPath(locale, pathname);
};
