import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LanguageContext';
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
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <HeroSection
          title={t.about.heroTitle}
          subtitle={t.about.heroSubtitle}
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
              {t.about.sectionTitleA}{' '}
              <span className="italic text-primary">{t.about.sectionTitleB}</span>
            </motion.h2>
            <div className="space-y-6">
              {[t.about.p1, t.about.p2, t.about.p3].map((text, i) => (
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
              {t.about.valuesTitle}
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { emoji: '🌸', title: t.about.qualityT, desc: t.about.qualityD },
                { emoji: '👨‍👩‍👧‍👦', title: t.about.heritageT, desc: t.about.heritageD },
                { emoji: '🌱', title: t.about.sustainT, desc: t.about.sustainD },
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
            <h2 id="quote-heading" className="sr-only">{t.about.quoteSig}</h2>
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl italic text-foreground leading-relaxed"
            >
              {t.about.quote}
            </motion.blockquote>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 font-sans text-sm text-muted-foreground"
            >
              {t.about.quoteSig}
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
