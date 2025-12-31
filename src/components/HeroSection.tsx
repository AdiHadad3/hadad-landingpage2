interface HeroSectionProps {
  title: string;
  subtitle?: string;
  useHandwriting?: boolean;
}

const HeroSection = ({ title, subtitle, useHandwriting = false }: HeroSectionProps) => {
  return (
    <section className="bg-muted py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 ${
          useHandwriting 
            ? 'font-handwriting font-medium tracking-wide' 
            : 'font-sans font-light tracking-[0.3em] uppercase'
        }`}>
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;