import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  image?: string;
  fullHeight?: boolean;
}

const HeroSection = ({ title, subtitle, image, fullHeight = false }: HeroSectionProps) => {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden ${
        fullHeight ? 'min-h-screen' : 'min-h-[60vh]'
      }`}
    >
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
      )}

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 ${
            image ? 'text-white' : 'text-foreground'
          }`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-sans text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto ${
              image ? 'text-white/85' : 'text-muted-foreground'
            }`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
