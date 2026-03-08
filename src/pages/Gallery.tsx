import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FlowerGrid from '@/components/FlowerGrid';
import { Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const Gallery = () => {
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
              <p className="font-sans text-base text-muted-foreground font-light">
                Click on a flower to see the full bouquet
              </p>
            </motion.div>

            {/* <FlowerGrid /> */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
