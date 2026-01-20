import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";

const galleryImages = [
  {
    id: 1,
    url: gallery1,
    alt: "Studio Session",
  },
  {
    id: 2,
    url: gallery2,
    alt: "Artist Portrait",
  },
  {
    id: 3,
    url: gallery3,
    alt: "Behind the Decks",
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
