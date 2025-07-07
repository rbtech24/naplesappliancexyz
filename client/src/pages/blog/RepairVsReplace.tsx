import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Calculator, TrendingUp, Phone, Wrench } from 'lucide-react';

export default function RepairVsReplace() {
  return (
    <>
      <Helmet>
        <title>Appliance Lifespans: When Is It Time to Replace vs Repair? | Naples Appliance Repair</title>
        <meta name="description" content="Expert guide to deciding when to repair or replace appliances in Naples, FL. Learn the 50% rule, age factors, and cost analysis for smart decisions." />
        <meta name="keywords" content="repair vs replace appliances Naples, appliance lifespan Naples FL, when to replace appliances, Naples appliance replacement guide" />
        <link rel="canonical" href="https://naplesappliancerepair.xyz/blog/appliance-lifespans-when-time-replace-vs-repair" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-blue-600 hover:underline">Home</a>
              <span className="text-gray-500">/</span>
              <a href="/blog" className="text-blue-600 hover:underline">Blog</a>
              <span className="text-gray-500">/</span>
              <span className="text-gray-900">Repair vs Replace</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Appliance Lifespans: When Is It Time to Replace vs Repair?
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
                <span>Naples Appliance Repair Team</span>
                <span>•</span>
                <span>September 2025</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <p className="text-xl text-gray-700 mb-8">
                One of the most challenging decisions Naples homeowners face is determining whether to repair or replace a failing appliance. With Southwest Florida's climate affecting appliance longevity and repair costs varying widely, making the wrong choice can be expensive. This comprehensive guide provides clear criteria to help you make informed decisions based on age, cost, efficiency, and local factors specific to the Naples area.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">The 50% Rule: Your Starting Point</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <div className="flex items-start">
                  <Calculator className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">The Professional Standard</h3>
                    <p className="text-blue-800 mb-2">
                      If the repair cost exceeds 50% of the appliance's replacement value, replacement is usually the better investment. However, this rule requires adjustment for Naples-specific factors:
                    </p>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Age of appliance (closer to expected lifespan = lower threshold)</li>
                      <li>• Energy efficiency gains from newer models</li>
                      <li>• Frequency of recent repairs</li>
                      <li>• Warranty coverage remaining</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Expected Lifespans in Naples Climate</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold">Refrigerators</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Expected Lifespan</h4>
                        <p className="text-sm text-gray-600">10-15 years (Naples: 8-12 years due to constant use)</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Repair if Under 8 Years</h4>
                        <p className="text-sm text-gray-600">Most issues are cost-effective to repair</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Replace if Over 10 Years</h4>
                        <p className="text-sm text-gray-600">Major repairs often exceed 50% rule</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold">Washing Machines</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Expected Lifespan</h4>
                        <p className="text-sm text-gray-600">8-12 years (Naples: 6-10 years due to hard water)</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Repair if Under 6 Years</h4>
                        <p className="text-sm text-gray-600">Usually under warranty or cost-effective</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Replace if Over 8 Years</h4>
                        <p className="text-sm text-gray-600">Water damage risk increases significantly</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold">Dryers</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Expected Lifespan</h4>
                        <p className="text-sm text-gray-600">10-15 years (Naples: consistent due to year-round use)</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Repair if Under 8 Years</h4>
                        <p className="text-sm text-gray-600">Most components repairable</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Replace if Over 12 Years</h4>
                        <p className="text-sm text-gray-600">Energy efficiency gains significant</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold">Dishwashers</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Expected Lifespan</h4>
                        <p className="text-sm text-gray-600">7-12 years (Naples: 6-9 years due to hard water)</p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Repair if Under 5 Years</h4>
                        <p className="text-sm text-gray-600">Usually minor component issues</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Replace if Over 8 Years</h4>
                        <p className="text-sm text-gray-600">Pump and motor failures common</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Cost Analysis Framework</h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">Calculate Total Cost of Ownership</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Repair Option</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Immediate repair cost</li>
                      <li>• Estimated future repairs (next 3 years)</li>
                      <li>• Higher energy costs vs new model</li>
                      <li>• Risk of catastrophic failure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Replace Option</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Purchase price of comparable appliance</li>
                      <li>• Installation costs</li>
                      <li>• Disposal fees for old appliance</li>
                      <li>• Energy savings over time</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Naples-Specific Considerations</h2>

              <div className="space-y-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hurricane Season Impact</h3>
                  <p className="text-gray-700 mb-3">
                    September through November brings additional considerations for appliance decisions:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Older appliances more vulnerable to power surges</li>
                    <li>• Parts availability may be limited during storm season</li>
                    <li>• New appliances often have better surge protection</li>
                    <li>• Consider timing of major purchases around storm risk</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Energy Efficiency in Hot Climate</h3>
                  <p className="text-gray-700 mb-3">
                    Year-round air conditioning use amplifies energy efficiency benefits:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Efficient appliances reduce overall cooling load</li>
                    <li>• Heat-generating appliances impact AC costs</li>
                    <li>• Energy Star models provide 15-25% savings</li>
                    <li>• ROI on efficient models faster in Naples</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hard Water and Salt Air Effects</h3>
                  <p className="text-gray-700 mb-3">
                    Local environmental factors affect repair viability:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hard water accelerates internal component wear</li>
                    <li>• Salt air corrodes external components faster</li>
                    <li>• Mineral buildup repairs often recurring</li>
                    <li>• Newer models better designed for harsh conditions</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Clear Replace Indicators</h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Replace When You See These Signs</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Multiple repairs in the past 2 years totaling over $400</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Refrigerant leaks in refrigerators/AC units</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Control board failures in older appliances</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Motor/compressor failures past warranty</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Safety issues (gas leaks, electrical problems)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Smart Replacement Timing</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Best Times to Buy</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Late September/October (new model year clearance)</li>
                      <li>• January (post-holiday sales)</li>
                      <li>• May (Memorial Day promotions)</li>
                      <li>• Black Friday weekend</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Avoid These Times</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• June-August (peak demand, higher prices)</li>
                      <li>• During active hurricane warnings</li>
                      <li>• Right before holidays (limited selection)</li>
                      <li>• When cash-strapped (explore financing)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Professional Assessment Value</h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Why Professional Diagnosis Matters</h3>
                <p className="text-green-800 mb-4">
                  A professional assessment costs $75-150 but can save hundreds by:
                </p>
                <ul className="space-y-2 text-green-800">
                  <li>• Identifying the true problem vs. symptoms</li>
                  <li>• Providing accurate repair cost estimates</li>
                  <li>• Spotting additional issues before failure</li>
                  <li>• Offering objective repair vs. replace advice</li>
                  <li>• Understanding warranty implications</li>
                </ul>
              </div>

              <p className="mb-6">
                Remember: The cheapest option upfront isn't always the most economical long-term. Factor in reliability, energy costs, and peace of mind when making your decision.
              </p>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Expert Repair vs Replace Advice
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our experienced technicians provide honest assessments to help you make the best financial decision for your Naples home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:239-777-0404"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (239) 777-0404
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-blue-700 transition-colors"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Schedule Assessment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}