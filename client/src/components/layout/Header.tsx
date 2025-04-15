import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/lib/seo";
import { services } from "@/lib/serviceData";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);
  const [location] = useLocation();
  const isHomePage = location === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-[#0056b3] text-3xl font-heading font-bold">Naples</span>
            <span className="text-[#00a0e9] text-3xl font-heading font-bold">Appliance</span>
            <span className="text-[#ff6b00] ml-1 text-3xl font-heading font-bold">Repair</span>
          </Link>
        </div>

        {/* Top Contact Info - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href={`tel:${siteMetadata.phoneNumber}`} className="flex items-center space-x-2 text-[#0056b3] hover:text-[#ff6b00] transition">
            <i className="fas fa-phone-alt text-[#ff6b00]"></i>
            <span className="font-semibold">{siteMetadata.phoneNumber}</span>
          </a>
          <Button asChild variant="default" className="bg-[#ff6b00] hover:bg-[#0056b3] text-white font-bold rounded-full shadow-md">
            <a href={isHomePage ? "#contact" : "/#contact"}>Request Service</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMobileMenu}>
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-[#0056b3]">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex py-3 space-x-8 text-white text-sm font-semibold">
            <li>
              <Link href="/" className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">
                Home
              </Link>
            </li>
            
            {/* Services Dropdown */}
            <li className="relative" ref={servicesDropdownRef}>
              <button 
                onClick={toggleServicesDropdown}
                className="flex items-center hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00] text-sm font-semibold"
              >
                Services <i className={`fas fa-chevron-down ml-1 text-xs transform transition ${isServicesDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isServicesDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-md shadow-lg z-20 animate-fade-in-up">
                  <div className="p-2">
                    {services.map((service) => (
                      <Link 
                        key={service.id}
                        href={`/services/${service.id}`}
                        className="flex items-center p-3 text-gray-700 hover:bg-gray-100 hover:text-[#0056b3] rounded-md"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        <i className={`fas ${service.icon} text-[#ff6b00] mr-3`}></i>
                        <span>{service.title}</span>
                      </Link>
                    ))}
                    <Link 
                      href={isHomePage ? "#services" : "/#services"}
                      className="flex items-center p-3 text-gray-700 hover:bg-gray-100 hover:text-[#0056b3] rounded-md"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <i className="fas fa-tools text-[#ff6b00] mr-3"></i>
                      <span>View All Services</span>
                    </Link>
                  </div>
                </div>
              )}
            </li>
            
            <li>
              <Link href={isHomePage ? "#about" : "/#about"} className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">
                About Us
              </Link>
            </li>
            <li>
              <Link href={isHomePage ? "#testimonials" : "/#testimonials"} className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href={isHomePage ? "#service-areas" : "/#service-areas"} className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href={isHomePage ? "#contact" : "/#contact"} className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <ul className="container mx-auto px-4 py-3">
          <li className="py-2">
            <Link href="/" onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">
              Home
            </Link>
          </li>
          
          {/* Mobile Services Dropdown */}
          <li className="py-2">
            <div className="mb-1 font-medium">Services</div>
            <ul className="pl-4 space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`} 
                    onClick={toggleMobileMenu} 
                    className="flex items-center text-sm text-gray-700 hover:text-[#ff6b00]"
                  >
                    <i className={`fas ${service.icon} text-[#ff6b00] mr-2`}></i>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href={isHomePage ? "#services" : "/#services"} 
                  onClick={toggleMobileMenu} 
                  className="flex items-center text-sm text-gray-700 hover:text-[#ff6b00]"
                >
                  <i className="fas fa-list text-[#ff6b00] mr-2"></i>
                  <span>View All Services</span>
                </Link>
              </li>
            </ul>
          </li>
          
          <li className="py-2">
            <Link href={isHomePage ? "#about" : "/#about"} onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">
              About Us
            </Link>
          </li>
          <li className="py-2">
            <Link href={isHomePage ? "#testimonials" : "/#testimonials"} onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">
              Testimonials
            </Link>
          </li>
          <li className="py-2">
            <Link href={isHomePage ? "#service-areas" : "/#service-areas"} onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">
              Service Areas
            </Link>
          </li>
          <li className="py-2">
            <Link href={isHomePage ? "#contact" : "/#contact"} onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">
              Contact
            </Link>
          </li>
          <li className="py-2">
            <a href={`tel:${siteMetadata.phoneNumber}`} className="flex items-center space-x-2 text-[#0056b3]">
              <i className="fas fa-phone-alt"></i>
              <span className="font-semibold">{siteMetadata.phoneNumber}</span>
            </a>
          </li>
          <li className="pt-2 pb-4">
            <Button asChild className="w-full bg-[#ff6b00] hover:bg-[#0056b3] text-white font-bold rounded-full shadow-md">
              <a href={isHomePage ? "#contact" : "/#contact"} onClick={toggleMobileMenu}>Request Service</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
