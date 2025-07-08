import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import { serviceAreas } from "@/lib/serviceData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import collierCountyMapImage from "@assets/collier county_1751931295728.png";
import { CityLink, linkifyCities } from "@/utils/cityLinks";

const ServiceAreasPage = () => {
  // Map of Collier County - using local high-quality image
  const collierCountyMapUrl = collierCountyMapImage;

  // Additional content about service areas
  const areaDescriptions = {
    naples: `Naples is the heart of our service area. From Park Shore to Royal Harbor, Golden Gate to Pelican Bay, 
    we provide prompt appliance repair services throughout all Naples neighborhoods.`,
    
    marcoIsland: `We proudly service all of Marco Island with our appliance repair expertise. Our team regularly 
    visits the island for same-day service calls.`,
    
    bonitaSprings: `Bonita Springs residents can count on our technicians for fast, reliable appliance repairs. 
    We service all neighborhoods in the Bonita Springs area.`,
    
    estero: `Our service coverage includes the entire Estero area. From Estero Bay to Coconut Point, 
    we're ready to handle your appliance repair needs.`,
    
    surrounding: `In addition to our primary service areas, we also provide appliance repair services to the 
    surrounding communities of Collier County, including Immokalee, Everglades City, and more.`
  };

  // Group service areas geographically for the table
  const groupedAreas = {
    northernAreas: serviceAreas.filter(area => 
      ["Bonita Springs", "Estero", "North Naples", "Naples Park"].includes(area.name)
    ),
    centralAreas: serviceAreas.filter(area => 
      ["Naples", "Pelican Bay", "Pine Ridge", "Golden Gate"].includes(area.name)
    ),
    easternAreas: serviceAreas.filter(area => 
      ["East Naples", "Lely", "Immokalee"].includes(area.name)
    ),
    southernAreas: serviceAreas.filter(area => 
      ["Marco Island", "Everglades City"].includes(area.name)
    ),
    westernAreas: serviceAreas.filter(area => 
      ["Fort Myers"].includes(area.name)
    )
  };
  
  return (
    <>
      <Helmet>
        <title>Service Areas | {siteMetadata.title}</title>
        <meta name="description" content="Naples Appliance Repair services all of Naples, Marco Island, Bonita Springs, Estero and surrounding areas in Collier County, Florida. See our complete service coverage map." />
        <meta name="keywords" content="Naples appliance repair service areas, Collier County appliance repair, Marco Island appliance service, Bonita Springs appliance repair, Estero appliance repair, Florida appliance technicians, appliance repair coverage map" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={`Service Areas | ${siteMetadata.title}`} />
        <meta property="og:description" content="Naples Appliance Repair services all of Naples, Marco Island, Bonita Springs, Estero and surrounding areas in Collier County, Florida. See our complete service coverage map." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/service-areas`} />
        <meta property="og:image" content={collierCountyMapUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Service Areas | ${siteMetadata.title}`} />
        <meta name="twitter:description" content="Naples Appliance Repair services all of Naples, Marco Island, Bonita Springs, Estero and surrounding areas in Collier County, Florida. See our complete service coverage map." />
        <meta name="twitter:image" content={collierCountyMapUrl} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/service-areas`} />
        
        {/* Service Areas structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair",
            "url": siteMetadata.siteUrl,
            "telephone": siteMetadata.phoneNumber,
            "email": siteMetadata.email,
            "image": `${siteMetadata.siteUrl}/logo.png`,
            "description": "Professional appliance repair service covering Naples, Marco Island, Bonita Springs, Estero and surrounding areas in Collier County, Florida.",
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
            "areaServed": [
              {
                "@type": "City",
                "name": "Naples",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              },
              {
                "@type": "City",
                "name": "Marco Island",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              },
              {
                "@type": "City",
                "name": "Bonita Springs",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              },
              {
                "@type": "City",
                "name": "Estero",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              },
              {
                "@type": "City",
                "name": "Golden Gate",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              },
              {
                "@type": "City",
                "name": "Immokalee",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Florida"
                }
              }
            ],
            "hasMap": collierCountyMapUrl,
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 26.1420,
                "longitude": -81.7948
              },
              "geoRadius": "40000"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "15:00"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-[#0056b3] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Our Service Areas</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Naples Appliance Repair proudly serves Naples and surrounding communities throughout Collier County, Florida.
            </p>
          </div>
        </section>
        
        {/* Map & Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Service Coverage
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Naples Appliance Repair, we provide comprehensive appliance repair services throughout Naples
                  and the surrounding communities in Southwest Florida. Our service area covers all of Collier County
                  and extends to parts of Lee County.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team of technicians is strategically located throughout the region, allowing us to offer prompt service
                  with quick response times. In many cases, we can provide same-day or next-day service depending on your location
                  and the nature of the repair needed.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We understand that when an appliance breaks down, you need help fast. That's why we've designed our service
                  area and scheduling system to ensure we can reach you quickly, no matter where you are in the Naples area.
                </p>
                <Button asChild className="bg-[#0056b3] hover:bg-[#ff6b00] text-white font-bold py-3 px-8 rounded-full shadow-md">
                  <a href="/#contact">Schedule Service</a>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="flex justify-center items-center h-full">
                  <img 
                    src={collierCountyMapUrl} 
                    alt="Map of Collier County, Florida showing Naples, Marco Island, Everglades City, and Immokalee service areas" 
                    className="rounded-lg shadow-lg w-full h-auto border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Areas We Serve */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">Areas We Serve</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our service coverage extends throughout these communities in Southwest Florida:
              </p>
            </div>
            
            <div className="overflow-x-auto mb-12">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-[#0056b3] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Northern Areas</th>
                    <th className="py-3 px-4 text-left">Central Areas</th>
                    <th className="py-3 px-4 text-left">Eastern Areas</th>
                    <th className="py-3 px-4 text-left">Southern Areas</th>
                    <th className="py-3 px-4 text-left">Western Areas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 align-top">
                      <ul className="list-disc list-inside">
                        {groupedAreas.northernAreas.map((area, index) => (
                          <li key={index} className="text-gray-700 py-1">
                            <CityLink 
                              cityName={area.name}
                              className="text-gray-700 hover:text-[#0056b3] transition-colors"
                            />
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <ul className="list-disc list-inside">
                        {groupedAreas.centralAreas.map((area, index) => (
                          <li key={index} className="text-gray-700 py-1">
                            <CityLink 
                              cityName={area.name}
                              className="text-gray-700 hover:text-[#0056b3] transition-colors"
                            />
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <ul className="list-disc list-inside">
                        {groupedAreas.easternAreas.map((area, index) => (
                          <li key={index} className="text-gray-700 py-1">
                            <CityLink 
                              cityName={area.name}
                              className="text-gray-700 hover:text-[#0056b3] transition-colors"
                            />
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <ul className="list-disc list-inside">
                        {groupedAreas.southernAreas.map((area, index) => (
                          <li key={index} className="text-gray-700 py-1">
                            <CityLink 
                              cityName={area.name}
                              className="text-gray-700 hover:text-[#0056b3] transition-colors"
                            />
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-3 px-4 align-top">
                      <ul className="list-disc list-inside">
                        {groupedAreas.westernAreas.map((area, index) => (
                          <li key={index} className="text-gray-700 py-1">
                            <CityLink 
                              cityName={area.name}
                              className="text-gray-700 hover:text-[#0056b3] transition-colors"
                            />
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0056b3] mb-4">
                  <CityLink 
                    cityName="Naples"
                    className="text-[#0056b3] hover:text-[#ff6b00] transition-colors"
                  />
                </h3>
                <p className="text-gray-700">
                  {linkifyCities(areaDescriptions.naples, "text-gray-700 hover:text-[#0056b3]")}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0056b3] mb-4">
                  <CityLink 
                    cityName="Marco Island"
                    className="text-[#0056b3] hover:text-[#ff6b00] transition-colors"
                  />
                </h3>
                <p className="text-gray-700">
                  {linkifyCities(areaDescriptions.marcoIsland, "text-gray-700 hover:text-[#0056b3]")}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0056b3] mb-4">
                  <CityLink 
                    cityName="Bonita Springs"
                    className="text-[#0056b3] hover:text-[#ff6b00] transition-colors"
                  />
                </h3>
                <p className="text-gray-700">
                  {linkifyCities(areaDescriptions.bonitaSprings, "text-gray-700 hover:text-[#0056b3]")}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#0056b3] mb-4">
                  <CityLink 
                    cityName="Estero"
                    className="text-[#0056b3] hover:text-[#ff6b00] transition-colors"
                  />
                </h3>
                <p className="text-gray-700">
                  {linkifyCities(areaDescriptions.estero, "text-gray-700 hover:text-[#0056b3]")}
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#0056b3] mb-4">Additional Service Areas</h3>
              <p className="text-gray-700">
                {linkifyCities(areaDescriptions.surrounding, "text-gray-700 hover:text-[#0056b3]")}
              </p>
            </div>
          </div>
        </section>
        
        {/* Service Radius Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6 text-center">
                Service Response Times
              </h2>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-bold text-[#0056b3] mb-4">Primary Service Area</h3>
                <p className="text-lg text-gray-700 mb-4">
                  {linkifyCities("Our primary service area includes Naples, Marco Island, and immediate surrounding communities. Within this area, we offer:", "text-gray-700 hover:text-[#0056b3]")}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Same-day service in many cases</li>
                  <li>Guaranteed next-day service for non-emergencies</li>
                  <li>Priority scheduling for emergency situations</li>
                  <li>No additional travel fees</li>
                </ul>
                <p className="text-lg text-gray-700">
                  If you're in our primary service area, you can expect a quick response and efficient service from our team.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#0056b3] mb-4">Extended Service Areas</h3>
                <p className="text-lg text-gray-700 mb-4">
                  {linkifyCities("For communities in our extended service area, such as Fort Myers and Immokalee:", "text-gray-700 hover:text-[#0056b3]")}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Service typically available within 1-2 business days</li>
                  <li>Emergency service available with priority scheduling</li>
                  <li>Minimal travel fees may apply for some locations</li>
                </ul>
                <p className="text-lg text-gray-700">
                  We strive to provide prompt service to all our customers, regardless of location. If you're unsure whether your address falls within our service area, please contact us, and we'll be happy to assist you.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Need Appliance Repair in Your Area?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact Naples Appliance Repair today to schedule service for your home. We'll dispatch a qualified technician to your location promptly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild variant="outline" className="bg-white hover:bg-[#ff6b00] hover:text-white text-[#0056b3] text-lg font-bold py-3 px-8 rounded-full shadow-lg">
                <a href="/#contact">Schedule Repair</a>
              </Button>
              <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#ff6b00] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg">
                <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`}>
                  <i className="fas fa-phone-alt mr-2"></i> Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ServiceAreasPage;