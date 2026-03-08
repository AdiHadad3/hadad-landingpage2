import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15 }
  })
};

const Contact = () => {
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
              
              Get in Touch
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate="visible"
              className="font-sans text-base text-muted-foreground font-light mb-12">We'd love to hear from you. Whether you have a question about our flowers, pricing, or anything else - our team is ready to help.



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
              
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6">
              {[
              { q: 'What types of gypsophila do you grow?', a: 'We specialize in various colors including white, pink, purple, blue, red, and yellow. We also offer custom color options.' },
              { q: 'Do you ship internationally?', a: 'Yes, we export our flowers worldwide. Contact us for shipping details and availability.' },
              { q: 'What is the minimum order quantity?', a: 'Minimum orders vary depending on the product. Please contact us for specific requirements.' }].
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
              
              "Every inquiry is the beginning of a beautiful creation"
            </motion.blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default Contact;