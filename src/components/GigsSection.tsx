import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingGigs = [
  {
    id: 1,
    name: "Warehouse Techno Night",
    venue: "Berghain, Berlin",
    date: "2025-01-15",
    time: "23:00",
    ticketUrl: "#",
  },
  {
    id: 2,
    name: "Sunset Sessions",
    venue: "Ushuaïa, Ibiza",
    date: "2025-02-20",
    time: "18:00",
    ticketUrl: "#",
  },
  {
    id: 3,
    name: "Underground Movement",
    venue: "Fabric, London",
    date: "2025-03-08",
    time: "22:00",
    ticketUrl: "#",
  },
  {
    id: 4,
    name: "Electric Dreams Festival",
    venue: "Amsterdam Arena",
    date: "2025-04-12",
    time: "20:00",
    ticketUrl: "#",
  },
];

const pastGigs = [
  { name: "Awakenings Festival", venue: "Amsterdam", date: "2024" },
  { name: "DC10", venue: "Ibiza", date: "2024" },
  { name: "Time Warp", venue: "Mannheim", date: "2024" },
  { name: "Printworks", venue: "London", date: "2023" },
];

const GigsSection = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section id="gigs" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Events
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Upcoming <span className="text-primary text-glow">Shows</span>
          </h2>
        </div>

        {/* Upcoming Gigs */}
        <div className="space-y-4 mb-16">
          {upcomingGigs.map((gig, index) => (
            <div
              key={gig.id}
              className="group bg-secondary/30 border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(190_100%_50%/0.15)] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                    {gig.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {gig.venue}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {formatDate(gig.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-primary" />
                      {gig.time}
                    </span>
                  </div>
                </div>
                <Button variant="neon" size="sm" asChild>
                  <a href={gig.ticketUrl} target="_blank" rel="noopener noreferrer">
                    Get Tickets <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Gigs */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6 text-center">
            Past Shows
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pastGigs.map((gig, index) => (
              <div
                key={index}
                className="bg-secondary/20 border border-border/50 rounded-lg p-4 text-center"
              >
                <p className="font-display text-lg text-foreground/80">{gig.name}</p>
                <p className="text-muted-foreground text-sm">
                  {gig.venue} • {gig.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GigsSection;
