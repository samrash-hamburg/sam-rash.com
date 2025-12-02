import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800",
    alt: "DJ Performance at Festival",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=800",
    alt: "Club Night Event",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800",
    alt: "Behind the Decks",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?w=800",
    alt: "Festival Crowd",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",
    alt: "Studio Session",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",
    alt: "Concert Lights",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
    );
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Behind The <span className="text-primary text-glow">Scenes</span>
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-display text-lg">View</span>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-primary rounded-lg shadow-[0_0_20px_hsl(190_100%_50%/0.4)]" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-foreground/80 hover:text-primary p-2 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-4 text-foreground/80 hover:text-primary p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={40} />
            </button>

            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg neon-border"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 text-foreground/80 hover:text-primary p-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
