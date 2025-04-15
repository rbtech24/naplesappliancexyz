import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const AboutUsPage = () => {
  // Features list for display in the About section
  const features = [
    {
      icon: "fa-medal",
      title: "Certified Experts",
      description: "Factory-trained professionals"
    },
    {
      icon: "fa-history",
      title: "15+ Years",
      description: "Serving Naples and SW Florida"
    },
    {
      icon: "fa-hand-holding-usd",
      title: "Fair Pricing",
      description: "No hidden fees or charges"
    },
    {
      icon: "fa-shield-alt",
      title: "Warranty",
      description: "On all parts and labor"
    }
  ];

  // Map of Collier County
  const collierCountyMapUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_of_Florida_highlighting_Collier_County.svg/1200px-Map_of_Florida_highlighting_Collier_County.svg.png";

  return (
    <>
      <Helmet>
        <title>About Us | {siteMetadata.title}</title>
        <meta name="description" content="Learn about Naples Appliance Repair, the trusted name in appliance repair in Naples, FL with over 15 years of experience serving Southwest Florida." />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-[#0056b3] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">About Our Company</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Naples Appliance Repair is the most trusted appliance repair service in Southwest Florida,
              delivering exceptional service with integrity and professionalism.
            </p>
          </div>
        </section>
        
        {/* Main About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  For over 15 years, Naples Appliance Repair has been the trusted name in appliance repair services throughout Southwest Florida. 
                  Our family-owned business takes pride in delivering exceptional service with integrity and professionalism.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We started as a small local repair service and have grown to become one of the most respected appliance repair companies in Collier County. 
                  Our growth is a testament to our commitment to customer satisfaction and technical excellence in every repair we perform.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team of factory-trained and certified technicians has the expertise to repair all major appliance brands and models. We understand that 
                  appliance breakdowns can disrupt your daily life, which is why we offer prompt, same-day service in many cases.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <i className={`fas ${feature.icon} text-[#ff6b00] mt-1 mr-3`}></i>
                      <div>
                        <h4 className="font-bold text-gray-800">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-[#0056b3] hover:bg-[#ff6b00] text-white font-bold py-3 px-8 rounded-full shadow-md">
                  <a href="/#contact">Contact Our Team</a>
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="flex justify-center items-center h-full">
                  <img 
                    src={collierCountyMapUrl} 
                    alt="Map of Collier County, Florida" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Naples Appliance Repair, our business is built on a foundation of core values that guide everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every repair we perform, using quality parts and thorough diagnostics to ensure lasting solutions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We believe in honest assessments, fair pricing, and transparent communication with our customers at all times.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-[#ff6b00] text-4xl mb-4">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Customer Care</h3>
                <p className="text-gray-600">
                  We treat each customer's home with respect and prioritize their needs, ensuring their satisfaction with every interaction.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">Our Expert Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our technicians are the heart of our business, bringing years of experience and dedication to every service call.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#0056b3] mb-4">Certified Technicians</h3>
                <p className="text-lg text-gray-600 mb-6">
                  All our repair technicians undergo rigorous training and certification processes to ensure they have the knowledge and skills to handle any appliance repair challenge. Many of our team members have over a decade of experience in the field.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We regularly update our training to stay current with the latest appliance models and technologies. This commitment to ongoing education allows us to service even the newest high-tech appliances with confidence.
                </p>
                <p className="text-lg text-gray-600">
                  Our technicians are not only skilled at repairs but also excel at customer service. They'll take the time to explain the issue with your appliance, answer any questions you may have, and provide maintenance tips to help prevent future problems.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Experience Our Service?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact Naples Appliance Repair today for fast, professional service from our team of appliance repair experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild variant="outline" className="bg-white hover:bg-[#ff6b00] hover:text-white text-[#0056b3] text-lg font-bold py-3 px-8 rounded-full shadow-lg">
                <a href="/#contact">Request Service</a>
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

export default AboutUsPage;