import HeroSection from "@/components/HeroSection";
import FlowerCarousel from "@/components/FlowerCarousel";
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
        <HeroSection 
          title="HADAD"
          subtitle="30 years of a Family-Owned Business Committed to Beauty, Quality, and Heartfelt Service"
          useHandwriting={true}
        />

        {/* Our Blooms Section */}
        <section className="py-16 px-4" aria-labelledby="blooms-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="blooms-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-8 text-center">
              Our Blooms
            </h2>
            <div className="space-y-6 font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light text-center">
              <p>
                Discover the vibrant beauty of our hand-grown gypsophila, each petal carefully cultivated with love and precision.
              </p>
              <p>
                Nestled in a lush village, we grow premium gypsophila with vibrant hues and full petals. With custom colors and precise care, we deliver blooms that reflect your unique vision.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 bg-muted" aria-labelledby="gallery-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="gallery-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-12 text-center">
              Our Collection
            </h2>
            <FlowerCarousel />
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4" aria-labelledby="values-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="values-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted p-8 text-center">
                <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">30+ Years</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Three decades of perfecting our craft and serving customers with passion
                </p>
              </div>
              <div className="bg-muted p-8 text-center">
                <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Family Legacy</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Three generations of expertise and passion are woven into every aspect
                </p>
              </div>
              <div className="bg-muted p-8 text-center">
                <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Quality First</h3>
                <p className="font-sans text-sm text-muted-foreground font-light">
                  Every flower is inspected and nurtured with care to ensure the finest quality
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
};

export default Index;