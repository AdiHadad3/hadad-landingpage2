import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles } from 'lucide-react';
import eventShowcase from '@/assets/event-showcase.jpeg';

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
              <p className="font-sans text-lg text-muted-foreground font-light max-w-xl mx-auto">
                Available in any color of your choice
              </p>
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
    </>
  );
};

export default Gallery;
