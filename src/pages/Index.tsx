import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Instagram, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroBg from '@/assets/hero-bg.jpg';

/* ─── YouTube IFrame API types ─── */
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  setPlaybackQuality: (quality: string) => void;
  destroy: () => void;
}
interface WindowWithYT extends Window {
  YT?: {
    Player: new (el: string | HTMLElement, opts?: {
      events?: {
        onReady?: (e: { target: YTPlayer }) => void;
        onStateChange?: (e: { data: number; target: YTPlayer }) => void;
      };
    }) => YTPlayer;
    PlayerState?: { PLAYING: number };
  };
  onYouTubeIframeAPIReady?: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 }
  })
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12 }
  })
};

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.15 }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const prevScrollY = useRef(0);
  const playerRef = useRef<YTPlayer | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const pauseVideo = () => {
    if (playerRef.current?.pauseVideo) {
      playerRef.current.pauseVideo();
    } else {
      iframeRef.current?.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    }
  };

  const openVideo = () => {
    prevScrollY.current = window.scrollY;
    setVideoOpen(true);
  };

  const closeVideo = () => {
    pauseVideo();
    setVideoOpen(false);
    setTimeout(() => {
      window.scrollTo({ top: prevScrollY.current, behavior: 'smooth' });
    }, 650);
  };

  const scrollToVideo = () => {
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
    const el = videoWrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const videoCenterY = rect.top + window.scrollY + rect.height / 2;
    const target = videoCenterY - (window.innerHeight / 2) - (navbarHeight / 2);
    window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
  };

  useEffect(() => {
    if (!videoOpen) return;

    const win = window as unknown as WindowWithYT;

    const createPlayer = () => {
      const iframe = iframeRef.current;
      if (!iframe || !win.YT?.Player) return;
      playerRef.current = new win.YT.Player(iframe, {
        events: {
          onReady: (e) => {
            e.target.setPlaybackQuality('hd1440');
          },
          onStateChange: (e) => {
            if (e.data === win.YT?.PlayerState?.PLAYING) {
              e.target.setPlaybackQuality('hd1440');
            }
          },
        },
      });
    };

    if (win.YT?.Player) {
      createPlayer();
    } else {
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode?.insertBefore(tag, firstScript);
      }
      const original = win.onYouTubeIframeAPIReady;
      win.onYouTubeIframeAPIReady = () => {
        createPlayer();
        if (original) original();
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) pauseVideo();
      },
      { threshold: 0.4 }
    );
    if (videoSectionRef.current) observer.observe(videoSectionRef.current);

    return () => {
      observer.disconnect();
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [videoOpen]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.65]);

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          id="hero-section"
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden">
          
          <motion.img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ scale: imgScale, maxWidth: 'none' }} />
          
          <motion.div
            className="absolute inset-0 bg-foreground"
            style={{ opacity: overlayOpacity }} />
          

          {[...Array(6)].map((_, i) =>
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{ left: `${15 + i * 15}%`, top: `${20 + i % 3 * 25}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }} />

          )}

          <motion.div style={{ y: textY }} className="relative z-10 text-center px-6 max-w-3xl">
            <motion.a
              href="https://instagram.com/hadadpetals"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/40 text-white/90 hover:text-white hover:border-white transition-colors mb-6"
            >
              <Instagram size={18} />
            </motion.a>
            <motion.p
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 1.2 }}
              className="font-sans text-xs md:text-sm uppercase text-white/70 mb-6">
              Since 1992
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10">
              
              <Link
                to="/gallery"
                className="group inline-flex items-center gap-2 font-sans text-sm text-white border border-white/40 px-8 py-3 rounded-full hover:bg-white hover:text-foreground transition-all duration-300">
                Explore Our Blooms
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}>
            
            <motion.div
              className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}>
              
              <motion.div
                className="w-1 h-2 bg-white/70 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }} />
              
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
              <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" fill="hsl(40 33% 97%)" />
            </svg>
          </div>
        </section>




        {/* Intro */}
        <section className="pt-8 pb-20 md:pb-28 px-6 bg-background" aria-labelledby="intro-heading">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
              <motion.h2 id="intro-heading" variants={fadeUp} className="font-serif text-3xl md:text-5xl text-foreground mb-8">
                Grown with Love,<br />
                <motion.span
                  className="italic text-primary inline-block"
                  whileInView={{ rotate: [0, -2, 2, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}>
                  Delivered with Care
                </motion.span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                For over 30 years, we have grown premium gypsophila with passion and precision, delivering exceptional quality to floral markets worldwide
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="mt-8">
                <button
                  type="button"
                  onClick={openVideo}
                  className="group inline-flex items-center gap-2 font-sans text-sm text-foreground border border-foreground/30 px-8 py-3 rounded-full hover:bg-foreground hover:text-background transition-all duration-300">
                  Watch Video
                  <Play size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Video reveal */}
        <AnimatePresence>
          {videoOpen && (
            <motion.section
              ref={videoSectionRef}
              key="video-section"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              onAnimationComplete={scrollToVideo}
              className="overflow-hidden bg-background"
              aria-label="Video section">
              <div className="max-w-6xl mx-auto px-6 py-10 relative">
                <button
                  type="button"
                  onClick={closeVideo}
                  aria-label="Close video"
                  className="absolute top-2 right-6 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors bg-background/60 backdrop-blur">
                  <X size={18} />
                </button>
                <div ref={videoWrapperRef} className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    ref={iframeRef}
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/A-rNncZ5sSk?enablejsapi=1&rel=0&vq=hd1440"
                    title="HADAD video"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>



        <motion.div
          className="h-1 bg-gradient-to-b from-background via-border/60 to-card"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} />
        

        {/* Innovation */}
        <section className="py-24 md:py-32 px-6 bg-background" aria-labelledby="innovation-heading">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="text-center mb-16">
              
              <motion.p variants={fadeUp} className="font-sans text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Innovation-Driven
              </motion.p>
              <motion.h2
                id="innovation-heading"
                variants={fadeScale}
                className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                Not Your Traditional{' '}
                <span className="italic text-primary">Grower</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
                At HADAD, we combine proprietary growing methods with advanced post-harvest technology to produce the highest-quality gypsophila with vibrant color and extended shelf life, tailored to your preferred colors and bouquet styles.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-2 gap-6 mb-16">
              
              {[
              {
                title: 'Excellence',
                subtitle: 'Full, lush clusters with exceptional volume and presence.'
              },
              {
                title: 'Mirabella',
                subtitle: 'Delicate, airy blooms with an elegant, refined silhouette.'
              }].
              map((variety, i) =>
              <motion.div
                key={i}
                variants={slideIn}
                custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 text-center">
                
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{variety.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">{variety.subtitle}</p>
                </motion.div>
              )}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-3 gap-6">
              
              {[
              { icon: '🧬', title: 'Proprietary Methods', desc: 'Unique cultivation techniques developed over decades of research.' },
              { icon: '⏳', title: 'Extended Shelf Life', desc: 'Our blooms last significantly longer than industry standard.' },
              { icon: '🎨', title: 'Custom Colors', desc: 'Any shade you envision — including fully bespoke color matching.' }].
              map((item, i) =>
              <motion.div
                key={i}
                variants={fadeScale}
                custom={i}
                whileHover={{ y: -6 }}
                className="text-center p-6 rounded-2xl">
                
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h4 className="font-serif text-lg text-foreground mb-2">{item.title}</h4>
                  <p className="font-sans text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* KPI Stats */}
        <section className="py-20 px-6 bg-card" aria-labelledby="kpi-heading">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid md:grid-cols-3 gap-8 text-center">
              
              {[
              { value: '160', label: 'Dunams of Land' },
              { value: '115,000', label: 'Stems per Dunam' },
              { value: '18M', label: 'Stems Export Capacity / Year' }].
              map((stat, i) =>
              <motion.div
                key={i}
                variants={fadeScale}
                custom={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-8">
                
                  <motion.span
                  className="font-serif text-5xl md:text-6xl text-primary font-medium block mb-3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}>
                  
                    {stat.value}
                  </motion.span>
                  <span className="font-sans text-sm text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>);

};

export default Index;
