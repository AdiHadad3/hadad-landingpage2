import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <AccessibilityWidget />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <HeroSection 
          title="Contact Us"
          subtitle="We'd love to hear from you. Get in touch with our team."
        />

        {/* Contact Information */}
        <section className="py-16 px-4" aria-labelledby="contact-info-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="contact-info-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-12 text-center">
              Get In Touch
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted p-8 text-center">
                <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Email</h3>
                <a 
                  href="mailto:hadadpetals@gmail.com" 
                  className="font-sans text-sm text-muted-foreground font-light hover:text-foreground transition-colors"
                >
                  hadadpetals@gmail.com
                </a>
              </div>
              
              <div className="bg-muted p-8 text-center">
                <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Phone</h3>
                <a 
                  href="tel:+972123456789" 
                  className="font-sans text-sm text-muted-foreground font-light hover:text-foreground transition-colors"
                >
                  +972 12 345 6789
                </a>
              </div>
              
              <div className="bg-muted p-8 text-center">
                <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Location</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  HADAD Farm, Israel
                </p>
              </div>
              
              <div className="bg-muted p-8 text-center">
                <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Business Hours</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Sunday - Thursday: 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-muted" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-6">
              Ready to Order?
            </h2>
            <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed mb-8 font-light">
              Contact us today to discuss your flower needs. We're here to help you create something beautiful.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-sans text-sm uppercase tracking-wider px-8 py-6 cursor-pointer"
              onClick={() => window.location.href = 'mailto:hadadpetals@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-3" />
              Send Us an Email
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-muted p-6">
                <h3 className="font-sans text-base font-medium mb-3 text-foreground">What types of gypsophila do you grow?</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  We specialize in various colors of gypsophila including white, pink, purple, blue, red, and yellow. We also offer custom color options.
                </p>
              </div>
              
              <div className="bg-muted p-6">
                <h3 className="font-sans text-base font-medium mb-3 text-foreground">Do you ship internationally?</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Yes, we export our flowers worldwide. Contact us for shipping details and availability.
                </p>
              </div>
              
              <div className="bg-muted p-6">
                <h3 className="font-sans text-base font-medium mb-3 text-foreground">What is the minimum order quantity?</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Minimum orders vary depending on the product. Please contact us for specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;