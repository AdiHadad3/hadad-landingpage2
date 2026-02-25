import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const flowerImages = [
  { src: '/lovable-uploads/8b04be8a-b641-4609-b90e-5ce4e4565d69.png', alt: 'White gypsophila', title: 'Pure White' },
  { src: '/lovable-uploads/5d2bb7e0-ece2-409e-b31d-b042dd011c01.png', alt: 'Pink gypsophila', title: 'Soft Pink' },
  { src: '/lovable-uploads/cea78f67-81e4-4fca-b863-e0a046fc8424.png', alt: 'Purple gypsophila', title: 'Royal Purple' },
  { src: '/lovable-uploads/07d26288-276b-4347-b70b-af9edeeca909.png', alt: 'Sky blue gypsophila', title: 'Sky Blue' },
  { src: '/lovable-uploads/5c6a08fd-6412-45c7-8183-c95700dbcdc2.png', alt: 'Red gypsophila', title: 'Romantic Red' },
  { src: '/lovable-uploads/c75d0a1d-acd4-441c-b8ef-b2862c33824e.png', alt: 'Yellow gypsophila', title: 'Sunny Yellow' },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.65]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero — full bleed photo */}
        <section
          id="hero-section"
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <motion.img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ scale: imgScale, maxWidth: 'none' }}
          />
          <motion.div
            className="absolute inset-0 bg-foreground"
            style={{ opacity: overlayOpacity }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}

          <motion.div
            style={{ y: textY }}
            className="relative z-10 text-center px-6 max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 1.2 }}
              className="font-sans text-xs md:text-sm uppercase text-white/70 mb-6"
            >
              Since 1992
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-2 font-sans text-sm text-white border border-white/40 px-8 py-3 rounded-full hover:bg-white hover:text-foreground transition-all duration-300"
              >
                Explore Our Blooms
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-2 bg-white/70 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
              <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" fill="hsl(40 33% 97%)" />
            </svg>
          </div>
        </section>

        {/* Intro */}
        <section className="pt-8 pb-20 md:pb-28 px-6 bg-background" aria-labelledby="intro-heading">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                id="intro-heading"
                variants={fadeUp}
                className="font-serif text-3xl md:text-5xl text-foreground mb-8"
              >
                Grown with Love,{' '}
                <motion.span
                  className="italic text-primary inline-block"
                  whileInView={{ rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Delivered with Care
                </motion.span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={1}
                className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed font-light"
              >
                For over three decades, the HADAD family has cultivated premium gypsophila
                in our village farm. Every bloom is nurtured with precision and passion —
                vibrant hues, full petals, and custom colors crafted to match your vision.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Smooth gradient into collection */}
        <div className="h-20 bg-gradient-to-b from-background to-card" aria-hidden="true" />

        {/* Collection */}
        <section className="pb-24 px-6 bg-card" aria-labelledby="blooms-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUp} id="blooms-heading" className="font-serif text-3xl md:text-5xl text-foreground mb-4">
                Our Collection
              </motion.h2>
              <motion.div variants={fadeUp} custom={1} className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-primary/40" />
                <Sparkles size={16} className="text-primary" />
                <span className="h-px w-8 bg-primary/40" />
              </motion.div>
              <motion.p variants={fadeUp} custom={2} className="font-sans text-sm text-muted-foreground mt-4">
                A spectrum of colors, each grown to perfection
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[240px] md:auto-rows-[280px]"
            >
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
                    variants={scaleIn}
                    custom={i}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${spans[i]}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <motion.p
                      className="absolute bottom-4 left-4 font-sans text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 tracking-wide"
                    >
                      {img.title}
                    </motion.p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-2 font-sans text-sm text-primary border border-primary px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Full Gallery
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Smooth gradient into values */}
        <div className="h-20 bg-gradient-to-b from-card to-background" aria-hidden="true" />

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

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                { emoji: '🌿', title: '30+ Years', desc: 'Three decades of perfecting our craft, from seed to stem.' },
                { emoji: '👨‍👩‍👧‍👦', title: 'Family Legacy', desc: 'Three generations of knowledge, passion, and dedication.' },
                { emoji: '✨', title: 'Premium Quality', desc: 'Every bloom inspected and nurtured to ensure perfection.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.15)' }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-8 rounded-3xl bg-card cursor-default"
                >
                  <motion.span
                    className="text-4xl block mb-4"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.emoji}
                  </motion.span>
                  <h3 className="font-serif text-xl mb-3 text-foreground">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Curved top into CTA */}
        <div className="relative" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 bg-background">
            <path d="M0,0 Q720,80 1440,0 L1440,80 L0,80 Z" fill="hsl(145 20% 36%)" />
          </svg>
        </div>

        {/* CTA */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl mb-6">
              Let's Bloom Together
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="font-sans text-base font-light mb-10 opacity-85">
              Ready to bring HADAD's handcrafted gypsophila to your business?
              We'd love to hear from you.
            </motion.p>
            <motion.a
              variants={fadeUp}
              custom={2}
              href="mailto:hadadpetals@gmail.com"
              className="group inline-flex items-center gap-2 font-sans text-sm bg-primary-foreground text-primary px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={16} />
              hadadpetals@gmail.com
            </motion.a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
