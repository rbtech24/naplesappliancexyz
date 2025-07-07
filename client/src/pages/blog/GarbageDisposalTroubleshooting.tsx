import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2, AlertTriangle, CheckCircle, Phone, Wrench } from 'lucide-react';

export default function GarbageDisposalTroubleshooting() {
  return (
    <>
      <Helmet>
        <title>Garbage Disposal Troubleshooting: Common Naples Issues | Naples Appliance Repair</title>
        <meta name="description" content="Fix common garbage disposal problems in Naples, FL. Expert troubleshooting guide for jams, clogs, and performance issues in Southwest Florida homes." />
        <meta name="keywords" content="garbage disposal repair Naples, disposal troubleshooting Naples FL, garbage disposal problems Southwest Florida, Naples kitchen appliance repair" />
        <link rel="canonical" href="https://naplesappliancerepair.xyz/blog/garbage-disposal-troubleshooting-common-naples-issues" />
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
              <span className="text-gray-900">Garbage Disposal Troubleshooting</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Garbage Disposal Troubleshooting: Common Naples Issues
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
                <span>Naples Appliance Repair Team</span>
                <span>•</span>
                <span>September 2025</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <p className="text-xl text-gray-700 mb-8">
                Garbage disposals are kitchen workhorses that face unique challenges in Naples homes. Hard water, frequent entertaining, and year-round use create specific problems that differ from other climates. Understanding how to troubleshoot common issues safely can save you money and prevent costly plumbing problems. This guide covers the most frequent disposal problems Naples homeowners encounter and provides step-by-step solutions.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Safety First</h3>
                    <p className="text-red-800 mb-2">
                      Before troubleshooting any garbage disposal:
                    </p>
                    <ul className="text-red-800 space-y-1">
                      <li>• Turn off power at the switch and circuit breaker</li>
                      <li>• Never put your hand inside the disposal</li>
                      <li>• Use flashlight and tongs/pliers for removal</li>
                      <li>• Keep reset button location handy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Most Common Naples Disposal Problems</h2>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Trash2 className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold">Won't Turn On</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Common Causes</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Tripped reset button</li>
                          <li>• Blown circuit breaker</li>
                          <li>• Loose electrical connection</li>
                          <li>• Internal jam or overload</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Quick Fixes</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Press reset button firmly</li>
                          <li>• Check circuit breaker panel</li>
                          <li>• Verify switch is working</li>
                          <li>• Try manual crank (if equipped)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Naples Tip:</strong> Power outages from storms frequently trip reset buttons. Always check this first.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Trash2 className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold">Jammed or Humming</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">What Causes Jams</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Bones, utensils, or hard objects</li>
                          <li>• Fibrous materials (celery, corn husks)</li>
                          <li>• Too much food at once</li>
                          <li>• Grease buildup hardening</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Safe Removal Steps</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Turn off power completely</li>
                          <li>• Use flashlight to locate object</li>
                          <li>• Remove with tongs or pliers</li>
                          <li>• Use manual crank if needed</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Warning:</strong> If humming continues after clearing jam, motor may be damaged. Call professional.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Trash2 className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold">Poor Grinding Performance</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Performance Issues</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Dull or damaged blades</li>
                          <li>• Worn motor components</li>
                          <li>• Buildup reducing chamber space</li>
                          <li>• Age-related wear (8+ years)</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Improvement Methods</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Ice cube sharpening treatment</li>
                          <li>• Deep cleaning with baking soda</li>
                          <li>• Professional blade adjustment</li>
                          <li>• Consider replacement if very old</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Maintenance Tip:</strong> Monthly ice and salt treatment keeps blades sharp and removes buildup.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Trash2 className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold">Leaking Water</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Leak Locations</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Top mounting assembly</li>
                          <li>• Dishwasher connection</li>
                          <li>• Bottom drain connections</li>
                          <li>• Unit body cracks</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Professional Repairs</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Seal and gasket replacement</li>
                          <li>• Connection tightening</li>
                          <li>• Mounting ring adjustment</li>
                          <li>• Unit replacement if cracked</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-800">
                        <strong>Immediate Action:</strong> Turn off unit and water supply if leak is significant. Water damage spreads quickly.
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Step-by-Step Troubleshooting</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Basic Reset Procedure</h3>
                  <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Turn off wall switch and disconnect power</li>
                    <li>Wait 5 minutes for motor to cool</li>
                    <li>Press reset button firmly until it clicks</li>
                    <li>Restore power and test operation</li>
                  </ol>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Clear Visible Obstructions</h3>
                  <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Use flashlight to inspect chamber</li>
                    <li>Remove large items with tongs</li>
                    <li>Check for utensils or bones</li>
                    <li>Verify nothing is wedged in blades</li>
                  </ol>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Manual Rotation (If Equipped)</h3>
                  <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Locate hex key slot on bottom of unit</li>
                    <li>Insert appropriate hex key or wrench</li>
                    <li>Turn clockwise and counterclockwise</li>
                    <li>Continue until movement is smooth</li>
                  </ol>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Naples-Specific Maintenance</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Hard Water Protection</h3>
                <p className="text-blue-800 mb-4">
                  Naples' mineral-rich water accelerates buildup in disposals:
                </p>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Monthly vinegar and baking soda cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Ice cube treatments to break up deposits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Professional descaling every 2 years</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Avoid harsh chemical cleaners</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">What NOT to Put Down Your Disposal</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">Never Dispose Of:</h3>
                    <ul className="space-y-2 text-red-800">
                      <li>• Grease, fats, or oils</li>
                      <li>• Bones or hard shells</li>
                      <li>• Fibrous vegetables (celery, corn husks)</li>
                      <li>• Coffee grounds in large quantities</li>
                      <li>• Starchy foods (pasta, rice)</li>
                      <li>• Non-food items</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Safe to Dispose:</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Small food scraps</li>
                      <li>• Soft vegetable peelings</li>
                      <li>• Cooked meat scraps (small amounts)</li>
                      <li>• Citrus peels (for freshening)</li>
                      <li>• Ice cubes (for cleaning)</li>
                      <li>• Cold water during operation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">When to Call a Professional</h2>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">Professional Service Needed For:</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Electrical issues or wiring problems</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Persistent leaks after basic fixes</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Motor replacement or major repairs</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Complete unit replacement and installation</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Recurring problems despite troubleshooting</span>
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                Remember: A properly maintained garbage disposal should last 8-12 years in Naples' conditions. If your unit is older and experiencing frequent problems, replacement may be more cost-effective than repeated repairs.
              </p>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Expert Garbage Disposal Repair & Installation
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our licensed technicians provide fast, reliable garbage disposal service throughout Naples and Collier County. Same-day appointments available.
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
                Schedule Service
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}