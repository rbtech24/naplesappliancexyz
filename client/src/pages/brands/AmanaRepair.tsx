import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { CheckCircle, Phone, Star, Wrench, Clock, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const commonIssues = [
  'Top-load washer lid lock problems',
  'Electric dryer heating element failures',
  'Refrigerator ice maker malfunctions',
  'Range oven igniter replacements',
  'Dishwasher drain pump issues',
  'Microwave magnetron problems',
  'Freezer defrost system failures',
  'Control panel and timer malfunctions'
];

const applianceTypes = [
  { name: 'Amana Refrigerators', description: 'Top-freezer, side-by-side, and bottom-freezer models' },
  { name: 'Amana Washers & Dryers', description: 'Top-load washers and electric/gas dryers' },
  { name: 'Amana Dishwashers', description: 'Built-in dishwashers with reliable cleaning performance' },
  { name: 'Amana Ranges & Ovens', description: 'Electric and gas cooking appliances' },
  { name: 'Amana Microwaves', description: 'Countertop and over-range microwave ovens' },
  { name: 'Amana Freezers', description: 'Chest and upright freezer models' }
];

export default function AmanaRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Amana Appliance Repair Naples FL | Value-Oriented Home Appliances | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Amana appliance repair in Naples, FL. Expert service for Amana refrigerators, washers, dryers & more. Reliable value appliance specialists."
        />
        <meta name="keywords" content="Amana repair Naples, Amana appliance service, value appliance repair, affordable appliance service, Naples Amana technicians" />
        <meta property="og:title" content={`Amana Appliance Repair Naples FL | Value-Oriented Home Appliances | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Amana appliance repair in Naples, FL. Expert service for Amana refrigerators, washers, dryers & more." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/amana`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/amana`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Amana Appliance Repair Naples FL",
            "serviceType": "Value Appliance Repair",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Amana Authorized</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Amana Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Reliable repair service for Amana value-oriented appliances. Our technicians understand Amana's focus on practical features and dependable performance for everyday use.
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

        {/* Why Choose Us for Amana */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Amana Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Amana appliances are designed for value and reliability. Our technicians understand these practical appliances and provide cost-effective repair solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Value Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Cost-effective repairs that match Amana's value-oriented approach to home appliances.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Quick Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Efficient repairs to minimize downtime and get your Amana appliances working again.</p>
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
                  <p>OEM and compatible parts that maintain Amana's reliable performance standards.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Amana Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Amana Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Amana Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Amana Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' value appliance specialists for reliable Amana repair service.
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