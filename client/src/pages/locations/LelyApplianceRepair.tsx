import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";
import { linkifyBrands } from "@/utils/brandLinks";
import { linkifyServices } from "@/utils/serviceLinks";

const LelyApplianceRepair = () => {
  const pageTitle = "Appliance Repair Lely FL | Golf Community Specialists";
  const pageDescription = "Professional appliance repair services in Lely Resort, FL. Expert technicians serving golf community homes. Same-day service for all major appliance brands in Lely and surrounding areas.";

  const localServices = [
    "Refrigerator Repair Lely",
    "Washer & Dryer Repair Lely", 
    "Oven & Range Repair Lely",
    "Dishwasher Repair Lely",
    "Microwave Repair Lely",
    "Wine Cooler Repair Lely"
  ];

  const neighborhoods = [
    "Lely Resort",
    "Lely Country Club",
    "Ole",
    "Mustang Island",
    "Flamingo Island",
    "Lakoya"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Lely FL, Lely Resort appliance repair, golf community appliance repair, refrigerator repair Lely, Lely Country Club appliance service" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/lely-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/lely-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Lely",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/lely-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lely",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.0901,
              "longitude": -81.7690
            },
            "areaServed": {
              "@type": "Place",
              "name": "Lely Resort",
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
                "latitude": 26.0901,
                "longitude": -81.7690
              },
              "geoRadius": "10000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Lely Appliance Repair Services",
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
              Appliance Repair Lely FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional appliance repair services for Lely Resort and surrounding communities. 
              Expert technicians specializing in golf community homes and luxury appliances.
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

        {/* Golf Community Focus Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Lely Resort Appliance Specialists
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Lely Resort is one of Naples' premier golf communities, featuring three championship golf courses 
                  and luxury homes. Our appliance repair technicians understand the unique needs of this upscale 
                  community, from villa-style condos to custom estate homes.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With over 15 years of experience serving Lely residents, we're familiar with the common appliance 
                  configurations found throughout the resort's neighborhoods, from the elegant homes at Ole to the 
                  island communities of Mustang and Flamingo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-golf-ball text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Golf Community Expert</h4>
                      <p className="text-gray-600 text-sm">Specialized service for resort-style living</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-home text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Villa & Estate Experience</h4>
                      <p className="text-gray-600 text-sm">Familiar with all housing styles in Lely</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-[#0056b3] mb-6">Lely Community Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <i className="fas fa-flag text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Three Golf Courses</h4>
                        <p className="text-gray-600 text-sm">Flamingo Island, Mustang Island, and Classic courses</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-swimming-pool text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Resort Amenities</h4>
                        <p className="text-gray-600 text-sm">Multiple clubhouses, pools, and recreational facilities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <i className="fas fa-map-marked-alt text-[#ff6b00] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-bold">Multiple Neighborhoods</h4>
                        <p className="text-gray-600 text-sm">Diverse housing options from condos to custom homes</p>
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
                Complete Lely Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive appliance repair services for all Lely Resort neighborhoods, 
                from golf course villas to waterfront estates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Lely</h3>
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
                Lely Resort Communities We Serve
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-bold text-[#0056b3] mb-2">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mb-3">Golf community service</p>
                  <div className="flex items-center justify-center text-xs text-[#ff6b00]">
                    <i className="fas fa-golf-ball mr-2"></i>
                    <span>Resort specialist coverage</span>
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
              Lely Resort's Trusted Appliance Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From Ole to Mustang Island, we're ready to service your appliances with the 
              professionalism that Lely Resort residents expect.
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

export default LelyApplianceRepair;