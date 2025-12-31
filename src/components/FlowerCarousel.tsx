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
  "White gypsophila flowers",
  "Pink gypsophila flowers",
  "Purple gypsophila flowers",
  "Pastel gypsophila flowers",
  "White gypsophila with green leaves",
  "Sky blue gypsophila flowers",
  "Colorful gypsophila bouquet",
  "Red romantic gypsophila flowers",
  "Sunny yellow gypsophila flowers"
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

  const liveRegionText = `Image ${currentIndex + 1} of ${flowerImages.length}: ${flowerDescriptions[currentIndex]}`;

  return (
    <div 
      ref={carouselRef}
      className="relative w-full max-w-6xl mx-auto" 
      role="region" 
      aria-roledescription="carousel"
      aria-label="Gypsophila flower gallery"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
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
        aria-label={isPaused ? "Play automatic slideshow" : "Pause automatic slideshow"}
        className="absolute top-4 right-4 z-20 bg-background/80 hover:bg-background text-foreground p-2 transition-colors cursor-pointer"
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
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background text-foreground p-3 transition-colors cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 hover:bg-background text-foreground p-3 transition-colors cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main carousel */}
      <div 
        className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden"
        role="group"
        aria-roledescription="slide"
        aria-label={`${currentIndex + 1} of ${flowerImages.length}`}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={flowerImages[currentIndex]}
            alt={`${flowerDescriptions[currentIndex]} - Image ${currentIndex + 1} of ${flowerImages.length}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Thumbnail navigation */}
      <nav 
        className="flex justify-center mt-6 gap-2 overflow-x-auto pb-2" 
        role="tablist" 
        aria-label="Select flower image"
      >
        {flowerImages.map((image, index) => (
          <button
            key={index}
            role="tab"
            id={`flower-tab-${index}`}
            aria-selected={currentIndex === index}
            aria-controls={`flower-panel-${index}`}
            aria-label={`${flowerDescriptions[index]} - Image ${index + 1}`}
            tabIndex={currentIndex === index ? 0 : -1}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-all duration-300 cursor-pointer ${
              currentIndex === index 
                ? 'opacity-100' 
                : 'opacity-50 hover:opacity-75'
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
        aria-label={`Image ${currentIndex + 1} of ${flowerImages.length}`}
      >
        {flowerImages.map((_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className={`h-px transition-all duration-300 ${
              currentIndex === index 
                ? 'w-8 bg-foreground' 
                : 'w-2 bg-foreground/30'
            }`}
          />
        ))}
      </div>

      <p className="sr-only">
        Use left and right arrows to navigate between images. Press space or Enter to pause the automatic slideshow.
      </p>
    </div>
  );
};

export default FlowerCarousel;
