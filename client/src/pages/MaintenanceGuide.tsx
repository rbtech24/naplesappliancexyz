import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SeasonalMaintenanceWidget } from '@/components/home/SeasonalMaintenanceWidget';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { siteMetadata } from '@/lib/seo';
import { Calendar, Wrench, Clock, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MaintenanceGuide() {
  const [selectedSeason, setSelectedSeason] = useState<'spring' | 'summer' | 'fall' | 'winter'>(() => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 8) return 'summer';
    if (month >= 9 && month <= 10) return 'fall';
    return 'winter';
  });

  const maintenanceBenefits = [
    {
      icon: <Clock className="h-12 w-12 text-blue-500" />,
      title: "Extended Appliance Lifespan",
      description: "Regular maintenance can add years to your appliances' operational life, saving you money on premature replacements."
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-yellow-500" />,
      title: "Prevent Costly Breakdowns",
      description: "Identifying and addressing small issues before they become major problems helps avoid expensive emergency repairs."
    },
    {
      icon: <CheckCircle2 className="h-12 w-12 text-green-500" />,
      title: "Improve Performance & Efficiency",
      description: "Well-maintained appliances run more efficiently, using less energy and providing better performance."
    }
  ];

  return (
    <div>
      <Header />
      <Helmet>
        <title>Seasonal Appliance Maintenance Guide | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Keep your home appliances running efficiently all year with our seasonal maintenance guides. Learn what maintenance tasks to perform during each season in Naples, FL."
        />
        <meta name="keywords" content="appliance maintenance guide, seasonal maintenance, Naples FL appliance care, refrigerator maintenance, washer maintenance, dryer maintenance, oven maintenance, preventive care" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Seasonal Appliance Maintenance Guide | ${siteMetadata.title}`} />
        <meta property="og:description" content="Keep your home appliances running efficiently all year with our seasonal maintenance guides. Learn what maintenance tasks to perform during each season in Naples, FL." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/maintenance-guide`} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`Seasonal Appliance Maintenance Guide | ${siteMetadata.title}`} />
        <meta name="twitter:description" content="Keep your home appliances running efficiently all year with our seasonal maintenance guides." />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteMetadata.siteUrl}/maintenance-guide`} />
        
        {/* How-To Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Seasonal Appliance Maintenance Guide",
            "description": "Learn how to maintain your home appliances throughout the year in Naples, Florida",
            "image": `${siteMetadata.siteUrl}/maintenance-guide-image.jpg`,
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "0"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Cleaning supplies"
              },
              {
                "@type": "HowToSupply", 
                "name": "Replacement filters"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Vacuum cleaner"
              },
              {
                "@type": "HowToTool",
                "name": "Cleaning cloths"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Spring Maintenance",
                "text": "Clean appliance coils, replace filters, check door seals"
              },
              {
                "@type": "HowToStep",
                "name": "Summer Preparation",
                "text": "Prepare appliances for high usage during peak season"
              },
              {
                "@type": "HowToStep",
                "name": "Fall Inspection",
                "text": "Inspect for wear and schedule professional maintenance"
              },
              {
                "@type": "HowToStep",
                "name": "Winter Care",
                "text": "Ensure appliances handle increased usage efficiently"
              }
            ]
          })}
        </script>
      </Helmet>

      <main>
        <div className="container px-4 py-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Seasonal Appliance Maintenance Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Keep your appliances running efficiently year-round with our seasonal maintenance recommendations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {maintenanceBenefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                Seasonal Maintenance Checklist
              </h2>
              
              <Tabs defaultValue={selectedSeason} onValueChange={(value) => setSelectedSeason(value as any)}>
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="spring">Spring</TabsTrigger>
                  <TabsTrigger value="summer">Summer</TabsTrigger>
                  <TabsTrigger value="fall">Fall</TabsTrigger>
                  <TabsTrigger value="winter">Winter</TabsTrigger>
                </TabsList>
                
                <TabsContent value="spring" className="mt-0">
                  <SeasonalMaintenanceWidget />
                </TabsContent>
                
                <TabsContent value="summer" className="mt-0">
                  <SeasonalMaintenanceWidget />
                </TabsContent>
                
                <TabsContent value="fall" className="mt-0">
                  <SeasonalMaintenanceWidget />
                </TabsContent>
                
                <TabsContent value="winter" className="mt-0">
                  <SeasonalMaintenanceWidget />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border shadow-md mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-3">Professional Maintenance Service</h2>
              <p className="mb-6 max-w-2xl opacity-90">
                For optimal appliance performance and longevity, consider our professional maintenance service. Our trained technicians will perform comprehensive checks and preventive maintenance on all your major appliances.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  <a href="/#contact">Schedule Maintenance</a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  <a href="tel:+12392302100">Call (239) 230-2100</a>
                </Button>
              </div>
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="text-lg font-semibold mb-4">Our Professional Maintenance Includes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Comprehensive Appliance Inspection</p>
                    <p className="text-sm text-gray-600">Complete examination of all components and systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Performance Testing</p>
                    <p className="text-sm text-gray-600">Verify operation against manufacturer specifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Preventive Part Replacement</p>
                    <p className="text-sm text-gray-600">Replace wear-prone parts before they fail</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Safety Checks</p>
                    <p className="text-sm text-gray-600">Ensure all appliances operate safely</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-2">Need Help with Your Appliance Maintenance?</h2>
            <p className="mb-4">Our technicians are ready to help with all your appliance maintenance needs</p>
            <Button className="gap-2">
              <a href="/#contact">Contact Us</a>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}