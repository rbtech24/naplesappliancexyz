import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { CheckCircle, Phone, Star, Wrench, Clock, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const commonIssues = [
  'RISE collection control panel malfunctions',
  'Noir edition temperature inconsistencies',
  'Downdraft ventilation motor problems',
  'Ice maker and water filtration issues',
  'Convection oven fan motor failures',
  'Induction cooktop sensor errors',
  'Refrigerator compressor problems',
  'Dishwasher spray arm and wash motor issues'
];

const applianceTypes = [
  { name: 'JennAir Ranges', description: 'RISE, Noir, and Pro-Style series with premium features' },
  { name: 'JennAir Cooktops', description: 'Induction, gas, and electric cooking surfaces' },
  { name: 'JennAir Wall Ovens', description: 'Convection and steam cooking technology' },
  { name: 'JennAir Refrigerators', description: 'Built-in and counter-depth refrigeration' },
  { name: 'JennAir Dishwashers', description: 'Quiet operation with advanced cleaning cycles' },
  { name: 'JennAir Ventilation', description: 'Downdraft and range hood systems' }
];

export default function JennAirRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>JennAir Appliance Repair Naples FL | Distinctive Style & Performance | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional JennAir appliance repair in Naples, FL. Expert service for JennAir RISE, Noir & Pro-Style series. Premium appliance specialists."
        />
        <meta name="keywords" content="JennAir repair Naples, JennAir appliance service, premium appliance repair, luxury kitchen service, Naples JennAir technicians" />
        <meta property="og:title" content={`JennAir Appliance Repair Naples FL | Distinctive Style & Performance | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional JennAir appliance repair in Naples, FL. Expert service for JennAir RISE, Noir & Pro-Style series." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/jennair`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/jennair`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "JennAir Appliance Repair Naples FL",
            "serviceType": "Premium Appliance Repair",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">JennAir Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                JennAir Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Certified repair service for JennAir premium appliances with distinctive style. Our technicians understand JennAir's sophisticated technology and deliver expert service.
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

        {/* Why Choose Us for JennAir */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for JennAir Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                JennAir appliances feature distinctive style and advanced performance technology. Our certified technicians provide expert service for these premium appliances.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>JennAir Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized knowledge of JennAir's premium technology and distinctive design features.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Premium Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>High-end service approach with priority scheduling for luxury appliances.</p>
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
                  <p>Genuine JennAir replacement parts to maintain premium performance and style.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* JennAir Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">JennAir Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common JennAir Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need JennAir Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' premium appliance specialists for expert JennAir repair service.
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