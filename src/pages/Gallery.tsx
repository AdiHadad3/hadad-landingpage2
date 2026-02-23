import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryImages = [
  { src: '/lovable-uploads/8b04be8a-b641-4609-b90e-5ce4e4565d69.png', alt: 'White gypsophila flowers in full bloom', title: 'Pure White' },
  { src: '/lovable-uploads/5d2bb7e0-ece2-409e-b31d-b042dd011c01.png', alt: 'Pink gypsophila flowers', title: 'Soft Pink' },
  { src: '/lovable-uploads/cea78f67-81e4-4fca-b863-e0a046fc8424.png', alt: 'Purple gypsophila flowers', title: 'Royal Purple' },
  { src: '/lovable-uploads/835aa407-56a4-4b5d-a55d-0cf87331a330.png', alt: 'Pastel gypsophila flowers', title: 'Pastel Dreams' },
  { src: '/lovable-uploads/5074fadb-aab5-49cf-aed1-525ab21af0ea.png', alt: 'White gypsophila with green leaves', title: 'Garden Fresh' },
  { src: '/lovable-uploads/07d26288-276b-4347-b70b-af9edeeca909.png', alt: 'Sky blue gypsophila flowers', title: 'Sky Blue' },
  { src: '/lovable-uploads/6a004e94-88cc-466d-862f-d7c28dab03d4.png', alt: 'Colorful gypsophila bouquet', title: 'Rainbow Mix' },
  { src: '/lovable-uploads/5c6a08fd-6412-45c7-8183-c95700dbcdc2.png', alt: 'Red romantic gypsophila flowers', title: 'Romantic Red' },
  { src: '/lovable-uploads/c75d0a1d-acd4-441c-b8ef-b2862c33824e.png', alt: 'Sunny yellow gypsophila flowers', title: 'Sunny Yellow' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const goTo = (dir: -1 | 1) =>
    setSelected((prev) =>
      prev !== null ? (prev + dir + galleryImages.length) % galleryImages.length : null
    );

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Gallery</h1>
              <p className="font-sans text-base text-muted-foreground font-light">
                Explore our beautiful collection of handcrafted gypsophila
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
              {galleryImages.map((img, i) => (
                <motion.button
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onClick={() => setSelected(i)}
                  className="group relative aspect-square overflow-hidden cursor-pointer"
                  aria-label={`View ${img.title}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="absolute bottom-4 left-4 font-sans text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {img.title}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Image lightbox"
            >
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-white/80 hover:text-white cursor-pointer" aria-label="Close">
                <X size={32} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); goTo(-1); }} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white cursor-pointer" aria-label="Previous">
                <ChevronLeft size={40} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); goTo(1); }} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white cursor-pointer" aria-label="Next">
                <ChevronRight size={40} />
              </button>

              <motion.div
                key={selected}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="max-w-4xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selected].src}
                  alt={galleryImages[selected].alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <p className="text-center mt-4 font-sans text-white/80 text-sm tracking-wide">
                  {galleryImages[selected].title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
