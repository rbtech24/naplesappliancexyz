import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/lib/seo";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3]/80 to-[#00a0e9]/80 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center">
        <h1 className="text-white text-4xl md:text-5xl font-heading font-bold text-center mb-6 max-w-3xl">
          Expert Appliance Repair Services in Naples, Florida
        </h1>
        <p className="text-white text-xl text-center mb-8 max-w-2xl">
          Fast, reliable, and professional repairs for all major appliance brands. Same-day service available!
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#ff6b00] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg">
            <a href="#contact">Schedule Repair</a>
          </Button>
          <Button asChild variant="outline" className="bg-white hover:bg-[#ff6b00] text-[#0056b3] hover:text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg">
            <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`}>
              <i className="fas fa-phone-alt mr-2"></i> Call Now
            </a>
          </Button>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#ff6b00] py-4 z-30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <i className="fas fa-exclamation-triangle text-white text-3xl mr-4"></i>
            <div>
              <h3 className="text-white font-bold text-xl">Emergency Repair Service Available</h3>
              <p className="text-white">We offer 24/7 emergency repairs in Naples and surrounding areas</p>
            </div>
          </div>
          <Button asChild variant="outline" className="bg-white text-[#ff6b00] hover:bg-[#0056b3] hover:text-white text-lg font-bold py-2 px-6 rounded-full shadow-lg">
            <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`}>
              <i className="fas fa-phone-alt mr-2"></i> {siteMetadata.phoneNumber}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
