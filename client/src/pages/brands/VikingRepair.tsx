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
  'Professional range ignition system repairs',
  'Refrigerator compressor and cooling issues',
  'Dishwasher wash motor replacements',
  'Convection oven fan and heating element problems',
  'Wine cellar temperature control malfunctions',
  'Ice maker and water filtration repairs',
  'Range hood motor and ventilation issues',
  'Electronic control panel diagnostics'
];

const applianceTypes = [
  { name: 'Viking Ranges', description: 'Professional gas, electric, and dual-fuel ranges' },
  { name: 'Viking Refrigerators', description: 'Built-in and freestanding refrigeration systems' },
  { name: 'Viking Dishwashers', description: 'Commercial-grade cleaning performance' },
  { name: 'Viking Ovens', description: 'Wall ovens with professional cooking features' },
  { name: 'Viking Wine Cellars', description: 'Temperature-controlled wine storage systems' },
  { name: 'Viking Ventilation', description: 'Range hoods and exhaust systems' }
];

export default function VikingRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Viking Appliance Repair Naples FL | Commercial-Grade Kitchen Equipment | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Viking appliance repair in Naples, FL. Expert service for Viking ranges, refrigerators, dishwashers & more. Commercial-grade repair service."
        />
        <meta name="keywords" content="Viking repair Naples, Viking range repair, commercial kitchen appliance repair, luxury appliance service, Naples Viking technicians" />
        <meta property="og:title" content={`Viking Appliance Repair Naples FL | Commercial-Grade Kitchen Equipment | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Viking appliance repair in Naples, FL. Expert service for Viking ranges, refrigerators, dishwashers & more." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/viking`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/viking`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Viking Appliance Repair Naples FL",
            "serviceType": "Commercial-Grade Appliance Repair",
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
            "areaServed": "Naples, FL"
          })}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">Viking Authorized</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Viking Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert repair service for Viking commercial-grade kitchen equipment. Our certified technicians provide professional service for Viking ranges, refrigerators, and all kitchen appliances.
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

        {/* Why Choose Us for Viking */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Viking Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Viking appliances bring commercial-grade performance to residential kitchens. Our technicians have the expertise to service these robust, professional appliances.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Viking Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized training in Viking's commercial-grade appliance technology and repair techniques.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Professional Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Priority service scheduling for commercial-grade equipment with minimal downtime.</p>
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
                  <p>Genuine Viking parts to maintain commercial-grade performance and durability.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Viking Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Viking Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Viking Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Viking Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' Viking experts for professional commercial-grade appliance repair service.
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