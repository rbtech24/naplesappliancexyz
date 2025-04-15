import { Link } from "wouter";
import { siteMetadata } from "@/lib/seo";
import { services, serviceAreas } from "@/lib/serviceData";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white text-2xl font-heading font-bold">Naples</span>
              <span className="text-[#00a0e9] text-2xl font-heading font-bold">Appliance</span>
              <span className="text-[#ff6b00] ml-1 text-2xl font-heading font-bold">Repair</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional appliance repair services in Naples, Florida. Fast, reliable service for all major brands and models.
            </p>
            <div className="flex space-x-4">
              <a href={siteMetadata.socialLinks.facebook} className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={siteMetadata.socialLinks.google} className="text-gray-400 hover:text-white transition">
                <i className="fab fa-google"></i>
              </a>
              <a href={siteMetadata.socialLinks.yelp} className="text-gray-400 hover:text-white transition">
                <i className="fab fa-yelp"></i>
              </a>
              <a href={siteMetadata.socialLinks.instagram} className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className="text-gray-400 hover:text-white transition">
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">
                  Commercial Appliance Repair
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 6).map((area, index) => (
                <li key={index}>
                  <a href="#service-areas" className="text-gray-400 hover:text-white transition">
                    {area.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#service-areas" className="text-gray-400 hover:text-white transition">
                  See All Locations
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#ff6b00]"></i>
                <span>{siteMetadata.address}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-[#ff6b00]"></i>
                <span>{siteMetadata.phoneNumber}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-[#ff6b00]"></i>
                <span>{siteMetadata.email}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-[#ff6b00]"></i>
                <span>
                  Mon-Fri: {siteMetadata.openingHours.weekdays}<br/>
                  Sat: {siteMetadata.openingHours.saturday}<br/>
                  Sun: {siteMetadata.openingHours.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6"/>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} Naples Appliance Repair. All rights reserved.
          </p>
          <div>
            <ul className="flex flex-wrap justify-center space-x-4 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
