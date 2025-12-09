import { Music, Award, Globe, Disc3 } from "lucide-react";
const milestones = [{
  icon: Disc3,
  title: "100+ Events",
  description: "Worldwide performances"
}, {
  icon: Globe,
  title: "20+ Countries",
  description: "International tours"
}, {
  icon: Award,
  title: "5 Awards",
  description: "Industry recognition"
}, {
  icon: Music,
  title: "50+ Releases",
  description: "Original tracks & remixes"
}];
const AboutSection = () => {
  return <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center shadow-none">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-primary text-sm tracking-[0.2em] uppercase">About</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              The Artist Behind
              <br />
              <span className="text-primary text-glow">The Sound</span>
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Born in Hamburg with Jordan roots, he developed an early passion for electronic music. Active as a DJ since 2001, he has performed in various bars and clubs.
              </p>
              <p>
                 Since 2023, he has incorporated Arabic samples into his sets, giving his sound a unique and rich character. Musically, he navigates between classic house, techno, and indie dance, never hesitating to take risks and explore new sonic territories.  
              </p>
              <p>His work is driven by the motto: "A day without music is a day wasted."</p>
            </div>
          </div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-2 gap-4">
            {milestones.map((milestone, index) => <div key={milestone.title} className="bg-secondary/50 border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(190_100%_50%/0.2)] transition-all duration-300 group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <milestone.icon className="w-8 h-8 text-primary mb-4 group-hover:animate-glow-pulse bg-secondary border-[#be2727]" />
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;