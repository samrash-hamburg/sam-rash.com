import { ArrowLeft, ArrowUpRight, Mail, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PressKitButton from "@/components/PressKitButton";
import heroPhoto from "@/assets/hero-rooftop.jpg";
import { artistProfile } from "@/lib/artist-profile";
import { useLocale, useLocalizedPath } from "@/lib/locale";
import { site } from "@/lib/site";

const ArtistProfile = () => {
  const locale = useLocale();
  const path = useLocalizedPath();
  const copy = artistProfile[locale];

  return <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border bg-background/95">
      <div className="container-custom flex min-h-20 flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link to={path("/")} className="font-display text-2xl tracking-wider text-primary text-glow">{site.brand}</Link>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link to={path("/")} className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-primary">
            <ArrowLeft size={16} aria-hidden="true" />{locale === "de" ? "Zur Website" : "Back to site"}
          </Link>
        </div>
      </div>
    </header>
    <main>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img src={heroPhoto} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[#1c779f]/55 mix-blend-multiply" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="container-custom px-4 py-20 md:px-8 md:py-28">
          <p className="mb-5 text-sm uppercase tracking-[0.24em] text-primary">Artist Profile</p>
          <h1 className="font-display text-7xl leading-none tracking-wide md:text-9xl">SΛM <span className="text-primary text-glow">RΛSH</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">{copy.intro}</p>
          <div className="mt-8"><PressKitButton /></div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom grid items-start gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">{copy.bioLabel}</p>
            <h2 className="max-w-xl font-display text-4xl leading-tight md:text-6xl">{copy.bioTitle}</h2>
            <div className="mt-7 space-y-5 leading-relaxed text-foreground/70">
              {copy.biography.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <blockquote className="mt-9 border-l-2 border-primary pl-6 font-display text-3xl leading-snug text-primary">“{copy.quote}”</blockquote>
          </div>
          <aside className="rounded-xl border border-border bg-card p-6 md:p-8" aria-label={locale === "de" ? "Künstlerprofil im Überblick" : "Artist profile at a glance"}>
            <p className="mb-6 font-display text-2xl">{locale === "de" ? "Auf einen Blick" : "At a glance"}</p>
            <dl className="space-y-6">
              {copy.facts.map(fact => <div key={fact.label}>
                <dt className="mb-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">{fact.label}</dt>
                <dd className="text-base text-foreground">{fact.value}</dd>
              </div>)}
            </dl>
          </aside>
        </div>
      </section>
      <section className="section-padding border-y border-border bg-card">
        <div className="container-custom grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">{copy.musicLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl">{copy.musicTitle}</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-foreground/70">{copy.musicText}</p>
          </div>
          <div className="space-y-3">
            <a href={site.soundCloudTrack} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50">
              <span className="flex items-center gap-3"><Music2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />{copy.listen}</span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            </a>
            <a href={site.spotifyProfile} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50">
              <span>{copy.spotify}</span><ArrowUpRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">{copy.pressLabel}</p>
          <h2 className="font-display text-4xl md:text-6xl">{copy.pressTitle}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-foreground/70">{copy.pressText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PressKitButton />
            <Button variant="neon-solid" size="lg" asChild>
              <a href={`mailto:${site.bookingEmail}?subject=${encodeURIComponent(locale === "de" ? "Booking-Anfrage SΛM RΛSH" : "Booking inquiry SΛM RΛSH")}`}>
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />{copy.booking}
              </a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{locale === "de" ? "Weitere Musik- und Kontaktinfos im " : "More music and contact information in the "}<Link to={path("/epk")} className="text-primary hover:underline">Electronic Press Kit</Link>.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>;
};

export default ArtistProfile;
