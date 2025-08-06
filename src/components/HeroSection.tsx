import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <img 
            src="/lovable-uploads/47149b98-fa08-403b-8693-7282f8824538.png"
            alt="HADAD Logo"
            className="mx-auto max-w-sm md:max-w-md lg:max-w-lg h-auto animate-float"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Artistry in Every Petal
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            30 years of a Family-Owned Business that Committed to Beauty, Quality, and Heartfelt Service
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;