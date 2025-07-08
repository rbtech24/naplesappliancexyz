import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const PineRidgeApplianceRepair = () => {
  const pageTitle = "Appliance Repair Pine Ridge FL | Professional Service Near You";
  const pageDescription = "Expert appliance repair services in Pine Ridge, Naples FL. Professional technicians for all major brands. Same-day service available in Pine Ridge and surrounding areas.";

  const localServices = [
    "Refrigerator Repair Pine Ridge",
    "Washer & Dryer Repair Pine Ridge", 
    "Oven & Range Repair Pine Ridge",
    "Dishwasher Repair Pine Ridge",
    "Microwave Repair Pine Ridge",
    "Garbage Disposal Repair Pine Ridge"
  ];

  const neighborhoods = [
    "Pine Ridge Estates",
    "Pine Ridge Country Club",
    "Crossings",
    "Berkshire Lakes",
    "Pelican Marsh",
    "North Naples"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Pine Ridge FL, refrigerator repair Pine Ridge Naples, washer repair Pine Ridge, dryer repair Pine Ridge, Pine Ridge Country Club appliance repair" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/pine-ridge-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/pine-ridge-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Pine Ridge",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/pine-ridge-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pine Ridge",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.2289,
              "longitude": -81.7735
            },
            "areaServed": {
              "@type": "Place",
              "name": "Pine Ridge",
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
                "latitude": 26.2289,
                "longitude": -81.7735
              },
              "geoRadius": "10000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pine Ridge Appliance Repair Services",
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
              Appliance Repair Pine Ridge FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional appliance repair services in Pine Ridge, Naples. Expert technicians serving 
              Pine Ridge Country Club and surrounding North Naples communities with same-day service.
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

        {/* Community Focus Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Pine Ridge Community Experts
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Pine Ridge is one of Naples' most established and desirable areas, known for its 
                  championship golf course, luxury homes, and convenient location. Our appliance repair 
                  technicians are familiar with the diverse housing styles and appliance needs throughout 
                  this prestigious community.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  From the classic homes near Pine Ridge Country Club to the newer developments in 
                  surrounding areas, we provide reliable appliance repair services that Pine Ridge 
                  residents have trusted for over 15 years.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-golf-ball text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Golf Community Specialist</h4>
                      <p className="text-gray-600 text-sm">Familiar with luxury homes and high-end appliances</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-clock text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Convenient Scheduling</h4>
                      <p className="text-gray-600 text-sm">Flexible appointments to fit your lifestyle</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Pine Ridge Service Areas</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                        <i className="fas fa-map-marker-alt text-[#ff6b00] mr-3"></i>
                        <div>
                          <h4 className="font-bold text-[#0056b3] text-sm">{neighborhood}</h4>
                          <p className="text-xs text-gray-600">Professional appliance repair</p>
                        </div>
                      </div>
                    ))}
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
                Complete Pine Ridge Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From routine maintenance to emergency repairs, we provide comprehensive appliance services 
                for Pine Ridge residents and businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Pine Ridge</h3>
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

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Why Pine Ridge Residents Choose Us
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Local Reputation</h3>
                <p className="text-gray-600">Trusted by Pine Ridge residents for over 15 years</p>
              </div>
              
              <div className="text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-tools"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Factory-trained professionals with extensive experience</p>
              </div>
              
              <div className="text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-clock"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Same-Day Service</h3>
                <p className="text-gray-600">Quick response times throughout Pine Ridge area</p>
              </div>
              
              <div className="text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Warranty Protection</h3>
                <p className="text-gray-600">All repairs backed by comprehensive warranty</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Pine Ridge's Trusted Appliance Repair Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From Pine Ridge Country Club to Pelican Marsh, we're ready to fix your appliances today. 
              Call Naples Appliance Repair for expert service.
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

export default PineRidgeApplianceRepair;