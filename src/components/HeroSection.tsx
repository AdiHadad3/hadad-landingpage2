

const HeroSection = () => {
  return (
    <section className="bg-gradient-soft flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-10">
          <img 
            src="/lovable-uploads/85e2e54b-fa06-490a-9f34-687a0f710bb0.png"
            alt="HADAD Logo"
            className="mx-auto max-w-[180px] md:max-w-[240px] lg:max-w-[280px] h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-3 px-4">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-relaxed pb-2">
            Artistry in Every Petal
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            30 years of a Family-Owned Business that Committed to Beauty, Quality, and Heartfelt Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;