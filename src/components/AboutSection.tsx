import { Music, Globe, Disc3, Headphones } from "lucide-react";
import { useLocale } from "@/lib/locale";
const AboutSection = () => {
  const locale = useLocale();
  const milestones = [{ icon: Disc3, title: "Hamburg", description: locale === "de" ? "Künstlerische Wurzeln" : "Creative roots" },
    { icon: Globe, title: locale === "de" ? "Orientalische Samples" : "Orient Samples", description: locale === "de" ? "Neue Klangfarben seit 2023" : "New textures since 2023" },
    { icon: Headphones, title: "House & Techno", description: locale === "de" ? "Treibende Sets" : "Driving sets" },
    { icon: Music, title: "Organic House", description: locale === "de" ? "Offen für neue Sounds" : "Open to new sounds" }];
  return <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center shadow-none">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-primary text-sm tracking-[0.2em] uppercase">{locale === "de" ? "Über mich" : "About"}</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              {locale === "de" ? "Der Künstler hinter" : "The Artist Behind"}
              <br />
              <span className="text-primary text-glow">{locale === "de" ? "dem Sound" : "The Sound"}</span>
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                {locale === "de" ? "In Hamburg geboren und mit jordanischen Wurzeln, entdeckte er früh seine Leidenschaft für elektronische Musik. Seit 2001 legt er als DJ in Bars und Clubs auf." : "Born in Hamburg with Jordanian roots, he developed an early passion for electronic music. Active as a DJ since 2001, he has performed in various bars and clubs."}
              </p>
              <p>
                {locale === "de" ? "Seit 2023 baut er orientalische Samples in seine Sets ein. Sein Sound bewegt sich zwischen Classic House, Techno und Organic House und bleibt offen für neue Klangwelten." : "Since 2023, he has incorporated Orient samples into his sets, giving his sound a distinct character. He moves between classic house, techno and organic house while exploring new sounds."}
              </p>
              <p>{locale === "de" ? "Sein Motto: „Ein Tag ohne Musik ist ein verlorener Tag.“" : 'His motto: “A day without music is a day wasted.”'}</p>
            </div>
          </div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-2 gap-4">
            {milestones.map((milestone, index) => <div key={milestone.title} className="bg-secondary/50 border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(190_100%_50%/0.2)] transition-all duration-300 group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <milestone.icon className="w-8 h-8 text-primary mb-4 group-hover:animate-glow-pulse" />
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
