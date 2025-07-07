import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const EastNaplesApplianceRepair = () => {
  const pageTitle = "Appliance Repair East Naples FL | Fast Local Service";
  const pageDescription = "Professional appliance repair services in East Naples, FL. Expert technicians for all major brands. Same-day service available in Lely, Fiddler's Creek, and surrounding areas.";

  const localServices = [
    "Refrigerator Repair East Naples",
    "Washer & Dryer Repair East Naples", 
    "Oven & Range Repair East Naples",
    "Dishwasher Repair East Naples",
    "Microwave Repair East Naples",
    "Ice Maker Repair East Naples"
  ];

  const neighborhoods = [
    "Lely Resort",
    "Fiddler's Creek",
    "Hamilton Harbor",
    "Falling Waters",
    "Eagle Creek",
    "Berkshire Lakes"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair East Naples FL, refrigerator repair East Naples, Lely appliance repair, Fiddler's Creek appliance repair, washer repair East Naples, same day appliance repair East Naples" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/east-naples-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/east-naples-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - East Naples",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/east-naples-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "East Naples",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.1034,
              "longitude": -81.7232
            },
            "areaServed": {
              "@type": "Place",
              "name": "East Naples",
              "containedInPlace": {
                "@type": "City",
                "name": "Naples",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.1034,
                "longitude": -81.7232
              },
              "geoRadius": "15000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "East Naples Appliance Repair Services",
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
              Appliance Repair East Naples FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional appliance repair services in East Naples, Florida. Expert technicians serving 
              Lely, Fiddler's Creek, Eagle Creek, and all East Naples communities with fast, reliable service.
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

        {/* Community Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  East Naples Community Specialists
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  East Naples is home to some of Southwest Florida's most beautiful master-planned communities, 
                  from the golf courses of Lely Resort to the luxury of Fiddler's Creek. Our appliance repair 
                  technicians are well-versed in the diverse housing styles and appliance needs throughout 
                  this dynamic area.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you live in a cozy townhome in Hamilton Harbor or a luxury estate in Eagle Creek, 
                  our team provides the same level of professional service and expertise that has made us 
                  East Naples' trusted appliance repair choice for over 15 years.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0056b3] mb-3">East Naples Service Promise</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Same-day service available throughout East Naples</li>
                    <li>• Familiar with all major community layouts and access</li>
                    <li>• Expert in both luxury and standard appliance brands</li>
                    <li>• Competitive pricing for all East Naples residents</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">East Naples Advantages</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <i className="fas fa-road text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Easy Access</h4>
                          <p className="text-gray-600 text-sm">Convenient location off major highways for quick service</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-home text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Diverse Communities</h4>
                          <p className="text-gray-600 text-sm">Experience with all housing types from condos to estates</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-users text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Growing Area</h4>
                          <p className="text-gray-600 text-sm">Serving both established and new communities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ff6b00]">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Local Knowledge Benefits</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ Know the best routes to your community</li>
                      <li>✓ Understand local building codes and standards</li>
                      <li>✓ Familiar with common appliance models in area</li>
                      <li>✓ Established relationships with local suppliers</li>
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
                Complete East Naples Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From Lely Resort to Fiddler's Creek, we provide comprehensive appliance repair services 
                for all East Naples communities and neighborhoods.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in East Naples</h3>
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

        {/* Communities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                East Naples Communities We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our expert technicians provide reliable appliance repair services throughout 
                all East Naples neighborhoods and master-planned communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-[#0056b3] mb-2">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mb-3">Professional appliance repair service</p>
                  <div className="flex items-center justify-center text-xs text-[#ff6b00]">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>Same-day service available</span>
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
              East Naples' Trusted Appliance Repair Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From Lely Resort to Eagle Creek, we're ready to fix your appliances today. 
              Call Naples Appliance Repair for expert service in East Naples.
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

export default EastNaplesApplianceRepair;