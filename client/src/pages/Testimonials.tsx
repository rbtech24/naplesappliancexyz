import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { Testimonial } from "@/types";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await apiRequest("GET", "/api/testimonials");
        const data = await response.json();
        setTestimonials(data.testimonials);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <>
      <Helmet>
        <title>Customer Testimonials | {siteMetadata.title}</title>
        <meta name="description" content="Read what our customers are saying about Naples Appliance Repair. Our commitment to quality service has made us the most trusted appliance repair service in Naples, FL." />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-[#0056b3] py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Customer Testimonials</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Don't just take our word for it. Read what our customers have to say about our appliance repair services.
            </p>
          </div>
        </section>
        
        {/* Testimonials Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're proud of the reputation we've built in Naples and throughout Southwest Florida. Our customers' satisfaction is our top priority.
              </p>
            </div>
            
            {isLoading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0056b3]"></div>
                <p className="mt-4 text-gray-600">Loading testimonials...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-1 mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                      <div className="bg-[#0056b3]/10 p-2 rounded-full">
                        <i className="fas fa-user text-[#0056b3]"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Additional Customer Stories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">Customer Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Read about some of our more challenging repairs and how we helped our customers.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#0056b3] mb-4">Emergency Refrigerator Repair During Summer Heatwave</h3>
                <p className="text-lg text-gray-600 mb-6">
                  When the Johnson family's refrigerator stopped cooling during the hottest week of the year, they were facing the prospect of losing hundreds of dollars in groceries. Our technician arrived within hours of their call, quickly diagnosed a failed compressor, and had the refrigerator back up and running before any food spoiled.
                </p>
                <div className="flex items-center">
                  <div className="bg-[#0056b3]/10 p-3 rounded-full mr-4">
                    <i className="fas fa-quote-right text-[#0056b3]"></i>
                  </div>
                  <p className="italic text-gray-700">
                    "Naples Appliance Repair saved us from a disaster. Their quick response and expertise were impressive. We now recommend them to all our friends."
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#0056b3] mb-4">Complex Washing Machine Issue Solved</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Ms. Garcia had been told by two other repair companies that her high-end washing machine needed to be replaced due to a complex electronic issue. Our technician took the time to properly diagnose the problem and found that it was actually a repairable control board issue, saving her thousands on a replacement.
                </p>
                <div className="flex items-center">
                  <div className="bg-[#0056b3]/10 p-3 rounded-full mr-4">
                    <i className="fas fa-quote-right text-[#0056b3]"></i>
                  </div>
                  <p className="italic text-gray-700">
                    "I appreciate how thorough and honest Naples Appliance Repair was. They could have easily told me to replace the machine like everyone else, but instead found a way to fix it for a fraction of the cost."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Review Platforms */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-4">Find Us On Review Platforms</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We appreciate our customers taking the time to share their experiences. 
                Check out our reviews on these platforms or leave a review if we've helped you.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a 
                href={siteMetadata.socialLinks.google} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105"
              >
                <i className="fab fa-google text-5xl text-[#4285F4] mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Google Reviews</h3>
                <p className="text-gray-600 text-center mb-4">Read our 4.8-star reviews from satisfied customers</p>
                <Button className="bg-[#4285F4] hover:bg-[#3367D6]">Visit Google Reviews</Button>
              </a>
              
              <a 
                href={siteMetadata.socialLinks.yelp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105"
              >
                <i className="fab fa-yelp text-5xl text-[#D32323] mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Yelp</h3>
                <p className="text-gray-600 text-center mb-4">See what Naples residents are saying on Yelp</p>
                <Button className="bg-[#D32323] hover:bg-[#AF0606]">Visit Yelp</Button>
              </a>
              
              <a 
                href={siteMetadata.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105"
              >
                <i className="fab fa-facebook text-5xl text-[#3b5998] mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Facebook</h3>
                <p className="text-gray-600 text-center mb-4">Check our recommendations on Facebook</p>
                <Button className="bg-[#3b5998] hover:bg-[#2d4373]">Visit Facebook</Button>
              </a>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-[#0056b3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Experience Our Service For Yourself
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join our hundreds of satisfied customers. Contact us today for fast, professional appliance repair.
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

export default TestimonialsPage;