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
  'Star Burner ignition and flame issues',
  'Freedom induction cooktop error codes',
  'Steam and convection oven malfunctions',
  'Masterpiece dishwasher wash system problems',
  'Wine preservation column temperature control',
  'Built-in refrigerator cooling system issues',
  'Ventilation hood motor and lighting problems',
  'Touch control panel calibration'
];

const applianceTypes = [
  { name: 'Thermador Ranges', description: 'Professional Star Burner and induction ranges' },
  { name: 'Thermador Cooktops', description: 'Gas, electric, and Freedom induction surfaces' },
  { name: 'Thermador Ovens', description: 'Steam, convection, and combination cooking' },
  { name: 'Thermador Dishwashers', description: 'Masterpiece series with advanced cleaning' },
  { name: 'Thermador Refrigerators', description: 'Built-in and column refrigeration' },
  { name: 'Thermador Wine Storage', description: 'Preservation columns with dual-zone cooling' }
];

export default function ThermadorRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Thermador Appliance Repair Naples FL | Luxury Kitchen Specialists | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Thermador appliance repair in Naples, FL. Expert service for Thermador ranges, ovens, dishwashers & refrigerators. Luxury appliance specialists."
        />
        <meta name="keywords" content="Thermador repair Naples, Thermador range repair, luxury kitchen appliance repair, high-end appliance service, Naples Thermador technicians" />
        <meta property="og:title" content={`Thermador Appliance Repair Naples FL | Luxury Kitchen Specialists | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Thermador appliance repair in Naples, FL. Expert service for Thermador ranges, ovens, dishwashers & refrigerators." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/thermador`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/thermador`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Thermador Appliance Repair Naples FL",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Thermador Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Thermador Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Certified repair service for Thermador luxury kitchen appliances. Our factory-trained technicians specialize in Thermador's innovative cooking technology and precision engineering.
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

        {/* Why Choose Us for Thermador */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Thermador Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Thermador appliances feature innovative technology like Star Burners and Freedom induction. Our certified technicians understand these advanced systems and provide expert service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Thermador Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Factory-trained technicians with specialized knowledge of Thermador's innovative technologies.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Luxury Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>White-glove service approach with priority scheduling for luxury appliances.</p>
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
                  <p>Authentic Thermador replacement parts to maintain performance and preserve warranties.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Thermador Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Thermador Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Thermador Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Thermador Appliance Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' Thermador specialists for expert luxury appliance repair service.
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