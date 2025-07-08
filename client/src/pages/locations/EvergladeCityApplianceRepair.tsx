import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const EvergladeCityApplianceRepair = () => {
  const pageTitle = "Appliance Repair Everglades City FL | Remote Service Specialists";
  const pageDescription = "Professional appliance repair services in Everglades City, FL. Expert technicians serving the historic fishing village. Remote area specialists for all major appliance brands.";

  const localServices = [
    "Refrigerator Repair Everglades City",
    "Washer & Dryer Repair Everglades City", 
    "Oven & Range Repair Everglades City",
    "Dishwasher Repair Everglades City",
    "Marine Refrigeration Repair",
    "Generator Appliance Service"
  ];

  const neighborhoods = [
    "Historic Everglades City",
    "Chokoloskee",
    "Plantation Island",
    "Port of the Islands",
    "Copeland",
    "Ochopee"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Everglades City FL, Chokoloskee appliance repair, marine refrigeration repair, remote area appliance service, fishing village appliance repair" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/everglades-city-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/everglades-city-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Everglades City",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/everglades-city-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Everglades City",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.8581,
              "longitude": -81.3856
            },
            "areaServed": {
              "@type": "City",
              "name": "Everglades City",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 25.8581,
                "longitude": -81.3856
              },
              "geoRadius": "25000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Everglades City Appliance Repair Services",
              "itemListElement": localServices.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service
                }
              }))
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-[#0056b3] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Appliance Repair Everglades City FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional appliance repair services for Everglades City and surrounding remote areas. 
              Specialized service for the gateway to the Everglades and fishing communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#0056b3] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg">
                <a href={`tel:${siteMetadata.phoneNumber}`}>
                  📞 Call {siteMetadata.phoneNumber}
                </a>
              </Button>

            </div>
          </div>
        </section>

        {/* Remote Area Expertise Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Everglades City Specialists
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Everglades City is a unique community at the edge of one of America's most pristine wilderness areas. 
                  This historic fishing village requires specialized appliance services that understand the challenges 
                  of remote coastal living, from saltwater exposure to hurricane preparedness.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our technicians are experienced in serving remote areas and understand the importance of reliable 
                  appliances in locations where replacement options are limited. We provide thorough, durable repairs 
                  that stand up to the harsh coastal environment.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0056b3] mb-3">Remote Area Advantages</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Experience with marine and coastal environments</li>
                    <li>• Hurricane preparedness and post-storm service</li>
                    <li>• Extended service coverage for remote locations</li>
                    <li>• Understanding of unique infrastructure challenges</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Coastal Challenges</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <i className="fas fa-water text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Saltwater Environment</h4>
                          <p className="text-gray-600 text-sm">Accelerated corrosion protection and maintenance</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-hurricane text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Storm Exposure</h4>
                          <p className="text-gray-600 text-sm">Preparation and recovery services for severe weather</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-tools text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Remote Access</h4>
                          <p className="text-gray-600 text-sm">Specialized equipment and parts inventory for remote areas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ff6b00]">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Our Remote Service Promise</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ Reliable service to remote locations</li>
                      <li>✓ Extended parts inventory for common issues</li>
                      <li>✓ Weather-resistant repair solutions</li>
                      <li>✓ Emergency service coordination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Everglades City Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized appliance repair services for the unique challenges of Everglades City 
                and surrounding wilderness gateway communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Everglades City</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Remote Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional appliance repair services throughout the Everglades gateway region 
                and surrounding remote communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-bold text-[#0056b3] mb-2">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mb-3">Remote area specialist service</p>
                  <div className="flex items-center justify-center text-xs text-[#ff6b00]">
                    <i className="fas fa-leaf mr-2"></i>
                    <span>Wilderness gateway coverage</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Everglades City's Remote Area Experts
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From historic Everglades City to Chokoloskee, we bring expert appliance repair 
              services to Florida's most remote communities.
            </p>
            <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#0056b3] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg">
              <a href={`tel:${siteMetadata.phoneNumber}`}>
                Call Now: {siteMetadata.phoneNumber}
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default EvergladeCityApplianceRepair;