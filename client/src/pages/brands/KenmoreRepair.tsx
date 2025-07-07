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
  'Elite refrigerator ice maker malfunctions',
  'He3/He4 washer bearing replacement',
  'Electric dryer heating element failures',
  'Dishwasher wash pump motor problems',
  'Range oven igniter replacements',
  'Water heater thermostat failures',
  'Garbage disposal jam issues',
  'Control board replacements'
];

const applianceTypes = [
  { name: 'Kenmore Refrigerators', description: 'Elite, Pro, and standard models with various configurations' },
  { name: 'Kenmore Washers & Dryers', description: 'HE3, HE4, Elite series front and top-load units' },
  { name: 'Kenmore Dishwashers', description: 'Ultra Wash and PowerWave cleaning systems' },
  { name: 'Kenmore Ranges & Ovens', description: 'Electric, gas, and dual-fuel cooking appliances' },
  { name: 'Kenmore Microwaves', description: 'Countertop, over-range, and built-in models' },
  { name: 'Kenmore Water Heaters', description: 'Electric and gas water heating systems' }
];

export default function KenmoreRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Kenmore Appliance Repair Naples FL | Trusted Quality Service | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Kenmore appliance repair in Naples, FL. We service Kenmore Elite, Pro & all models. Expert service for refrigerators, washers, dryers & more."
        />
        <meta name="keywords" content="Kenmore repair Naples, Kenmore appliance service, Kenmore Elite repair, Naples appliance repair, Collier County Kenmore service" />
        <meta property="og:title" content={`Kenmore Appliance Repair Naples FL | Trusted Quality Service | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Kenmore appliance repair in Naples, FL. We service Kenmore Elite, Pro & all models. Expert service for refrigerators, washers, dryers & more." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/kenmore`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/kenmore`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Kenmore Appliance Repair Naples FL",
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
              "serviceUrl": `${siteMetadata.siteUrl}/brands/kenmore`,
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Kenmore Authorized</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kenmore Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Trusted repair service for all Kenmore appliances. From classic models to Elite series, our experienced technicians provide reliable repairs for America's most trusted appliance brand.
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

        {/* Why Choose Us for Kenmore */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Kenmore Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Kenmore appliances are built for reliability and longevity. Our technicians have decades of experience with Kenmore products and understand their proven engineering.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Kenmore Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Extensive experience with all Kenmore series including Elite, Pro, and classic models.</p>
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
                  <p>Same-day repairs available with extensive parts inventory for common Kenmore issues.</p>
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
                  <p>OEM and compatible parts that meet Kenmore's quality standards and specifications.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Kenmore Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kenmore Appliances We Service</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete repair service for the full Kenmore appliance lineup, from basic models to Elite series.
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
              <h2 className="text-3xl font-bold mb-4">Common Kenmore Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Kenmore Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' Kenmore experts for reliable repairs on America's most trusted appliance brand.
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