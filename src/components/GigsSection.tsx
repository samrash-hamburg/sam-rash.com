import { Calendar } from "lucide-react";

const GigsSection = () => {
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
            Für aktuelle Termine und Booking-Anfragen kontaktiere mich direkt.
          </p>
        </div>

        <div className="text-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)] transition-all duration-300 font-medium"
          >
            <Calendar className="w-5 h-5" />
            Booking Anfrage
          </a>
        </div>
      </div>
    </section>
  );
};

export default GigsSection;
