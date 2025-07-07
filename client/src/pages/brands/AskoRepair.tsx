import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { CheckCircle, Phone, Star, Wrench, Clock, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const commonIssues = [
  'Pro series washing machine sensor problems',
  'Style line dishwasher drainage issues',
  'Tumble dryer moisture sensor malfunctions',
  'Built-in oven temperature control problems',
  'Induction hob error code diagnostics',
  'Washing machine door seal replacements',
  'Dishwasher spray arm blockages',
  'Electronic control panel failures'
];

const applianceTypes = [
  { name: 'Asko Washers', description: 'Pro and Style series with Scandinavian engineering' },
  { name: 'Asko Dryers', description: 'Tumble and heat pump drying technology' },
  { name: 'Asko Dishwashers', description: 'Ultra-quiet operation with eco-friendly cycles' },
  { name: 'Asko Ovens', description: 'Built-in ovens with precision cooking technology' },
  { name: 'Asko Cooktops', description: 'Induction and electric cooking surfaces' },
  { name: 'Asko Accessories', description: 'Pedestals and stacking kits' }
];

export default function AskoRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Asko Appliance Repair Naples FL | Scandinavian Design & Eco-Friendly | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Asko appliance repair in Naples, FL. Expert service for Asko washers, dryers, dishwashers & ovens. Scandinavian design specialists."
        />
        <meta name="keywords" content="Asko repair Naples, Asko appliance service, Scandinavian appliance repair, eco-friendly appliance service, Naples Asko technicians" />
        <meta property="og:title" content={`Asko Appliance Repair Naples FL | Scandinavian Design & Eco-Friendly | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Asko appliance repair in Naples, FL. Expert service for Asko washers, dryers, dishwashers & ovens." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/asko`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/asko`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Asko Appliance Repair Naples FL",
            "serviceType": "Scandinavian Appliance Repair",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Asko Authorized</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Asko Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert repair service for Asko's Scandinavian-designed appliances. Our technicians understand Asko's eco-friendly technology and minimalist design philosophy.
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

        {/* Why Choose Us for Asko */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Asko Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Asko appliances feature Scandinavian design and eco-friendly technology. Our technicians have specialized training to service these unique appliances properly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Scandinavian Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized knowledge of Asko's unique design philosophy and eco-friendly technology.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Efficient Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Quick diagnosis and repair of Asko's precision-engineered components.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Genuine Parts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Authentic Asko replacement parts to maintain Scandinavian quality and performance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Asko Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Asko Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Asko Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Asko Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' Scandinavian appliance specialists for expert Asko repair service.
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