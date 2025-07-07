import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const GoldenGateApplianceRepair = () => {
  const pageTitle = "Appliance Repair Golden Gate FL | Affordable Expert Service";
  const pageDescription = "Professional appliance repair services in Golden Gate, FL. Affordable same-day service for refrigerators, washers, dryers, ovens & dishwashers. Serving all Golden Gate communities.";

  const localServices = [
    "Refrigerator Repair Golden Gate",
    "Washer & Dryer Repair Golden Gate", 
    "Oven & Range Repair Golden Gate",
    "Dishwasher Repair Golden Gate",
    "Microwave Repair Golden Gate",
    "AC Unit Repair Golden Gate"
  ];

  const neighborhoods = [
    "Golden Gate City",
    "Golden Gate Estates",
    "Naples Manor",
    "Lely Resort",
    "Heritage Bay",
    "San Marco"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Golden Gate FL, refrigerator repair Golden Gate, washer repair Golden Gate, affordable appliance repair Golden Gate, Golden Gate City appliance repair, Golden Gate Estates appliance repair" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/golden-gate-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/golden-gate-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Golden Gate",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/golden-gate-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Golden Gate",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.1865,
              "longitude": -81.6956
            },
            "areaServed": {
              "@type": "City",
              "name": "Golden Gate",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.1865,
                "longitude": -81.6956
              },
              "geoRadius": "15000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Golden Gate Appliance Repair Services",
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
              Appliance Repair Golden Gate FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Affordable, professional appliance repair services in Golden Gate, Florida. 
              Expert technicians serving Golden Gate City, Golden Gate Estates, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#0056b3] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg">
                <a href={`tel:${siteMetadata.phoneNumber}`}>
                  📞 Call {siteMetadata.phoneNumber}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#0056b3] font-bold py-4 px-8 rounded-full text-lg">
                <a href="/#contact">Free Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Community Focus Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Serving Golden Gate's Growing Communities
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Golden Gate is one of Naples' most diverse and rapidly growing areas, home to families 
                  from all walks of life. Our appliance repair services are designed to meet the needs 
                  of this vibrant community with affordable, reliable solutions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From established Golden Gate City to the newer developments in Golden Gate Estates, 
                  we understand the variety of housing styles and appliance types found throughout the area. 
                  Our team provides honest, fair-priced repairs for all residents.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-[#0056b3]">Affordable Pricing</h4>
                    <p className="text-sm text-gray-600">Fair rates for all budgets</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-[#0056b3]">No Hidden Fees</h4>
                    <p className="text-sm text-gray-600">Transparent upfront pricing</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Golden Gate Service Promise</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-home text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">All Housing Types</h4>
                        <p className="text-gray-600 text-sm">From condos to estate homes, we service all appliance configurations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-users text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Bilingual Service</h4>
                        <p className="text-gray-600 text-sm">English and Spanish speaking technicians available</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-credit-card text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Flexible Payment</h4>
                        <p className="text-gray-600 text-sm">Multiple payment options to fit your budget</p>
                      </div>
                    </div>
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
                Complete Golden Gate Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive appliance repair services throughout Golden Gate City, 
                Golden Gate Estates, and surrounding neighborhoods.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Golden Gate</h3>
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

        {/* Neighborhoods Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Golden Gate Communities We Serve
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-bold text-[#0056b3] mb-2">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mb-3">Reliable appliance repair service</p>
                  <div className="flex items-center justify-center text-xs text-[#ff6b00]">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>Local service area</span>
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
              Golden Gate's Trusted Appliance Repair Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From Golden Gate City to Golden Gate Estates, we're here to help when your appliances 
              need repair. Call today for honest, affordable service.
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

export default GoldenGateApplianceRepair;