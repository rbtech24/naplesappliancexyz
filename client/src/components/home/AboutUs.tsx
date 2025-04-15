import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const features = [
    {
      icon: "fa-medal",
      title: "Certified Experts",
      description: "Factory-trained professionals"
    },
    {
      icon: "fa-history",
      title: "15+ Years",
      description: "Serving Naples and SW Florida"
    },
    {
      icon: "fa-hand-holding-usd",
      title: "Fair Pricing",
      description: "No hidden fees or charges"
    },
    {
      icon: "fa-shield-alt",
      title: "Warranty",
      description: "On all parts and labor"
    }
  ];

  // Map of Collier County replacing the 4 images
  const collierCountyMapUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_of_Florida_highlighting_Collier_County.svg/1200px-Map_of_Florida_highlighting_Collier_County.svg.png";

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
              About Naples Appliance Repair
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              For over 15 years, Naples Appliance Repair has been the trusted name in appliance repair services throughout Southwest Florida. Our family-owned business takes pride in delivering exceptional service with integrity and professionalism.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of factory-trained and certified technicians has the expertise to repair all major appliance brands and models. We understand that appliance breakdowns can disrupt your daily life, which is why we offer prompt, same-day service in many cases.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <i className={`fas ${feature.icon} text-[#ff6b00] mt-1 mr-3`}></i>
                  <div>
                    <h4 className="font-bold text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="bg-[#0056b3] hover:bg-[#ff6b00] text-white font-bold py-3 px-8 rounded-full shadow-md">
              <a href="#contact">Contact Our Team</a>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center h-full">
              <img 
                src={collierCountyMapUrl} 
                alt="Map of Collier County, Florida" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
