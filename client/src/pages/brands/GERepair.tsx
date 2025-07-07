import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteMetadata } from '@/lib/seo';
import { Wrench, Phone, CheckCircle, Star, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'wouter';

const geAppliances = [
  { name: 'GE Refrigerators', models: 'Profile, Cafe, Monogram, French Door, Side-by-Side', issues: 'Ice maker problems, temperature control, water filter issues' },
  { name: 'GE Washers', models: 'Top Load, Front Load, Space-Saving, Smart', issues: 'Lid lock problems, drainage issues, agitator problems' },
  { name: 'GE Dryers', models: 'Electric, Gas, Steam, Sensor Dry', issues: 'Not heating, long dry times, lint sensor issues' },
  { name: 'GE Dishwashers', models: 'Profile, Cafe, Built-in, Portable', issues: 'Not cleaning properly, drainage problems, spray arm issues' },
  { name: 'GE Ranges', models: 'Profile, Cafe, Self-Clean, Convection', issues: 'Oven not heating, burner problems, control panel issues' },
  { name: 'GE Microwaves', models: 'Over-Range, Countertop, Profile, Cafe', issues: 'Not heating, turntable problems, door seal issues' }
];

const commonIssues = [
  'Profile series control panel malfunctions',
  'Cafe appliance smart connectivity issues',
  'Ice maker not producing ice or hollow ice',
  'Washer lid lock mechanism failures',
  'Dryer moisture sensor malfunctions',
  'Dishwasher wash motor problems',
  'Oven temperature calibration issues',
  'Water filter replacement and leaks'
];

export default function GERepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>GE Appliance Repair Naples FL | Profile, Cafe & Monogram | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional GE appliance repair in Naples, FL. We service GE Profile, Cafe, Monogram & all GE models. Same-day service available. Factory-trained technicians."
        />
        <meta property="og:title" content={`GE Appliance Repair Naples FL | Profile, Cafe & Monogram | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Professional GE appliance repair in Naples, FL. We service GE Profile, Cafe, Monogram & all GE models. Same-day service available. Factory-trained technicians."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">GE Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                GE Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Factory-trained technicians specializing in all GE appliances including Profile, Cafe, and Monogram series. Over 100 years of trusted American engineering.
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

        {/* GE Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">GE Appliances We Repair</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From standard GE models to premium Profile, Cafe, and Monogram series, we service the complete GE appliance family.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {geAppliances.map((appliance, index) => (
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

        {/* Common GE Issues */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common GE Appliance Problems We Fix</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technicians are experts at diagnosing and repairing these frequent GE appliance issues across all series.
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
            <h2 className="text-3xl font-bold mb-4">GE Appliance Not Working?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust America's most experienced appliance brand with our certified GE technicians. We'll restore your appliance to peak performance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency GE Repair: (239) 230-2100
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