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
  'Dual-stacked burner ignition problems',
  'Convection oven fan motor failures',
  'Gourmet mode temperature inconsistencies',
  'Gas valve and regulator adjustments',
  'Control knob and electronic panel issues',
  'Griddle and grill cleaning and maintenance',
  'Vent hood motor and filter problems',
  'Professional warranty service'
];

const applianceTypes = [
  { name: 'Wolf Ranges', description: 'Professional dual-fuel, gas, and electric ranges' },
  { name: 'Wolf Cooktops', description: 'Gas, electric, and induction cooking surfaces' },
  { name: 'Wolf Wall Ovens', description: 'Convection ovens with Gourmet cooking modes' },
  { name: 'Wolf Rangetops', description: 'Professional-grade cooking surfaces' },
  { name: 'Wolf Outdoor Grills', description: 'Built-in and freestanding outdoor cooking' },
  { name: 'Wolf Ventilation', description: 'Range hoods and ventilation systems' }
];

export default function WolfRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Wolf Appliance Repair Naples FL | Professional Cooking Equipment | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Wolf appliance repair in Naples, FL. Certified service for Wolf ranges, ovens, cooktops & ventilation. Factory-trained technicians."
        />
        <meta name="keywords" content="Wolf repair Naples, Wolf range repair, professional cooking appliance repair, luxury kitchen repair, Naples Wolf service" />
        <meta property="og:title" content={`Wolf Appliance Repair Naples FL | Professional Cooking Equipment | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Wolf appliance repair in Naples, FL. Certified service for Wolf ranges, ovens, cooktops & ventilation." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/wolf`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/wolf`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Wolf Appliance Repair Naples FL",
            "serviceType": "Professional Cooking Equipment Repair",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Wolf Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wolf Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Certified repair service for Wolf professional cooking equipment. Our factory-trained technicians specialize in Wolf ranges, ovens, cooktops, and ventilation systems.
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

        {/* Why Choose Us for Wolf */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Wolf Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Wolf appliances deliver professional cooking performance. Our certified technicians understand Wolf's precision engineering and provide expert service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Wolf Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Factory-trained technicians with specialized Wolf diagnostic tools and expertise.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Professional Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Dedicated service for professional-grade cooking equipment with priority scheduling.</p>
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
                  <p>Authentic Wolf replacement parts to maintain cooking performance and warranties.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Wolf Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Wolf Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Wolf Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Wolf Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' Wolf specialists for expert professional cooking equipment repair.
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