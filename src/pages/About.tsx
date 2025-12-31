import Navbar from "@/components/Navbar";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import HeroSection from "@/components/HeroSection";

const About = () => {
  return (
    <>
      <AccessibilityWidget />
      <Navbar />
      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <HeroSection 
          title="About Us"
          subtitle="Discover the story behind HADAD - a family legacy of growing the finest gypsophila flowers"
        />

        {/* Our Story Section */}
        <section className="py-16 px-4" aria-labelledby="story-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="story-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 font-sans text-base md:text-sm text-muted-foreground leading-relaxed font-light text-center">
              <p>
                Founded in 1992, HADAD began as a small family farm with a simple dream: to grow the most beautiful gypsophila flowers in the region. What started as a passion project has blossomed into a legacy spanning over three decades.
              </p>
              <p>
                Our family has dedicated generations to perfecting the art of gypsophila cultivation. Every petal, every stem, and every bouquet reflects our commitment to quality and our love for these delicate blooms.
              </p>
              <p>
                Nestled in a lush village with ideal growing conditions, our farm combines traditional farming wisdom with modern sustainable practices. This unique approach allows us to produce vibrant, long-lasting flowers that bring joy to customers worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted" aria-labelledby="values-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="values-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-12 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 text-center">
                <div className="w-16 h-16 bg-muted flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌸</span>
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Quality First</h3>
                <p className="font-sans text-base md:text-sm text-muted-foreground font-light">
                  Every flower is inspected and nurtured with care to ensure only the finest blooms reach our customers.
                </p>
              </div>
              <div className="bg-background p-8 text-center">
                <div className="w-16 h-16 bg-muted flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Family Heritage</h3>
                <p className="font-sans text-base md:text-sm text-muted-foreground font-light">
                  Three generations of expertise and passion are woven into every aspect of our farming practices.
                </p>
              </div>
              <div className="bg-background p-8 text-center">
                <div className="w-16 h-16 bg-muted flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌱</span>
                </div>
                <h3 className="font-sans text-base font-medium mb-3 text-foreground uppercase tracking-wider">Sustainability</h3>
                <p className="font-sans text-base md:text-sm text-muted-foreground font-light">
                  We embrace eco-friendly practices to protect our land and ensure beauty for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4" aria-labelledby="team-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="team-heading" className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-foreground tracking-[0.2em] uppercase mb-8">
              The HADAD Family
            </h2>
            <p className="font-sans text-base md:text-sm text-muted-foreground leading-relaxed mb-8 font-light">
              Behind every bloom is a dedicated team of family members and skilled workers who share our passion for excellence. From seed to stem, we work together to bring you the finest gypsophila flowers.
            </p>
            <div className="bg-muted p-8">
              <blockquote className="font-sans text-lg italic text-foreground">
                "We don't just grow flowers; we grow moments of beauty that touch hearts and create lasting memories."
              </blockquote>
              <p className="mt-4 font-sans text-muted-foreground font-medium">— The HADAD Family</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;