import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const flowerImages = [
  { src: '/lovable-uploads/8b04be8a-b641-4609-b90e-5ce4e4565d69.png', alt: 'White gypsophila', title: 'Pure White' },
  { src: '/lovable-uploads/5d2bb7e0-ece2-409e-b31d-b042dd011c01.png', alt: 'Pink gypsophila', title: 'Soft Pink' },
  { src: '/lovable-uploads/cea78f67-81e4-4fca-b863-e0a046fc8424.png', alt: 'Purple gypsophila', title: 'Royal Purple' },
  { src: '/lovable-uploads/07d26288-276b-4347-b70b-af9edeeca909.png', alt: 'Sky blue gypsophila', title: 'Sky Blue' },
  { src: '/lovable-uploads/5c6a08fd-6412-45c7-8183-c95700dbcdc2.png', alt: 'Red gypsophila', title: 'Romantic Red' },
  { src: '/lovable-uploads/c75d0a1d-acd4-441c-b8ef-b2862c33824e.png', alt: 'Yellow gypsophila', title: 'Sunny Yellow' },
];

const WaveDivider = ({ from = 'hsl(145 20% 36%)', to = 'hsl(40 33% 97%)' }) => (
  <div className="relative w-full h-24 md:h-36" aria-hidden="true">
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
      <path
        d="M0,0 L0,60 Q360,120 720,60 Q1080,0 1440,60 L1440,0 Z"
        fill={from}
      />
      <path
        d="M0,60 Q360,120 720,60 Q1080,0 1440,60 L1440,120 L0,120 Z"
        fill={to}
      />
    </svg>
  </div>
);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero — full bleed image */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />

          <motion.div
            style={{ y: textY }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 mb-6"
            >
              Since 1992
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-6"
            >
              HADAD
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif text-lg md:text-xl text-white/85 italic font-light"
            >
              Petals in Perfect Bloom
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 font-sans text-sm text-white border border-white/40 px-8 py-3 hover:bg-white hover:text-foreground transition-all duration-300"
              >
                Explore Our Blooms
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Seamless gradient from dark overlay into background */}
        <div className="h-24 bg-gradient-to-b from-foreground/20 to-background" aria-hidden="true" />

        {/* Intro */}
        <section className="py-16 md:py-24 px-6 bg-background" aria-labelledby="intro-heading">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              id="intro-heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl text-foreground mb-8"
            >
              Grown with Love,{' '}
              <span className="italic text-primary">Delivered with Care</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed font-light"
            >
              For over three decades, the HADAD family has cultivated premium gypsophila
              in our village farm. Every bloom is nurtured with precision and passion —
              vibrant hues, full petals, and custom colors crafted to match your vision.
            </motion.p>
          </div>
        </section>

        {/* Gradient transition into collection */}
        <div className="h-24 bg-gradient-to-b from-background to-card" aria-hidden="true" />

        {/* Collection */}
        <section className="pb-24 px-6 bg-card" aria-labelledby="blooms-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="blooms-heading" className="font-serif text-3xl md:text-5xl text-foreground mb-4">
                Our Collection
              </h2>
              <p className="font-sans text-sm text-muted-foreground">
                A spectrum of colors, each grown to perfection
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[240px] md:auto-rows-[280px]">
              {flowerImages.map((img, i) => {
                const spans = [
                  'md:col-span-5 md:row-span-2',
                  'md:col-span-4',
                  'md:col-span-3',
                  'md:col-span-3',
                  'md:col-span-4',
                  'md:col-span-5 md:row-span-2',
                ];
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${spans[i]}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <p className="absolute bottom-4 left-4 font-sans text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide">
                      {img.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 font-sans text-sm text-primary border border-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Full Gallery
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Gradient transition into values */}
        <div className="h-24 bg-gradient-to-b from-card to-background" aria-hidden="true" />

        {/* Values */}
        <section className="pb-24 px-6 bg-background" aria-labelledby="values-heading">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              id="values-heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl text-foreground text-center mb-16"
            >
              Why HADAD
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { emoji: '🌿', title: '30+ Years', desc: 'Three decades of perfecting our craft, from seed to stem.' },
                { emoji: '👨‍👩‍👧‍👦', title: 'Family Legacy', desc: 'Three generations of knowledge, passion, and dedication.' },
                { emoji: '✨', title: 'Premium Quality', desc: 'Every bloom inspected and nurtured to ensure perfection.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-3xl bg-card"
                >
                  <span className="text-4xl block mb-4">{item.emoji}</span>
                  <h3 className="font-serif text-xl mb-3 text-foreground">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave: background → primary for CTA */}
        <WaveDivider from="hsl(40 33% 97%)" to="hsl(145 20% 36%)" />

        {/* CTA */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Let's Bloom Together</h2>
            <p className="font-sans text-base font-light mb-10 opacity-85">
              Ready to bring HADAD's handcrafted gypsophila to your business?
              We'd love to hear from you.
            </p>
            <a
              href="mailto:hadadpetals@gmail.com"
              className="inline-flex items-center gap-2 font-sans text-sm bg-primary-foreground text-primary px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              <Mail size={16} />
              hadadpetals@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
