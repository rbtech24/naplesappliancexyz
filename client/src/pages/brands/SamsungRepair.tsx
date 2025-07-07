import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteMetadata } from '@/lib/seo';
import { Wrench, Phone, CheckCircle, Star, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'wouter';

const samsungAppliances = [
  { name: 'Samsung Refrigerators', models: 'French Door, Side-by-Side, Top Freezer, Counter-Depth', issues: 'Ice maker problems, temperature control, water dispenser' },
  { name: 'Samsung Washers', models: 'Front Load, Top Load, High-Efficiency', issues: 'Drainage issues, vibration problems, error codes' },
  { name: 'Samsung Dryers', models: 'Electric, Gas, Heat Pump', issues: 'Not heating, long dry times, moisture sensor problems' },
  { name: 'Samsung Dishwashers', models: 'Built-in, Drawer-style, Portable', issues: 'Not cleaning properly, drainage problems, control panel issues' },
  { name: 'Samsung Ranges', models: 'Electric, Gas, Induction, Slide-in', issues: 'Oven not heating, burner problems, self-clean cycle issues' },
  { name: 'Samsung Microwaves', models: 'Countertop, Over-range, Built-in', issues: 'Not heating, turntable problems, door latch issues' }
];

const commonIssues = [
  'Ice maker not working or producing hollow ice',
  'Washer showing error codes (4C, 5C, LC, etc.)',
  'Dryer taking multiple cycles to dry clothes',
  'Refrigerator not cooling evenly',
  'Oven temperature not accurate',
  'Dishwasher leaving spots on dishes',
  'Smart appliance connectivity problems',
  'Touch screen display malfunctions'
];

export default function SamsungRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Samsung Appliance Repair Naples FL | Expert Service | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Expert Samsung appliance repair in Naples, FL. We fix Samsung refrigerators, washers, dryers, dishwashers & more. Same-day service available. Licensed technicians."
        />
        <meta property="og:title" content={`Samsung Appliance Repair Naples FL | Expert Service | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Expert Samsung appliance repair in Naples, FL. We fix Samsung refrigerators, washers, dryers, dishwashers & more. Same-day service available. Licensed technicians."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">Samsung Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Samsung Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Factory-trained technicians specializing in Samsung appliances. We repair all Samsung models with genuine parts and provide comprehensive warranties on all work.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+12392302100" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call (239) 230-2100
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                  <Link href="/#contact">Schedule Samsung Repair</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Samsung */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us for Samsung Appliance Repair?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Samsung appliances feature advanced technology that requires specialized knowledge. Our Samsung-certified technicians have the training and experience to handle any issue.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Samsung Certified Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our technicians are factory-trained on Samsung appliances and stay current with the latest models and technologies.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Genuine Samsung Parts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We use only genuine Samsung OEM parts to ensure your appliance maintains its warranty and optimal performance.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Same-Day Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Emergency Samsung appliance repairs available same-day throughout Naples and Collier County.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Samsung Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Samsung Appliances We Repair</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From basic models to Samsung's latest smart appliances, we service the complete Samsung appliance lineup.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samsungAppliances.map((appliance, index) => (
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

        {/* Common Samsung Issues */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Samsung Appliance Problems We Fix</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technicians are experts at diagnosing and repairing these frequent Samsung appliance issues.
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

        {/* Samsung Smart Appliance Expertise */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Samsung Smart Appliance Specialists</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Samsung's smart appliances with WiFi connectivity, mobile app control, and advanced diagnostics require specialized repair expertise. Our technicians are trained on Samsung's SmartThings platform and can troubleshoot connectivity issues, software problems, and smart features.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>SmartThings connectivity troubleshooting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Mobile app integration repair</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Software updates and firmware issues</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Voice control (Bixby, Alexa) setup and repair</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Samsung Warranty Service</h3>
                <p className="text-muted-foreground mb-4">
                  We're authorized to perform warranty repairs on Samsung appliances, ensuring your coverage remains intact while getting professional service.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Factory warranty honor</li>
                  <li>• Extended warranty service</li>
                  <li>• Genuine Samsung parts only</li>
                  <li>• Warranty documentation provided</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Samsung Appliance Not Working?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't let a broken Samsung appliance disrupt your routine. Our Samsung-certified technicians are ready to restore your appliance to perfect working condition.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency Samsung Repair: (239) 230-2100
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