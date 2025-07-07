import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { siteMetadata } from '@/lib/seo';
import { Calendar, Clock, User, Phone, CheckCircle, DollarSign, Calculator } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function NewYearNewAppliances() {
  return (
    <>
      <Helmet>
        <title>New Year, New Appliances? When to Repair vs Replace | Naples Appliance Repair</title>
        <meta name="description" content="Making smart appliance decisions in Naples for the new year. Learn when to repair vs replace your appliances in Southwest Florida's challenging climate." />
        <meta name="keywords" content="repair vs replace appliances Naples, new appliance decisions, Naples appliance replacement, Collier County appliance advice, appliance investment Florida" />
        <link rel="canonical" href={`${siteMetadata.siteUrl}/blog/new-year-new-appliances-repair-vs-replace`} />
        <meta property="og:title" content="New Year, New Appliances? When to Repair vs Replace" />
        <meta property="og:description" content="Making smart appliance decisions in Naples for the new year. Learn when to repair vs replace your appliances." />
        <meta property="og:url" content={`${siteMetadata.siteUrl}/blog/new-year-new-appliances-repair-vs-replace`} />
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
                <Badge variant="secondary">New Year Planning</Badge>
                <Badge variant="outline">Financial Decision</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                New Year, New Appliances? When to Repair vs Replace
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
                As you plan for the new year in Naples, one major decision many homeowners face is whether to repair aging appliances or invest in new ones. With Southwest Florida's challenging climate putting extra stress on household appliances, this decision becomes even more critical. Let's break down the financial and practical considerations to help you make the smartest choice for your Naples home.
              </p>
            </div>

            {/* The 50% Rule */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">The 50% Rule: A Starting Point for Naples Homeowners</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-800 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Repair If...
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <p className="text-sm font-medium">Repair cost is LESS than 50% of replacement cost</p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-xs text-green-800">
                          <strong>Example:</strong> Refrigerator repair costs $400, new unit costs $1,200 → Repair makes sense (33% of replacement cost)
                        </p>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Appliance is under 8 years old</li>
                        <li>• Single component failure</li>
                        <li>• Good maintenance history</li>
                        <li>• Energy efficiency acceptable</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader className="bg-orange-50">
                    <CardTitle className="text-orange-800 flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Replace If...
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-3">
                      <p className="text-sm font-medium">Repair cost is MORE than 50% of replacement cost</p>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-orange-800">
                          <strong>Example:</strong> Washing machine repair costs $500, new unit costs $800 → Replace makes sense (62% of replacement cost)
                        </p>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Appliance is over 10 years old</li>
                        <li>• Multiple recurring problems</li>
                        <li>• Poor energy efficiency</li>
                        <li>• Major component failure</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Naples-Specific Factors */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Naples Climate Factors That Change the Equation</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Accelerated Wear in Southwest Florida</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Climate Challenges:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• High humidity year-round</li>
                            <li>• Salt air corrosion near coast</li>
                            <li>• Frequent power surges from storms</li>
                            <li>• Extreme heat stress on components</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Impact on Appliance Life:</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Refrigerators: 8-12 years (vs 13-15 nationally)</li>
                            <li>• Washing machines: 8-10 years (vs 10-12)</li>
                            <li>• Dishwashers: 7-9 years (vs 9-10)</li>
                            <li>• Ovens: 10-13 years (vs 13-15)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Modified 50% Rule for Naples</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 mb-2">
                          <strong>Naples Adjustment:</strong> Consider replacement at 40% of cost for appliances over 8 years old
                        </p>
                        <p className="text-xs text-blue-700">
                          Southwest Florida's harsh conditions mean appliances age faster. What might be worth repairing elsewhere may not be cost-effective in Naples.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Appliance-by-Appliance Analysis */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Appliance-by-Appliance Decision Guide for Naples</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🧊 Refrigerators</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-700">Usually Worth Repairing:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Compressor issues (under 5 years old)</li>
                            <li>• Ice maker problems</li>
                            <li>• Door seal replacement</li>
                            <li>• Thermostat/sensor issues</li>
                            <li>• Water filter/dispenser problems</li>
                          </ul>
                          <div className="mt-3 p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-green-800">
                              <strong>Typical repair cost:</strong> $200-600<br/>
                              <strong>Replacement cost:</strong> $800-3,000
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-red-700">Consider Replacing:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Compressor failure (over 8 years old)</li>
                            <li>• Multiple system failures</li>
                            <li>• Frequent repairs (3+ in 2 years)</li>
                            <li>• Poor energy efficiency</li>
                            <li>• Refrigerant leaks in older units</li>
                          </ul>
                          <div className="mt-3 p-3 bg-red-50 rounded-lg">
                            <p className="text-xs text-red-800">
                              <strong>Naples factor:</strong> High humidity makes refrigerators work harder, reducing lifespan
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🌊 Washing Machines</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-700">Usually Worth Repairing:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Pump/drain issues</li>
                            <li>• Belt or motor problems</li>
                            <li>• Control panel malfunctions</li>
                            <li>• Door/lid latch repairs</li>
                            <li>• Water inlet valve replacement</li>
                          </ul>
                          <div className="mt-3 p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-green-800">
                              <strong>Typical repair cost:</strong> $150-450<br/>
                              <strong>Replacement cost:</strong> $500-1,500
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-red-700">Consider Replacing:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Transmission failure</li>
                            <li>• Tub/drum damage</li>
                            <li>• Multiple component failures</li>
                            <li>• Chronic vibration issues</li>
                            <li>• Water damage to electronics</li>
                          </ul>
                          <div className="mt-3 p-3 bg-red-50 rounded-lg">
                            <p className="text-xs text-red-800">
                              <strong>Naples factor:</strong> Hard water accelerates mineral buildup, shortening lifespan
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🔥 Ovens & Ranges</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-700">Usually Worth Repairing:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Heating element replacement</li>
                            <li>• Igniter issues (gas ovens)</li>
                            <li>• Temperature sensor problems</li>
                            <li>• Door seal/hinge repair</li>
                            <li>• Control board malfunctions</li>
                          </ul>
                          <div className="mt-3 p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-green-800">
                              <strong>Typical repair cost:</strong> $150-500<br/>
                              <strong>Replacement cost:</strong> $600-2,500
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-red-700">Consider Replacing:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Multiple heating elements failed</li>
                            <li>• Gas valve problems</li>
                            <li>• Structural damage to oven cavity</li>
                            <li>• Poor energy efficiency</li>
                            <li>• Safety concerns</li>
                          </ul>
                          <div className="mt-3 p-3 bg-red-50 rounded-lg">
                            <p className="text-xs text-red-800">
                              <strong>Naples factor:</strong> Salt air can corrode gas components faster than inland areas
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#0056b3] mb-4">🍽️ Dishwashers</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-700">Usually Worth Repairing:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Pump/motor replacement</li>
                            <li>• Spray arm cleaning/replacement</li>
                            <li>• Door seal repair</li>
                            <li>• Control panel issues</li>
                            <li>• Drain hose problems</li>
                          </ul>
                          <div className="mt-3 p-3 bg-green-50 rounded-lg">
                            <p className="text-xs text-green-800">
                              <strong>Typical repair cost:</strong> $150-400<br/>
                              <strong>Replacement cost:</strong> $400-1,200
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-red-700">Consider Replacing:</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Tub cracks or rust</li>
                            <li>• Multiple system failures</li>
                            <li>• Poor cleaning performance</li>
                            <li>• Excessive noise levels</li>
                            <li>• Water damage to surrounding cabinets</li>
                          </ul>
                          <div className="mt-3 p-3 bg-red-50 rounded-lg">
                            <p className="text-xs text-red-800">
                              <strong>Naples factor:</strong> Hard water causes faster mineral buildup in dishwashers
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Financial Considerations */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Financial Considerations for Naples Homeowners</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Total Cost of Ownership Analysis</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Calculator className="h-4 w-4 text-blue-600" />
                            <span className="font-semibold text-blue-800">Repair Costs</span>
                          </div>
                          <ul className="text-xs space-y-1">
                            <li>• Initial repair cost</li>
                            <li>• Likely future repairs</li>
                            <li>• Increased energy costs</li>
                            <li>• Reduced reliability</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="h-4 w-4 text-green-600" />
                            <span className="font-semibold text-green-800">Replacement Benefits</span>
                          </div>
                          <ul className="text-xs space-y-1">
                            <li>• Energy efficiency savings</li>
                            <li>• Warranty protection</li>
                            <li>• Improved reliability</li>
                            <li>• Modern features</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="h-4 w-4 text-orange-600" />
                            <span className="font-semibold text-orange-800">Hidden Costs</span>
                          </div>
                          <ul className="text-xs space-y-1">
                            <li>• Installation/removal</li>
                            <li>• Disposal fees</li>
                            <li>• Potential kitchen updates</li>
                            <li>• Time/inconvenience</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">Energy Efficiency Impact in Naples</h3>
                  <Card>
                    <CardContent className="pt-4">
                      <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                        <p className="text-sm font-medium text-yellow-800">
                          <strong>Naples Energy Costs:</strong> High AC usage makes energy-efficient appliances even more valuable
                        </p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Old vs New Efficiency</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Refrigerators: 40% more efficient</li>
                            <li>• Dishwashers: 50% less water usage</li>
                            <li>• Washing machines: 25% less energy</li>
                            <li>• Annual savings: $100-300</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Naples Utility Rebates</h4>
                          <ul className="space-y-1 text-sm">
                            <li>• LCEC efficiency rebates</li>
                            <li>• Federal tax credits</li>
                            <li>• Manufacturer incentives</li>
                            <li>• Total savings: $50-500</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Decision Framework */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Naples Appliance Decision Framework</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Step-by-Step Decision Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">1</div>
                      <div className="flex-1">
                        <p className="font-medium">Get Professional Diagnosis</p>
                        <p className="text-sm text-gray-600">Understand the exact problem and repair cost before deciding</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">2</div>
                      <div className="flex-1">
                        <p className="font-medium">Apply Naples 40% Rule</p>
                        <p className="text-sm text-gray-600">If repair cost &gt; 40% of replacement (for appliances 8+ years), lean toward replacement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">3</div>
                      <div className="flex-1">
                        <p className="font-medium">Consider Total Ownership Cost</p>
                        <p className="text-sm text-gray-600">Factor in energy savings, reliability, and likely future repairs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">4</div>
                      <div className="flex-1">
                        <p className="font-medium">Evaluate Naples-Specific Factors</p>
                        <p className="text-sm text-gray-600">Consider climate impact, salt air exposure, and local utility costs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mt-1">5</div>
                      <div className="flex-1">
                        <p className="font-medium">Make Your Decision</p>
                        <p className="text-sm text-gray-600">Choose repair for cost-effective fixes, replacement for long-term value</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Service CTA */}
            <div className="bg-gradient-to-r from-[#0056b3] to-[#003d82] text-white rounded-lg p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Expert Guidance for Your Appliance Decisions</h2>
                <p className="text-lg mb-6">
                  Our Naples appliance experts can help you make the right repair vs replace decision with honest assessments and transparent pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-[#ff6b00] hover:bg-[#e55a00] text-white">
                    <a href={`tel:${siteMetadata.phoneNumber.replace(/[()-\s]/g, '')}`} className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Call {siteMetadata.phoneNumber}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white text-[#0056b3] border-white hover:bg-gray-100">
                    <a href="/#contact">Get Free Assessment</a>
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
                    Should I replace all my appliances at once in Naples?
                  </h3>
                  <p className="text-gray-700">
                    Not necessarily. Replace appliances based on individual condition and cost-effectiveness. However, if multiple appliances are near end-of-life, coordinating replacements can save on delivery and installation costs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Do appliances really wear out faster in Naples?
                  </h3>
                  <p className="text-gray-700">
                    Yes. High humidity, salt air, and frequent storms create challenging conditions. Appliances typically last 15-20% less time than in moderate climates, making the repair vs replace decision more critical.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    What's the best time to buy new appliances in Naples?
                  </h3>
                  <p className="text-gray-700">
                    September-November often have the best sales, coinciding with new model releases. However, don't wait if your appliance fails - emergency replacement is always more expensive than planned replacement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    How can I get an honest repair vs replace recommendation?
                  </h3>
                  <p className="text-gray-700">
                    Work with established Naples repair companies that don't sell appliances - they have no incentive to recommend replacement over repair. We provide honest assessments based solely on what's best for your situation.
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