import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteMetadata } from '@/lib/seo';
import { Wrench, Phone, CheckCircle, Star, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ScrollLink } from '@/utils/scrollToTop';
import { Link } from 'wouter';

const maytagAppliances = [
  { name: 'Maytag Refrigerators', models: 'French Door, Side-by-Side, Top Freezer, Bottom Freezer', issues: 'Ice maker problems, temperature fluctuations, door seal issues' },
  { name: 'Maytag Washers', models: 'Bravos, Centennial, Commercial Technology', issues: 'Agitator problems, drainage issues, lid lock malfunctions' },
  { name: 'Maytag Dryers', models: 'Bravos, Centennial, Large Capacity', issues: 'Not heating, long dry times, lint buildup issues' },
  { name: 'Maytag Dishwashers', models: 'Jetclean Plus, PowerBlast, Stainless Steel Tub', issues: 'Not cleaning properly, drainage problems, spray arm clogs' },
  { name: 'Maytag Ranges', models: 'Gas, Electric, Self-Clean, Convection', issues: 'Oven not heating, burner problems, temperature issues' },
  { name: 'Maytag Microwaves', models: 'Over-Range, Countertop, Stainless Steel', issues: 'Not heating, turntable problems, door latch issues' }
];

const commonIssues = [
  'Bravos washer agitator replacement',
  'Centennial series transmission problems',
  'Ice maker not producing ice',
  'Dishwasher Jetclean system malfunctions',
  'Dryer moisture sensor failures',
  'Oven temperature calibration issues',
  'Door seal and gasket replacements',
  'Control board electronic failures'
];

export default function MaytagRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Maytag Appliance Repair Naples FL | Bravos & Centennial | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Maytag appliance repair in Naples, FL. We service Maytag Bravos, Centennial & all models. Same-day service available. Factory-trained technicians."
        />
        <meta property="og:title" content={`Maytag Appliance Repair Naples FL | Bravos & Centennial | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Professional Maytag appliance repair in Naples, FL. We service Maytag Bravos, Centennial & all models. Same-day service available. Factory-trained technicians."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">Maytag Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Maytag Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Factory-trained technicians specializing in dependable Maytag appliances. From Bravos washers to Commercial Technology, we service them all.
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

        {/* Maytag Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Maytag Appliances We Repair</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Built to last with Commercial Technology and dependable engineering, we service the complete Maytag appliance lineup.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maytagAppliances.map((appliance, index) => (
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

        {/* Common Maytag Issues */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Maytag Appliance Problems We Fix</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technicians specialize in the dependable engineering of Maytag appliances and their common repair needs.
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
            <h2 className="text-3xl font-bold mb-4">Maytag Appliance Not Working?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust the dependability experts with your Maytag appliance repair. Our certified technicians will restore your appliance's reliable performance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Maytag Repair: (239) 230-2100
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