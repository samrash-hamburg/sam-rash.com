import { ArrowLeft, ArrowUpRight, Mail, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import heroPhoto from "@/assets/hero-rooftop.jpg";
import { site } from "@/lib/site";
import { useLocale, useLocalizedPath } from "@/lib/locale";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const EPK = () => {
  const locale = useLocale();
  const path = useLocalizedPath();

  return (
  <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-border bg-background/95">
      <div className="container-custom flex min-h-20 items-center justify-between gap-4 px-4 md:px-8">
        <Link to={path("/")} className="font-display text-2xl tracking-wider text-primary text-glow">{site.brand}</Link>
        <div className="flex items-center gap-3"><LanguageSwitcher /><Link to={path("/")} className="inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-primary"><ArrowLeft size={16} aria-hidden="true" /> {locale === "de" ? "Zur Website" : "Back to site"}</Link></div>
      </div>
    </header>

    <main>
      <section className="relative isolate min-h-[33rem] overflow-hidden border-b border-border">
        <img src={heroPhoto} alt={locale === "de" ? "SΛM RΛSH bei einem Auftritt" : "SΛM RΛSH performing"} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[#1c779f]/55 mix-blend-multiply" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="container-custom flex min-h-[33rem] flex-col justify-center px-4 py-16 md:px-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Electronic Press Kit</p>
          <h1 className="font-display text-7xl leading-[0.9] text-foreground md:text-9xl">SΛM<br /><span className="text-primary text-glow">RΛSH</span></h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">{locale === "de" ? "DJ und Künstler für elektronische Musik. Musik, kurze Bio und Kontakt für Veranstalter und Presse." : "DJ and electronic music artist. Music, short bio and contact details for promoters and press."}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {site.bookingEmail ? <Button variant="neon-solid" size="lg" asChild><a href={`mailto:${site.bookingEmail}?subject=${encodeURIComponent(locale === "de" ? "Booking-Anfrage SΛM RΛSH" : "Booking inquiry SΛM RΛSH")}`}><Mail className="mr-2 h-5 w-5" aria-hidden="true" /> {locale === "de" ? "Booking anfragen" : "Request booking"}</a></Button> : <Button variant="neon-solid" size="lg" disabled><Mail className="mr-2 h-5 w-5" aria-hidden="true" /> {locale === "de" ? "Booking-Adresse folgt" : "Booking email coming soon"}</Button>}
            <Button variant="neon" size="lg" asChild><a href={site.soundCloudTrack} target="_blank" rel="noopener noreferrer"><Music2 className="mr-2 h-5 w-5" aria-hidden="true" /> {locale === "de" ? "Aktuellen Mix hören" : "Listen to the latest mix"}</a></Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">{locale === "de" ? "Kurzprofil" : "Short bio"}</p>
            <h2 className="font-display text-5xl leading-tight md:text-6xl">{locale === "de" ? "Elektronische Energie aus Hamburg." : "Electronic energy from Hamburg."}</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/70">
            <p>{locale === "de" ? "SΛM RΛSH verbindet in seinen Sets treibende Rhythmen mit atmosphärischen, melodischen Momenten. Der aktuelle Mix „Deep Techno Journey – Acid, Dub & Detroit Soul“ zeigt diese Bandbreite." : "SΛM RΛSH blends driving rhythms with atmospheric and melodic moments. His latest mix, “Deep Techno Journey – Acid, Dub & Detroit Soul”, shows that range."}</p>
            <p>{site.bookingEmail ? (locale === "de" ? "Für Bookings, Interviews und weitere Presseinformationen erreichst du uns direkt per E-Mail." : "For bookings, interviews and further press information, email us directly.") : (locale === "de" ? "Die neue E-Mail-Adresse für Bookings, Interviews und Presseanfragen wird ergänzt." : "A new email address for bookings, interviews and press inquiries will be added.")} {locale === "de" ? "Auf Anfrage stellen wir passendes Bildmaterial und technische Informationen bereit." : "Photos and technical information are available on request."}</p>
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              <a href={site.soundCloudTrack} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"><span>SoundCloud Mix</span><ArrowUpRight className="h-5 w-5 text-primary" aria-hidden="true" /></a>
              <a href={site.spotifyProfile} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"><span>{locale === "de" ? "Spotify Profil" : "Spotify profile"}</span><ArrowUpRight className="h-5 w-5 text-primary" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border bg-card text-center">
        <div className="container-custom">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">{locale === "de" ? "Presse & Booking" : "Press & booking"}</p>
          <h2 className="font-display text-5xl md:text-7xl">{locale === "de" ? "Lass uns sprechen." : "Let's talk."}</h2>
          <p className="mx-auto mt-5 max-w-xl text-foreground/70">{locale === "de" ? "Du brauchst Material für ein Event oder möchtest SΛM RΛSH buchen? Schreib uns mit den wichtigsten Eckdaten." : "Need materials for an event or want to book SΛM RΛSH? Send us the key details."}</p>
          {site.bookingEmail ? <Button variant="neon-solid" size="lg" className="mt-8" asChild><a href={`mailto:${site.bookingEmail}?subject=${encodeURIComponent(locale === "de" ? "Anfrage SΛM RΛSH" : "Inquiry SΛM RΛSH")}`}><Mail className="mr-2 h-5 w-5" aria-hidden="true" /> {locale === "de" ? "E-Mail schreiben" : "Send an email"}</a></Button> : <Button variant="neon-solid" size="lg" className="mt-8" disabled><Mail className="mr-2 h-5 w-5" aria-hidden="true" /> {locale === "de" ? "Kontaktadresse folgt" : "Contact email coming soon"}</Button>}
        </div>
      </section>
    </main>
    <Footer />
  </div>
  );
};

export default EPK;
