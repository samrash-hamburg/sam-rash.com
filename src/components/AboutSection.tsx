import samPortrait from "@/assets/sam-portrait.png";
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

          {/* Portrait Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl -z-10" />
              <img
                src={samPortrait}
                alt="Portrait of Sam Rash"
                className="w-full h-auto rounded-3xl object-cover border border-border shadow-[0_0_40px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;