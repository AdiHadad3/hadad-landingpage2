import { useState, useEffect } from "react";
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

const FlowerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % flowerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main carousel */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-large">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={flowerImages[currentIndex]}
            alt={`HADAD Gypsophila Flowers ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
        {flowerImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              currentIndex === index 
                ? 'border-primary shadow-medium' 
                : 'border-transparent hover:border-primary/50'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {flowerImages.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-primary/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlowerCarousel;