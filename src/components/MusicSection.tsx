import { useState } from "react";
import { ExternalLink, Headphones, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { useLocale, useLocalizedPath } from "@/lib/locale";

const soundCloudPlayer = "https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F2262845267&show_artwork=true&auto_play=false";

const MusicSection = () => {
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const [spotifyLoaded, setSpotifyLoaded] = useState(false);
  const locale = useLocale();
  const path = useLocalizedPath();

  return (
    <section id="music" className="section-padding">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">{locale === "de" ? "Musik" : "Music"}</p>
          <h2 className="font-display text-4xl text-foreground md:text-5xl lg:text-6xl">
            {locale === "de" ? "Aktuelle " : "Latest "}<span className="text-primary text-glow">{locale === "de" ? "Musik" : "Releases"}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{locale === "de" ? "Ein Mix aus Acid, Dub und Detroit Soul – direkt hier hören oder auf deiner bevorzugten Plattform öffnen." : "A mix of acid, dub and Detroit soul. Listen here or open it on your favorite platform."}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30 md:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#ff7b39]">SoundCloud · DJ Mix</p>
                <h3 className="font-display text-3xl text-foreground">Deep Techno Journey</h3>
              </div>
              {playerLoaded && (
                <Button variant="ghost" size="sm" onClick={() => setPlayerLoaded(false)}>
                  <X className="mr-2 h-4 w-4" aria-hidden="true" /> {locale === "de" ? "Player schließen" : "Close player"}
                </Button>
              )}
            </div>

            <div className="h-[352px] overflow-hidden rounded-lg border border-border bg-gradient-to-br from-[#0b1624] via-[#103b52] to-[#081016]">
              {playerLoaded ? (
                <iframe
                  title="SoundCloud: Deep Techno Journey – Acid, Dub & Detroit Soul by SΛM RΛSH"
                  src={soundCloudPlayer}
                  width="100%"
                  height="100%"
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <div className="rounded-full border border-primary/40 bg-primary/10 p-5 text-primary"><Headphones size={32} aria-hidden="true" /></div>
                  <p className="max-w-md text-sm leading-relaxed text-foreground/75">{locale === "de" ? "Der Player verbindet dich erst nach deinem Klick mit SoundCloud. Dabei können Daten an SoundCloud übertragen und Cookies gesetzt werden." : "The player connects to SoundCloud only after you click. SoundCloud may receive data and set cookies."}</p>
                  <Button variant="neon-solid" onClick={() => setPlayerLoaded(true)}>
                    <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" /> {locale === "de" ? "Player laden" : "Load player"}
                  </Button>
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <a href={site.soundCloudTrack} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                {locale === "de" ? "Auf SoundCloud öffnen" : "Open on SoundCloud"} <ExternalLink size={15} aria-hidden="true" />
              </a>
              <a href={path("/datenschutz")} className="text-xs text-muted-foreground hover:text-primary">{locale === "de" ? "Datenschutzhinweise" : "Privacy information"}</a>
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-[#15281e] via-card to-card p-5 transition-colors hover:border-[#1DB954]/40 md:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1DB954]">Spotify · Playlist</p>
                <h3 className="font-display text-3xl text-foreground">SΛM RΛSH</h3>
              </div>
              {spotifyLoaded && <Button variant="ghost" size="sm" onClick={() => setSpotifyLoaded(false)}>
                <X className="mr-2 h-4 w-4" aria-hidden="true" />{locale === "de" ? "Spotify-Player schließen" : "Close Spotify player"}
              </Button>}
            </div>
            <div className="h-[352px] overflow-hidden rounded-lg border border-border bg-background/40">
              {spotifyLoaded ? <iframe
                title="Spotify: SΛM RΛSH Playlist"
                src={`${site.spotifyPlaylist.replace("/playlist/", "/embed/playlist/")}?theme=0`}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="border-0"
              /> : <div className="flex h-full flex-col items-center justify-center gap-4 px-5 text-center">
                <Headphones className="h-10 w-10 text-[#1DB954]" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-foreground/75">{locale === "de" ? "Die Playlist verbindet dich erst nach deinem Klick mit Spotify. Dabei können Daten an Spotify übertragen und Cookies gesetzt werden." : "The playlist connects to Spotify only after you click. Spotify may receive data and set cookies."}</p>
                <Button variant="neon-solid" onClick={() => setSpotifyLoaded(true)}>
                  <ShieldCheck className="mr-2 h-4 w-4" aria-hidden="true" />{locale === "de" ? "Spotify-Player laden" : "Load Spotify player"}
                </Button>
              </div>}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <a href={site.spotifyPlaylist} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-[#1DB954] hover:underline">
                {locale === "de" ? "Playlist auf Spotify öffnen" : "Open playlist on Spotify"}<ExternalLink size={15} aria-hidden="true" />
              </a>
              <a href={path("/datenschutz")} className="text-xs text-muted-foreground hover:text-primary">{locale === "de" ? "Datenschutzhinweise" : "Privacy information"}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
