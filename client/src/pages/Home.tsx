import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import ServicesSection from "@/components/home/ServicesSection";
import BrandsBanner from "@/components/home/BrandsBanner";
import ProcessSection from "@/components/home/ProcessSection";
import AboutUs from "@/components/home/AboutUs";
import Testimonials from "@/components/home/Testimonials";
import ServiceAreas from "@/components/home/ServiceAreas";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import ServiceAreaMap from "@/components/home/ServiceAreaMap";
import { MaintenanceReminderWidget } from "@/components/home/MaintenanceReminderWidget";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <ServicesSection />
        <BrandsBanner />
        <ProcessSection />
        <AboutUs />
        
        {/* Seasonal Maintenance Reminder Widget */}
        <div className="container mx-auto px-4 py-12 mb-6">
          <div className="max-w-sm mx-auto">
            <MaintenanceReminderWidget />
          </div>
        </div>
        
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <CTASection />
        <ContactSection />
        <ServiceAreaMap />
      </main>
      <Footer />
    </>
  );
};

export default Home;
