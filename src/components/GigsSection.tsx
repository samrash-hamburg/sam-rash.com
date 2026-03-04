import { Calendar, MapPin } from "lucide-react";
import { SITE_CONTACT } from "@/content/site";

const GigsSection = () => {
  const bookingMailto = `mailto:${SITE_CONTACT.email}?subject=${encodeURIComponent(
    "Booking request"
  )}`;

  const tidalTicketsMailto = `mailto:${SITE_CONTACT.email}?subject=${encodeURIComponent(
    "Tickets: Tidal Rooftop Pulse 25.04."
  )}`;

  return (
    <section id="gigs" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Events
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Live <span className="text-primary text-glow">Shows</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Upcoming dates and special events.
          </p>
        </div>

        {/* Featured Event: Tidal Rooftop Pulse */}
        <div className="grid gap-8 md:grid-cols-[2fr,1fr] items-stretch mb-10">
          <div className="bg-secondary/30 border border-border rounded-lg p-6 md:p-8 flex flex-col justify-between">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                Featured Event
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                Tidal Rooftop Pulse
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  25.04.
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Rooftop – Tidal
                </span>
              </div>
              <p className="text-muted-foreground">
                High-energy rooftop night with deep techno, dub vibes and a
                panoramic city view.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={tidalTicketsMailto}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:shadow-[0_0_24px_hsl(190_100%_50%/0.4)] transition-all duration-300"
              >
                Get tickets
              </a>
              <a
                href={bookingMailto}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-border/60 text-sm font-medium text-foreground/80 hover:border-primary/60 hover:text-primary transition-all duration-300"
              >
                Booking request
              </a>
            </div>
          </div>

          <div className="bg-secondary/10 border border-dashed border-border rounded-lg p-6 flex items-center justify-center text-center text-sm text-muted-foreground">
            More dates coming soon. For club bookings, festivals or special
            shows, get in touch via booking request.
          </div>
        </div>
      </div>
    </section>
  );
};

export default GigsSection;
