import HeroSection from "@/components/HeroSection";
import FlowerCarousel from "@/components/FlowerCarousel";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <>
      <AccessibilityWidget />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Our Blooms Section */}
        <section className="pt-20 pb-12 px-4" aria-labelledby="blooms-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-6">
              <h2 id="blooms-heading" className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-secondary tracking-wide">
                Our Blooms
              </h2>
              <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Discover the vibrant beauty of our hand-grown gypsophila, each petal carefully cultivated with love and precision
              </p>
            </div>

            <div>
              <FlowerCarousel />
            </div>
          </div>
        </section>

        {/* From Our Farm Section */}
        <section className="pt-14 pb-20 px-4 bg-gradient-soft" aria-labelledby="farm-heading">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              <h2 id="farm-heading" className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-secondary tracking-wide">
                From Our Farm to Your Hands
              </h2>
              
              <div className="space-y-6 max-w-4xl mx-auto">
                <h3 className="font-serif text-xl md:text-2xl font-normal text-foreground">
                  Nature's Finest, Hand-Grown with Precision
                </h3>
                
                <p className="font-sans text-lg text-muted-foreground leading-relaxed font-light">
                  Nestled in a lush village, we grow premium gypsophila with vibrant hues and full petals
                </p>
                
                <p className="font-sans text-lg text-muted-foreground leading-relaxed font-light">
                  With custom colors and precise care, we deliver blooms that reflect your unique vision
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
