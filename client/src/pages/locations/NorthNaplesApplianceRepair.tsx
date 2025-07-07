import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const NorthNaplesApplianceRepair = () => {
  const pageTitle = "Appliance Repair North Naples FL | Expert Service Available Today";
  const pageDescription = "Professional appliance repair services in North Naples, FL. Same-day service for Pelican Bay, Pine Ridge, and surrounding communities. Expert technicians for all major brands.";

  const localServices = [
    "Refrigerator Repair North Naples",
    "Washer & Dryer Repair North Naples", 
    "Oven & Range Repair North Naples",
    "Dishwasher Repair North Naples",
    "Microwave Repair North Naples",
    "Wine Cooler Repair North Naples"
  ];

  const neighborhoods = [
    "Pelican Bay",
    "Pine Ridge",
    "Park Shore",
    "Seagate",
    "Pelican Marsh",
    "Tiburon"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair North Naples FL, refrigerator repair North Naples, washer repair North Naples, Pelican Bay appliance repair, Pine Ridge appliance repair, luxury appliance repair North Naples" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/north-naples-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/north-naples-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - North Naples",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/north-naples-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "North Naples",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.2378,
              "longitude": -81.8073
            },
            "areaServed": {
              "@type": "City",
              "name": "North Naples",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.2378,
                "longitude": -81.8073
              },
              "geoRadius": "15000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "North Naples Appliance Repair Services",
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
              Appliance Repair North Naples FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Premier appliance repair services for North Naples luxury communities. Expert technicians 
              specializing in high-end appliances for Pelican Bay, Pine Ridge, and Park Shore.
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

        {/* Luxury Focus Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Luxury Appliance Repair in North Naples
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                North Naples is home to some of Southwest Florida's most prestigious communities. 
                Our technicians specialize in luxury and high-end appliances found in these upscale homes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Premium Appliance Brands We Service</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-[#ff6b00]">Ultra-Luxury Brands</h4>
                    <p className="text-sm text-gray-600">Sub-Zero, Wolf, Viking, Thermador, Miele, Dacor</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-[#ff6b00]">Premium Brands</h4>
                    <p className="text-sm text-gray-600">KitchenAid Professional, Bosch, Fisher & Paykel</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-[#ff6b00]">Smart & Connected</h4>
                    <p className="text-sm text-gray-600">Samsung, LG, GE Profile, Whirlpool Smart</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Specialized Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-wine-glass text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Wine Cooler Repair</h4>
                      <p className="text-gray-600 text-sm">Specialized service for wine storage systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-snowflake text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Built-in Refrigeration</h4>
                      <p className="text-gray-600 text-sm">Expert repair for integrated luxury refrigerators</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-fire text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Professional Ranges</h4>
                      <p className="text-gray-600 text-sm">Service for commercial-grade home ranges</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-mobile-alt text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Smart Appliances</h4>
                      <p className="text-gray-600 text-sm">Connected appliance troubleshooting and repair</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                North Naples Communities We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From beachfront Pelican Bay to golf course communities like Tiburon, we provide 
                premium appliance repair services throughout North Naples.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-[#0056b3] mb-2">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mb-3">Premium appliance repair service</p>
                  <div className="flex items-center text-xs text-[#ff6b00]">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span>Same-day service available</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Complete North Naples Appliance Repair Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in North Naples</h3>
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

        {/* CTA Section */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              North Naples' Premier Appliance Repair Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Trust the experts who understand luxury appliances. From Pelican Bay to Pine Ridge, 
              we're ready to restore your appliances to perfect working condition.
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

export default NorthNaplesApplianceRepair;