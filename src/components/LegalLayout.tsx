import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { useLocale, useLocalizedPath } from "@/lib/locale";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

const LegalLayout = ({ eyebrow, title, intro, children }: LegalLayoutProps) => {
  const locale = useLocale();
  const path = useLocalizedPath();

  return (
  <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border bg-background/95">
      <div className="container-custom flex min-h-20 items-center justify-between gap-4 px-4 md:px-8">
        <Link to={path("/")} className="font-display text-2xl tracking-wider text-primary text-glow">
          {site.brand}
        </Link>
        <div className="flex items-center gap-3"><LanguageSwitcher /><Link to={path("/")} className="inline-flex items-center gap-2 text-sm text-foreground/75 transition-colors hover:text-primary"><ArrowLeft size={16} aria-hidden="true" /> {locale === "de" ? "Zur Website" : "Back to site"}</Link></div>
      </div>
    </header>

    <main id="main-content">
      <section className="relative overflow-hidden border-b border-border px-4 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
        <div className="pointer-events-none absolute -right-24 -top-48 h-[35rem] w-[35rem] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container-custom relative">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            <ShieldCheck size={16} aria-hidden="true" /> {eyebrow}
          </p>
          <h1 className="font-display text-6xl leading-none text-foreground md:text-8xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">{intro}</p>
        </div>
      </section>

      <div className="container-custom grid gap-10 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <aside className="h-fit rounded-xl border border-primary/20 bg-primary/5 p-5 lg:sticky lg:top-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{locale === "de" ? "Direkter Kontakt" : "Contact"}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">{locale === "de" ? "Fragen zu dieser Seite oder deinen Daten?" : "Questions about this site or your data?"}</p>
          {site.email ? (
            <a className="mt-4 block break-all text-sm font-medium text-primary underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          ) : (
            <p className="mt-4 text-sm text-primary">{locale === "de" ? "Kontaktadresse wird vor Veröffentlichung ergänzt." : "Contact email will be added before publication."}</p>
          )}
          <div className="mt-5 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
            {site.company}<br />{site.street}<br />{site.postalCode} {site.city}
          </div>
        </aside>
        <div className="space-y-6">{children}</div>
      </div>
    </main>
    <Footer />
  </div>
  );
};

export const LegalCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="rounded-xl border border-border bg-card/70 p-6 shadow-[0_16px_60px_hsl(220_30%_2%/0.18)] md:p-8">
    <h2 className="mb-5 font-display text-3xl leading-tight text-foreground md:text-4xl">{title}</h2>
    <div className="space-y-4 text-sm leading-7 text-foreground/75 md:text-base">{children}</div>
  </section>
);

export default LegalLayout;
