const HeroSection = () => {
  return (
    <header 
      className="bg-gradient-soft flex flex-col items-center justify-center px-4 py-16 md:py-24 relative overflow-hidden"
      role="banner"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="space-y-6 px-4">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-secondary tracking-wide leading-relaxed">
            Our Story
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            30 years of a Family-Owned Business Committed to Beauty, Quality, and Heartfelt Service
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
