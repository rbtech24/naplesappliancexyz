import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteMetadata } from '@/lib/seo';
import { Calendar, Clock, User, Phone, Home, AlertTriangle, CheckCircle, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SnowbirdAppliancePreparation() {
  return (
    <>
      <Helmet>
        <title>Snowbird Appliance Preparation Guide for Naples Second Homes | Naples Appliance Repair</title>
        <meta name="description" content="Essential appliance preparation checklist for snowbirds leaving Naples homes unoccupied. Protect your investment during months away from Southwest Florida." />
        <meta name="keywords" content="snowbird appliance preparation Naples, seasonal home appliance care, vacation home maintenance Florida, second home appliance protection Collier County" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/blog/snowbird-appliance-preparation-naples-second-homes`} />
        <meta property="og:title" content="Snowbird Appliance Preparation Guide for Naples Second Homes" />
        <meta property="og:description" content="Essential appliance preparation checklist for snowbirds leaving Naples homes unoccupied. Protect your investment during months away." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog/snowbird-appliance-preparation-naples-second-homes`} />
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
                <Badge variant="secondary">Snowbird Guide</Badge>
                <Badge variant="outline">Seasonal Care</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Snowbird Appliance Preparation Guide for Naples Second Homes
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Naples Appliance Repair Team</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Leaving your Naples home for the summer months? Proper appliance preparation is crucial to protect your investment during the hot, humid season. Southwest Florida's extreme climate can wreak havoc on unattended appliances, leading to costly damage and repairs. This comprehensive guide will help snowbirds properly prepare their Naples second homes before heading north.
              </p>
            </div>

            {/* Snowbird Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Snowbird Season Timeline</h2>
              
              <div className="space-y-6">
                <Card className="border-blue-200">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="text-blue-800">March Departure Preparation</CardTitle>
                    <CardDescription>2-3 weeks before leaving Naples</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Schedule professional appliance inspection</li>
                      <li>• Begin using up perishable food items</li>
                      <li>• Deep clean all appliances</li>
                      <li>• Test backup systems (generators, monitoring)</li>
                      <li>• Coordinate with property management/caretakers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader className="bg-orange-50">
                    <CardTitle className="text-orange-800">April-October: Away Period</CardTitle>
                    <CardDescription>Critical months for appliance protection</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Monthly property checks by caretaker</li>
                      <li>• Monitor utility bills for anomalies</li>
                      <li>• Hurricane season preparation (June-November)</li>
                      <li>• Emergency contact availability</li>
                      <li>• Remote monitoring system alerts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-800">November Return Preparation</CardTitle>
                    <CardDescription>Getting ready to reoccupy your Naples home</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Pre-arrival appliance activation checklist</li>
                      <li>• Schedule deep cleaning service</li>
                      <li>• Inspect for summer damage or issues</li>
                      <li>• Test all systems before full use</li>
                      <li>• Stock up on supplies and groceries</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Comprehensive Appliance Preparation */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Appliance-by-Appliance Departure Checklist</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🧊 Refrigerator and Freezer</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Two Options for Extended Absence</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-medium mb-2 text-green-700">Option 1: Keep Running (Recommended)</h5>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                  <span>Empty most contents, leave 1/4 full</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                  <span>Add baking soda boxes for odor control</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                  <span>Set temperature slightly warmer (40°F fridge, 5°F freezer)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                  <span>Clean thoroughly before leaving</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                  <span>Turn off ice maker and water dispenser</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2 text-orange-700">Option 2: Complete Shutdown</h5>
                              <ul className="space-y-2 text-sm">
                                <li>• Remove ALL food and liquids</li>
                                <li>• Deep clean interior with baking soda solution</li>
                                <li>• Unplug from wall (not just turned off)</li>
                                <li>• Prop doors open with towels</li>
                                <li>• Place moisture absorbers inside</li>
                                <li>• Turn off water supply to ice maker</li>
                              </ul>
                              <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
                                <p className="text-xs text-yellow-800">
                                  <strong>Warning:</strong> Door seals can develop mold if not propped open properly
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🌊 Water-Using Appliances</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Washing Machine</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Run empty hot water cycle with 2 cups white vinegar</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Clean rubber door seals thoroughly</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Turn off water supply valves</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Leave door slightly open for air circulation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Unplug electrical connection</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Dishwasher</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Run empty cycle with dishwasher cleaner</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Remove and clean bottom filter</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Wipe down all interior surfaces</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Leave door slightly cracked open</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Turn off water supply at shutoff valve</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🔥 Cooking Appliances</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Oven and Range</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Deep clean interior and exterior</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Remove oven racks and clean separately</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>For gas ranges: turn off gas supply at meter (if comfortable)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Leave oven door slightly open for air circulation</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Microwave</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Clean interior thoroughly with vinegar solution</li>
                            <li>• Leave door open to prevent mold</li>
                            <li>• Unplug from electrical outlet</li>
                            <li>• Place moisture absorber inside</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">💨 Air Circulation Appliances</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Dryer</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Clean lint filter completely</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Have dryer vent professionally cleaned</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Leave door open for air circulation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Unplug electrical connection</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Critical Systems and Monitoring */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Critical Systems and Monitoring</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      HVAC System Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Summer Settings for Unoccupied Homes</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Set thermostat to 82-85°F (not higher - protects appliances)</li>
                          <li>• Change air filter before leaving</li>
                          <li>• Schedule HVAC maintenance check mid-summer</li>
                          <li>• Ensure humidity stays below 60% to prevent mold</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-red-800 mb-1">Critical Warning:</p>
                        <p className="text-xs text-red-700">
                          Never turn AC completely off in Naples summer. Temperatures over 90°F inside can damage appliance electronics and create mold conditions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Remote Monitoring Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Essential Monitoring</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Smart thermostat with remote access</li>
                          <li>• Water leak detection sensors</li>
                          <li>• Power outage monitoring</li>
                          <li>• Security cameras for visual checks</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Local Caretaker Checklist</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Monthly interior inspection</li>
                          <li>• Check for leaks or unusual odors</li>
                          <li>• Test appliances briefly</li>
                          <li>• Monitor utility bills for spikes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Hurricane Season Considerations */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Hurricane Season Preparations (June-November)</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-800">Before Storm Threats</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Unplug all appliances except HVAC and security systems</li>
                      <li>• Move appliances away from windows if possible</li>
                      <li>• Secure outdoor appliances (grills, outdoor fridges)</li>
                      <li>• Ensure caretaker has emergency access</li>
                      <li>• Document appliance conditions with photos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-800">Post-Storm Protocol</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Have caretaker inspect for flooding/damage</li>
                      <li>• Don't rush to reconnect appliances after power restoration</li>
                      <li>• Check for power surge damage before use</li>
                      <li>• Schedule professional inspection if any concerns</li>
                      <li>• Document any damage for insurance claims</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Return Preparation */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Return Preparation Checklist</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Before You Arrive (1-2 weeks prior)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Remote Preparation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Lower thermostat to comfortable levels gradually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Schedule professional cleaning service</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Have caretaker run all appliances briefly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Turn on water supplies to appliances</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">First Day Back</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Inspect all appliances for summer damage</li>
                        <li>• Test refrigerator/freezer temperatures</li>
                        <li>• Run water through ice maker and dispenser</li>
                        <li>• Check for unusual odors or sounds</li>
                        <li>• Schedule any needed repairs immediately</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Service CTA */}
            <div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] text-white rounded-lg p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Snowbird Appliance Service</h2>
                <p className="text-lg mb-6">
                  Protect your Naples investment while you're away. Our team provides specialized snowbird preparation and monitoring services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#ff6b00] hover:bg-[#e55a00] text-white">
                    <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`} className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call {siteMetadata.phoneNumber}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white text-[#0056b3] border-white hover:bg-gray-100">
                    <a href="/#contact">Schedule Snowbird Prep</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Snowbird Appliance FAQ</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    How long can I safely leave my Naples home unoccupied?
                  </h3>
                  <p className="text-gray-700">
                    With proper preparation and monitoring, 6-8 months is typical for snowbirds. The key is maintaining climate control, having reliable caretaker checks, and proper appliance shutdown procedures.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Should I turn off my main water supply when leaving for months?
                  </h3>
                  <p className="text-gray-700">
                    Generally yes, but consult with your caretaker and appliance service team. Some appliances need water access for proper shutdown, and you'll need procedures for turning everything back on safely.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    What's the biggest mistake snowbirds make with appliances?
                  </h3>
                  <p className="text-gray-700">
                    Turning off AC completely to save money. Naples summer heat and humidity will damage appliances and create mold conditions that cost far more than the electricity savings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Do I need special insurance considerations for appliances in vacant homes?
                  </h3>
                  <p className="text-gray-700">
                    Yes, many insurance policies have specific requirements for vacant homes. Check with your insurer about mandatory monitoring, caretaker visits, and appliance maintenance documentation.
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