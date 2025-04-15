import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">Our Appliance Repair Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We repair all major home appliances from leading brands with quality parts and expert technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              id={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className={`fas ${service.icon} text-[#00a0e9] text-2xl mr-3`}></i>
                  <h3 className="text-xl font-heading font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="mb-5 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check text-[#28a745] mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#0056b3] hover:bg-[#ff6b00] text-white font-bold py-2 px-4 rounded">
                  <a href="#contact">Schedule Repair</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#ff6b00] hover:bg-[#0056b3] text-white text-lg font-bold py-3 px-8 rounded-full shadow-md">
            <a href="#contact">View All Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
