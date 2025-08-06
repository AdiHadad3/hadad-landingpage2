import { motion } from "framer-motion";
import { Trophy, Heart } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* 30+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform scale-150"></div>
              <div className="relative bg-primary/5 p-6 rounded-full inline-block border border-primary/20">
                <Trophy className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                30+
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                Years of Excellence
              </h4>
              <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
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
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-xl transform scale-150"></div>
              <div className="relative bg-secondary/5 p-6 rounded-full inline-block border border-secondary/20">
                <Heart className="w-12 h-12 text-secondary" />
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                1992
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                Family Legacy
              </h4>
              <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
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