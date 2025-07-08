import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";
import { linkifyBrands } from "@/utils/brandLinks";

const PelicanBayApplianceRepair = () => {
  const pageTitle = "Appliance Repair Pelican Bay FL | Luxury Service Specialists";
  const pageDescription = "Premium appliance repair services in Pelican Bay, Naples FL. Expert technicians for luxury appliances in beachfront condos and estates. Same-day service available.";

  const localServices = [
    "Sub-Zero Refrigerator Repair Pelican Bay",
    "Wolf Range Repair Pelican Bay", 
    "Miele Dishwasher Repair Pelican Bay",
    "Luxury Washer & Dryer Repair Pelican Bay",
    "Wine Cooler Repair Pelican Bay",
    "Ice Maker Repair Pelican Bay"
  ];

  const amenities = [
    "Beachfront Condominiums",
    "Luxury Estate Homes",
    "The Strand Golf Club",
    "Pelican Bay Beach Club",
    "The Philharmonic Center",
    "Tennis Club"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Pelican Bay FL, luxury appliance repair Pelican Bay, Sub-Zero repair Pelican Bay, Wolf repair Pelican Bay, beachfront appliance repair Naples" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/pelican-bay-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/pelican-bay-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Pelican Bay",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/pelican-bay-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pelican Bay",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.2378,
              "longitude": -81.8159
            },
            "areaServed": {
              "@type": "Place",
              "name": "Pelican Bay",
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
                "latitude": 26.2378,
                "longitude": -81.8159
              },
              "geoRadius": "5000"
            },
            "priceRange": "$$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pelican Bay Luxury Appliance Repair Services",
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
              Luxury Appliance Repair Pelican Bay FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Premier appliance repair services for Pelican Bay's luxury beachfront community. 
              Specialized expertise in high-end appliances with white-glove service standards.
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

        {/* Luxury Focus Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Pelican Bay's Appliance Experts
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Pelican Bay represents the pinnacle of luxury living in Naples, and your appliances deserve 
                  service that matches these standards. Our technicians specialize in the ultra-premium appliance 
                  brands commonly found in this exclusive beachfront community.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From oceanfront high-rises to luxury estate homes, we understand the unique requirements of 
                  Pelican Bay's sophisticated residents. Our team provides discreet, professional service with 
                  the attention to detail that this community expects.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0056b3] mb-3">Pelican Bay Specialties</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Ultra-luxury appliance brands (Sub-Zero, Wolf, Miele)</li>
                    <li>• Built-in and integrated appliance systems</li>
                    <li>• Beachfront corrosion prevention</li>
                    <li>• Concierge-level service coordination</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Premium Brand Expertise</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-bold text-[#ff6b00]">Refrigeration</h4>
                        <p className="text-gray-600">
                          {linkifyBrands("Sub-Zero, Thermador, Viking", "text-gray-600 hover:text-[#0056b3]")}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#ff6b00]">Cooking</h4>
                        <p className="text-gray-600">
                          {linkifyBrands("Wolf, Miele, Dacor", "text-gray-600 hover:text-[#0056b3]")}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#ff6b00]">Laundry</h4>
                        <p className="text-gray-600">
                          {linkifyBrands("Miele, Asko, Speed Queen", "text-gray-600 hover:text-[#0056b3]")}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#ff6b00]">Dishwashers</h4>
                        <p className="text-gray-600">
                          {linkifyBrands("Miele, Fisher & Paykel", "text-gray-600 hover:text-[#0056b3]")}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ff6b00]">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">White-Glove Service Promise</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ Scheduled appointments at your convenience</li>
                      <li>✓ Professional appearance and conduct</li>
                      <li>✓ Protective floor coverings and cleanup</li>
                      <li>✓ Detailed service reports and documentation</li>
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
                Luxury Appliance Services in Pelican Bay
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive repair and maintenance services for the world's finest appliance brands, 
                delivered with the professionalism Pelican Bay residents expect.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#0056b3]">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">Luxury {service.title}</h3>
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

        {/* Community Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Serving All of Pelican Bay
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From The Strand to the Beach Club, we provide premium appliance repair services 
                throughout this prestigious Gulf Coast community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-bold text-[#0056b3] mb-2">{amenity}</h3>
                  <p className="text-sm text-gray-600 mb-3">Premium appliance service</p>
                  <div className="flex items-center justify-center text-xs text-[#ff6b00]">
                    <i className="fas fa-star mr-2"></i>
                    <span>Luxury specialist coverage</span>
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
              Pelican Bay's Premier Appliance Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Experience appliance repair service that matches the luxury standards of Pelican Bay. 
              Call today for expert care of your premium appliances.
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

export default PelicanBayApplianceRepair;