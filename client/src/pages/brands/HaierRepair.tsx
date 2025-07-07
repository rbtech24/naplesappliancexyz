import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { CheckCircle, Phone, Star, Wrench, Clock, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const commonIssues = [
  'Compact washer drainage problems',
  'Portable air conditioner refrigerant leaks',
  'Mini fridge temperature control issues',
  'Wine cooler thermostat malfunctions',
  'Chest freezer defrost system problems',
  'Compact dishwasher spray arm clogs',
  'Microwave turntable motor failures',
  'Electronic control panel resets'
];

const applianceTypes = [
  { name: 'Haier Compact Appliances', description: 'Space-saving washers, dryers, and refrigerators' },
  { name: 'Haier Air Conditioners', description: 'Window and portable AC units with smart features' },
  { name: 'Haier Wine Coolers', description: 'Temperature-controlled wine storage systems' },
  { name: 'Haier Freezers', description: 'Chest and upright freezer models' },
  { name: 'Haier Dishwashers', description: 'Compact and portable dishwasher solutions' },
  { name: 'Haier Microwaves', description: 'Countertop microwave ovens' }
];

export default function HaierRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Haier Appliance Repair Naples FL | Global Innovation & Compact Design | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Haier appliance repair in Naples, FL. Expert service for Haier compact appliances, air conditioners, wine coolers & more. Global brand specialists."
        />
        <meta name="keywords" content="Haier repair Naples, Haier appliance service, compact appliance repair, portable appliance service, Naples Haier technicians" />
        <meta property="og:title" content={`Haier Appliance Repair Naples FL | Global Innovation & Compact Design | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Haier appliance repair in Naples, FL. Expert service for Haier compact appliances, air conditioners, wine coolers & more." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/haier`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/haier`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Haier Appliance Repair Naples FL",
            "serviceType": "Compact Appliance Repair",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Haier Authorized</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Haier Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert repair service for Haier's innovative appliances. Our technicians understand Haier's global design approach and compact appliance technology for modern living.
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

        {/* Why Choose Us for Haier */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Haier Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Haier appliances offer innovative features and compact designs for modern lifestyles. Our technicians understand these global appliances and their unique technologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Global Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Understanding of Haier's international design philosophy and innovative appliance features.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Compact Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized knowledge of compact and space-saving appliance technologies.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Quality Parts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Genuine Haier replacement parts to maintain innovative performance and efficiency.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Haier Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Haier Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Haier Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Haier Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' global appliance specialists for expert Haier repair service.
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