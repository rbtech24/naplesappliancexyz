import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { CheckCircle, Phone, Star, Wrench, Clock, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';


const commonIssues = [
  'Gallery refrigerator temperature control problems',
  'Professional series dishwasher drain issues',
  'Front-load washer door seal leaks',
  'Electric range burner element failures',
  'Ice maker assembly malfunctions',
  'Convection oven fan motor problems',
  'Water filter replacement and leaks',
  'Control panel display issues'
];

const applianceTypes = [
  { name: 'Frigidaire Refrigerators', description: 'Gallery, Professional, and standard models' },
  { name: 'Frigidaire Dishwashers', description: 'Built-in and portable dishwashers' },
  { name: 'Frigidaire Washers & Dryers', description: 'Front-load and top-load laundry pairs' },
  { name: 'Frigidaire Ranges & Ovens', description: 'Electric and gas cooking appliances' },
  { name: 'Frigidaire Microwaves', description: 'Over-range and countertop models' },
  { name: 'Frigidaire Air Conditioners', description: 'Window and portable AC units' }
];

export default function FrigidaireRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Frigidaire Appliance Repair Naples FL | Affordable & Reliable | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Frigidaire appliance repair in Naples, FL. We service Frigidaire Gallery, Professional & all models. Same-day service available. Licensed technicians."
        />
        <meta name="keywords" content="Frigidaire repair Naples, Frigidaire appliance service, Frigidaire Gallery repair, Naples appliance repair, Collier County Frigidaire service" />
        <meta property="og:title" content={`Frigidaire Appliance Repair Naples FL | Affordable & Reliable | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Frigidaire appliance repair in Naples, FL. We service Frigidaire Gallery, Professional & all models. Same-day service available." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/frigidaire`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/frigidaire`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Frigidaire Appliance Repair Naples FL",
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
              "serviceUrl": `${siteMetadata.siteUrl}/brands/frigidaire`,
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Frigidaire Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frigidaire Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert repair service for all Frigidaire appliances. From affordable standard models to premium Gallery series, our certified technicians provide reliable repairs with genuine parts.
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

        {/* Why Choose Us for Frigidaire */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Frigidaire Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Frigidaire appliances are known for their value and reliability. Our experienced technicians understand Frigidaire's engineering and can quickly diagnose and repair any issue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Frigidaire Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized knowledge of Frigidaire Gallery, Professional, and standard model repairs.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Same-Day Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Quick response times with most Frigidaire repairs completed the same day.</p>
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
                  <p>OEM Frigidaire parts with comprehensive warranties on all repairs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Frigidaire Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frigidaire Appliances We Service</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From basic models to premium Gallery series, we repair all Frigidaire appliances with expert care.
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
              <h2 className="text-3xl font-bold mb-4">Common Frigidaire Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Frigidaire Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Call Naples' trusted Frigidaire repair experts today for fast, reliable service.
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