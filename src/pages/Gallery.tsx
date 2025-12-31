import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import HeroSection from "@/components/HeroSection";

const galleryImages = [
  {
    src: "/lovable-uploads/8b04be8a-b641-4609-b90e-5ce4e4565d69.png",
    alt: "White gypsophila flowers in full bloom",
    title: "Pure White"
  },
  {
    src: "/lovable-uploads/5d2bb7e0-ece2-409e-b31d-b042dd011c01.png",
    alt: "Pink gypsophila flowers",
    title: "Soft Pink"
  },
  {
    src: "/lovable-uploads/cea78f67-81e4-4fca-b863-e0a046fc8424.png",
    alt: "Purple gypsophila flowers",
    title: "Royal Purple"
  },
  {
    src: "/lovable-uploads/835aa407-56a4-4b5d-a55d-0cf87331a330.png",
    alt: "Pastel gypsophila flowers",
    title: "Pastel Dreams"
  },
  {
    src: "/lovable-uploads/5074fadb-aab5-49cf-aed1-525ab21af0ea.png",
    alt: "White gypsophila with green leaves",
    title: "Garden Fresh"
  },
  {
    src: "/lovable-uploads/07d26288-276b-4347-b70b-af9edeeca909.png",
    alt: "Sky blue gypsophila flowers",
    title: "Sky Blue"
  },
  {
    src: "/lovable-uploads/6a004e94-88cc-466d-862f-d7c28dab03d4.png",
    alt: "Colorful gypsophila bouquet",
    title: "Rainbow Mix"
  },
  {
    src: "/lovable-uploads/5c6a08fd-6412-45c7-8183-c95700dbcdc2.png",
    alt: "Red romantic gypsophila flowers",
    title: "Romantic Red"
  },
  {
    src: "/lovable-uploads/c75d0a1d-acd4-441c-b8ef-b2862c33824e.png",
    alt: "Sunny yellow gypsophila flowers",
    title: "Sunny Yellow"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrevious = () => setSelectedImage(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
  const goToNext = () => setSelectedImage(prev => prev !== null ? (prev + 1) % galleryImages.length : null);

  return (
    <>
      <AccessibilityWidget />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <HeroSection 
          title="Gallery"
          subtitle="Explore our beautiful collection of handcrafted gypsophila flowers"
        />

        {/* Gallery Grid */}
        <section className="py-16 px-4" aria-labelledby="gallery-grid-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="gallery-grid-heading" className="sr-only">Flower Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  aria-label={`View ${image.title} - ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-sans text-sm text-background font-light tracking-wider uppercase">{image.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label="Image lightbox"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-background hover:text-background/80 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-background hover:text-background/80 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={48} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-background hover:text-background/80 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={48} />
              </button>

              <motion.div
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl max-h-[80vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <p className="absolute bottom-0 left-0 right-0 text-center p-4 font-sans text-background text-lg font-light tracking-wider uppercase">
                  {galleryImages[selectedImage].title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Gallery;