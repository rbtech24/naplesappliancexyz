import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/lib/seo";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaPhone, FaTools, FaShieldAlt, FaStar } from "react-icons/fa";
import AnimatedApplianceCarousel from "./AnimatedApplianceCarousel";

// Import appliance images
import refrigeratorImage from "@assets/refrigerator-1441x1536.webp";
import washerImage from "@assets/washing-machine-1536x1480.webp";
import ovenImage from "@assets/oven.webp";
import dishwasherImage from "@assets/dishwasher.webp";
import dryerImage from "@assets/dryer-1536x1342.webp";
import stoveImage from "@assets/stove-1575x2048.webp";

// Define appliance data for the animation
const appliances = [
  { name: "Refrigerator", image: refrigeratorImage, alt: "Refrigerator repair" },
  { name: "Washer", image: washerImage, alt: "Washing machine repair" },
  { name: "Oven", image: ovenImage, alt: "Oven repair" },
  { name: "Dishwasher", image: dishwasherImage, alt: "Dishwasher repair" },
  { name: "Dryer", image: dryerImage, alt: "Dryer repair" },
  { name: "Stove", image: stoveImage, alt: "Stove repair" },
];

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const bgPatternVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden bg-gray-100">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3]/90 to-[#00a0e9]/90 z-10"></div>
      
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
        animate="animate"
        variants={bgPatternVariants}
      />
      
      {/* Dynamic background with appliance pattern */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full h-full absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4 opacity-10">
            {appliances.map((appliance, index) => (
              <div key={index} className="flex items-center justify-center p-2">
                <img 
                  src={appliance.image} 
                  alt={appliance.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-heading font-bold mb-6 max-w-3xl"
            variants={itemVariants}
          >
            Expert Appliance Repair Services in Naples, Florida
          </motion.h1>
          
          <motion.p 
            className="text-white text-xl mb-8 max-w-2xl"
            variants={itemVariants}
          >
            Fast, reliable, and professional repairs for all major appliance brands. Same-day service available!
          </motion.p>
          
          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center bg-white/20 backdrop-blur-sm p-2 rounded-lg">
              <FaTools className="text-white mr-2" />
              <span className="text-white text-sm">Expert Technicians</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm p-2 rounded-lg">
              <FaStar className="text-white mr-2" />
              <span className="text-white text-sm">5-Star Service</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm p-2 rounded-lg">
              <FaShieldAlt className="text-white mr-2" />
              <span className="text-white text-sm">90-Day Warranty</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#ff6b00] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg">
              <a href="#contact">Schedule Repair</a>
            </Button>
            
            <Button asChild variant="outline" className="bg-white hover:bg-[#ff6b00] text-[#0056b3] hover:text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg">
              <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`}>
                <FaPhone className="mr-2" /> Call Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Animated appliance showcase */}
        <motion.div 
          className="md:w-1/2 flex justify-center items-center relative h-[300px] md:h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <AnimatedApplianceCarousel appliances={appliances} interval={4000} />
        </motion.div>
      </div>

      {/* Emergency Banner */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-[#ff6b00] py-4 z-30"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FaExclamationTriangle className="text-white text-3xl mr-4" />
            <div>
              <h3 className="text-white font-bold text-xl">Emergency Repair Service Available</h3>
              <p className="text-white">We offer 24/7 emergency repairs in Naples and surrounding areas</p>
            </div>
          </div>
          <Button asChild variant="outline" className="bg-white text-[#ff6b00] hover:bg-[#0056b3] hover:text-white text-lg font-bold py-2 px-6 rounded-full shadow-lg">
            <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`}>
              <FaPhone className="mr-2" /> {siteMetadata.phoneNumber}
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
