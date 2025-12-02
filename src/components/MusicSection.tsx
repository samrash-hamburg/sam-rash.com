import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicSection = () => {
  return (
    <section id="music" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Music
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Latest <span className="text-primary text-glow">Releases</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Spotify Embed */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-2">
              <span className="text-[#1DB954]">●</span> Spotify
            </h3>
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <iframe
                src="https://open.spotify.com/embed/artist/4NHQUGzhtTLFvgF5SZesLK?utm_source=generator&theme=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <Button variant="ghost" className="mt-4 text-muted-foreground" asChild>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Spotify <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* SoundCloud Embed */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-2">
              <span className="text-[#FF5500]">●</span> SoundCloud
            </h3>
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <iframe
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/2&color=%2300d4ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
            <Button variant="ghost" className="mt-4 text-muted-foreground" asChild>
              <a
                href="https://soundcloud.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in SoundCloud <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* YouTube Section */}
        <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
          <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-2">
            <span className="text-[#FF0000]">●</span> YouTube - Live Sets & Videos
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Live Set"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="DJ Set"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
          <Button variant="ghost" className="mt-4 text-muted-foreground" asChild>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit YouTube Channel <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
