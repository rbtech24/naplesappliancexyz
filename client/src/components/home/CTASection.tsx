import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/lib/seo";
import kitchenImage from "@assets/oven.webp";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#0056b3] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={kitchenImage} 
          alt="Modern kitchen with appliances" 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Fix Your Appliance?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let appliance problems disrupt your home. Our experts are ready to help with fast, professional repairs throughout Naples.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild variant="outline" className="bg-white hover:bg-[#ff6b00] hover:text-white text-[#0056b3] text-lg font-bold py-3 px-8 rounded-full shadow-lg">
              <a href="#contact">Schedule Service</a>
            </Button>
            <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#ff6b00] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg">
              <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`}>
                <i className="fas fa-phone-alt mr-2"></i> Call {siteMetadata.phoneNumber}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
