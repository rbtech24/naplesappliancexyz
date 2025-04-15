import { ReactNode } from "react";
import { Service } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { siteMetadata } from "@/lib/seo";
import CTASection from "@/components/home/CTASection";
import FAQ from "@/components/home/FAQ";
import BrandsBanner from "@/components/home/BrandsBanner";

interface ServiceTemplateProps {
  service: Service;
  additionalContent: {
    intro: ReactNode;
    commonProblems: Array<{ title: string; description: string }>;
    repairProcess: ReactNode;
    maintenanceTips: Array<{ title: string; description: string }>;
    conclusion: ReactNode;
    faqs?: Array<{ question: string; answer: string }>;
  };
  metaDescription: string;
}

const ServiceTemplate = ({ 
  service, 
  additionalContent,
  metaDescription
}: ServiceTemplateProps) => {
  return (
    <>
      <Helmet>
        <title>{service.title} in Naples, FL | {siteMetadata.title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${service.title.toLowerCase()}, appliance repair, Naples, Florida, ${service.title.toLowerCase()} service, ${service.title.toLowerCase()} repair`} />
        <meta property="og:title" content={`${service.title} in Naples, FL | ${siteMetadata.title}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/services/${service.id}`} />
        <meta property="og:image" content={service.image} />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/services/${service.id}`} />
      </Helmet>
      
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0056b3] to-[#0072e5] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  {service.title} in Naples, FL
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Expert repair services for all brands and models. Fast, reliable, and affordable solutions for your {service.title.toLowerCase()} problems.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-full py-2 px-4">
                      <i className="fas fa-check text-[#ff6b00] mr-2"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button asChild className="bg-[#ff6b00] hover:bg-white hover:text-[#ff6b00] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg">
                    <a href="#contact">Schedule Service</a>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0056b3] text-lg font-bold py-3 px-8 rounded-full shadow-lg">
                    <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`}>
                      <i className="fas fa-phone-alt mr-2"></i> Call Now
                    </a>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <i className={`fas ${service.icon} text-[#0056b3] text-3xl mr-4`}></i>
                <h2 className="text-3xl font-heading font-bold text-gray-800">
                  Professional {service.title} Services
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                {additionalContent.intro}
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center text-[#0056b3] mb-12">
              Common {service.title} Problems We Fix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalContent.commonProblems.map((problem, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-[#ff6b00] mb-4">
                    <i className="fas fa-tools text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Repair Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center text-[#0056b3] mb-8">
                Our {service.title} Repair Process
              </h2>
              <div className="prose prose-lg max-w-none">
                {additionalContent.repairProcess}
              </div>
              <div className="mt-8 bg-gray-50 border-l-4 border-[#0056b3] p-6 rounded-r-lg">
                <h3 className="text-xl font-heading font-bold mb-3">Why Choose Professional Repair?</h3>
                <p className="text-gray-700">
                  While DIY fixes might seem cost-effective initially, they often lead to more extensive damage and costlier repairs. Our certified technicians have the proper tools, parts, and expertise to diagnose and fix your {service.title.toLowerCase()} correctly the first time, saving you money in the long run.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brands We Service */}
        <BrandsBanner />

        {/* Maintenance Tips Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center text-[#0056b3] mb-12">
              {service.title} Maintenance Tips
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {additionalContent.maintenanceTips.map((tip, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-[#0056b3]/10 md:w-1/4 p-6 flex flex-col justify-center items-center text-center">
                    <span className="text-2xl font-bold text-[#0056b3]">Tip #{index + 1}</span>
                    <h3 className="text-xl font-heading font-bold">{tip.title}</h3>
                  </div>
                  <div className="md:w-3/4 p-6">
                    <p className="text-gray-700">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-center text-[#0056b3] mb-8">
                Naples' Trusted {service.title} Repair Experts
              </h2>
              <div className="prose prose-lg max-w-none">
                {additionalContent.conclusion}
              </div>
              <div className="mt-8 text-center">
                <Button asChild className="bg-[#0056b3] hover:bg-[#ff6b00] text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg">
                  <a href="#contact">Schedule Your {service.title} Repair Today</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default ServiceTemplate;