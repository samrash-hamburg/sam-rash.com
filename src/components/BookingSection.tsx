import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONTACT } from "@/content/site";

const BookingSection = () => {
  const mailto = `mailto:${SITE_CONTACT.email}?subject=${encodeURIComponent(
    SITE_CONTACT.emailSubject
  )}`;

  return (
    <section id="booking" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Booking
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Email{" "}
            <span className="text-primary text-glow">for booking</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            For booking requests, interviews, or anything else, email me directly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary/30 border border-border rounded-lg p-6 md:p-8 text-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="neon-solid" size="lg" asChild>
                <a href={mailto}>
                  <Mail className="mr-2 w-5 h-5" />
                  Send email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#epk">View EPK</a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground/70 mt-4">
              Tip: Include date, city/venue, and time window so I can reply faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

