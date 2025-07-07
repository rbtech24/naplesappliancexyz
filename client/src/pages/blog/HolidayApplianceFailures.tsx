import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteMetadata } from '@/lib/seo';
import { Calendar, Clock, User, Phone, AlertTriangle, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function HolidayApplianceFailures() {
  return (
    <>
      <Helmet>
        <title>Holiday Appliance Failures: What to Do Before Guests Arrive | Naples Appliance Repair</title>
        <meta name="description" content="Don't let appliance failures ruin your Naples holiday hosting. Learn emergency fixes and when to call professionals before guests arrive in Southwest Florida." />
        <meta name="keywords" content="holiday appliance repair Naples, emergency appliance repair, Naples appliance service, Collier County appliance repair, holiday cooking appliances" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/blog/holiday-appliance-failures-what-to-do-before-guests-arrive`} />
        <meta property="og:title" content="Holiday Appliance Failures: What to Do Before Guests Arrive" />
        <meta property="og:description" content="Don't let appliance failures ruin your Naples holiday hosting. Learn emergency fixes and when to call professionals." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog/holiday-appliance-failures-what-to-do-before-guests-arrive`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">Holiday Preparation</Badge>
                <Badge variant="outline">Emergency Repair</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Holiday Appliance Failures: What to Do Before Guests Arrive
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>December 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Naples Appliance Repair Team</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The holidays are stressful enough without your appliances deciding to take a vacation too. In Naples, where holiday entertaining is a year-round tradition, appliance failures can quickly turn festive gatherings into disasters. Here's your emergency guide to handling appliance breakdowns before guests arrive.
              </p>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Appliance Triage: What to Check First</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                    <AlertTriangle className="inline h-5 w-5 mr-2" />
                    Oven Won't Heat (Hours Before Dinner)
                  </h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Immediate Checks:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Verify power supply - check circuit breaker</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Gas ovens: Ensure gas supply valve is open</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Check oven settings - ensure it's not in sabbath mode</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-red-800">
                            <strong>Naples Pro Tip:</strong> If your oven is completely dead, check if recent storms affected your electrical panel. Power surges are common in Southwest Florida.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                    <AlertTriangle className="inline h-5 w-5 mr-2" />
                    Refrigerator Not Cooling (Food Safety Crisis)
                  </h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Emergency Actions:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Keep doors closed as much as possible</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Check temperature settings - Naples heat can affect thermostats</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Clean condenser coils (back/bottom of unit)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Purchase ice from nearby store as temporary measure</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-blue-800">
                            <strong>Food Safety Alert:</strong> In Naples' heat, food spoils faster. If fridge has been warm for 4+ hours, check food safety guidelines.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                    <AlertTriangle className="inline h-5 w-5 mr-2" />
                    Dishwasher Won't Start (Mountain of Dishes)
                  </h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Quick Troubleshooting:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Ensure door is fully closed and latched</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Check for child lock activation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Reset the unit by unplugging for 5 minutes</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Check garbage disposal if connected</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <p className="text-sm font-medium text-yellow-800">
                            <strong>Naples Alternative:</strong> If dishwasher fails, set up efficient hand-washing stations. Many Naples homes have outdoor sinks perfect for overflow.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* When to Call Professionals */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">When to Call Naples Emergency Appliance Repair</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-800">Call Immediately</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Gas smell from oven/range</li>
                      <li>• Electrical sparking or burning smell</li>
                      <li>• Water leaking onto floor</li>
                      <li>• Complete electrical failure</li>
                      <li>• Refrigerator completely warm</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader className="bg-orange-50">
                    <CardTitle className="text-orange-800">Call Within 24 Hours</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Oven heating unevenly</li>
                      <li>• Dishwasher not cleaning properly</li>
                      <li>• Refrigerator running constantly</li>
                      <li>• Strange noises from appliances</li>
                      <li>• Ice maker not working</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Holiday Preparation Tips */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pre-Holiday Appliance Preparation for Naples Homes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Two Weeks Before Guests Arrive</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Test all appliances at full capacity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Clean oven thoroughly, including self-clean cycle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Schedule professional appliance tune-up</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Stock up on appliance filters and basic parts</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Naples-Specific Holiday Considerations</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>AC units work harder with oven use - ensure proper ventilation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Hurricane season overlap - check generator compatibility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>High humidity affects appliance performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Salt air corrosion - check outdoor appliance connections</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] text-white rounded-lg p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Naples Emergency Appliance Repair</h2>
                <p className="text-lg mb-6">
                  Don't let appliance failures ruin your holiday hosting. Our Naples emergency repair team is standing by.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#ff6b00] hover:bg-[#e55a00] text-white">
                    <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`} className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call {siteMetadata.phoneNumber}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white text-[#0056b3] border-white hover:bg-gray-100">
                    <a href="/#contact">Schedule Service</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Can I get same-day appliance repair in Naples during holidays?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Naples Appliance Repair offers emergency holiday service throughout Collier County. We understand that appliance failures don't wait for convenient times, especially during holiday entertaining season.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    What should I do if multiple appliances fail before a big dinner?
                  </h3>
                  <p className="text-gray-700">
                    Prioritize by safety first (gas leaks, electrical issues), then food safety (refrigeration), then cooking capability (oven, stovetop). Have backup plans ready - many Naples restaurants offer holiday catering on short notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Are holiday appliance repairs more expensive in Naples?
                  </h3>
                  <p className="text-gray-700">
                    Emergency and holiday service may include additional fees, but preventing food spoilage and holiday disasters often makes it worthwhile. We provide upfront pricing and work with your budget.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    How can I prevent holiday appliance failures?
                  </h3>
                  <p className="text-gray-700">
                    Schedule pre-holiday maintenance, avoid overloading appliances, and test everything at full capacity well before guests arrive. Naples' climate puts extra stress on appliances during heavy use periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}