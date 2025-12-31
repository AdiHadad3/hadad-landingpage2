import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <footer 
      className="py-20 px-4 bg-foreground text-background" 
      aria-labelledby="contact-heading"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 id="contact-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase">
            Let's Bloom Together
          </h2>
          
          <p className="font-sans text-sm md:text-base text-background/80 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to bring the beauty of HADAD's handcrafted gypsophila to your sales business? 
            We're here to help you create something extraordinary!
          </p>
        </div>

        <address className="mt-12 space-y-8 not-italic">
          <h3 className="font-sans text-base md:text-lg font-normal uppercase tracking-wider">Get in touch:</h3>
          
          <Button
            variant="secondary"
            size="lg"
            className="bg-background text-foreground text-sm px-8 py-6 focus-visible:ring-2 focus-visible:ring-background font-sans uppercase tracking-wider cursor-pointer"
            onClick={() => window.location.href = 'mailto:hadadpetals@gmail.com'}
            aria-label="Send email to HADAD at hadadpetals@gmail.com"
          >
            <Mail className="w-5 h-5 mr-3" aria-hidden="true" />
            <span>hadadpetals@gmail.com</span>
          </Button>
        </address>

        <figure className="mt-12 text-center text-background/70">
          <blockquote className="font-sans text-sm md:text-base font-light italic" cite="https://hadadpetals.com">
            <p>"Every inquiry is the beginning of a beautiful creation"</p>
          </blockquote>
        </figure>
      </div>
    </footer>
  );
};

export default ContactSection;
