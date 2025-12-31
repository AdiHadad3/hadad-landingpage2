import { motion } from "framer-motion";
import { Trophy, Heart } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-soft" aria-labelledby="stats-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* 30+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
            role="group"
            aria-labelledby="years-heading"
          >
            <div className="inline-block" aria-hidden="true">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h3 id="years-heading" className="font-serif text-5xl md:text-6xl font-light text-secondary">
                30+
              </h3>
              <h4 className="font-serif text-lg md:text-xl font-medium text-foreground">
                Years of Excellence
              </h4>
              <p className="font-sans text-muted-foreground max-w-sm mx-auto leading-relaxed font-light">
                Three decades of perfecting our craft and serving customers with passion
              </p>
            </div>
          </motion.div>

          {/* 1992 Foundation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
            role="group"
            aria-labelledby="founded-heading"
          >
            <div className="inline-block" aria-hidden="true">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            
            <div className="space-y-2">
              <h3 id="founded-heading" className="font-serif text-5xl md:text-6xl font-light text-secondary">
                1992
              </h3>
              <h4 className="font-serif text-lg md:text-xl font-medium text-foreground">
                Family Legacy
              </h4>
              <p className="font-sans text-muted-foreground max-w-sm mx-auto leading-relaxed font-light">
                Since our founding, we've remained a trusted family business
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
