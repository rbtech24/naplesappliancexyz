import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, AlertTriangle, CheckCircle, Phone, Wrench } from 'lucide-react';

export default function DryerNotHeating() {
  return (
    <>
      <Helmet>
        <title>What to Do When Your Naples Dryer Stops Heating | Naples Appliance Repair</title>
        <meta name="description" content="Troubleshooting guide for dryers that won't heat in Naples, FL. Learn common causes, safety checks, and when to call professionals." />
        <meta name="keywords" content="dryer not heating Naples, dryer repair Naples FL, dryer troubleshooting Southwest Florida, Naples dryer service" />
        <link rel="canonical" href="https://naplesappliancerepair.xyz/blog/what-do-when-naples-dryer-stops-heating" />
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
              <span className="text-gray-900">Dryer Not Heating</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What to Do When Your Naples Dryer Stops Heating
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
                <span>Naples Appliance Repair Team</span>
                <span>•</span>
                <span>September 2025</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <p className="text-xl text-gray-700 mb-8">
                A dryer that runs but doesn't heat is one of the most common appliance problems Naples homeowners face, especially during humid months when air-drying isn't practical. While the issue can be frustrating, many causes are straightforward to diagnose and some can be safely addressed by homeowners. Understanding the most likely culprits and safety considerations will help you determine whether this is a DIY fix or requires professional attention.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Safety First</h3>
                    <p className="text-red-800 mb-2">
                      Before troubleshooting any dryer heating issue:
                    </p>
                    <ul className="text-red-800 space-y-1">
                      <li>• Unplug the dryer or turn off the circuit breaker</li>
                      <li>• For gas dryers, turn off the gas supply</li>
                      <li>• Allow the unit to cool completely</li>
                      <li>• Never attempt electrical or gas line repairs yourself</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Most Common Causes in Naples</h2>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold">Clogged Lint System (60% of cases)</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Why It Happens</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Lint trap not cleaned regularly</li>
                          <li>• Exhaust vent blocked outside</li>
                          <li>• Ductwork clogged or crushed</li>
                          <li>• Naples humidity makes lint stick more</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">How to Check</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Clean lint trap thoroughly</li>
                          <li>• Check outside vent for airflow</li>
                          <li>• Feel for hot air during cycle</li>
                          <li>• Look for lint around vent opening</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Naples Factor:</strong> High humidity causes lint to clump and stick, requiring more frequent cleaning than in dry climates.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold">Blown Thermal Fuse (25% of cases)</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">What It Does</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Safety device prevents overheating</li>
                          <li>• Cuts power to heating element</li>
                          <li>• Usually caused by restricted airflow</li>
                          <li>• One-time use component</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Professional Repair</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Requires electrical testing</li>
                          <li>• Must identify root cause</li>
                          <li>• Replacement needs specific part</li>
                          <li>• Safety implications if done wrong</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Warning:</strong> Simply replacing the fuse without fixing the underlying cause will result in repeated failures.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold">Faulty Heating Element (10% of cases)</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Electric Dryers</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Heating coils burn out over time</li>
                          <li>• Age and usage main factors</li>
                          <li>• May partially heat then fail</li>
                          <li>• Visible inspection often possible</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Gas Dryers</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Gas valve solenoids fail</li>
                          <li>• Igniter burns out</li>
                          <li>• Gas supply issues</li>
                          <li>• Requires professional service</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Professional Required:</strong> Both electric and gas heating element repairs involve safety risks and should be handled by certified technicians.
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Step-by-Step Troubleshooting</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Check the Obvious</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Verify dryer is plugged in and circuit breaker is on</li>
                    <li>• Ensure door is completely closed and latched</li>
                    <li>• Check that heat setting is selected (not air-dry)</li>
                    <li>• Confirm gas supply is on (gas dryers)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Clean Lint System Thoroughly</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Remove and wash lint trap with warm soapy water</li>
                    <li>• Vacuum lint trap housing with hose attachment</li>
                    <li>• Check exterior vent for blockages or lint buildup</li>
                    <li>• Run dryer and verify strong airflow at exterior vent</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Test After Cleaning</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Run empty cycle on high heat for 10 minutes</li>
                    <li>• Check if drum gets warm inside</li>
                    <li>• Feel exterior vent for warm air exhaust</li>
                    <li>• If still no heat, proceed to professional diagnosis</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Naples-Specific Factors</h2>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-orange-900 mb-4">Why Dryers Work Harder in Southwest Florida</h3>
                <ul className="space-y-2 text-orange-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>High humidity:</strong> Clothes start wetter, requiring more energy to dry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Year-round use:</strong> No seasonal break leads to more wear</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Salt air:</strong> Accelerates corrosion of metal components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Power fluctuations:</strong> Summer storms stress electrical components</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Prevention Tips</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Regular Maintenance</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Clean lint trap after every load</li>
                      <li>• Professional vent cleaning every 6 months</li>
                      <li>• Check vent flap movement monthly</li>
                      <li>• Inspect ductwork annually</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Best Practices</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Don't overload the dryer</li>
                      <li>• Use appropriate heat settings</li>
                      <li>• Remove clothes promptly</li>
                      <li>• Keep area around dryer clear</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">When to Call Professionals</h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Don't Delay Professional Service If:</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cleaning lint system doesn't restore heating</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>You smell gas around a gas dryer</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Dryer is very hot on the outside</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Burning smells during operation</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Multiple heating failures in short time</span>
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                Remember: A dryer that doesn't heat is often a sign of a deeper issue that, if left unaddressed, can lead to safety hazards or complete appliance failure. Professional diagnosis ensures both proper repair and continued safe operation.
              </p>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Expert Dryer Repair in Naples
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our certified technicians diagnose and repair all dryer heating issues safely and efficiently. Same-day service available throughout Collier County.
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
                Schedule Repair
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}