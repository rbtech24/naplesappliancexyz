import { siteMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0056b3] mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              Need appliance repair in Naples or surrounding areas? Fill out the form and we'll contact you promptly to schedule service, or call us directly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 bg-[#0056b3]/10 p-3 rounded-full">
                  <i className="fas fa-map-marker-alt text-[#0056b3] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Our Location</h3>
                  <p className="text-gray-700">{siteMetadata.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-[#0056b3]/10 p-3 rounded-full">
                  <i className="fas fa-phone-alt text-[#0056b3] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-gray-700">{siteMetadata.phoneNumber}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-[#0056b3]/10 p-3 rounded-full">
                  <i className="fas fa-envelope text-[#0056b3] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-700">{siteMetadata.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-[#0056b3]/10 p-3 rounded-full">
                  <i className="fas fa-clock text-[#0056b3] text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Business Hours</h3>
                  <p className="text-gray-700">Monday-Friday: {siteMetadata.openingHours.weekdays}</p>
                  <p className="text-gray-700">Saturday: {siteMetadata.openingHours.saturday}</p>
                  <p className="text-gray-700">Sunday: {siteMetadata.openingHours.sunday}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href={siteMetadata.socialLinks.facebook} className="bg-[#0056b3]/10 hover:bg-[#0056b3] text-[#0056b3] hover:text-white p-3 rounded-full transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={siteMetadata.socialLinks.google} className="bg-[#0056b3]/10 hover:bg-[#0056b3] text-[#0056b3] hover:text-white p-3 rounded-full transition">
                <i className="fab fa-google"></i>
              </a>
              <a href={siteMetadata.socialLinks.yelp} className="bg-[#0056b3]/10 hover:bg-[#0056b3] text-[#0056b3] hover:text-white p-3 rounded-full transition">
                <i className="fab fa-yelp"></i>
              </a>
              <a href={siteMetadata.socialLinks.instagram} className="bg-[#0056b3]/10 hover:bg-[#0056b3] text-[#0056b3] hover:text-white p-3 rounded-full transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-bold mb-6">Schedule Service</h3>
              
              <form action="https://formsubmit.co/appliancerepaicsr@gmail.com" method="POST" className="space-y-6">
                {/* FormSubmit.co configuration */}
                <input type="hidden" name="_subject" value="Naples Appliance Repair - New Service Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://naplesappliancerepair.xyz/?thankyou=true" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0056b3] focus:border-[#0056b3]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0056b3] focus:border-[#0056b3]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0056b3] focus:border-[#0056b3]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input 
                      type="text" 
                      name="address" 
                      id="address" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0056b3] focus:border-[#0056b3]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="appliance" className="block text-sm font-medium text-gray-700 mb-1">Appliance Type*</label>
                  <select 
                    name="appliance" 
                    id="appliance" 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0056b3] focus:border-[#0056b3]"
                    defaultValue=""
                  >
                    <option value="" disabled>Select Appliance</option>
                    <option value="refrigerator">Refrigerator</option>
                    <option value="washer">Washer</option>
                    <option value="dryer">Dryer</option>
                    <option value="oven">Oven/Range</option>
                    <option value="dishwasher">Dishwasher</option>
                    <option value="microwave">Microwave</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Description of Issue*</label>
                  <textarea 
                    name="issue" 
                    id="issue" 
                    rows={4} 
                    required 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0056b3] focus:border-[#0056b3]"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Service Date</label>
                  <input 
                    type="date" 
                    name="preferred_date" 
                    id="preferred_date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0056b3] focus:border-[#0056b3]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#0056b3] hover:bg-[#ff6b00] text-white font-bold py-3 px-4 rounded-md shadow-md"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
