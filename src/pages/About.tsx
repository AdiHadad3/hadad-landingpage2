import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import aboutBg from '@/assets/about-bg.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const About = () => {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <HeroSection
          title="Our Story"
          subtitle="A family legacy rooted in passion, blooming for over thirty years."
          image={aboutBg}
        />

        <section className="py-24 px-6" aria-labelledby="story-heading">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              id="story-heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center"
            >
              From a Small Farm to{' '}
              <span className="italic text-primary">World-Class Blooms</span>
            </motion.h2>
            <div className="space-y-6">
              {[
                'Founded in 1992, HADAD began as a small family farm with a simple dream: to grow the most beautiful gypsophila flowers in the region.',
                'What started as a passion project has blossomed into a legacy spanning over three decades. Our family has dedicated generations to perfecting the art of gypsophila cultivation.',
                'Nestled in a lush village with ideal growing conditions, our farm combines traditional wisdom with modern sustainable practices — producing vibrant, long-lasting flowers that bring joy worldwide.',
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-sans text-base text-muted-foreground leading-relaxed font-light text-center"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-card" aria-labelledby="values-heading">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              id="values-heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-foreground text-center mb-16"
            >
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { emoji: '🌸', title: 'Quality First', desc: 'Every flower is inspected and nurtured with care to ensure only the finest blooms reach our customers.' },
                { emoji: '👨‍👩‍👧‍👦', title: 'Family Heritage', desc: 'Three generations of expertise and passion are woven into every aspect of our farming practices.' },
                { emoji: '🌱', title: 'Sustainability', desc: 'We embrace eco-friendly practices to protect our land and ensure beauty for generations to come.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <span className="text-4xl block mb-4">{item.emoji}</span>
                  <h3 className="font-serif text-xl mb-3 text-foreground">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6" aria-labelledby="quote-heading">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="quote-heading" className="sr-only">The HADAD Family</h2>
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl italic text-foreground leading-relaxed"
            >
              "We don't just grow flowers; we grow moments of beauty that touch hearts."
            </motion.blockquote>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 font-sans text-sm text-muted-foreground"
            >
              {"\n"}
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
