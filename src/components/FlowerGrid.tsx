import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import flowerWhite from '@/assets/flower-white.png';
import flowerPurple from '@/assets/flower-purple.png';
import flowerBlue from '@/assets/flower-blue.png';
import flowerPink from '@/assets/flower-pink.png';
import flowerGreen from '@/assets/flower-green.png';
import flowerRed from '@/assets/flower-red.png';
import flowerYellow from '@/assets/flower-yellow.png';

import bouquetWhite from '@/assets/bouquet-white.png';
import bouquetPurple from '@/assets/bouquet-purple.png';
import bouquetBlue from '@/assets/bouquet-blue.png';
import bouquetPink from '@/assets/bouquet-pink.png';
import bouquetGreen from '@/assets/bouquet-green.png';
import bouquetRed from '@/assets/bouquet-red.png';
import bouquetYellow from '@/assets/bouquet-yellow.png';

const flowers = [
  { flower: flowerWhite, bouquet: bouquetWhite, title: 'Pure White', color: 'white' },
  { flower: flowerPurple, bouquet: bouquetPurple, title: 'Royal Purple', color: 'purple' },
  { flower: flowerBlue, bouquet: bouquetBlue, title: 'Sky Blue', color: 'blue' },
  { flower: flowerPink, bouquet: bouquetPink, title: 'Soft Pink', color: 'pink' },
  { flower: flowerGreen, bouquet: bouquetGreen, title: 'Mint Green', color: 'green' },
  { flower: flowerRed, bouquet: bouquetRed, title: 'Romantic Red', color: 'red' },
  { flower: flowerYellow, bouquet: bouquetYellow, title: 'Sunny Yellow', color: 'yellow' },
];

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const FlowerGrid = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {flowers.map((item, i) => (
          <motion.button
            key={i}
            variants={scaleIn}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => setSelected(i)}
            className="group flex flex-col items-center gap-3 cursor-pointer bg-transparent border-none outline-none"
            aria-label={`View ${item.title} bouquet`}
          >
            <motion.div
              className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <img
                src={item.flower}
                alt={item.title}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.div>
            <span className="font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {item.title}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Bouquet Popup */}
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
            aria-label={`${flowers[selected].title} bouquet`}
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
                  src={flowers[selected].bouquet}
                  alt={`${flowers[selected].title} bouquet`}
                  className="w-full max-h-[50vh] object-contain mb-6"
                />
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {flowers[selected].title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground text-center">
                  Premium gypsophila bouquet in {flowers[selected].title.toLowerCase()}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FlowerGrid;
