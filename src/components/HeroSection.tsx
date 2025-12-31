const HeroSection = () => {
  return (
    <header 
      className="bg-muted flex flex-col items-center justify-center px-4 py-20 md:py-32"
      role="banner"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-sans text-2xl md:text-4xl lg:text-5xl font-light text-foreground tracking-[0.3em] leading-relaxed uppercase">
          Our Story
        </h1>
        
        <p className="font-sans text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light mt-8">
          30 years of a Family-Owned Business Committed to Beauty, Quality, and Heartfelt Service
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
