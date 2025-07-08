import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const EsteroApplianceRepair = () => {
  const pageTitle = "Appliance Repair Estero FL | Expert Technicians Available Today";
  const pageDescription = "Professional appliance repair services in Estero, FL. Certified technicians for all major brands. Same-day service for refrigerators, washers, dryers, ovens & more.";

  const localServices = [
    "Refrigerator Repair Estero",
    "Washer & Dryer Repair Estero", 
    "Oven & Range Repair Estero",
    "Dishwasher Repair Estero",
    "Microwave Repair Estero",
    "Garbage Disposal Repair Estero"
  ];

  const neighborhoods = [
    "Coconut Point",
    "Wildcat Run",
    "The Brooks",
    "Bella Terra",
    "Grandezza",
    "West Bay Club"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Estero FL, refrigerator repair Estero, washer repair Estero, dryer repair Estero, oven repair Estero, dishwasher repair Estero, same day appliance repair Estero Florida" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/estero-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/estero-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Estero",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/estero-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Estero",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.4382,
              "longitude": -81.8067
            },
            "areaServed": {
              "@type": "City",
              "name": "Estero",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.4382,
                "longitude": -81.8067
              },
              "geoRadius": "15000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Estero Appliance Repair Services",
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
              Appliance Repair Estero FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional appliance repair services in Estero, Florida. Expert technicians serving 
              Lee County with same-day emergency repairs for all major appliance brands.
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

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Estero Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From Coconut Point to The Brooks, our certified technicians provide expert appliance 
                repair services throughout Estero and surrounding Lee County areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Estero</h3>
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

        {/* Local Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Serving All Estero Communities
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our appliance repair technicians are familiar with the unique needs of Estero residents. 
                  From luxury communities like Grandezza to family neighborhoods near Coconut Point, 
                  we provide prompt, professional service throughout the area.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We understand that Estero's rapid growth means newer homes with modern appliances that 
                  require specialized knowledge. Our team stays current with the latest appliance technologies 
                  and manufacturer specifications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-md">
                      <h4 className="font-bold text-[#0056b3] text-sm">{neighborhood}</h4>
                      <p className="text-xs text-gray-600">Expert service available</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Why Estero Residents Trust Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-check-circle text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Local Knowledge</h4>
                        <p className="text-gray-600 text-sm">Familiar with Estero's newest developments and communities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-check-circle text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Quick Response</h4>
                        <p className="text-gray-600 text-sm">Fast service to all Estero neighborhoods</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-check-circle text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Modern Equipment</h4>
                        <p className="text-gray-600 text-sm">Latest tools for newer appliance models</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Fast Appliance Repair in Estero, FL
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From Coconut Point to West Bay Club, we're ready to fix your appliances today. 
              Call Naples Appliance Repair for expert service in Estero.
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

export default EsteroApplianceRepair;