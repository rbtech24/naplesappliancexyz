import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const MarcoIslandApplianceRepair = () => {
  const pageTitle = "Appliance Repair Marco Island FL | Island Expert Service";
  const pageDescription = "Professional appliance repair services on Marco Island, FL. Expert technicians specializing in coastal appliance maintenance. Same-day service available throughout Marco Island.";

  const localServices = [
    "Refrigerator Repair Marco Island",
    "Washer & Dryer Repair Marco Island", 
    "Oven & Range Repair Marco Island",
    "Dishwasher Repair Marco Island",
    "Ice Maker Repair Marco Island",
    "Wine Cooler Repair Marco Island"
  ];

  const neighborhoods = [
    "Marco Island Beach",
    "Olde Marco",
    "Cape Marco",
    "Hideaway Beach",
    "Tigertail Beach",
    "Collier Bay"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Marco Island FL, refrigerator repair Marco Island, coastal appliance repair, Marco Island washer repair, dryer repair Marco Island, luxury appliance repair Marco Island" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/marco-island-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/marco-island-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Marco Island",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/marco-island-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Marco Island",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.9420,
              "longitude": -81.7287
            },
            "areaServed": {
              "@type": "City",
              "name": "Marco Island",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 25.9420,
                "longitude": -81.7287
              },
              "geoRadius": "15000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Marco Island Appliance Repair Services",
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
              Appliance Repair Marco Island FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Specialized appliance repair services for Marco Island residents. Expert coastal appliance 
              maintenance and repair by technicians who understand island living challenges.
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

        {/* Coastal Expertise Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Island Living Appliance Experts
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Marco Island's unique coastal environment presents special challenges for appliances. 
                  Salt air, high humidity, and frequent storms require specialized knowledge and preventive care 
                  that our technicians are uniquely qualified to provide.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We understand the luxury appliances commonly found in Marco Island homes and vacation rentals. 
                  From Sub-Zero refrigerators to Wolf ranges, our team has the expertise to maintain and repair 
                  the high-end equipment that island residents expect.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0056b3] mb-3">Marco Island Specialties</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Salt air corrosion prevention and treatment</li>
                    <li>• Hurricane-resistant appliance installation</li>
                    <li>• Vacation rental appliance maintenance programs</li>
                    <li>• Emergency storm damage repairs</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Coastal Appliance Challenges</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <i className="fas fa-water text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">High Humidity</h4>
                          <p className="text-gray-600 text-sm">Affects electrical components and promotes corrosion</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-wind text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Salt Air Exposure</h4>
                          <p className="text-gray-600 text-sm">Accelerates metal corrosion and electrical problems</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-bolt text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Power Fluctuations</h4>
                          <p className="text-gray-600 text-sm">Storm-related electrical issues and surges</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-[#ff6b00]">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Our Island Solutions</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ Preventive maintenance schedules</li>
                      <li>✓ Corrosion-resistant replacement parts</li>
                      <li>✓ Storm preparation services</li>
                      <li>✓ Emergency repair availability</li>
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
                Marco Island Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive appliance repair services designed specifically for Marco Island's unique environment 
                and luxury home requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} on Marco Island</h3>
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
                Marco Island Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From beachfront condos to luxury estates, we provide expert appliance repair services 
                throughout Marco Island.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-bold text-[#0056b3] mb-2">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mb-3">Professional island service</p>
                  <div className="flex items-center justify-center text-xs text-[#ff6b00]">
                    <i className="fas fa-island-tropical mr-2"></i>
                    <span>Coastal specialist coverage</span>
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
              Marco Island's Appliance Repair Specialists
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Don't let appliance problems disrupt your island paradise. Call the experts who understand 
              coastal living and luxury appliance needs.
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

export default MarcoIslandApplianceRepair;