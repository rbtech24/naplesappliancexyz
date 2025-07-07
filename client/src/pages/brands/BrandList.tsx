import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siteMetadata } from '@/lib/seo';
import { Wrench, Phone } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'wouter';

const brands = [
  { name: 'Samsung', slug: 'samsung', description: 'Smart appliances with innovative technology' },
  { name: 'LG', slug: 'lg', description: 'Energy-efficient appliances with modern design' },
  { name: 'Whirlpool', slug: 'whirlpool', description: 'Reliable home appliances for every kitchen' },
  { name: 'GE', slug: 'ge', description: 'General Electric appliances built to last' },
  { name: 'Maytag', slug: 'maytag', description: 'Dependable appliances for busy households' },
  { name: 'Bosch', slug: 'bosch', description: 'German engineering and precision' },
  { name: 'KitchenAid', slug: 'kitchenaid', description: 'Premium kitchen appliances and mixers' },
  { name: 'Frigidaire', slug: 'frigidaire', description: 'Affordable and efficient home appliances' },
  { name: 'Electrolux', slug: 'electrolux', description: 'Scandinavian design meets performance' },
  { name: 'Kenmore', slug: 'kenmore', description: 'Trusted brand for quality appliances' },
  { name: 'Sub-Zero', slug: 'sub-zero', description: 'Luxury refrigeration and wine storage' },
  { name: 'Wolf', slug: 'wolf', description: 'Professional-grade cooking appliances' },
  { name: 'Viking', slug: 'viking', description: 'Commercial-quality kitchen equipment' },
  { name: 'Thermador', slug: 'thermador', description: 'High-end cooking and refrigeration' },
  { name: 'Miele', slug: 'miele', description: 'German precision and durability' },
  { name: 'Fisher & Paykel', slug: 'fisher-paykel', description: 'Innovative appliances from New Zealand' },
  { name: 'Dacor', slug: 'dacor', description: 'Luxury kitchen appliances and design' },
  { name: 'JennAir', slug: 'jennair', description: 'Premium appliances with distinctive style' },
  { name: 'Asko', slug: 'asko', description: 'Scandinavian design and eco-friendly' },
  { name: 'Speed Queen', slug: 'speed-queen', description: 'Commercial-grade laundry equipment' },
  { name: 'Amana', slug: 'amana', description: 'Value-oriented appliances for every home' },
  { name: 'Haier', slug: 'haier', description: 'Global appliance manufacturer' },
  { name: 'Bertazzoni', slug: 'bertazzoni', description: 'Italian craftsmanship in kitchen appliances' },
  { name: 'Smeg', slug: 'smeg', description: 'Retro-style Italian appliances' },
  { name: 'Sharp', slug: 'sharp', description: 'Electronics and appliance innovation' },
  { name: 'Panasonic', slug: 'panasonic', description: 'Technology-focused home appliances' },
  { name: 'Toshiba', slug: 'toshiba', description: 'Japanese quality and reliability' },
  { name: 'Hotpoint', slug: 'hotpoint', description: 'Affordable appliances for everyday use' },
  { name: 'Roper', slug: 'roper', description: 'Basic appliances with proven reliability' },
  { name: 'Admiral', slug: 'admiral', description: 'Classic appliance brand' },
  { name: 'Magic Chef', slug: 'magic-chef', description: 'Compact and affordable appliances' },
  { name: 'U-Line', slug: 'u-line', description: 'Specialty refrigeration and ice makers' },
  { name: 'Scotsman', slug: 'scotsman', description: 'Commercial ice machines and refrigeration' },
  { name: 'BlueStar', slug: 'bluestar', description: 'Professional cooking equipment' },
  { name: 'True', slug: 'true', description: 'Commercial refrigeration specialists' },
  { name: 'Fulgor Milano', slug: 'fulgor-milano', description: 'Italian luxury kitchen appliances' }
];

export default function BrandList() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>Appliance Brands We Repair | All Major Manufacturers | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="We repair all major appliance brands in Naples, FL. Samsung, LG, Whirlpool, GE, Bosch, Sub-Zero, Wolf & more. Expert service for any manufacturer."
        />
        <meta property="og:title" content={`Appliance Brands We Repair | All Major Manufacturers | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="We repair all major appliance brands in Naples, FL. Samsung, LG, Whirlpool, GE, Bosch, Sub-Zero, Wolf & more. Expert service for any manufacturer."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
          <div className="container px-4 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Repair All Major Appliance Brands
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Our certified technicians are factory-trained to service appliances from all major manufacturers. From budget-friendly models to luxury brands, we have the expertise to fix them all.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+12392302100" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call (239) 230-2100
              </a>
            </Button>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-16">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Brands We Service</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From mainstream household names to premium luxury brands, our technicians have the training and experience to service them all. Click on any brand to learn more about our specific services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {brands.map((brand, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      {brand.name}
                    </CardTitle>
                    <CardDescription>{brand.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={`/brands/${brand.slug}`}>
                        View Services
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Naples Homeowners Trust Us</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our expertise spans across all major appliance brands, ensuring professional service regardless of what you own.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Factory-Trained Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our technicians receive ongoing training from major manufacturers, ensuring they stay current with the latest technologies and repair techniques.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Genuine Parts Inventory</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We stock genuine OEM parts for all major brands, ensuring your appliance repair maintains manufacturer specifications and warranty coverage.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Brand-Specific Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Each brand has unique characteristics and common issues. Our experience with all manufacturers means faster, more accurate diagnoses.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container px-4 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Brand? We Can Still Help!</h2>
            <p className="text-xl mb-8 text-blue-100">
              Even if your appliance brand isn't listed above, our experienced technicians can likely service it. Contact us for a consultation on any appliance repair need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+12392302100" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (239) 230-2100
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}