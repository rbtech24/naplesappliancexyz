import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteMetadata } from '@/lib/seo';
import { Calendar, Clock, User, Phone, CheckCircle, AlertTriangle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function YearEndApplianceMaintenanceChecklist() {
  return (
    <>
      <Helmet>
        <title>Year-End Appliance Maintenance Checklist for Naples Residents | Naples Appliance Repair</title>
        <meta name="description" content="Complete year-end appliance maintenance checklist for Naples homes. Prepare your appliances for another year in Southwest Florida's challenging climate." />
        <meta name="keywords" content="Naples appliance maintenance, year-end appliance checklist, Florida appliance care, Collier County appliance service, Southwest Florida appliance maintenance" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/blog/year-end-appliance-maintenance-checklist-naples-residents`} />
        <meta property="og:title" content="Year-End Appliance Maintenance Checklist for Naples Residents" />
        <meta property="og:description" content="Complete year-end appliance maintenance checklist for Naples homes. Prepare your appliances for another year in Southwest Florida's challenging climate." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog/year-end-appliance-maintenance-checklist-naples-residents`} />
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
                <Badge variant="secondary">Annual Maintenance</Badge>
                <Badge variant="outline">Naples Climate</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Year-End Appliance Maintenance Checklist for Naples Residents
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>December 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Naples Appliance Repair Team</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As another year winds down in Southwest Florida, it's time to give your appliances the attention they deserve. Naples' unique climate - with its humidity, salt air, and year-round heat - puts extra stress on household appliances. This comprehensive checklist will help you prepare your appliances for another year of reliable service.
              </p>
            </div>

            {/* Why Year-End Maintenance Matters */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Year-End Maintenance Matters in Naples</h2>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  Naples' climate is particularly challenging for appliances. The combination of high humidity, salt air from the Gulf, and consistent heat creates conditions that can accelerate wear and tear. Year-end maintenance helps identify potential problems before they become costly repairs.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Naples Climate Impact on Appliances:</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• <strong>Humidity:</strong> Promotes mold growth and electrical component corrosion</li>
                    <li>• <strong>Salt Air:</strong> Accelerates metal corrosion, especially in coastal areas</li>
                    <li>• <strong>Heat:</strong> Forces appliances to work harder, increasing energy consumption</li>
                    <li>• <strong>Storms:</strong> Power surges can damage sensitive electronics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kitchen Appliances Checklist */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Kitchen Appliances Year-End Checklist</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🧊 Refrigerator & Freezer</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Clean condenser coils</p>
                            <p className="text-sm text-gray-600">Naples dust and pet hair accumulate quickly - clean every 3-6 months</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Check door seals</p>
                            <p className="text-sm text-gray-600">Humid air makes seals work harder - look for cracks or gaps</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Replace water filter</p>
                            <p className="text-sm text-gray-600">Naples hard water requires more frequent filter changes</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Clean ice maker</p>
                            <p className="text-sm text-gray-600">Mineral buildup from local water affects ice quality</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Check temperature settings</p>
                            <p className="text-sm text-gray-600">Refrigerator: 37-40°F, Freezer: 0-5°F</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🍽️ Dishwasher</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Clean filter and spray arms</p>
                            <p className="text-sm text-gray-600">Remove food debris and mineral buildup</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Run cleaning cycle</p>
                            <p className="text-sm text-gray-600">Use dishwasher cleaner to remove hard water deposits</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Check door seals</p>
                            <p className="text-sm text-gray-600">Look for mold or mineral buildup around seals</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Inspect hoses</p>
                            <p className="text-sm text-gray-600">Check for leaks or cracks behind the unit</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🔥 Oven & Range</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Deep clean oven interior</p>
                            <p className="text-sm text-gray-600">Use self-clean cycle or manual cleaning</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Check burner performance</p>
                            <p className="text-sm text-gray-600">Clean burner grates and drip pans</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Test oven temperature accuracy</p>
                            <p className="text-sm text-gray-600">Use oven thermometer to verify calibration</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Clean range hood filters</p>
                            <p className="text-sm text-gray-600">Replace or clean grease filters</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">⚡ Microwave</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Deep clean interior</p>
                            <p className="text-sm text-gray-600">Steam cleaning with water and vinegar</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Check door seal</p>
                            <p className="text-sm text-gray-600">Ensure proper seal for safety and efficiency</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Test turntable operation</p>
                            <p className="text-sm text-gray-600">Clean turntable and check rotation</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Laundry Appliances */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Laundry Appliances Year-End Checklist</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🌊 Washing Machine</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Clean drum and dispensers</p>
                            <p className="text-sm text-gray-600">Run cleaning cycle to remove soap residue and mold</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Check hoses</p>
                            <p className="text-sm text-gray-600">Look for cracks, bulges, or leaks</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Clean lint filter</p>
                            <p className="text-sm text-gray-600">Remove lint buildup from filter (if equipped)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Level the machine</p>
                            <p className="text-sm text-gray-600">Check and adjust feet to prevent vibration</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🔥 Dryer</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-orange-800">Clean lint trap and exhaust vent</p>
                            <p className="text-sm text-gray-600">Critical for fire safety - clean after every load, deep clean annually</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Check exterior vent</p>
                            <p className="text-sm text-gray-600">Ensure vent flap opens freely and isn't blocked</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Clean drum interior</p>
                            <p className="text-sm text-gray-600">Remove any residue or lint buildup</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Check door seal</p>
                            <p className="text-sm text-gray-600">Look for wear or damage to door gasket</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Naples-Specific Maintenance */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Naples-Specific Year-End Maintenance</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Salt Air Corrosion Prevention</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Wipe down all metal surfaces with protective coating</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Check electrical connections for corrosion</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Ensure proper ventilation around appliances</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Hurricane Season Preparation</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Install or check surge protectors on all appliances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Create appliance emergency kit (manuals, parts, tools)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Review insurance coverage for appliance damage</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Hard Water Management</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Test water hardness levels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Replace water softener salt if applicable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Use appropriate detergents for hard water</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Professional Service CTA */}
            <div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] text-white rounded-lg p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Professional Year-End Appliance Service</h2>
                <p className="text-lg mb-6">
                  Some maintenance tasks require professional expertise. Schedule your year-end appliance tune-up with Naples' trusted repair specialists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#ff6b00] hover:bg-[#e55a00] text-white">
                    <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`} className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call {siteMetadata.phoneNumber}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white text-[#0056b3] border-white hover:bg-gray-100">
                    <a href="/#contact">Schedule Maintenance</a>
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
                    How often should I perform deep maintenance on my appliances in Naples?
                  </h3>
                  <p className="text-gray-700">
                    Due to Naples' challenging climate, we recommend deep maintenance every 6-12 months, with monthly basic maintenance. Year-end is perfect for comprehensive checks before the busy holiday season.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Can I perform all this maintenance myself?
                  </h3>
                  <p className="text-gray-700">
                    Many tasks are DIY-friendly, but some require professional expertise - especially electrical work, gas connections, and internal component cleaning. When in doubt, consult a professional.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    What maintenance is most critical for Naples appliances?
                  </h3>
                  <p className="text-gray-700">
                    Cleaning condenser coils, checking seals, and managing moisture/mold are most critical. Naples' humidity and salt air make these maintenance tasks essential for appliance longevity.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Should I schedule professional maintenance even if my appliances seem fine?
                  </h3>
                  <p className="text-gray-700">
                    Yes! Preventive maintenance catches problems early and extends appliance life. In Naples' climate, professional annual service can prevent costly breakdowns and improve energy efficiency.
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