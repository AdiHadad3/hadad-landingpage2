import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flowerImages = [
  "/lovable-uploads/8b04be8a-b641-4609-b90e-5ce4e4565d69.png",
  "/lovable-uploads/5d2bb7e0-ece2-409e-b31d-b042dd011c01.png",
  "/lovable-uploads/cea78f67-81e4-4fca-b863-e0a046fc8424.png",
  "/lovable-uploads/835aa407-56a4-4b5d-a55d-0cf87331a330.png",
  "/lovable-uploads/5074fadb-aab5-49cf-aed1-525ab21af0ea.png",
  "/lovable-uploads/07d26288-276b-4347-b70b-af9edeeca909.png",
  "/lovable-uploads/6a004e94-88cc-466d-862f-d7c28dab03d4.png",
  "/lovable-uploads/5c6a08fd-6412-45c7-8183-c95700dbcdc2.png",
  "/lovable-uploads/c75d0a1d-acd4-441c-b8ef-b2862c33824e.png"
];

const flowerDescriptions = [
  "פרחי גיפסופילה לבנים טהורים",
  "גיפסופילה בגוון ורוד עדין",
  "פרחים בגוון סגול מלכותי",
  "גיפסופילה בצבעי פסטל",
  "פרחים לבנים עם עלים ירוקים",
  "גיפסופילה בגוון כחול שמימי",
  "זר גיפסופילה צבעוני",
  "פרחים בגוון אדום רומנטי",
  "גיפסופילה בגוון צהוב שמשי"
];

const FlowerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const startAutoPlay = useCallback((delay = 4000) => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flowerImages.length);
      }, delay);
    }
  }, [isPaused]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    startAutoPlay();
  }, [startAutoPlay]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + flowerImages.length) % flowerImages.length);
    startAutoPlay();
  }, [startAutoPlay]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % flowerImages.length);
    startAutoPlay();
  }, [startAutoPlay]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
        e.preventDefault();
        goToNext();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(flowerImages.length - 1);
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        setIsPaused(prev => !prev);
        break;
    }
  }, [goToPrevious, goToNext, goToSlide]);

  useEffect(() => {
    if (!isPaused) {
      startAutoPlay();
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [startAutoPlay, isPaused]);

  // Announce slide changes to screen readers
  const liveRegionText = `תמונה ${currentIndex + 1} מתוך ${flowerImages.length}: ${flowerDescriptions[currentIndex]}`;

  return (
    <div 
      ref={carouselRef}
      className="relative w-full max-w-6xl mx-auto" 
      role="region" 
      aria-roledescription="קרוסלה"
      aria-label="גלריית פרחי גיפסופילה"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Live region for screen reader announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {liveRegionText}
      </div>

      {/* Pause/Play control */}
      <button
        onClick={() => setIsPaused(prev => !prev)}
        aria-label={isPaused ? "הפעל מצגת אוטומטית" : "עצור מצגת אוטומטית"}
        className="absolute top-4 right-4 z-20 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
      >
        {isPaused ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        aria-label="תמונה קודמת"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background text-foreground p-3 rounded-full shadow-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        aria-label="תמונה הבאה"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background text-foreground p-3 rounded-full shadow-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main carousel */}
      <div 
        className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-large"
        role="group"
        aria-roledescription="שקופית"
        aria-label={`${currentIndex + 1} מתוך ${flowerImages.length}`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={flowerImages[currentIndex]}
            alt={`${flowerDescriptions[currentIndex]} - תמונה ${currentIndex + 1} מתוך ${flowerImages.length}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
      </div>

      {/* Thumbnail navigation */}
      <nav 
        className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2" 
        role="tablist" 
        aria-label="בחירת תמונת פרחים"
      >
        {flowerImages.map((image, index) => (
          <button
            key={index}
            role="tab"
            id={`flower-tab-${index}`}
            aria-selected={currentIndex === index}
            aria-controls={`flower-panel-${index}`}
            aria-label={`${flowerDescriptions[index]} - תמונה ${index + 1}`}
            tabIndex={currentIndex === index ? 0 : -1}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              currentIndex === index 
                ? 'border-primary shadow-medium' 
                : 'border-transparent hover:border-primary/50'
            }`}
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </button>
        ))}
      </nav>

      {/* Progress indicators */}
      <div 
        className="flex justify-center mt-4 gap-2" 
        role="group" 
        aria-label={`תמונה ${currentIndex + 1} מתוך ${flowerImages.length}`}
      >
        {flowerImages.map((_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-primary/30'
            }`}
          />
        ))}
      </div>

      {/* Screen reader instructions */}
      <p className="sr-only">
        השתמש בחצים ימינה ושמאלה לניווט בין התמונות. לחץ רווח או Enter להשהיית המצגת האוטומטית.
      </p>
    </div>
  );
};

export default FlowerCarousel;