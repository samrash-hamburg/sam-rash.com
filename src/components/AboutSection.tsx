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
                Sam Kharashfeh is an internationally acclaimed DJ and electronic music
                producer whose sonic journey blends the raw energy of underground techno
                with the melodic beauty of progressive house.
              </p>
              <p>
                Born with an innate passion for electronic music, Sam has spent over a
                decade crafting his unique sound—one that transcends borders and unites
                dance floors across the globe. From the legendary clubs of Berlin to
                the beaches of Ibiza, his sets are known for their hypnotic builds,
                explosive drops, and seamless transitions.
              </p>
              <p>
                Influenced by pioneers like Sven Väth, Tale Of Us, and Amelie Lens,
                Sam's style is characterized by driving basslines, ethereal synths, and
                a deep connection to the crowd. Every performance is a journey—an
                invitation to lose yourself in sound.
              </p>
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