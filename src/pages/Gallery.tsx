import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import eventShowcase from '@/assets/event-showcase.jpeg';
import { useLang } from '@/i18n/LanguageContext';

import petalLightPink from '@/assets/petal-light-pink.png';
import petalDarkPink from '@/assets/petal-dark-pink.png';
import petalWhite from '@/assets/petal-white.png';
import petalPurple from '@/assets/petal-purple.png';
import petalOrange from '@/assets/petal-orange.png';

import bouquetWhite from '@/assets/bouquet-white.png';
import bouquetPink from '@/assets/bouquet-pink.png';
import bouquetPurple from '@/assets/bouquet-purple.png';
import bouquetYellow from '@/assets/bouquet-yellow.png';
import bouquetBlue from '@/assets/bouquet-blue.png';

const petals = [
  { name: 'White', petal: petalWhite, bouquet: bouquetWhite },
  { name: 'Pink', petal: petalLightPink, bouquet: bouquetPink },
  { name: 'Light Pink', petal: petalDarkPink, bouquet: bouquetPink },
  { name: 'Orange', petal: petalOrange, bouquet: bouquetYellow },
  { name: 'Purple', petal: petalPurple, bouquet: bouquetPurple },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const Gallery = () => {
  const { t } = useLang();
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t.gallery.title}</h1>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 bg-primary/40" />
                <Sparkles size={16} className="text-primary" />
                <span className="h-px w-8 bg-primary/40" />
              </div>
              <p className="font-sans text-lg text-muted-foreground font-light max-w-xl mx-auto">
                {t.gallery.subtitle}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-10 max-w-4xl mx-auto">
                {petals.map((p, i) => (
                  <motion.button
                    key={p.name}
                    variants={fadeUp}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    // onClick={() => setSelected(i)}
                    className="group flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none outline-none"
                    aria-label={`View ${p.name} bouquet`}
                  >
                    <motion.div
                      className="w-full aspect-square flex items-center justify-center"
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <img
                        src={p.petal}
                        alt={`${p.name} gypsophila petal`}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </motion.div>
                    <span className="font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {t.gallery.colors[p.name] ?? p.name}
                    </span>
                  </motion.button>
                ))}
              </div>
              <p className="font-sans text-xs text-muted-foreground/60 mt-6">{t.gallery.custom}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                { name: t.gallery.mirabellaT, description: t.gallery.mirabellaD },
                { name: t.gallery.excellenceT, description: t.gallery.excellenceD },
              ].map((product, i) => (
                <motion.div
                  key={product.name}
                  variants={fadeUp}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{product.name}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </motion.div>
              ))}
            </div>


            {/* Event Showcase */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-20"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-3">{t.gallery.eventTitle}</h2>
              <p className="font-sans text-muted-foreground text-center mb-8 max-w-lg mx-auto">
                {t.gallery.eventSubtitle}
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={eventShowcase}
                  alt="Luxury event decorated with Hadad gypsophila flowers"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${petals[selected].name} bouquet`}
          >
            <motion.div
              key={selected}
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative bg-background rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={petals[selected].bouquet}
                  alt={`${petals[selected].name} gypsophila bouquet`}
                  className="w-full max-h-[50vh] object-contain mb-6"
                />
                <h3 className="font-serif text-2xl text-foreground mb-2">{petals[selected].name}</h3>
                <p className="font-sans text-sm text-muted-foreground text-center">
                  Premium gypsophila bouquet in {petals[selected].name.toLowerCase()}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
