import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { CheckCircle, Phone, Star, Wrench, Clock, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ScrollLink } from '@/utils/scrollToTop';

const commonIssues = [
  'French door refrigerator ice maker problems',
  'Front-load washer spin cycle issues',
  'Induction cooktop error codes',
  'Dishwasher spray arm clogs',
  'Perfect Steam dryer moisture sensor problems',
  'Convection oven temperature inconsistencies',
  'Water filtration system malfunctions',
  'Touch control panel failures'
];

const applianceTypes = [
  { name: 'Electrolux Refrigerators', description: 'French door, side-by-side, and counter-depth models' },
  { name: 'Electrolux Washers & Dryers', description: 'Front-load laundry with Perfect Steam technology' },
  { name: 'Electrolux Dishwashers', description: 'Quiet operation with advanced wash systems' },
  { name: 'Electrolux Cooktops & Ranges', description: 'Induction and electric cooking surfaces' },
  { name: 'Electrolux Wall Ovens', description: 'Convection and steam cooking options' },
  { name: 'Electrolux Microwaves', description: 'Over-range and built-in microwave ovens' }
];

export default function ElectroluxRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Electrolux Appliance Repair Naples FL | Scandinavian Design Experts | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Electrolux appliance repair in Naples, FL. Expert service for Electrolux refrigerators, washers, dishwashers & more. Same-day service available."
        />
        <meta name="keywords" content="Electrolux repair Naples, Electrolux appliance service, Electrolux refrigerator repair, Naples appliance repair, Collier County Electrolux service" />
        <meta property="og:title" content={`Electrolux Appliance Repair Naples FL | Scandinavian Design Experts | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Electrolux appliance repair in Naples, FL. Expert service for Electrolux refrigerators, washers, dishwashers & more." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/electrolux`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/electrolux`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Electrolux Appliance Repair Naples FL",
            "serviceType": "Appliance Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Naples Appliance Repair",
              "telephone": siteMetadata.phoneNumber,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5405 Taylor Rd",
                "addressLocality": "Naples",
                "addressRegion": "FL",
                "postalCode": "34109"
              }
            },
            "areaServed": "Naples, FL",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": `${siteMetadata.siteUrl}/brands/electrolux`,
              "servicePhone": siteMetadata.phoneNumber
            }
          })}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">Electrolux Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Electrolux Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Specialized repair service for Electrolux appliances featuring Scandinavian design and advanced technology. Our certified technicians understand Electrolux engineering and provide expert repairs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+12392302100" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call (239) 230-2100
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Electrolux */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Electrolux Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Electrolux appliances combine beautiful Scandinavian design with advanced technology. Our technicians have specialized training to service these sophisticated appliances properly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Electrolux Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized knowledge of Electrolux Perfect Steam, induction, and advanced cooling technologies.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Fast Diagnosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Quick identification of Electrolux-specific issues with advanced diagnostic tools.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>OEM Parts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Genuine Electrolux replacement parts to maintain performance and warranty coverage.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Electrolux Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Electrolux Appliances We Service</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete repair service for all Electrolux appliance lines with advanced technology features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {applianceTypes.map((appliance, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      {appliance.name}
                    </CardTitle>
                    <CardDescription>{appliance.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Electrolux Issues We Fix</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {commonIssues.map((issue, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Electrolux Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' Electrolux specialists for expert repair service on your premium appliances.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+12392302100" className="flex items-center gap-2 mx-auto w-fit">
                <Phone className="h-5 w-5" />
                Call (239) 230-2100 Now
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}