import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section className="py-16 px-4" aria-labelledby="stats-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="stats-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-12 text-center">
          Our Legacy
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 30+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-muted p-8 text-center"
            role="group"
            aria-labelledby="years-heading"
          >
            <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 id="years-heading" className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">
              30+ Years of Excellence
            </h3>
            <p className="font-sans text-sm text-muted-foreground font-light">
              Three decades of perfecting our craft and serving customers with passion
            </p>
          </motion.div>

          {/* 1992 Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-muted p-8 text-center"
            role="group"
            aria-labelledby="founded-heading"
          >
            <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">❤️</span>
            </div>
            <h3 id="founded-heading" className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">
              Founded in 1992
            </h3>
            <p className="font-sans text-sm text-muted-foreground font-light">
              Since our founding, we've remained a trusted family business
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
