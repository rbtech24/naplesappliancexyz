import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const BonitaSpringsApplianceRepair = () => {
  const pageTitle = "Appliance Repair Bonita Springs FL | Same-Day Service";
  const pageDescription = "Professional appliance repair services in Bonita Springs, FL. Expert technicians for refrigerator, washer, dryer, oven & dishwasher repairs. Same-day service available.";

  const localServices = [
    "Refrigerator Repair Bonita Springs",
    "Washer & Dryer Repair Bonita Springs", 
    "Oven & Range Repair Bonita Springs",
    "Dishwasher Repair Bonita Springs",
    "Microwave Repair Bonita Springs",
    "Ice Maker Repair Bonita Springs"
  ];

  const neighborhoods = [
    "Spanish Wells",
    "Coconut Point",
    "Rapallo",
    "The Brooks",
    "Pelican Landing",
    "Imperial Shores"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Bonita Springs FL, refrigerator repair Bonita Springs, washer repair Bonita Springs, dryer repair Bonita Springs, oven repair Bonita Springs, dishwasher repair Bonita Springs, same day appliance repair Bonita Springs" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/bonita-springs-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/bonita-springs-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Bonita Springs",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/bonita-springs-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bonita Springs",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.3398,
              "longitude": -81.7787
            },
            "areaServed": {
              "@type": "City",
              "name": "Bonita Springs",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.3398,
                "longitude": -81.7787
              },
              "geoRadius": "15000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Bonita Springs Appliance Repair Services",
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
              Appliance Repair Bonita Springs FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert appliance repair services in Bonita Springs, Florida. Same-day service available 
              for all major appliance brands throughout Lee County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#0056b3] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg">
                <a href={`tel:${siteMetadata.phoneNumber}`}>
                  📞 Call {siteMetadata.phoneNumber}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#0056b3] font-bold py-4 px-8 rounded-full text-lg">
                <a href="/#contact">Get Free Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Bonita Springs Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our certified technicians provide comprehensive appliance repair services throughout 
                Bonita Springs and surrounding areas in Southwest Florida.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Bonita Springs</h3>
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

        {/* Local Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Neighborhoods We Serve in Bonita Springs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide fast, reliable appliance repair services throughout all Bonita Springs communities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h3 className="font-bold text-[#0056b3]">{neighborhood}</h3>
                  <p className="text-sm text-gray-600">Same-day service available</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Why Choose Us for Bonita Springs Appliance Repair?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Emergency repairs available throughout Bonita Springs</p>
              </div>
              
              <div className="text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-tools"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Factory-trained professionals with 15+ years experience</p>
              </div>
              
              <div className="text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Warranty Included</h3>
                <p className="text-gray-600">All repairs backed by comprehensive warranty</p>
              </div>
              
              <div className="text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
                <p className="text-gray-600">Upfront pricing with no hidden fees</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Need Appliance Repair in Bonita Springs Today?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Don't let a broken appliance disrupt your day. Call Naples Appliance Repair for fast, 
              professional service in Bonita Springs, FL.
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

export default BonitaSpringsApplianceRepair;