import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import eventShowcase from '@/assets/event-showcase.jpeg';

import petalWhite from '@/assets/petal-white.png';
import petalPurple from '@/assets/petal-purple.png';

import yellowPetal from '@/assets/yellow.png.asset.json';
import bluePetal from '@/assets/blue.png.asset.json';
import lightBluePetal from '@/assets/light_blue.png.asset.json';
import lightPurplePetal from '@/assets/light_purple.png.asset.json';
import redPetal from '@/assets/red.png.asset.json';
import pinkPetal from '@/assets/pink.png.asset.json';
import lightPinkPetal from '@/assets/light_pink.png.asset.json';
import orangePetal from '@/assets/orange.png.asset.json';
import turquoisePetal from '@/assets/turquoise-clean.png';
import greenPetal from '@/assets/green.png.asset.json';

import yellowBouquet from '@/assets/yellow_2.png.asset.json';
import purpleBouquet from '@/assets/purple_2.png.asset.json';
import lightPurpleBouquet from '@/assets/light_purple_2.png.asset.json';
import redBouquet from '@/assets/red_2.png.asset.json';
import pinkBouquet from '@/assets/pink_2.png.asset.json';
import turquoiseBouquet from '@/assets/turquoise_2.png.asset.json';
import whiteBouquet from '@/assets/white_2.png.asset.json';
import blueBouquet from '@/assets/blue_2.png.asset.json';
import greenBouquet from '@/assets/green_2.png.asset.json';
import lightPinkBouquet from '@/assets/light_pink_2.png.asset.json';

const petals = [
  { name: 'White', petal: petalWhite, bouquet: whiteBouquet.url },
  { name: 'Yellow', petal: yellowPetal.url, bouquet: yellowBouquet.url },
  { name: 'Orange', petal: orangePetal.url, bouquet: yellowBouquet.url },
  { name: 'Pink', petal: pinkPetal.url, bouquet: pinkBouquet.url },
  { name: 'Light Pink', petal: lightPinkPetal.url, bouquet: lightPinkBouquet.url },
  { name: 'Red', petal: redPetal.url, bouquet: redBouquet.url },
  { name: 'Purple', petal: petalPurple, bouquet: purpleBouquet.url },
  { name: 'Light Purple', petal: lightPurplePetal.url, bouquet: lightPurpleBouquet.url },
  { name: 'Blue', petal: bluePetal.url, bouquet: blueBouquet.url },
  { name: 'Light Blue', petal: lightBluePetal.url, bouquet: lightPurpleBouquet.url },
  { name: 'Turquoise', petal: turquoisePetal, bouquet: turquoiseBouquet.url },
  { name: 'Green', petal: greenPetal.url, bouquet: greenBouquet.url },
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
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Products</h1>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 bg-primary/40" />
                <Sparkles size={16} className="text-primary" />
                <span className="h-px w-8 bg-primary/40" />
              </div>
              <p className="font-sans text-lg text-muted-foreground font-light max-w-xl mx-auto">
                Available in any color of your choice — here are some of our popular options
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-10 max-w-4xl mx-auto">
                {petals.map((p, i) => (
                  <motion.button
                    key={p.name}
                    variants={fadeUp}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    onClick={() => setSelected(i)}
                    className="group flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none outline-none"
                    aria-label={`View ${p.name} bouquet`}
                  >
                    <motion.div
                      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center"
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <img
                        src={p.petal}
                        alt={`${p.name} gypsophila petal`}
                        className="w-full h-full object-cover drop-shadow-md"
                      />
                    </motion.div>
                    <span className="font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {p.name}
                    </span>
                  </motion.button>
                ))}
              </div>
              <p className="font-sans text-xs text-muted-foreground/60 mt-6">Custom colors available upon request</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                { name: 'Mirabella', description: 'A premium gypsophila variety known for its dense, full flower heads and exceptional vase life.' },
                { name: 'Excellence', description: 'A top-tier gypsophila variety featuring large, elegant blooms with superior stem strength.' },
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
              <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-3">Our Flowers in Action</h2>
              <p className="font-sans text-muted-foreground text-center mb-8 max-w-lg mx-auto">
                A stunning event decorated with our premium gypsophila
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
              className="relative bg-background rounded-3xl pt-2 px-4 pb-4 md:pt-3 md:px-6 md:pb-6 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-4 md:top-3 md:right-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={petals[selected].bouquet}
                  alt={`${petals[selected].name} gypsophila bouquet`}
                  className="w-full max-h-[70vh] object-contain mb-4"
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
