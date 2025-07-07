import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteMetadata } from '@/lib/seo';
import { Wrench, Phone, CheckCircle, Star, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ScrollLink } from '@/utils/scrollToTop';

const boschAppliances = [
  { name: 'Bosch Refrigerators', models: 'Counter-Depth, French Door, Bottom Freezer, Compact', issues: 'Temperature control, ice maker problems, door seal issues' },
  { name: 'Bosch Washers', models: 'Front Load, Compact, 800 Series, 500 Series', issues: 'Door lock problems, drainage issues, vibration control' },
  { name: 'Bosch Dryers', models: 'Condensation, Heat Pump, Compact, Stackable', issues: 'Not drying properly, moisture sensor issues, lint problems' },
  { name: 'Bosch Dishwashers', models: '800 Series, 500 Series, Benchmark, Compact', issues: 'Not cleaning properly, drainage problems, wash pump issues' },
  { name: 'Bosch Ranges', models: 'Induction, Gas, Electric, Benchmark Series', issues: 'Oven not heating, induction problems, control panel issues' },
  { name: 'Bosch Microwaves', models: 'Built-in, Drawer, Over-Range, Speed Ovens', issues: 'Not heating, door problems, control malfunctions' }
];

const commonIssues = [
  'Dishwasher wash pump motor failures',
  'Front load washer door lock malfunctions',
  'Induction cooktop control board issues',
  'Condensation dryer heat exchanger problems',
  'Ice maker production failures',
  'Oven temperature sensor malfunctions',
  'Door seal and gasket replacements',
  'Electronic control module failures'
];

export default function BoschRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Bosch Appliance Repair Naples FL | German Engineering | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Bosch appliance repair in Naples, FL. We service all Bosch models including 800 Series, Benchmark & more. Same-day service available."
        />
        <meta property="og:title" content={`Bosch Appliance Repair Naples FL | German Engineering | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Professional Bosch appliance repair in Naples, FL. We service all Bosch models including 800 Series, Benchmark & more. Same-day service available."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">Bosch Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bosch Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Factory-trained technicians specializing in German-engineered Bosch appliances. From precision dishwashers to efficient condensation dryers.
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

        {/* Bosch Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Bosch Appliances We Repair</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                German engineering meets precision performance. We service the complete Bosch appliance lineup with specialized expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boschAppliances.map((appliance, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{appliance.name}</CardTitle>
                    <CardDescription>
                      <strong>Models:</strong> {appliance.models}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <strong>Common Issues:</strong> {appliance.issues}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Bosch Issues */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Bosch Appliance Problems We Fix</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technicians understand the precision engineering of Bosch appliances and their specific repair requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {commonIssues.map((issue, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Bosch Appliance Not Working?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust German precision with our certified Bosch technicians. We understand the engineering excellence built into every Bosch appliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Bosch Repair: (239) 230-2100
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