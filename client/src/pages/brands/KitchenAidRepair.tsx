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

const kitchenaidAppliances = [
  { name: 'KitchenAid Refrigerators', models: 'French Door, Side-by-Side, Bottom Freezer, Counter-Depth', issues: 'Ice maker problems, temperature control, water filtration' },
  { name: 'KitchenAid Dishwashers', models: 'Architect Series, Superba, Built-in, Drawer', issues: 'Wash arm problems, drainage issues, control panel malfunctions' },
  { name: 'KitchenAid Ranges', models: 'Dual Fuel, Gas, Electric, Convection', issues: 'Oven not heating, burner problems, convection fan issues' },
  { name: 'KitchenAid Cooktops', models: 'Gas, Electric, Induction, Downdraft', issues: 'Burner control problems, ignition issues, downdraft motor failures' },
  { name: 'KitchenAid Ovens', models: 'Wall Ovens, Combination, Convection, Steam', issues: 'Temperature calibration, door problems, convection system issues' },
  { name: 'KitchenAid Microwaves', models: 'Over-Range, Built-in, Convection Microwave', issues: 'Not heating, turntable problems, convection malfunctions' }
];

const commonIssues = [
  'Architect Series control panel failures',
  'Superba dishwasher wash pump problems',
  'Dual fuel range ignition system issues',
  'Ice maker assembly replacements',
  'Convection oven fan motor failures',
  'Downdraft ventilation motor problems',
  'Door seal and gasket replacements',
  'Temperature sensor malfunctions'
];

export default function KitchenAidRepair() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>KitchenAid Appliance Repair Naples FL | Premium Kitchen Appliances | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Professional KitchenAid appliance repair in Naples, FL. We service KitchenAid Architect, Superba & all models. Same-day service available."
        />
        <meta property="og:title" content={`KitchenAid Appliance Repair Naples FL | Premium Kitchen Appliances | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Professional KitchenAid appliance repair in Naples, FL. We service KitchenAid Architect, Superba & all models. Same-day service available."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-3 py-1">KitchenAid Certified</Badge>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                KitchenAid Appliance Repair in Naples
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Factory-trained technicians specializing in premium KitchenAid appliances. From Architect Series to Superba models, we handle them all.
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

        {/* KitchenAid Appliances We Repair */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">KitchenAid Appliances We Repair</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Premium kitchen appliances designed for culinary excellence. We service the complete KitchenAid lineup with specialized expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kitchenaidAppliances.map((appliance, index) => (
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

        {/* Common KitchenAid Issues */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common KitchenAid Appliance Problems We Fix</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technicians understand the premium engineering of KitchenAid appliances and their specific repair requirements.
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
            <h2 className="text-3xl font-bold mb-4">KitchenAid Appliance Not Working?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Trust your premium KitchenAid appliances with our certified technicians. We'll restore the culinary excellence you depend on.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency KitchenAid Repair: (239) 230-2100
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link href="/#contact">Schedule Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />    </div>
  );
}