import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { siteMetadata } from '@/lib/seo';
import { ChatbotModal } from '@/components/home/ChatbotModal';
import { Bot, HelpCircle, Info, Wrench, CheckCircle, Settings } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Common troubleshooting topics
const troubleshootingTopics = [
  {
    appliance: 'refrigerator',
    icon: <Settings className="h-5 w-5" />,
    topics: [
      "Refrigerator not cooling",
      "Ice maker not working",
      "Water dispenser issues",
      "Strange noises",
      "Frost buildup",
      "Leaking water"
    ]
  },
  {
    appliance: 'washer',
    icon: <Settings className="h-5 w-5" />,
    topics: [
      "Washer won't start",
      "Washer not draining",
      "Excessive vibration",
      "Water temperature issues",
      "Washer leaking water",
      "Door won't lock"
    ]
  },
  {
    appliance: 'dryer',
    icon: <Settings className="h-5 w-5" />,
    topics: [
      "Dryer not heating",
      "Dryer won't start",
      "Clothes take too long to dry",
      "Excessive noise",
      "Drum not turning",
      "Burning smell"
    ]
  },
  {
    appliance: 'dishwasher',
    icon: <Settings className="h-5 w-5" />,
    topics: [
      "Dishwasher won't start",
      "Dishes not getting clean",
      "Not draining properly",
      "Leaking water",
      "Unusual noise",
      "Door not latching"
    ]
  },
  {
    appliance: 'oven',
    icon: <Settings className="h-5 w-5" />,
    topics: [
      "Oven not heating",
      "Temperature inconsistency",
      "Oven light not working",
      "Self-cleaning issues",
      "Door not closing properly",
      "Control panel problems"
    ]
  }
];

export default function TroubleshootingGuide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const handleTopicClick = (topic: string) => {
    setSelectedQuestion(topic);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <Helmet>
        <title>Appliance Troubleshooting Guide | {siteMetadata.title}</title>
        <meta 
          name="description" 
          content="Get expert troubleshooting help for common appliance problems. Our AI assistant can help diagnose issues with refrigerators, washers, dryers, dishwashers, ovens and more."
        />
        <meta property="og:title" content={`Appliance Troubleshooting Guide | ${siteMetadata.title}`} />
        <meta 
          property="og:description" 
          content="Get expert troubleshooting help for common appliance problems. Our AI assistant can help diagnose issues with refrigerators, washers, dryers, dishwashers, ovens and more."
        />
      </Helmet>

      <main>
        <div className="container px-4 py-12 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Interactive Appliance Troubleshooting Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get help diagnosing common appliance problems and find solutions with our AI-powered assistant.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {/* Key Features */}
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  AI-Powered Assistant
                </CardTitle>
                <CardDescription>
                  Advanced troubleshooting with intelligent responses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Our AI assistant uses advanced technology to provide personalized troubleshooting guidance for your specific appliance issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Expert Knowledge
                </CardTitle>
                <CardDescription>
                  Professional-level diagnosis and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Get access to the same diagnostic approach our professional technicians use, with step-by-step guidance for common problems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Save Time & Money
                </CardTitle>
                <CardDescription>
                  Resolve simple issues without a service call
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Many appliance issues can be resolved with simple troubleshooting. Our guide helps you identify when you can fix it yourself or when to call a professional.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted p-8 rounded-lg mb-16">
            <div className="mb-8 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How Can We Help You Today?</h2>
              <p className="text-muted-foreground">
                Select your appliance type and common issue below, or ask our AI assistant a specific question about your appliance problem.
              </p>
            </div>

            <Tabs defaultValue={troubleshootingTopics[0].appliance} className="mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8 h-auto">
                {troubleshootingTopics.map(topic => (
                  <TabsTrigger
                    key={topic.appliance}
                    value={topic.appliance}
                    className="py-3 capitalize"
                  >
                    {topic.appliance}
                  </TabsTrigger>
                ))}
              </TabsList>

              {troubleshootingTopics.map(topic => (
                <TabsContent key={topic.appliance} value={topic.appliance}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="capitalize">Common {topic.appliance} Problems</CardTitle>
                      <CardDescription>
                        Click on an issue to get troubleshooting help from our AI assistant
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-2 md:grid-cols-2">
                        {topic.topics.map((issue, index) => (
                          <li key={index}>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left h-auto py-3"
                              onClick={() => handleTopicClick(issue)}
                            >
                              <HelpCircle className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                              <span>{issue}</span>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            <div className="text-center">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => setIsModalOpen(true)}
              >
                <Bot className="h-5 w-5" />
                <span>Open AI Troubleshooting Assistant</span>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Have a specific question? Our AI assistant is ready to help!
              </p>
            </div>
          </div>

          <div className="border rounded-lg p-6 mb-16">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">When to Call a Professional</h3>
                <p className="text-muted-foreground mb-4">
                  While our troubleshooting guide can help with many common issues, some problems require professional attention:
                </p>
                <ul className="grid gap-3 md:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Electrical issues or burning smells</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Gas appliance problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Water leaks that won't stop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Refrigerant issues with cooling appliances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Appliance not working after basic troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Unusual noises, vibrations, or operation</span>
                  </li>
                </ul>
                <Separator className="my-6" />
                <div className="text-center">
                  <p className="font-medium mb-3">Need professional help? Contact us today!</p>
                  <Button className="gap-2" variant="outline" asChild>
                    <a href="tel:+12392302100">
                      <span>Call (239) 230-2100</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ChatbotModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
      
      <Footer />
    </>
  );
}