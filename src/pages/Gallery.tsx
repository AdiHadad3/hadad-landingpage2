import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const galleryImages = [
  {
    src: "/lovable-uploads/8b04be8a-b641-4609-b90e-5ce4e4565d69.png",
    alt: "White gypsophila flowers",
    title: "Pure White Elegance"
  },
  {
    src: "/lovable-uploads/5d2bb7e0-ece2-409e-b31d-b042dd011c01.png",
    alt: "Pink gypsophila flowers",
    title: "Soft Pink Blush"
  },
  {
    src: "/lovable-uploads/cea78f67-81e4-4fca-b863-e0a046fc8424.png",
    alt: "Purple gypsophila flowers",
    title: "Royal Purple Dreams"
  },
  {
    src: "/lovable-uploads/835aa407-56a4-4b5d-a55d-0cf87331a330.png",
    alt: "Pastel gypsophila flowers",
    title: "Pastel Paradise"
  },
  {
    src: "/lovable-uploads/5074fadb-aab5-49cf-aed1-525ab21af0ea.png",
    alt: "White gypsophila with green leaves",
    title: "Garden Fresh"
  },
  {
    src: "/lovable-uploads/07d26288-276b-4347-b70b-af9edeeca909.png",
    alt: "Sky blue gypsophila flowers",
    title: "Sky Blue Serenity"
  },
  {
    src: "/lovable-uploads/6a004e94-88cc-466d-862f-d7c28dab03d4.png",
    alt: "Colorful gypsophila bouquet",
    title: "Rainbow Collection"
  },
  {
    src: "/lovable-uploads/5c6a08fd-6412-45c7-8183-c95700dbcdc2.png",
    alt: "Red romantic gypsophila flowers",
    title: "Romantic Red"
  },
  {
    src: "/lovable-uploads/c75d0a1d-acd4-441c-b8ef-b2862c33824e.png",
    alt: "Sunny yellow gypsophila flowers",
    title: "Sunny Delight"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  return (
    <>
      <AccessibilityWidget />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-soft py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore our collection of handcrafted gypsophila flowers in stunning colors
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-4" aria-label="Flower gallery">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-square overflow-hidden rounded-2xl shadow-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`View ${image.title}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </motion.button>
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
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label="Image lightbox"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close lightbox"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                className="absolute left-4 text-white p-3 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="max-w-4xl max-h-[80vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="text-center mt-4">
                  <h3 className="text-white text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
                  <p className="text-white/70 mt-1">{selectedImage + 1} / {galleryImages.length}</p>
                </div>
              </motion.div>

              <button
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                className="absolute right-4 text-white p-3 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Gallery;
