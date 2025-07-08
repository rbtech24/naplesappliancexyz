import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const ImmokaleesApplianceRepair = () => {
  const pageTitle = "Appliance Repair Immokalee FL | Affordable Community Service";
  const pageDescription = "Professional appliance repair services in Immokalee, FL. Affordable, reliable service for all major appliance brands. Bilingual technicians available for the Immokalee community.";

  const localServices = [
    "Refrigerator Repair Immokalee",
    "Washer & Dryer Repair Immokalee", 
    "Oven & Range Repair Immokalee",
    "Dishwasher Repair Immokalee",
    "Microwave Repair Immokalee",
    "AC Unit Repair Immokalee"
  ];

  const neighborhoods = [
    "Downtown Immokalee",
    "Eden Park",
    "Timber Ridge",
    "Westclox",
    "Farm Worker Village",
    "Roberts Ranch"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Immokalee FL, refrigerator repair Immokalee, affordable appliance repair Immokalee, bilingual appliance service Immokalee, Spanish speaking technicians Immokalee" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/immokalee-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/immokalee-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Immokalee",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/immokalee-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Immokalee",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.4187,
              "longitude": -81.4176
            },
            "areaServed": {
              "@type": "City",
              "name": "Immokalee",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.4187,
                "longitude": -81.4176
              },
              "geoRadius": "15000"
            },
            "priceRange": "$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Immokalee Appliance Repair Services",
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
              Appliance Repair Immokalee FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Affordable, professional appliance repair services for the Immokalee community. 
              Bilingual technicians providing honest, reliable service for all residents.
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
                  Serving the Immokalee Community
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Immokalee is the heart of Southwest Florida's agricultural community, home to hard-working 
                  families who deserve reliable, affordable appliance repair services. Our team understands 
                  the unique needs of this diverse community and provides honest, transparent service.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We're proud to serve Immokalee with bilingual technicians who can communicate effectively 
                  with all residents. Our focus is on providing quality repairs at fair prices, helping 
                  families keep their essential appliances running without breaking the budget.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0056b3] mb-3">Our Immokalee Commitment</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Affordable pricing for all community members</li>
                    <li>• Bilingual service (English and Spanish)</li>
                    <li>• Flexible payment options</li>
                    <li>• No hidden fees or surprise charges</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Community-Focused Service</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <i className="fas fa-users text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Bilingual Support</h4>
                          <p className="text-gray-600 text-sm">Spanish and English speaking technicians available</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-dollar-sign text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Fair Pricing</h4>
                          <p className="text-gray-600 text-sm">Affordable rates with no hidden costs</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-handshake text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Community Trust</h4>
                          <p className="text-gray-600 text-sm">Building relationships with Immokalee families</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ff6b00]">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Service Promise</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ Upfront, honest pricing estimates</li>
                      <li>✓ Quality repairs that last</li>
                      <li>✓ Respectful, professional service</li>
                      <li>✓ Support for all appliance brands</li>
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
                Affordable Immokalee Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quality appliance repair services for all Immokalee neighborhoods, 
                with transparent pricing and honest recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Immokalee</h3>
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

        {/* Areas Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">
                Immokalee Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional appliance repair services throughout all Immokalee neighborhoods 
                and surrounding rural areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="font-bold text-[#0056b3] mb-2">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mb-3">Community-focused service</p>
                  <div className="flex items-center justify-center text-xs text-[#ff6b00]">
                    <i className="fas fa-home mr-2"></i>
                    <span>Affordable expert care</span>
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
              Immokalee's Trusted Appliance Repair Service
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Serving Immokalee families with honest, affordable appliance repairs. 
              Call today for reliable service you can trust.
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

export default ImmokaleesApplianceRepair;