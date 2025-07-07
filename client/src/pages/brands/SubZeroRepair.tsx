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
  'Dual refrigeration system failures',
  'Wine storage temperature fluctuations',
  'Ice maker and water filtration problems',
  'Vacuum-sealed door gasket replacements',
  'Compressor and evaporator issues',
  'Electronic control board malfunctions',
  'Air purification system servicing',
  'Custom panel adjustments'
];

const applianceTypes = [
  { name: 'Sub-Zero Refrigerators', description: 'Built-in, integrated, and undercounter models' },
  { name: 'Sub-Zero Wine Storage', description: 'Wine refrigeration with precise temperature control' },
  { name: 'Sub-Zero Freezers', description: 'Column and drawer freezer configurations' },
  { name: 'Sub-Zero Ice Makers', description: 'Clear ice production and storage systems' },
  { name: 'Sub-Zero Beverage Centers', description: 'Specialized beverage cooling and storage' },
  { name: 'Wolf Cooking Appliances', description: 'Professional ranges, ovens, and cooktops' }
];

export default function SubZeroRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Sub-Zero Appliance Repair Naples FL | Luxury Refrigeration Experts | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Sub-Zero appliance repair in Naples, FL. Certified technicians for Sub-Zero refrigerators, wine storage, freezers & Wolf appliances. Premium service."
        />
        <meta name="keywords" content="Sub-Zero repair Naples, Sub-Zero refrigerator service, luxury appliance repair, Wolf appliance repair, Naples premium appliance service" />
        <meta property="og:title" content={`Sub-Zero Appliance Repair Naples FL | Luxury Refrigeration Experts | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Sub-Zero appliance repair in Naples, FL. Certified technicians for Sub-Zero refrigerators, wine storage, freezers & Wolf appliances." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/sub-zero`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/sub-zero`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Sub-Zero Appliance Repair Naples FL",
            "serviceType": "Luxury Appliance Repair",
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
              "serviceUrl": `${siteMetadata.siteUrl}/brands/sub-zero`,
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Sub-Zero Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sub-Zero Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Certified repair service for Sub-Zero refrigeration and Wolf cooking appliances. Our factory-trained technicians specialize in luxury appliance repair with precision and expertise.
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

        {/* Why Choose Us for Sub-Zero */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Sub-Zero Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sub-Zero appliances represent the pinnacle of refrigeration technology. Our certified technicians have specialized training to service these sophisticated systems properly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Sub-Zero Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Factory-trained and certified technicians with specialized Sub-Zero diagnostic equipment.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Priority Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Expedited service for luxury appliances with dedicated appointment scheduling.</p>
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
                  <p>Authentic Sub-Zero and Wolf parts to maintain performance and preserve warranties.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sub-Zero Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sub-Zero & Wolf Appliances We Service</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete service for the entire Sub-Zero refrigeration and Wolf cooking appliance line.
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
              <h2 className="text-3xl font-bold mb-4">Common Sub-Zero Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Sub-Zero or Wolf Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' certified Sub-Zero specialists for expert luxury appliance repair service.
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