import { motion } from "framer-motion";
import { Trophy, Heart } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-muted" aria-labelledby="stats-heading">
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
              <Trophy className="w-5 h-5 text-foreground" />
            </div>
            
            <div className="space-y-2">
              <h3 id="years-heading" className="font-sans text-4xl md:text-5xl font-light text-foreground tracking-wider">
                30+
              </h3>
              <h4 className="font-sans text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                Years of Excellence
              </h4>
              <p className="font-sans text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed font-light">
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
              <Heart className="w-5 h-5 text-foreground" />
            </div>
            
            <div className="space-y-2">
              <h3 id="founded-heading" className="font-sans text-4xl md:text-5xl font-light text-foreground tracking-wider">
                1992
              </h3>
              <h4 className="font-sans text-sm md:text-base font-medium text-foreground uppercase tracking-wider">
                Family Legacy
              </h4>
              <p className="font-sans text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed font-light">
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
