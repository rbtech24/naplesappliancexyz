import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteMetadata } from '@/lib/seo';
import { Wrench, Phone, CheckCircle, Star, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'wouter';

const lgAppliances = [
  { name: 'LG Refrigerators', models: 'French Door, Side-by-Side, Bottom Freezer, InstaView', issues: 'Ice maker problems, linear compressor issues, door seal problems' },
  { name: 'LG Washers', models: 'TurboWash, TWINWash, Front Load, Top Load', issues: 'Drainage problems, vibration issues, error codes (OE, LE, UE)' },
  { name: 'LG Dryers', models: 'Heat Pump, SteamDryer, TrueSteam', issues: 'Not heating, long dry times, moisture sensor malfunctions' },
  { name: 'LG Dishwashers', models: 'QuadWash, TrueSteam, Third Rack', issues: 'Not cleaning properly, drainage issues, spray arm problems' },
  { name: 'LG Ranges', models: 'ProBake, EasyClean, InstaView', issues: 'Oven not heating, burner problems, self-clean cycle issues' },
  { name: 'LG Microwaves', models: 'NeoChef, Over-Range, Countertop', issues: 'Not heating, turntable problems, sensor cooking malfunctions' }
];

const commonIssues = [
  'Linear compressor refrigerator problems',
  'ThinQ smart appliance connectivity issues',
  'Washer error codes (OE, LE, UE, IE)',
  'Dryer taking multiple cycles to dry',
  'Dishwasher QuadWash arm malfunctions',
  'Oven ProBake convection problems',
  'Ice maker not producing ice',
  'Door seal and gasket replacements'
];

export default function LGRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>LG Appliance Repair Naples FL | Expert LG Service | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional LG appliance repair in Naples, FL. We fix LG refrigerators, washers, dryers, dishwashers & more. Same-day service available. Factory-trained technicians."
        />
        <meta property="og:title" content={`LG Appliance Repair Naples FL | Expert LG Service | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Professional LG appliance repair in Naples, FL. We fix LG refrigerators, washers, dryers, dishwashers & more. Same-day service available. Factory-trained technicians."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">LG Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                LG Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Factory-trained technicians specializing in LG appliances. From ThinQ smart appliances to linear compressor refrigerators, we handle all LG models with precision.
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

        {/* LG Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">LG Appliances We Repair</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From innovative ThinQ smart features to energy-efficient designs, we service the complete LG appliance lineup.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lgAppliances.map((appliance, index) => (
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

        {/* Common LG Issues */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common LG Appliance Problems We Fix</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technicians are experts at diagnosing and repairing these frequent LG appliance issues.
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
            <h2 className="text-3xl font-bold mb-4">LG Appliance Not Working?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't let a broken LG appliance disrupt your routine. Our LG-certified technicians are ready to restore your appliance to perfect working condition.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency LG Repair: (239) 230-2100
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