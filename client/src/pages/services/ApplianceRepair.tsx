import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata, structuredData } from '@/lib/seo';
import { Wrench, CheckCircle, Clock, Shield, Star, Phone } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'wouter';

const applianceTypes = [
  { name: 'Refrigerators', icon: '❄️', description: 'All makes and models, ice makers, water dispensers' },
  { name: 'Washing Machines', icon: '🌊', description: 'Front-load, top-load, stackable units' },
  { name: 'Dryers', icon: '🔥', description: 'Electric, gas, ventless models' },
  { name: 'Dishwashers', icon: '🍽️', description: 'Built-in, portable, drawer-style' },
  { name: 'Ovens & Ranges', icon: '🔥', description: 'Electric, gas, induction cooktops' },
  { name: 'Microwaves', icon: '⚡', description: 'Countertop, over-range, built-in' },
  { name: 'Garbage Disposals', icon: '🗑️', description: 'All horsepower ratings and brands' },
  { name: 'Water Heaters', icon: '💧', description: 'Tank, tankless, electric, gas' }
];

const majorBrands = [
  'Samsung', 'LG', 'Whirlpool', 'GE', 'Maytag', 'Bosch',
  'KitchenAid', 'Frigidaire', 'Electrolux', 'Kenmore',
  'Sub-Zero', 'Wolf', 'Viking', 'Thermador', 'Miele'
];

const serviceFeatures = [
  { icon: CheckCircle, title: 'Same-Day Service', description: 'Emergency repairs available 7 days a week' },
  { icon: Shield, title: 'Licensed & Insured', description: 'Fully certified technicians with insurance coverage' },
  { icon: Star, title: '5-Star Rated', description: 'Highest customer satisfaction ratings in Naples' },
  { icon: Clock, title: 'Fast Response', description: 'Quick diagnosis and efficient repair solutions' }
];

export default function ApplianceRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Professional Appliance Repair Naples FL | All Major Brands | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Expert appliance repair services in Naples, FL. We fix all major brands - Samsung, LG, Whirlpool, GE & more. Same-day service available. Licensed & insured technicians."
        />
        <meta property="og:title" content={`Professional Appliance Repair Naples FL | All Major Brands | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Expert appliance repair services in Naples, FL. We fix all major brands - Samsung, LG, Whirlpool, GE & more. Same-day service available. Licensed & insured technicians."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            ...structuredData.organization,
            "@type": "LocalBusiness",
            "name": "Naples Appliance Repair",
            "serviceType": "Appliance Repair Service",
            "areaServed": {
              "@type": "City",
              "name": "Naples",
              "addressRegion": "FL"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Appliance Repair Services",
              "itemListElement": applianceTypes.map((appliance, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": `${appliance.name} Repair`,
                  "description": appliance.description
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Appliance Repair in Naples, FL
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert repair services for all major appliance brands. Same-day service available throughout Collier County with licensed, insured technicians you can trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+12392302100" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call (239) 230-2100
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                  <Link href="#contact">Schedule Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Naples Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We're Naples' most trusted appliance repair service, serving homeowners throughout Collier County with professional, reliable solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Appliance Types */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Appliances We Repair</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From kitchen essentials to laundry room workhorses, we repair all types of home appliances with expert precision.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applianceTypes.map((appliance, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{appliance.icon}</div>
                    <CardTitle className="text-lg">{appliance.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm text-center">{appliance.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Major Brands */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">We Repair All Major Appliance Brands</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our certified technicians are trained to work on all major appliance manufacturers, ensuring expert service regardless of your appliance brand.
              </p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {majorBrands.map((brand, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                  <p className="font-medium text-sm">{brand}</p>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/brands">View All Supported Brands</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Repair Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Simple, transparent, and efficient. Here's how we get your appliances back to working perfectly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Schedule Service</h3>
                <p className="text-muted-foreground">Call us or book online. We offer same-day appointments and emergency service throughout Naples.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Expert Diagnosis</h3>
                <p className="text-muted-foreground">Our certified technicians perform thorough diagnostics and provide upfront pricing before any work begins.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Quality Repair</h3>
                <p className="text-muted-foreground">Professional repair using genuine parts, backed by our comprehensive warranty and satisfaction guarantee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Appliance Repair Today?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't let broken appliances disrupt your daily routine. Our expert technicians are ready to help with fast, reliable repair services throughout Naples and Collier County.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Service: (239) 230-2100
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link href="/#contact">Schedule Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}