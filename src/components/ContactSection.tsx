import { ArrowUpRight, Mail, Music2, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { useLocale, useLocalizedPath } from "@/lib/locale";

const ContactSection = () => {
  const locale = useLocale();
  const path = useLocalizedPath();
  const bookingMail = site.bookingEmail ? `mailto:${site.bookingEmail}?subject=${encodeURIComponent(locale === "de" ? "Booking-Anfrage SΛM RΛSH" : "Booking inquiry SΛM RΛSH")}` : null;
  return (
  <section id="contact" className="section-padding border-t border-border bg-card">
    <div className="container-custom">
      <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">{locale === "de" ? "Booking & Kontakt" : "Booking & Contact"}</p>
          <h2 className="font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
            {locale === "de" ? <>Lass uns etwas<br /><span className="text-primary text-glow">Bewegendes</span><br />machen.</> : <>Let's make<br /><span className="text-primary text-glow">something</span><br />move.</>}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
            {locale === "de" ? "Clubnacht, Festival oder privates Event? " : "Club night, festival or private event? "}{site.bookingEmail ? (locale === "de" ? "Schreib direkt mit Datum, Ort und deiner Idee. Wir melden uns persönlich zurück." : "Send your date, location and idea. We'll get back to you personally.") : (locale === "de" ? "Die neue Booking-Adresse wird gerade ergänzt. Hör bis dahin den aktuellen Mix und sieh dir die Künstlerinfos an." : "The new booking address is being added. In the meantime, listen to the latest mix and explore the artist profile.")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {bookingMail ? (
              <Button variant="neon-solid" size="lg" asChild>
                <a href={bookingMail}><Mail className="mr-2 h-5 w-5" aria-hidden="true" /> {locale === "de" ? "Booking anfragen" : "Request booking"}</a>
              </Button>
            ) : (
              <Button variant="neon-solid" size="lg" disabled>
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" /> {locale === "de" ? "Booking-Adresse folgt" : "Booking email coming soon"}
              </Button>
            )}
            <Button variant="neon" size="lg" asChild>
              <Link to={path("/artist-profile")}><FileText className="mr-2 h-5 w-5" aria-hidden="true" />Artist Profile</Link>
            </Button>
          </div>
          {site.bookingEmail ? <p className="mt-5 text-sm text-muted-foreground">{locale === "de" ? "Oder direkt an " : "Or email "}<a className="text-primary underline-offset-4 hover:underline" href={`mailto:${site.bookingEmail}`}>{site.bookingEmail}</a></p> : <p className="mt-5 text-sm text-muted-foreground">{locale === "de" ? "Die neue Kontaktadresse wird hier ergänzt." : "The new contact address will appear here."}</p>}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-6 md:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{locale === "de" ? "Mehr von SΛM RΛSH" : "More from SΛM RΛSH"}</p>
          <h3 className="font-display text-3xl text-foreground">Sound & Updates</h3>
          <div className="mt-6 space-y-3">
            <a href={site.soundCloudTrack} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
              <span className="flex items-center gap-3"><Music2 className="h-5 w-5 text-primary" aria-hidden="true" /><span>{locale === "de" ? "Aktuellen Mix hören" : "Listen to the latest mix"}</span></span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
            </a>
            <a href={site.spotifyProfile} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50">
              <span>{locale === "de" ? "Spotify-Profil ansehen" : "View Spotify profile"}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" aria-hidden="true" />
            </a>
            <Link to={path("/datenschutz")} className="block pt-3 text-xs text-muted-foreground transition-colors hover:text-primary">{locale === "de" ? "Datenschutzhinweise" : "Privacy information"}</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ContactSection;
