import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <footer 
      className="py-20 px-4 bg-gradient-primary text-white relative overflow-hidden" 
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <h2 id="contact-heading" className="text-lg md:text-2xl lg:text-3xl font-bold">
            Let's Bloom Together
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to bring the beauty of HADAD's handcrafted gypsophila to your sales business? 
            We're here to help you create something extraordinary!
          </p>
        </div>

        <address className="mt-12 space-y-8 not-italic">
          <h3 className="text-xl md:text-2xl font-semibold">Get in touch:</h3>
          
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-primary text-lg px-8 py-6 rounded-full shadow-large focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            onClick={() => window.location.href = 'mailto:hadadpetals@gmail.com'}
            aria-label="שלח אימייל לחברת HADAD לכתובת hadadpetals@gmail.com"
          >
            <Mail className="w-6 h-6 mr-3" aria-hidden="true" />
            <span>hadadpetals@gmail.com</span>
          </Button>
        </address>

        <figure className="mt-12 text-center text-white/80">
          <blockquote className="text-lg md:text-xl font-medium italic" cite="https://hadadpetals.com">
            <p>"Every inquiry is the beginning of a beautiful creation"</p>
          </blockquote>
        </figure>
      </div>
    </footer>
  );
};

export default ContactSection;