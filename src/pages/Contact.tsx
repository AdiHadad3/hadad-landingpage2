import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const Contact = () => {
  return (
    <>
      <AccessibilityWidget />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-muted py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans text-2xl md:text-4xl lg:text-5xl font-light text-foreground tracking-[0.3em] uppercase mb-6">
              Contact Us
            </h1>
            <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light">
              We'd love to hear from you! Get in touch with our team
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-4" aria-labelledby="contact-info-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-muted p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm uppercase tracking-wider mb-1 text-foreground">Email Us</h3>
                    <a 
                      href="mailto:hadadpetals@gmail.com" 
                      className="font-sans text-muted-foreground hover:text-foreground transition-colors"
                    >
                      hadadpetals@gmail.com
                    </a>
                    <p className="font-sans text-xs text-muted-foreground mt-2 font-light">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="bg-muted p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm uppercase tracking-wider mb-1 text-foreground">Call Us</h3>
                    <p className="font-sans text-muted-foreground font-light">
                      Available for business inquiries
                    </p>
                    <p className="font-sans text-xs text-muted-foreground mt-2 font-light">
                      Contact via email for phone details
                    </p>
                  </div>
                </div>

                <div className="bg-muted p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm uppercase tracking-wider mb-1 text-foreground">Our Farm</h3>
                    <p className="font-sans text-muted-foreground font-light">
                      Israel
                    </p>
                    <p className="font-sans text-xs text-muted-foreground mt-2 font-light">
                      Farm visits by appointment only
                    </p>
                  </div>
                </div>

                <div className="bg-muted p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-background flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm uppercase tracking-wider mb-1 text-foreground">Business Hours</h3>
                    <p className="font-sans text-muted-foreground font-light">
                      Sunday - Thursday
                    </p>
                    <p className="font-sans text-xs text-muted-foreground mt-2 font-light">
                      8:00 AM - 5:00 PM (Israel Time)
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-foreground p-8 text-background flex flex-col justify-center">
                <h3 className="font-sans text-xl uppercase tracking-wider mb-4">Ready to Order?</h3>
                <p className="font-sans text-background/80 mb-6 leading-relaxed font-light text-sm">
                  Whether you're a florist, event planner, or wholesaler, we're here to provide you with the finest gypsophila flowers for your business.
                </p>
                <p className="font-sans text-background/80 mb-8 leading-relaxed font-light text-sm">
                  Send us an email with your requirements and we'll get back to you with a personalized quote.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 text-sm px-8 py-6 w-full sm:w-auto font-sans uppercase tracking-wider cursor-pointer"
                  onClick={() => window.location.href = 'mailto:hadadpetals@gmail.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Us an Email
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-2 text-foreground">What is your minimum order quantity?</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Our minimum order varies by product and season. Please contact us with your specific needs and we'll provide detailed information.
                </p>
              </div>
              <div className="bg-background p-6">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-2 text-foreground">Do you ship internationally?</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Yes! We export our premium gypsophila flowers to customers worldwide. Shipping details and costs depend on your location.
                </p>
              </div>
              <div className="bg-background p-6">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-2 text-foreground">Can I request custom colors?</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Absolutely! We specialize in custom-colored gypsophila. Share your color requirements and we'll do our best to match your vision.
                </p>
              </div>
              <div className="bg-background p-6">
                <h3 className="font-sans text-sm uppercase tracking-wider mb-2 text-foreground">What is your lead time for orders?</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Lead time depends on order size and specifications. Typically, we require 2-4 weeks notice for large orders. Contact us for specific timelines.
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
