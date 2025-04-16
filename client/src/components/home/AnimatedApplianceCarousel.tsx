import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Define appliance type
interface Appliance {
  name: string;
  image: string;
  alt: string;
}

interface AnimatedApplianceCarouselProps {
  appliances: Appliance[];
  interval?: number; // Time in ms between transitions
}

/**
 * A component that displays an animated carousel of appliance images
 * with smooth fade transitions between them
 */
const AnimatedApplianceCarousel = ({ 
  appliances, 
  interval = 3000 
}: AnimatedApplianceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-rotate through appliances
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === appliances.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 300); // Short delay for the exit animation
    }, interval);
    
    return () => clearInterval(timer);
  }, [appliances.length, interval]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: {
      scale: 0.9,
      opacity: 0,
      rotate: 5,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.05,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };
  
  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2,
        duration: 0.3 
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Circle background with blur effect */}
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
            {/* Background circle with blur effect */}
            <motion.div 
              className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm"
              animate={{ 
                boxShadow: isAnimating 
                  ? "0 0 30px rgba(255, 255, 255, 0.2)" 
                  : "0 0 20px rgba(255, 255, 255, 0.1)"
              }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Appliance image */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-8"
              variants={imageVariants}
              whileHover="hover"
            >
              <img 
                src={appliances[currentIndex].image} 
                alt={appliances[currentIndex].alt}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
          
          {/* Appliance label */}
          <motion.div 
            className="mt-4"
            variants={labelVariants}
          >
            <span className="inline-block bg-[#ff6b00] text-white font-bold px-6 py-2 rounded-full shadow-lg">
              {appliances[currentIndex].name} Repair
            </span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedApplianceCarousel;