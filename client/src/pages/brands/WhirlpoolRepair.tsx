import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteMetadata } from '@/lib/seo';
import { Wrench, Phone, CheckCircle, Star, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ScrollLink } from '@/utils/scrollToTop';

const whirlpoolAppliances = [
  { name: 'Whirlpool Refrigerators', models: 'French Door, Side-by-Side, Top Freezer, Counter-Depth', issues: 'Ice maker problems, temperature control, adaptive defrost issues' },
  { name: 'Whirlpool Washers', models: 'Cabrio, Duet, Top Load HE', issues: 'Lid lock problems, drainage issues, sensing fill problems' },
  { name: 'Whirlpool Dryers', models: 'Cabrio, Duet, Electric, Gas', issues: 'Not heating, lint buildup, moisture sensor problems' },
  { name: 'Whirlpool Dishwashers', models: 'Quiet Partner, Gold Series, Stainless Steel Tub', issues: 'Not cleaning properly, water not draining, control panel issues' },
  { name: 'Whirlpool Ranges', models: 'AccuBake, TimeSavor, Gas, Electric', issues: 'Oven not heating, burner problems, self-clean issues' },
  { name: 'Whirlpool Microwaves', models: 'Over-Range, Countertop, Built-in', issues: 'Not heating, turntable problems, door latch issues' }
];

const commonIssues = [
  'Cabrio washer lid lock malfunctions',
  'Duet washer door seal problems',
  'Ice maker not producing ice',
  'Adaptive defrost system failures',
  'Dishwasher wash pump motor issues',
  'Oven temperature calibration problems',
  'Dryer moisture sensor malfunctions',
  'Control board and electronic failures'
];

export default function WhirlpoolRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Whirlpool Appliance Repair Naples FL | Expert Service | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional Whirlpool appliance repair in Naples, FL. We fix Whirlpool Cabrio, Duet, and all models. Same-day service available. Factory-trained technicians."
        />
        <meta property="og:title" content={`Whirlpool Appliance Repair Naples FL | Expert Service | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Professional Whirlpool appliance repair in Naples, FL. We fix Whirlpool Cabrio, Duet, and all models. Same-day service available. Factory-trained technicians."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">Whirlpool Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Whirlpool Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Factory-trained technicians specializing in Whirlpool appliances. From Cabrio washers to AccuBake ovens, we handle all Whirlpool models with expertise.
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

        {/* Whirlpool Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Whirlpool Appliances We Repair</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From trusted Cabrio and Duet series to the latest smart appliances, we service the complete Whirlpool lineup.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whirlpoolAppliances.map((appliance, index) => (
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

        {/* Common Whirlpool Issues */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Whirlpool Appliance Problems We Fix</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technicians are experts at diagnosing and repairing these frequent Whirlpool appliance issues.
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
            <h2 className="text-3xl font-bold mb-4">Whirlpool Appliance Not Working?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't let a broken Whirlpool appliance disrupt your routine. Our Whirlpool-certified technicians are ready to restore your appliance to perfect working condition.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Whirlpool Repair: (239) 230-2100
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