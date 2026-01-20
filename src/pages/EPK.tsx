import { Button } from "@/components/ui/button";
import { 
  Download, 
  FileText, 
  Image as ImageIcon, 
  Music, 
  Settings,
  ArrowLeft,
  Mail,
  MapPin,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";

const epkDownloads = [
  {
    title: "Vollständiges EPK",
    description: "Komplettes Press Kit mit Bio, Fotos, Tech Rider & Stage Plot",
    icon: FileText,
    fileName: "SAM_RASH_EPK_Complete.zip",
    size: "45 MB",
    featured: true,
  },
  {
    title: "Biografie",
    description: "Kurz- und Langversion der Künstlerbiografie",
    icon: FileText,
    fileName: "SAM_RASH_Biography.pdf",
    size: "2 MB",
  },
  {
    title: "Pressefotos",
    description: "Hochauflösende Fotos für Print und Web",
    icon: ImageIcon,
    fileName: "SAM_RASH_Press_Photos.zip",
    size: "25 MB",
  },
  {
    title: "Tech Rider",
    description: "Technische Anforderungen und Equipment-Liste",
    icon: Settings,
    fileName: "SAM_RASH_Tech_Rider.pdf",
    size: "1.5 MB",
  },
  {
    title: "Stage Plot",
    description: "Bühnenaufbau und DJ-Setup-Diagramm",
    icon: MapPin,
    fileName: "SAM_RASH_Stage_Plot.pdf",
    size: "800 KB",
  },
  {
    title: "DJ Mix Demos",
    description: "Ausgewählte DJ-Sets und Mixe als Audio-Dateien",
    icon: Headphones,
    fileName: "SAM_RASH_DJ_Mixes.zip",
    size: "120 MB",
  },
];

const artistStats = [
  { label: "Years Active", value: "8+" },
  { label: "Live Shows", value: "200+" },
  { label: "Countries", value: "15+" },
  { label: "Monthly Listeners", value: "50K+" },
];

const EPK = () => {
  const handleDownload = (fileName: string) => {
    // In production, this would link to actual files
    // For now, we show a toast or trigger a download
    const link = document.createElement('a');
    link.href = `/downloads/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container-custom flex items-center justify-between h-16 px-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Zurück zur Website</span>
          </Link>
          <Link to="/" className="font-display text-2xl text-foreground">
            SΛM <span className="text-primary text-glow">RΛSH</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in">
              Electronic Press Kit
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
              SΛM <span className="text-primary text-glow">RΛSH</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Alles was Sie für Ihre Veranstaltung, Presseartikel oder Promotion benötigen. 
              Laden Sie hochauflösende Materialien herunter.
            </p>
          </div>

          {/* Artist Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
            {artistStats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300"
              >
                <p className="font-display text-3xl md:text-4xl text-primary text-glow">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 px-4 md:px-8 bg-card">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
            Downloads
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {epkDownloads.map((item) => (
              <div
                key={item.title}
                className={`relative bg-secondary/30 border rounded-lg p-6 transition-all duration-300 hover:shadow-[0_0_30px_hsl(190_100%_50%/0.15)] group ${
                  item.featured 
                    ? 'border-primary/50 md:col-span-2 lg:col-span-1' 
                    : 'border-border hover:border-primary/30'
                }`}
              >
                {item.featured && (
                  <span className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Empfohlen
                  </span>
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${item.featured ? 'bg-primary/20' : 'bg-secondary'}`}>
                    <item.icon className={`w-6 h-6 ${item.featured ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'} transition-colors`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {item.description}
                    </p>
                    <p className="text-xs text-muted-foreground/60 mb-4">
                      Dateigröße: {item.size}
                    </p>
                    
                    <Button
                      variant={item.featured ? "neon" : "outline"}
                      size="sm"
                      onClick={() => handleDownload(item.fileName)}
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Preview Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
                Biografie
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Über SΛM RΛSH
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SΛM RΛSH ist ein aufstrebender DJ und Produzent aus Deutschland, 
                  der sich durch seinen einzigartigen Sound zwischen Deep House, 
                  Melodic Techno und Progressive House auszeichnet.
                </p>
                <p>
                  Mit über 200 Live-Auftritten in 15 Ländern hat er sich einen Namen 
                  in der elektronischen Musikszene gemacht. Seine energiegeladenen 
                  Sets und melodischen Produktionen begeistern ein internationales Publikum.
                </p>
                <p>
                  Für Booking-Anfragen, Interviews oder weitere Informationen 
                  kontaktieren Sie uns gerne.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="neon" asChild>
                  <Link to="/#contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Booking Anfrage
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/#music">
                    <Music className="w-4 h-4 mr-2" />
                    Musik hören
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary rounded-lg overflow-hidden border border-border">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground/50 text-sm">Pressefoto</p>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-8 bg-card border-t border-border">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Fragen zum EPK?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Benötigen Sie spezielle Materialien oder haben Sie Fragen? 
            Kontaktieren Sie uns für individuelle Anfragen.
          </p>
          <Button variant="neon" size="lg" asChild>
            <Link to="/#contact">
              <Mail className="w-5 h-5 mr-2" />
              Kontakt aufnehmen
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container-custom text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SΛM RΛSH. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EPK;