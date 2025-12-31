interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="bg-muted py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-sans text-2xl md:text-4xl lg:text-5xl font-light text-foreground tracking-[0.3em] uppercase mb-6">
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