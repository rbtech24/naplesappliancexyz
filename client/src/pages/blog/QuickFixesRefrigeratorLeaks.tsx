import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteMetadata } from '@/lib/seo';
import { Calendar, Clock, User, Phone, Droplets, AlertTriangle, CheckCircle, Wrench } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function QuickFixesRefrigeratorLeaks() {
  return (
    <>
      <Helmet>
        <title>Quick Fixes for Common Naples Refrigerator Leaks | Naples Appliance Repair</title>
        <meta name="description" content="Fix common refrigerator leaks in Naples homes. Step-by-step solutions for water puddles under your fridge in Southwest Florida's humid climate." />
        <meta name="keywords" content="refrigerator leaks Naples, fridge water leaks Florida, Naples appliance repair water damage, refrigerator troubleshooting Collier County" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/blog/quick-fixes-common-naples-refrigerator-leaks`} />
        <meta property="og:title" content="Quick Fixes for Common Naples Refrigerator Leaks" />
        <meta property="og:description" content="Fix common refrigerator leaks in Naples homes. Step-by-step solutions for water puddles under your fridge." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog/quick-fixes-common-naples-refrigerator-leaks`} />
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
                <Badge variant="secondary">Quick Fix</Badge>
                <Badge variant="outline">DIY Repair</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Fixes for Common Naples Refrigerator Leaks
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>January 2025</span>
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
                Finding water puddles around your refrigerator in Naples? You're not alone. High humidity, hard water, and frequent AC cycling create the perfect conditions for refrigerator leaks in Southwest Florida. The good news is that many common refrigerator leaks can be fixed quickly with the right knowledge and a few basic tools.
              </p>
            </div>

            {/* Emergency Assessment */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">First: Assess the Situation</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-200">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-800 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Call Professional Immediately
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Large water pool (more than 1 cup)</li>
                      <li>• Water near electrical outlets</li>
                      <li>• Refrigerant leak (oily residue)</li>
                      <li>• Water damage to flooring/cabinets</li>
                      <li>• Continuous, fast dripping</li>
                      <li>• Electrical buzzing or sparking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Safe to DIY Troubleshoot
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Small water puddles (few tablespoons)</li>
                      <li>• Clear water only</li>
                      <li>• Slow, occasional dripping</li>
                      <li>• Water from ice maker area</li>
                      <li>• Recent increase in humidity</li>
                      <li>• No electrical issues</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <Droplets className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-yellow-800 mb-1">Naples Safety Reminder:</p>
                    <p className="text-sm text-yellow-700">
                      In our humid climate, water and electricity are especially dangerous. Always unplug the refrigerator before investigating leaks, and dry the area thoroughly to prevent mold growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Leak Sources */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Most Common Naples Refrigerator Leak Sources</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                    <Droplets className="inline h-5 w-5 mr-2" />
                    1. Blocked Defrost Drain (Most Common)
                  </h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Why This Happens in Naples:</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            High humidity causes more frequent defrost cycles. Food particles, mold, and mineral deposits from our hard water frequently clog the drain.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Signs:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Water pooling inside refrigerator (usually bottom)</li>
                            <li>• Ice buildup in freezer</li>
                            <li>• Water dripping from freezer to fridge section</li>
                            <li>• Musty odor from standing water</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Quick Fix Steps:</h4>
                          <ol className="space-y-2 text-sm">
                            <li>1. Unplug refrigerator and remove food</li>
                            <li>2. Remove bottom drawers/shelves</li>
                            <li>3. Locate drain hole (usually back wall, bottom)</li>
                            <li>4. Use turkey baster to flush with warm water</li>
                            <li>5. If still blocked, use pipe cleaner or thin wire</li>
                            <li>6. Pour baking soda solution through drain</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                    <Droplets className="inline h-5 w-5 mr-2" />
                    2. Ice Maker Water Line Issues
                  </h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Naples-Specific Causes:</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Hard water creates mineral buildup in water lines. Temperature fluctuations cause fittings to expand/contract.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Signs:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Water around ice maker area</li>
                            <li>• Ice maker not working properly</li>
                            <li>• Water dripping from dispenser</li>
                            <li>• Wet spots behind refrigerator</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Quick Fix Steps:</h4>
                          <ol className="space-y-2 text-sm">
                            <li>1. Turn off ice maker</li>
                            <li>2. Check water filter - replace if old</li>
                            <li>3. Inspect visible water line connections</li>
                            <li>4. Tighten loose fittings (hand-tight only)</li>
                            <li>5. Check water line for kinks or damage</li>
                            <li>6. Test ice maker after 24 hours</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                    <Droplets className="inline h-5 w-5 mr-2" />
                    3. Door Seal Problems
                  </h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Why Seals Fail in Naples:</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Constant humidity changes, salt air, and frequent opening (especially in vacation rentals) cause door seals to deteriorate faster.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Signs:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Condensation outside refrigerator</li>
                            <li>• Cool air leaking out</li>
                            <li>• Refrigerator running constantly</li>
                            <li>• Water forming around door edges</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Quick Fix Steps:</h4>
                          <ol className="space-y-2 text-sm">
                            <li>1. Clean door seals with mild soap and water</li>
                            <li>2. Check for cracks or tears</li>
                            <li>3. Test seal by closing door on dollar bill</li>
                            <li>4. Adjust door if necessary (level refrigerator)</li>
                            <li>5. Apply thin coat of petroleum jelly to seals</li>
                            <li>6. Replace seal if damaged beyond repair</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                    <Droplets className="inline h-5 w-5 mr-2" />
                    4. Drain Pan Issues
                  </h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Naples Climate Impact:</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            High humidity means more condensation. Drain pans fill faster and may overflow or crack from constant use.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Signs:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Water directly under refrigerator</li>
                            <li>• Musty smell from beneath unit</li>
                            <li>• Water appears after defrost cycles</li>
                            <li>• Visible cracks in drain pan</li>
                          </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Quick Fix Steps:</h4>
                          <ol className="space-y-2 text-sm">
                            <li>1. Unplug refrigerator</li>
                            <li>2. Remove front grille (usually clips or screws)</li>
                            <li>3. Locate drain pan (usually bottom front)</li>
                            <li>4. Remove and empty pan</li>
                            <li>5. Clean pan with antibacterial solution</li>
                            <li>6. Check for cracks - replace if damaged</li>
                            <li>7. Ensure pan is positioned correctly</li>
                          </ol>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Prevention Tips */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Preventing Future Leaks: Naples-Specific Tips</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Monthly Maintenance</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">High Humidity Season (June-October)</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Check defrost drain weekly</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Empty drain pan more frequently</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Clean door seals bi-weekly</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Monitor for condensation buildup</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Dry Season (November-May)</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Check defrost drain monthly</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Replace water filter on schedule</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Clean coils for efficiency</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Inspect water line connections</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Naples Water Quality Considerations</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Hard Water Management</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Naples' hard water creates mineral buildup faster than most areas. This affects drain lines, water filters, and ice makers.
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li>• Replace water filters every 3-4 months (vs. 6 months elsewhere)</li>
                            <li>• Use vinegar solution monthly to dissolve mineral buildup</li>
                            <li>• Consider whole-house water softener for multiple appliances</li>
                            <li>• Flush ice maker lines quarterly with cleaning solution</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Mold Prevention</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            High humidity creates perfect mold conditions in drain areas and water lines.
                          </p>
                          <ul className="space-y-1 text-sm">
                            <li>• Add few drops of bleach to drain pan monthly</li>
                            <li>• Keep drain areas clean and dry</li>
                            <li>• Use antibacterial wipes on water line connections</li>
                            <li>• Ensure proper ventilation around refrigerator</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Tools and Supplies */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Essential Tools for Naples Refrigerator Maintenance</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-blue-600" />
                    Basic DIY Kit for Refrigerator Leaks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Tools You'll Need</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Turkey baster or large syringe</li>
                        <li>• Pipe cleaners or thin wire</li>
                        <li>• Adjustable wrench</li>
                        <li>• Flashlight or headlamp</li>
                        <li>• Level (for door adjustments)</li>
                        <li>• Shop vacuum (for water cleanup)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Cleaning Supplies</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• White vinegar</li>
                        <li>• Baking soda</li>
                        <li>• Antibacterial wipes</li>
                        <li>• Mild dish soap</li>
                        <li>• Petroleum jelly (for door seals)</li>
                        <li>• Clean rags and towels</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Service CTA */}
            <div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] text-white rounded-lg p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">When DIY Isn't Enough</h2>
                <p className="text-lg mb-6">
                  Some refrigerator leaks require professional expertise. Our Naples technicians understand local water conditions and climate challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#ff6b00] hover:bg-[#e55a00] text-white">
                    <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`} className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call {siteMetadata.phoneNumber}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white text-[#0056b3] border-white hover:bg-gray-100">
                    <a href="/#contact">Schedule Repair</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Refrigerator Leak FAQ</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Why do refrigerators seem to leak more in Naples than other places?
                  </h3>
                  <p className="text-gray-700">
                    High humidity creates more condensation, hard water clogs drains faster, and temperature fluctuations stress seals and connections. Naples' climate is particularly challenging for refrigerator drainage systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    How can I tell if it's a serious leak or just normal condensation?
                  </h3>
                  <p className="text-gray-700">
                    Normal condensation is minimal (few drops). If you see puddles larger than a quarter, continuous dripping, or water damage to flooring, it's a leak that needs attention. When in doubt, call for assessment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Can Naples' hard water really affect my refrigerator that much?
                  </h3>
                  <p className="text-gray-700">
                    Absolutely! Hard water creates mineral buildup in drain lines, water filters, and ice makers. This is why Naples refrigerators need more frequent filter changes and drain cleaning than in softer water areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    When should I call a professional instead of trying to fix it myself?
                  </h3>
                  <p className="text-gray-700">
                    Call immediately for large leaks, electrical issues, or refrigerant leaks. Also call if DIY fixes don't work, you're uncomfortable with any step, or if you have an expensive refrigerator under warranty.
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