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
  'W1 series washing machine sensor problems',
  'Convection oven heating element failures',
  'Dishwasher PowerWash system malfunctions',
  'Vacuum cleaner motor and filtration issues',
  'Coffee system brewing mechanism problems',
  'Steam oven water supply and drainage issues',
  'Induction cooktop control panel errors',
  'Built-in refrigerator temperature control'
];

const applianceTypes = [
  { name: 'Miele Washers & Dryers', description: 'W1 and T1 series with German precision engineering' },
  { name: 'Miele Dishwashers', description: 'PowerWash and AutoDos cleaning technology' },
  { name: 'Miele Ovens', description: 'Steam, convection, and combination cooking systems' },
  { name: 'Miele Coffee Systems', description: 'Built-in espresso and coffee machines' },
  { name: 'Miele Vacuum Cleaners', description: 'Canister and upright models with HEPA filtration' },
  { name: 'Miele Refrigerators', description: 'Built-in and integrated refrigeration systems' }
];

export default function MieleRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Miele Appliance Repair Naples FL | German Precision & Durability | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Miele appliance repair in Naples, FL. Expert service for Miele washers, dishwashers, ovens & vacuum cleaners. German engineering specialists."
        />
        <meta name="keywords" content="Miele repair Naples, Miele washing machine repair, German appliance repair, Miele dishwasher service, Naples Miele technicians" />
        <meta property="og:title" content={`Miele Appliance Repair Naples FL | German Precision & Durability | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Miele appliance repair in Naples, FL. Expert service for Miele washers, dishwashers, ovens & vacuum cleaners." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/miele`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/miele`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Miele Appliance Repair Naples FL",
            "serviceType": "German Appliance Repair",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Miele Authorized</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Miele Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Specialized repair service for Miele appliances featuring German precision engineering. Our certified technicians understand Miele's quality standards and advanced technology.
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

        {/* Why Choose Us for Miele */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Miele Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Miele appliances are built to the highest German standards for durability and performance. Our technicians have specialized training to service these precision-engineered appliances.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Miele Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized knowledge of German engineering and Miele's precision manufacturing standards.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Quality Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Thorough diagnostics and precise repairs maintaining Miele's quality standards.</p>
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
                  <p>Genuine Miele replacement parts to maintain German quality and engineering standards.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Miele Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Miele Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Miele Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Miele Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' German appliance specialists for expert Miele repair service.
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