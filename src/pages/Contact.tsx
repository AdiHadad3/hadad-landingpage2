import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLang } from '@/i18n/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15 }
  })
};

const Contact = () => {
  const { t } = useLang();
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {t.contact.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="font-sans text-base text-muted-foreground font-light mb-12">
              {t.contact.body}
            </motion.p>

            <motion.a
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate="visible"
              href="mailto:hadadpetals@gmail.com"
              className="inline-flex items-center gap-3 font-sans text-sm bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-opacity duration-300">
              
              <Mail size={18} />
              hadadpetals@gmail.com
            </motion.a>
          </div>
        </section>

        <section className="py-24 px-6 bg-card" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              id="faq-heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              {t.contact.faqTitle}
            </motion.h2>

            <div className="space-y-6">
              {[
              { q: t.contact.faq1Q, a: t.contact.faq1A },
              { q: t.contact.faq2Q, a: t.contact.faq2A },
              { q: t.contact.faq3Q, a: t.contact.faq3A }].
              map((item, i) =>
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border-b border-border pb-6">
                
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.q}</h3>
                  <p className="font-sans text-sm text-muted-foreground font-light">{item.a}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.blockquote
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-xl md:text-2xl italic text-foreground">
              {t.contact.quote}
            </motion.blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default Contact;