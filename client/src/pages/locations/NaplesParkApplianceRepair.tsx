import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const NaplesParkApplianceRepair = () => {
  const pageTitle = "Appliance Repair Naples Park FL | Local Expert Technicians";
  const pageDescription = "Professional appliance repair services in Naples Park, FL. Same-day service for refrigerators, washers, dryers, ovens & dishwashers. Serving North Naples communities.";

  const localServices = [
    "Refrigerator Repair Naples Park",
    "Washer & Dryer Repair Naples Park", 
    "Oven & Range Repair Naples Park",
    "Dishwasher Repair Naples Park",
    "Microwave Repair Naples Park",
    "Ice Maker Repair Naples Park"
  ];

  const neighborhoods = [
    "Naples Park",
    "Willoughby Acres",
    "Pine Ridge",
    "Pelican Marsh",
    "Audubon",
    "North Naples"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Naples Park FL, refrigerator repair Naples Park, washer repair Naples Park, dryer repair Naples Park, oven repair Naples Park, North Naples appliance repair" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/naples-park-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/naples-park-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Naples Park",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/naples-park-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Naples Park",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.2581,
              "longitude": -81.8073
            },
            "areaServed": {
              "@type": "City",
              "name": "Naples Park",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.2581,
                "longitude": -81.8073
              },
              "geoRadius": "10000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Naples Park Appliance Repair Services",
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
              Appliance Repair Naples Park FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Trusted appliance repair services in Naples Park and North Naples communities. 
              Expert technicians available for same-day service on all major appliance brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#0056b3] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg">
                <a href={`tel:${siteMetadata.phoneNumber}`}>
                  📞 Call {siteMetadata.phoneNumber}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#0056b3] font-bold py-4 px-8 rounded-full text-lg">
                <a href="/#contact">Schedule Service</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Naples Park Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Serving Naples Park residents with professional appliance repair services for over 15 years. 
                We're your local experts for all major appliance brands and models.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Naples Park</h3>
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

        {/* Community Focus Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Proudly Serving Naples Park & Surrounding Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Naples Park is a vibrant community with diverse housing from vintage beach cottages to 
                modern family homes. Our technicians understand the unique appliance needs of this area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Naples Park Community Knowledge</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-home text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-2">Diverse Housing Styles</h4>
                      <p className="text-gray-600">From beach cottages to modern homes, we service all appliance types and ages found in Naples Park.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-water text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-2">Coastal Challenges</h4>
                      <p className="text-gray-600">Our team understands how salt air and humidity affect appliances in coastal Naples Park.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-clock text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-2">Quick Local Response</h4>
                      <p className="text-gray-600">Short travel times mean faster service for Naples Park residents.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Service Areas We Cover</h3>
                <div className="grid grid-cols-2 gap-4">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-bold text-[#0056b3] text-sm">{neighborhood}</h4>
                      <p className="text-xs text-gray-600">Expert repair service</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-[#0056b3] mb-3">Special Naples Park Services</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Vintage appliance restoration and repair</li>
                    <li>• Salt air corrosion prevention and treatment</li>
                    <li>• Energy efficiency upgrades for older homes</li>
                    <li>• Hurricane preparedness and post-storm repairs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Naples Park's Trusted Appliance Repair Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              When your appliances need repair in Naples Park, trust the local experts who know your 
              community. Call us today for fast, reliable service.
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

export default NaplesParkApplianceRepair;