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
        <section className="bg-gradient-soft py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-secondary tracking-wide mb-6">
              Contact Us
            </h1>
            <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
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
                <div className="bg-gradient-soft p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1 text-secondary">Email Us</h3>
                    <a 
                      href="mailto:hadadpetals@gmail.com" 
                      className="font-sans text-muted-foreground hover:text-primary transition-colors"
                    >
                      hadadpetals@gmail.com
                    </a>
                    <p className="font-sans text-sm text-muted-foreground mt-2 font-light">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-soft p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1 text-secondary">Call Us</h3>
                    <p className="font-sans text-muted-foreground font-light">
                      Available for business inquiries
                    </p>
                    <p className="font-sans text-sm text-muted-foreground mt-2 font-light">
                      Contact via email for phone details
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-soft p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1 text-secondary">Our Farm</h3>
                    <p className="font-sans text-muted-foreground font-light">
                      Israel
                    </p>
                    <p className="font-sans text-sm text-muted-foreground mt-2 font-light">
                      Farm visits by appointment only
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-soft p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg mb-1 text-secondary">Business Hours</h3>
                    <p className="font-sans text-muted-foreground font-light">
                      Sunday - Thursday
                    </p>
                    <p className="font-sans text-sm text-muted-foreground mt-2 font-light">
                      8:00 AM - 5:00 PM (Israel Time)
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-white flex flex-col justify-center">
                <h3 className="font-serif text-2xl mb-4">Ready to Order?</h3>
                <p className="font-sans text-white/90 mb-6 leading-relaxed font-light">
                  Whether you're a florist, event planner, or wholesaler, we're here to provide you with the finest gypsophila flowers for your business.
                </p>
                <p className="font-sans text-white/90 mb-8 leading-relaxed font-light">
                  Send us an email with your requirements and we'll get back to you with a personalized quote.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-large w-full sm:w-auto font-sans"
                  onClick={() => window.location.href = 'mailto:hadadpetals@gmail.com'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Us an Email
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gradient-soft" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-secondary tracking-wide mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-serif text-lg mb-2 text-secondary">What is your minimum order quantity?</h3>
                <p className="font-sans text-muted-foreground font-light">
                  Our minimum order varies by product and season. Please contact us with your specific needs and we'll provide detailed information.
                </p>
              </div>
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-serif text-lg mb-2 text-secondary">Do you ship internationally?</h3>
                <p className="font-sans text-muted-foreground font-light">
                  Yes! We export our premium gypsophila flowers to customers worldwide. Shipping details and costs depend on your location.
                </p>
              </div>
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-serif text-lg mb-2 text-secondary">Can I request custom colors?</h3>
                <p className="font-sans text-muted-foreground font-light">
                  Absolutely! We specialize in custom-colored gypsophila. Share your color requirements and we'll do our best to match your vision.
                </p>
              </div>
              <div className="bg-background p-6 rounded-2xl shadow-sm">
                <h3 className="font-serif text-lg mb-2 text-secondary">What is your lead time for orders?</h3>
                <p className="font-sans text-muted-foreground font-light">
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
