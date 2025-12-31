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
        <section className="py-16 px-4" aria-labelledby="blooms-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="blooms-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-8 text-center">
              Our Blooms
            </h2>
            <div className="space-y-6 font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light text-center max-w-4xl mx-auto mb-12">
              <p>
                Discover the vibrant beauty of our hand-grown gypsophila, each petal carefully cultivated with love and precision
              </p>
            </div>

            <div>
              <FlowerCarousel />
            </div>
          </div>
        </section>

        {/* From Our Farm Section */}
        <section className="py-16 px-4 bg-muted" aria-labelledby="farm-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="farm-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-8 text-center">
              From Our Farm to Your Hands
            </h2>
            <div className="space-y-6 font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light">
              <p>
                Nestled in a lush village, we grow premium gypsophila with vibrant hues and full petals. Nature's finest, hand-grown with precision.
              </p>
              <p>
                With custom colors and precise care, we deliver blooms that reflect your unique vision. Every flower is inspected and nurtured to ensure only the finest quality reaches our customers.
              </p>
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
