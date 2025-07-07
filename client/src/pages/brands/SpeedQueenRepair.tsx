import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { CheckCircle, Phone, Star, Wrench, Clock, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const commonIssues = [
  'TC5 series control panel malfunctions',
  'Perfect Wash system calibration problems',
  'Commercial-grade motor bearing replacements',
  'Moisture sensor adjustments',
  'Drive belt and transmission issues',
  'Water level sensor problems',
  'Drain pump and filter maintenance',
  'Electronic timer and cycle issues'
];

const applianceTypes = [
  { name: 'Speed Queen Washers', description: 'Top-load and front-load commercial-grade washers' },
  { name: 'Speed Queen Dryers', description: 'Electric and gas dryers with commercial durability' },
  { name: 'Speed Queen Stacked Units', description: 'Space-saving washer/dryer combinations' },
  { name: 'Speed Queen Commercial', description: 'Coin-operated and card-operated laundry equipment' },
  { name: 'Speed Queen Accessories', description: 'Pedestals, stacking kits, and installation hardware' }
];

export default function SpeedQueenRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Speed Queen Appliance Repair Naples FL | Commercial-Grade Laundry | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Speed Queen appliance repair in Naples, FL. Expert service for Speed Queen washers, dryers & commercial laundry equipment. Built to last specialists."
        />
        <meta name="keywords" content="Speed Queen repair Naples, Speed Queen washer repair, commercial laundry repair, heavy-duty appliance service, Naples Speed Queen technicians" />
        <meta property="og:title" content={`Speed Queen Appliance Repair Naples FL | Commercial-Grade Laundry | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Speed Queen appliance repair in Naples, FL. Expert service for Speed Queen washers, dryers & commercial laundry equipment." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/speed-queen`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/speed-queen`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Speed Queen Appliance Repair Naples FL",
            "serviceType": "Commercial Laundry Equipment Repair",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Speed Queen Authorized</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Speed Queen Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert repair service for Speed Queen commercial-grade laundry equipment. Our technicians understand the robust engineering that makes Speed Queen built to last.
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

        {/* Why Choose Us for Speed Queen */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Speed Queen Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Speed Queen machines are built for commercial durability and heavy use. Our technicians have the expertise to service these robust, long-lasting appliances.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Commercial Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized knowledge of Speed Queen's commercial-grade construction and heavy-duty components.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Reliable Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dependable repairs that match Speed Queen's reputation for reliability and durability.</p>
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
                  <p>Genuine Speed Queen parts to maintain commercial-grade performance and longevity.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Speed Queen Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Speed Queen Equipment We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Speed Queen Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Speed Queen Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' commercial laundry specialists for expert Speed Queen equipment repair.
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