import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/serviceData";

const FortMyersApplianceRepair = () => {
  const pageTitle = "Appliance Repair Fort Myers FL | Lee County Expert Service";
  const pageDescription = "Professional appliance repair services in Fort Myers, FL. Expert technicians serving Lee County with same-day service for all major appliance brands. Reliable repairs you can trust.";

  const localServices = [
    "Refrigerator Repair Fort Myers",
    "Washer & Dryer Repair Fort Myers", 
    "Oven & Range Repair Fort Myers",
    "Dishwasher Repair Fort Myers",
    "Microwave Repair Fort Myers",
    "Ice Maker Repair Fort Myers"
  ];

  const neighborhoods = [
    "Downtown Fort Myers",
    "McGregor",
    "Fort Myers Shores",
    "Iona",
    "Villas",
    "San Carlos Park"
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="appliance repair Fort Myers FL, refrigerator repair Fort Myers, Lee County appliance repair, washer repair Fort Myers, same day appliance repair Fort Myers" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/fort-myers-appliance-repair`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/fort-myers-appliance-repair`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair - Fort Myers",
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "url": `${siteMetadata.siteUrl}/fort-myers-appliance-repair`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fort Myers",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.5407,
              "longitude": -81.8723
            },
            "areaServed": {
              "@type": "City",
              "name": "Fort Myers",
              "containedInPlace": {
                "@type": "State",
                "name": "Florida"
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.5407,
                "longitude": -81.8723
              },
              "geoRadius": "25000"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 07:00-19:00, Sa 08:00-17:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fort Myers Appliance Repair Services",
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
              Appliance Repair Fort Myers FL
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional appliance repair services throughout Fort Myers and Lee County. 
              Expert technicians providing same-day service for all major appliance brands.
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

        {/* Fort Myers Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Fort Myers Appliance Experts
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Fort Myers is the heart of Lee County, a vibrant city with diverse neighborhoods 
                  from historic downtown to modern developments. Our appliance repair technicians 
                  serve the entire Fort Myers area with the expertise and professionalism that 
                  residents and businesses have trusted for over 15 years.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're in a downtown high-rise, a McGregor waterfront home, or a family 
                  neighborhood in San Carlos Park, our team understands the unique appliance needs 
                  throughout Fort Myers and provides reliable, efficient repair services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-city text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Urban & Suburban Experience</h4>
                      <p className="text-gray-600 text-sm">Serving all Fort Myers neighborhoods and housing types</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-business-time text-[#ff6b00] mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold">Commercial & Residential</h4>
                      <p className="text-gray-600 text-sm">Expert service for homes and businesses</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Fort Myers Service Benefits</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <i className="fas fa-map-marked-alt text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Central Location</h4>
                          <p className="text-gray-600 text-sm">Quick access to all Lee County areas</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-clock text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Fast Response</h4>
                          <p className="text-gray-600 text-sm">Same-day service throughout Fort Myers</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <i className="fas fa-tools text-[#ff6b00] mt-1 mr-3"></i>
                        <div>
                          <h4 className="font-bold">Full-Service Team</h4>
                          <p className="text-gray-600 text-sm">Complete appliance repair capabilities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#ff6b00]">
                    <h3 className="text-xl font-bold text-[#0056b3] mb-4">Lee County Coverage</h3>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✓ Fort Myers and all surrounding areas</li>
                      <li>✓ Extended service to Bonita Springs and Estero</li>
                      <li>✓ Commercial and residential properties</li>
                      <li>✓ Emergency and scheduled service calls</li>
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
                Complete Fort Myers Appliance Repair Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive appliance repair services for Fort Myers residents and businesses, 
                covering all major appliance brands and models.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] text-3xl mb-4">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0056b3]">{service.title} in Fort Myers</h3>
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
                Fort Myers Areas We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional appliance repair services throughout all Fort Myers neighborhoods 
                and surrounding Lee County communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-[#0056b3] mb-2">{neighborhood}</h3>
                  <p className="text-sm text-gray-600 mb-3">Expert appliance service</p>
                  <div className="flex items-center justify-center text-xs text-[#ff6b00]">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>Lee County coverage</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#0056b3] mb-6 text-center">Extended Service Area</h3>
              <p className="text-lg text-gray-700 text-center mb-6">
                While based in Naples, we proudly extend our expert appliance repair services 
                to Fort Myers and throughout Lee County, providing the same quality service 
                that has made us Southwest Florida's trusted choice.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-bold text-[#0056b3] mb-2">Same Quality Service</h4>
                  <p className="text-sm text-gray-600">Identical standards and expertise as our Naples service</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0056b3] mb-2">Regional Coverage</h4>
                  <p className="text-sm text-gray-600">Serving the entire Southwest Florida region</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0056b3] mb-2">Local Knowledge</h4>
                  <p className="text-sm text-gray-600">Understanding of Fort Myers' unique needs and challenges</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Fort Myers' Extended Service Experts
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              From downtown Fort Myers to San Carlos Park, we bring Naples-quality appliance repair 
              services to Lee County. Call today for expert service.
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

export default FortMyersApplianceRepair;