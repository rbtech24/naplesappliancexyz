import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteMetadata } from '@/lib/seo';
import { Calendar, Clock, User, Phone, AlertTriangle, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function EmergencyApplianceRepairHolidays() {
  return (
    <>
      <Helmet>
        <title>Emergency Appliance Repair: Who to Call in Naples During the Holidays | Naples Appliance Repair</title>
        <meta name="description" content="Emergency appliance repair service in Naples during holidays. Get fast, reliable service when you need it most in Southwest Florida." />
        <meta name="keywords" content="emergency appliance repair Naples, holiday appliance repair, Naples emergency service, Collier County appliance repair, 24/7 appliance repair" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/blog/emergency-appliance-repair-naples-holidays`} />
        <meta property="og:title" content="Emergency Appliance Repair: Who to Call in Naples During the Holidays" />
        <meta property="og:description" content="Emergency appliance repair service in Naples during holidays. Get fast, reliable service when you need it most." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog/emergency-appliance-repair-naples-holidays`} />
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
                <Badge variant="destructive">Emergency Service</Badge>
                <Badge variant="outline">Holiday Support</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Emergency Appliance Repair: Who to Call in Naples During the Holidays
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>December 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Naples Appliance Repair Team</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                When your oven dies on Christmas Eve or your refrigerator fails during your holiday party, you need more than just any repair service - you need emergency appliance repair that understands the urgency of holiday situations in Naples. Here's your guide to getting fast, reliable service when you need it most.
              </p>
            </div>

            {/* When You Need Emergency Service */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">When You Need Emergency Appliance Repair</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-800 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Immediate Emergency
                    </CardTitle>
                    <CardDescription className="text-red-600">
                      Call immediately - safety risks involved
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Gas smell from any appliance</li>
                      <li>• Electrical sparking or burning odors</li>
                      <li>• Water leaking onto electrical components</li>
                      <li>• Appliance making loud grinding/banging noises</li>
                      <li>• Smoke coming from any appliance</li>
                      <li>• Refrigerator completely dead (food safety)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader className="bg-orange-50">
                    <CardTitle className="text-orange-800 flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Holiday Urgent
                    </CardTitle>
                    <CardDescription className="text-orange-600">
                      Call within hours - disrupts holiday plans
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Oven not heating before big meal</li>
                      <li>• Dishwasher not working with guests coming</li>
                      <li>• Ice maker failed during party</li>
                      <li>• Garbage disposal backing up</li>
                      <li>• Washing machine not working</li>
                      <li>• Dryer not heating</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Emergency Service Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Makes a Naples Emergency Appliance Service Reliable?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Response Time</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-red-50 rounded-lg">
                          <div className="text-2xl font-bold text-red-600">&lt; 2 Hours</div>
                          <div className="text-sm text-red-800">Safety Emergencies</div>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">&lt; 4 Hours</div>
                          <div className="text-sm text-orange-800">Holiday Urgent</div>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">Same Day</div>
                          <div className="text-sm text-blue-800">Standard Emergency</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Essential Service Features</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Licensed and insured</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Upfront pricing</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Parts availability</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Warranty on work</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Local Naples presence</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">All major brands</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Clean, professional service</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm">Holiday availability</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Holiday Emergency Scenarios */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Holiday Emergency Scenarios in Naples</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🦃 Thanksgiving/Christmas Oven Failures</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <p className="text-sm text-yellow-800">
                            <strong>The Scenario:</strong> Your oven stops working the morning of your big dinner with 20+ guests coming.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">What Emergency Service Should Provide:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Immediate diagnosis within 2 hours</li>
                            <li>• Parts availability for common holiday failures</li>
                            <li>• Alternative solutions (portable ovens, repair timing)</li>
                            <li>• Clear communication about repair timeline</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🧊 Holiday Party Refrigerator Crisis</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>The Scenario:</strong> Your refrigerator fails during your New Year's party with guests and food everywhere.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Emergency Response Should Include:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Immediate food safety assessment</li>
                            <li>• Emergency cooling solutions</li>
                            <li>• Same-day repair commitment</li>
                            <li>• Guidance on salvaging food/beverages</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🍽️ Holiday Cleanup Dishwasher Disaster</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm text-green-800">
                            <strong>The Scenario:</strong> Your dishwasher backs up or stops working during holiday cleanup.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Professional Emergency Service Provides:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Immediate water damage prevention</li>
                            <li>• Quick diagnosis of blockage vs. mechanical failure</li>
                            <li>• Temporary solutions for dish cleaning</li>
                            <li>• Same-day or next-day permanent fix</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Naples-Specific Considerations */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Naples Holiday Emergency Considerations</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Seasonal Challenges</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Tourist Season Impact</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Higher demand for emergency services</li>
                            <li>• Vacation rental appliance failures</li>
                            <li>• Increased traffic affecting response times</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Weather Considerations</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Storm-related power surges</li>
                            <li>• High humidity affecting electronics</li>
                            <li>• Salt air corrosion acceleration</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Local Service Advantages</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">Familiarity with Naples area and common appliance issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">Understanding of local water quality effects on appliances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">Knowledge of Naples housing types and common appliance setups</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">Established relationships with local parts suppliers</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What to Expect from Naples Emergency Appliance Service</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Initial Contact</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2 text-sm">
                        <li>• Immediate safety assessment over phone</li>
                        <li>• Clear explanation of service fees and timing</li>
                        <li>• Technician dispatch within promised timeframe</li>
                        <li>• Updates on technician arrival time</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">On-Site Service</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2 text-sm">
                        <li>• Professional, uniformed technician</li>
                        <li>• Thorough diagnosis before any work</li>
                        <li>• Written estimate for all repairs</li>
                        <li>• Clean, respectful work practices</li>
                        <li>• Testing and warranty explanation</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Emergency Pricing</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm text-yellow-800">
                          <strong>Naples Emergency Service Pricing:</strong> Emergency service typically includes after-hours or holiday premiums. Expect clear, upfront pricing with no hidden fees. The best services offer emergency rates that are fair and transparent.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Professional Service CTA */}
            <div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] text-white rounded-lg p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Naples Emergency Appliance Repair</h2>
                <p className="text-lg mb-6">
                  When your appliances fail during the holidays, you need fast, reliable service. Our Naples emergency repair team is ready to help 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#ff6b00] hover:bg-[#e55a00] text-white">
                    <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`} className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Emergency: {siteMetadata.phoneNumber}
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Service FAQ</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Do you really provide emergency service during holidays in Naples?
                  </h3>
                  <p className="text-gray-700">
                    Yes! We understand that appliance emergencies don't respect holidays. Our Naples emergency team is available 24/7, including major holidays, with guaranteed response times for safety emergencies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    How much more does emergency service cost?
                  </h3>
                  <p className="text-gray-700">
                    Emergency service typically includes after-hours premiums, but we provide transparent, upfront pricing. Many customers find the cost worthwhile to avoid holiday disasters and food spoilage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    What if you can't fix it immediately?
                  </h3>
                  <p className="text-gray-700">
                    We always provide temporary solutions and clear timelines. For holiday emergencies, we prioritize getting your appliances functional even if permanent repairs need to wait until after the holidays.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Do you stock parts for emergency repairs?
                  </h3>
                  <p className="text-gray-700">
                    Our emergency service vehicles carry common replacement parts for major appliance brands. For Naples' most common appliance issues, we can often complete repairs on the first visit.
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