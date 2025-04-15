import { useEffect, useState } from "react";
import { siteMetadata } from "@/lib/seo";
import { useIsMobile } from "@/hooks/use-mobile";

const MobileCallBar = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only show on mobile, show immediately on mobile devices
    const checkVisibility = () => {
      if (isMobile) {
        // Small delay to ensure smooth appearance
        setTimeout(() => {
          setIsVisible(true);
        }, 1000);
      } else {
        setIsVisible(false);
      }
    };

    checkVisibility();
    
    // Also check on scroll for better user experience
    const handleScroll = () => {
      if (isMobile && window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0056b3] text-white p-4 flex justify-center z-50 shadow-lg animate-fade-in-up">
      <a 
        href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`}
        className="flex items-center justify-center w-full"
      >
        <div className="bg-[#ff6b00] rounded-full p-2 mr-3 animate-pulse">
          <i className="fas fa-phone-alt text-white text-lg"></i>
        </div>
        <span className="font-bold text-lg">Call Now: {siteMetadata.phoneNumber}</span>
      </a>
    </div>
  );
};

export default MobileCallBar;