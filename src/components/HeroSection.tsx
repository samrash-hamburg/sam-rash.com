import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <div className="animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-glow text-[#6db6c5]">
            Electronic Music Artist
          </p>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>SΛM RΛSH<br />
          <span className="text-glow-strong text-[#6db6c5]"></span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto animate-fade-in" style={{
        animationDelay: "0.6s"
      }}>
          Electronic Vibes. Global Energy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
        animationDelay: "0.8s"
      }}>
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">
              <Calendar className="mr-2" />
              Book Me
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#music">
              <Play className="mr-2" />
              Listen Now
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;