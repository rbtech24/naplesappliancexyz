import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { CheckCircle, Phone, Star, Wrench, Clock, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';


const commonIssues = [
  'DishDrawer cleaning cycle problems',
  'French door refrigerator ice maker issues',
  'Smart Drive washing machine sensor errors',
  'Convection oven fan motor failures',
  'Gas cooktop ignition system problems',
  'ActiveSmart temperature control malfunctions',
  'Drawer dishwasher seal replacements',
  'Electronic control panel diagnostics'
];

const applianceTypes = [
  { name: 'Fisher & Paykel Refrigerators', description: 'French door and bottom freezer models with ActiveSmart technology' },
  { name: 'Fisher & Paykel Dishwashers', description: 'DishDrawer and conventional dishwasher models' },
  { name: 'Fisher & Paykel Washers', description: 'Smart Drive and traditional washing machines' },
  { name: 'Fisher & Paykel Ranges', description: 'Dual-fuel and gas cooking ranges' },
  { name: 'Fisher & Paykel Cooktops', description: 'Gas and induction cooking surfaces' },
  { name: 'Fisher & Paykel Ovens', description: 'Built-in wall ovens with convection technology' }
];

export default function FisherPaykelRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Fisher & Paykel Appliance Repair Naples FL | Innovative Design | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Fisher & Paykel appliance repair in Naples, FL. Expert service for DishDrawer, refrigerators, washers & more. New Zealand innovation specialists."
        />
        <meta name="keywords" content="Fisher Paykel repair Naples, DishDrawer repair, innovative appliance repair, Naples Fisher Paykel service, New Zealand appliances" />
        <meta property="og:title" content={`Fisher & Paykel Appliance Repair Naples FL | Innovative Design | ${siteMetadata.title}`} />
        <meta property="og:description" content="Professional Fisher & Paykel appliance repair in Naples, FL. Expert service for DishDrawer, refrigerators, washers & more." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/brands/fisher-paykel`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/brands/fisher-paykel`} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fisher & Paykel Appliance Repair Naples FL",
            "serviceType": "Innovative Appliance Repair",
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
                <Badge variant="secondary" className="text-lg px-3 py-1">Fisher & Paykel Authorized</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fisher & Paykel Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert repair service for Fisher & Paykel's innovative appliances. From DishDrawer dishwashers to ActiveSmart refrigerators, our technicians understand their unique design philosophy.
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

        {/* Why Choose Us for Fisher & Paykel */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Fisher & Paykel Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Fisher & Paykel appliances feature innovative designs and unique technologies. Our technicians have specialized training to service these distinctive appliances properly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Innovation Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Specialized knowledge of Fisher & Paykel's unique design philosophy and innovative technologies.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Quick Diagnosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Efficient troubleshooting of unique Fisher & Paykel systems and components.</p>
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
                  <p>Authentic Fisher & Paykel parts to maintain innovative features and performance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fisher & Paykel Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fisher & Paykel Appliances We Service</h2>
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
              <h2 className="text-3xl font-bold mb-4">Common Fisher & Paykel Issues We Fix</h2>
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
            <h2 className="text-3xl font-bold mb-4">Need Fisher & Paykel Repair?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust Naples' innovation specialists for expert Fisher & Paykel appliance repair.
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