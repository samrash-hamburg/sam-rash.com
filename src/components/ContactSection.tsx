import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Instagram,
  Youtube,
  Music2,
  Download,
  Send,
} from "lucide-react";

const SpotifyIcon = () => (
  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", url: "https://youtube.com" },
  { icon: Music2, label: "SoundCloud", url: "https://soundcloud.com" },
  { icon: SpotifyIcon, label: "Spotify", url: "https://open.spotify.com/user/samkharashfeh" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventDate: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      eventDate: "",
      location: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Book <span className="text-primary text-glow">Sam</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to bring the energy to your next event? Fill out the form below
            or connect on social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Event Date
                </label>
                <Input
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Location
                </label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="bg-secondary border-border focus:border-primary"
                  placeholder="City, Venue"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-secondary border-border focus:border-primary resize-none"
                placeholder="Tell me about your event..."
              />
            </div>

            <Button
              type="submit"
              variant="neon-solid"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Social & EPK */}
          <div className="space-y-8">
            {/* Social Links */}
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-secondary/30 border border-border rounded-lg hover:border-primary/50 hover:shadow-[0_0_20px_hsl(190_100%_50%/0.2)] transition-all duration-300 group"
                  >
                    <social.icon className="w-6 h-6 text-primary group-hover:animate-glow-pulse" />
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>


            {/* EPK Download */}
            <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border rounded-lg p-6">
              <h3 className="font-display text-2xl text-foreground mb-2">
                Electronic Press Kit
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Download the full EPK including bio, high-res photos, tech rider,
                and stage plot.
              </p>
              <Button variant="neon" asChild>
                <a href="/epk">
                  <Download className="mr-2 w-4 h-4" />
                  EPK ansehen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
