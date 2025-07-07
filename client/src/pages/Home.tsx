import { Helmet } from 'react-helmet';
import { siteMetadata, structuredData } from '@/lib/seo';
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
import BlogSection from "@/components/home/BlogSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content="appliance repair Naples FL, refrigerator repair Naples, washing machine repair Naples, dryer repair Naples, oven repair Naples, dishwasher repair Naples, same day appliance repair Collier County" />
        <link rel="canonical" href={siteMetadata.siteUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={siteMetadata.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteMetadata.siteUrl}/logo.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={`${siteMetadata.siteUrl}/logo.png`} />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Additional Home Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Naples Appliance Repair",
            "url": siteMetadata.siteUrl,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${siteMetadata.siteUrl}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Service Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Naples Appliance Repair",
            "url": siteMetadata.siteUrl,
            "logo": `${siteMetadata.siteUrl}/logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": siteMetadata.phoneNumber,
              "contactType": "customer service",
              "areaServed": "US-FL",
              "availableLanguage": "English"
            },
            "sameAs": [
              siteMetadata.socialLinks.facebook,
              siteMetadata.socialLinks.google,
              siteMetadata.socialLinks.yelp,
              siteMetadata.socialLinks.instagram
            ]
          })}
        </script>
      </Helmet>
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
        
        <BlogSection />
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
