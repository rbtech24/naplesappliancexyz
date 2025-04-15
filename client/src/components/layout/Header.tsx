import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/lib/seo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            <a href="#contact">Request Service</a>
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
            <li><a href="#" className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">Home</a></li>
            <li><a href="#services" className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">Services</a></li>
            <li><a href="#about" className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">Testimonials</a></li>
            <li><a href="#service-areas" className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">Service Areas</a></li>
            <li><a href="#contact" className="hover:text-[#ff6b00] transition py-2 border-b-2 border-[#0056b3] hover:border-[#ff6b00]">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <ul className="container mx-auto px-4 py-3 space-y-3">
          <li><a href="#" onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">Home</a></li>
          <li><a href="#services" onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">Services</a></li>
          <li><a href="#about" onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">About Us</a></li>
          <li><a href="#testimonials" onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">Testimonials</a></li>
          <li><a href="#service-areas" onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">Service Areas</a></li>
          <li><a href="#contact" onClick={toggleMobileMenu} className="block font-medium hover:text-[#ff6b00] transition">Contact</a></li>
          <li className="py-2">
            <a href={`tel:${siteMetadata.phoneNumber}`} className="flex items-center space-x-2 text-[#0056b3]">
              <i className="fas fa-phone-alt"></i>
              <span className="font-semibold">{siteMetadata.phoneNumber}</span>
            </a>
          </li>
          <li className="pt-2 pb-4">
            <Button asChild className="w-full bg-[#ff6b00] hover:bg-[#0056b3] text-white font-bold rounded-full shadow-md">
              <a href="#contact" onClick={toggleMobileMenu}>Request Service</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
