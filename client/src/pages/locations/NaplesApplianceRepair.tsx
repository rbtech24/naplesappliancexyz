import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const NaplesApplianceRepair = () => {
  const pageTitle = "Appliance Repair Naples FL | #1 Rated Service in Naples";
  const pageDescription = "Professional appliance repair services in Naples, FL. Expert technicians for all major brands. Same-day service available throughout downtown Naples and surrounding areas.";

  const localServices = [
    "Refrigerator Repair Naples",
    "Washer & Dryer Repair Naples", 
    "Oven & Range Repair Naples",
    "Dishwasher Repair Naples",
    "Microwave Repair Naples",
    "Garbage Disposal Repair Naples"
  ];

  const neighborhoods = [
    "Downtown Naples",
    "Old Naples",
    "Royal Harbor",
    "Aqualane Shores",
    "Port Royal",
    "Coquina Sands"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Naples FL, refrigerator repair Naples, washer repair Naples, dryer repair Naples, oven repair Naples, dishwasher repair Naples, downtown Naples appliance repair" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/naples-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/naples-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Naples",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/naples-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "5405 Taylor Rd",
              "addressLocality": "Naples",
              "addressRegion": "FL",
              "postalCode": "34109",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.1420,
              "longitude": -81.7948
            },
            "areaServed": {
              "@type": "City",
              "name": "Naples",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.1420,
                "longitude": -81.7948
              },
              "geoRadius": "25000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Naples Appliance Repair Services",
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
              #1 Appliance Repair Naples FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Naples' most trusted appliance repair service for over 15 years. Expert technicians 
              providing same-day service throughout Naples and Collier County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#0056b3] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg">
                <a href={`tel:${siteMetadata.phoneNumber}`}>
                  📞 Call {siteMetadata.phoneNumber}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#0056b3] font-bold py-4 px-8 rounded-full text-lg">
                <a href="/#contact">Get Free Estimate</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Complete Naples Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From downtown Naples to the beaches, we provide comprehensive appliance repair services 
                for all major brands and models throughout the greater Naples area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Naples</h3>
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

        {/* Naples Neighborhoods Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Serving All Naples Neighborhoods
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From historic Old Naples to exclusive Port Royal, we provide expert appliance repair 
                services throughout the city and surrounding areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Why Naples Residents Choose Us</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="fas fa-award text-[#ff6b00] text-2xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold text-lg mb-2">15+ Years Serving Naples</h4>
                      <p className="text-gray-600">Established local business with deep community roots and thousands of satisfied customers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-clock text-[#ff6b00] text-2xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Same-Day Service</h4>
                      <p className="text-gray-600">Emergency repairs available throughout Naples with quick response times.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-certificate text-[#ff6b00] text-2xl mt-1 mr-4"></i>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Factory-Trained Technicians</h4>
                      <p className="text-gray-600">Our team is certified to work on all major appliance brands and models.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Naples Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-bold text-[#0056b3] text-sm">{neighborhood}</h4>
                      <p className="text-xs text-gray-600">Professional service</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-bold text-[#0056b3] mb-4">Naples Climate Considerations</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• High humidity protection and maintenance</li>
                    <li>• Salt air corrosion prevention for coastal areas</li>
                    <li>• Hurricane preparedness and post-storm repairs</li>
                    <li>• Energy efficiency optimization for year-round AC use</li>
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
              Naples' Most Trusted Appliance Repair Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of satisfied Naples customers who trust us with their appliance repairs. 
              Call today for fast, professional service.
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

export default NaplesApplianceRepair;