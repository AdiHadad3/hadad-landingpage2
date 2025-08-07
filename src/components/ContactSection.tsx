import { motion } from "framer-motion";
import { Mail, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Let's Bloom Together
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to bring the beauty of HADAD's handcrafted gypsophila to your sales business? 
            We're here to help you create something extraordinary!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 space-y-8"
        >
          <h3 className="text-xl md:text-2xl font-semibold">Get in touch:</h3>
          
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-large transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = 'mailto:hadadfarm5@gmail.com'}
          >
            <Mail className="w-6 h-6 mr-3" />
            hadadfarm5@gmail.com
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-white/80"
        >
          <p className="text-lg md:text-xl font-medium italic">
            "Every inquiry is the beginning of a beautiful creation"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;