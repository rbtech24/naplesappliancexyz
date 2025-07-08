import { Link, useLocation } from "wouter";
import { ScrollLink } from "@/utils/scrollToTop";
import { siteMetadata } from "@/lib/seo";
import { services, serviceAreas } from "@/lib/serviceData";
import { CityLink } from "@/utils/cityLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  const [location] = useLocation();
  const isHomePage = location === "/";

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <ScrollLink href="/">
              <div className="flex items-center mb-6 cursor-pointer">
                <span className="text-white text-2xl font-heading font-bold">Naples</span>
                <span className="text-[#00a0e9] text-2xl font-heading font-bold">Appliance</span>
                <span className="text-[#ff6b00] ml-1 text-2xl font-heading font-bold">Repair</span>
              </div>
            </ScrollLink>
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
                  <ScrollLink 
                    href={`/services/${service.id}`} 
                    className="text-gray-400 hover:text-white transition flex items-center"
                  >
                    <i className={`fas ${service.icon} text-[#ff6b00] text-xs mr-2`}></i>
                    <span>{service.title}</span>
                  </ScrollLink>
                </li>
              ))}
              <li>
                <Link 
                  href={isHomePage ? "#services" : "/#services"} 
                  className="text-gray-400 hover:text-white transition flex items-center"
                >
                  <i className="fas fa-building text-[#ff6b00] text-xs mr-2"></i>
                  <span>Commercial Appliance Repair</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 6).map((area, index) => (
                <li key={index}>
                  <CityLink 
                    cityName={area.name}
                    className="text-gray-400 hover:text-white transition"
                  />
                </li>
              ))}
              <li>
                <ScrollLink 
                  href="/service-areas" 
                  className="text-gray-400 hover:text-white transition font-medium"
                >
                  See All Locations
                </ScrollLink>
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
                <a href={`tel:${siteMetadata.phoneNumber}`} className="hover:text-[#ff6b00] transition">
                  {siteMetadata.phoneNumber}
                </a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-[#ff6b00]"></i>
                <a href={`mailto:${siteMetadata.email}`} className="hover:text-[#ff6b00] transition">
                  {siteMetadata.email}
                </a>
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
              <li><Link href="/about" className="text-gray-500 hover:text-white transition">About Us</Link></li>
              <li><Link href="/testimonials" className="text-gray-500 hover:text-white transition">Testimonials</Link></li>
              <li><Link href="/service-areas" className="text-gray-500 hover:text-white transition">Service Areas</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
