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
          {/* Spotify */}
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
            <h3 className="font-display text-2xl text-foreground mb-4 flex items-center gap-2">
              <span className="text-[#1DB954]">●</span> Spotify
            </h3>
            <p className="text-muted-foreground">
              Open Spotify to listen to the latest releases, playlists, and sets.
            </p>
            <Button variant="ghost" className="mt-4 text-muted-foreground" asChild>
              <a
                href="https://open.spotify.com/playlist/2AYlkRaFHWHQnzevNTE20H?si=dLGEGraPSKunhYG9iXmgag"
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
            <div className="rounded-lg overflow-hidden bg-secondary">

              <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2262845267&color=%230890b2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <div ><a href="https://soundcloud.com/samrash_official" title="SΛM RΛSH" target="_blank" >SΛM RΛSH</a> · <a href="https://soundcloud.com/samrash_official/deep-techno-journey-acid-dub" title="Deep Techno Journey – Acid, Dub &amp; Detroit Soul" target="_blank" >Deep Techno Journey – Acid, Dub &amp; Detroit Soul</a></div>
            </div>
            <Button variant="ghost" className="mt-4 text-muted-foreground" asChild>
              <a
                href="https://on.soundcloud.com/klIrqY6Psx2dLinBWE"
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
          <div className="aspect-video rounded-lg overflow-hidden bg-secondary max-w-3xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1GC27AipipE"
              title="Live Set"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
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
