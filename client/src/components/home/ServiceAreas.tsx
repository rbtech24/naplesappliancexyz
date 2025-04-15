import { Button } from "@/components/ui/button";
import { serviceAreas } from "@/lib/serviceData";
import { siteMetadata } from "@/lib/seo";

const ServiceAreas = () => {
  return (
    <section id="service-areas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
            Our Service Areas in Southwest Florida
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide fast, reliable appliance repair services throughout Naples and the surrounding communities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=800&h=600" 
              alt="Naples, Florida coastline" 
              className="rounded-lg shadow-lg"
            />
            
            <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-heading font-bold mb-4">Why Choose Naples Appliance Repair?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#ff6b00] mt-1 mr-2"></i>
                  <span>Quick response times throughout Naples and surrounding areas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#ff6b00] mt-1 mr-2"></i>
                  <span>Familiar with unique appliance issues common in Florida's climate</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#ff6b00] mt-1 mr-2"></i>
                  <span>Local, family-owned business supporting our community</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#ff6b00] mt-1 mr-2"></i>
                  <span>Fully stocked service vehicles to complete most repairs in one visit</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-heading font-bold mb-4">Communities We Serve</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-map-marker-alt text-[#ff6b00] mr-2"></i>
                    <span>{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0056b3] text-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold mb-4">Contact Us For Service</h3>
              <p className="mb-4">
                Need appliance repair in Naples or surrounding areas? We're ready to help with fast, professional service.
              </p>
              <div className="flex flex-col space-y-4 mb-6">
                <div className="flex items-center">
                  <i className="fas fa-phone-alt mr-3"></i>
                  <span>{siteMetadata.phoneNumber}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-3"></i>
                  <span>{siteMetadata.email}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock mr-3"></i>
                  <span>Mon-Fri: {siteMetadata.openingHours.weekdays}, Sat: {siteMetadata.openingHours.saturday}</span>
                </div>
              </div>
              <Button asChild className="w-full bg-white text-[#0056b3] hover:bg-[#ff6b00] hover:text-white font-bold py-2 px-4 rounded">
                <a href="#contact">Schedule Service Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
