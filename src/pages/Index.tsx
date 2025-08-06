import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FlowerCarousel from "@/components/FlowerCarousel";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Blooms Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Our Blooms
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover the vibrant beauty of our hand-grown gypsophila, each petal carefully cultivated with love and precision
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FlowerCarousel />
          </motion.div>
        </div>
      </section>

      {/* From Our Farm Section */}
      <section className="py-20 px-4 bg-gradient-soft">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              From Our Farm to Your Hands
            </h2>
            
            <div className="space-y-6 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Nature's Finest, Hand-Grown with Precision
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nestled in a lush village, we grow premium gypsophila with vibrant hues and full petals
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                With custom colors and precise care, we deliver blooms that reflect your unique vision
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;