import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Shield, CheckCircle, Phone, Wrench } from 'lucide-react';

export default function ApplianceWarranties() {
  return (
    <>
      <Helmet>
        <title>Appliance Warranties: What Naples Residents Need to Know | Naples Appliance Repair</title>
        <meta name="description" content="Complete guide to appliance warranties in Naples, FL. Learn about manufacturer coverage, extended warranties, and what's covered in Southwest Florida." />
        <meta name="keywords" content="appliance warranties Naples, warranty coverage Naples FL, extended warranties Southwest Florida, appliance protection plans Naples" />
        <link rel="canonical" href="https://naplesappliancerepair.xyz/blog/appliance-warranties-what-naples-residents-need-know" />
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
              <span className="text-gray-900">Appliance Warranties</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Appliance Warranties: What Naples Residents Need to Know
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
                <span>Naples Appliance Repair Team</span>
                <span>•</span>
                <span>October 2025</span>
                <span>•</span>
                <span>11 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <p className="text-xl text-gray-700 mb-8">
                Understanding appliance warranties can save Naples homeowners thousands of dollars in repair costs, but warranty terms can be confusing and vary significantly between manufacturers. Southwest Florida's harsh climate creates unique challenges that affect warranty coverage, and knowing what's covered—and what isn't—helps you make informed decisions about repairs, maintenance, and extended coverage options.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Types of Appliance Warranties</h2>

              <div className="grid md:grid-cols-1 gap-6 mb-8">
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <FileText className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-xl font-semibold">Manufacturer's Limited Warranty</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">What's Covered</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Manufacturing defects</li>
                          <li>• Component failures (varying periods)</li>
                          <li>• Parts replacement</li>
                          <li>• Sometimes labor costs</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Typical Duration</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Full warranty: 1 year</li>
                          <li>• Major components: 2-5 years</li>
                          <li>• Compressors: 5-10 years</li>
                          <li>• Varies by manufacturer and product</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Naples Note:</strong> Environmental damage from salt air or humidity typically not covered under manufacturer warranties.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-xl font-semibold">Extended Warranties/Service Plans</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Extended coverage beyond manufacturer</li>
                          <li>• Often includes normal wear items</li>
                          <li>• May cover environmental damage</li>
                          <li>• Predictable repair costs</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Drawbacks</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Additional upfront cost</li>
                          <li>• Exclusions and limitations</li>
                          <li>• Service provider restrictions</li>
                          <li>• Claim approval processes</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Decision Factor:</strong> Extended warranties often make more sense in Naples due to harsh environmental conditions.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-purple-500 mr-3" />
                      <h3 className="text-xl font-semibold">Home Warranty Plans</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Coverage Scope</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Multiple appliances and systems</li>
                          <li>• HVAC, plumbing, electrical</li>
                          <li>• Annual renewable contracts</li>
                          <li>• Service call fees apply</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Considerations</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Pre-existing condition exclusions</li>
                          <li>• Coverage caps and limits</li>
                          <li>• Service provider quality varies</li>
                          <li>• Claim processing can be slow</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Best For:</strong> Older homes with multiple aging appliances and systems.
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">What's Typically NOT Covered</h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Common Exclusions</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0">×</span>
                    <span><strong>Environmental damage:</strong> Salt air corrosion, humidity-related issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0">×</span>
                    <span><strong>Power surge damage:</strong> Unless specifically covered</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0">×</span>
                    <span><strong>Normal wear and tear:</strong> Gradual deterioration over time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0">×</span>
                    <span><strong>Misuse or neglect:</strong> Lack of maintenance, improper use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0">×</span>
                    <span><strong>Cosmetic damage:</strong> Scratches, dents, fading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0">×</span>
                    <span><strong>Unauthorized repairs:</strong> DIY or non-certified technician work</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Naples-Specific Warranty Considerations</h2>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-orange-900 mb-4">Climate-Related Challenges</h3>
                <p className="text-orange-800 mb-4">
                  Southwest Florida's environment creates unique warranty situations:
                </p>
                <ul className="space-y-2 text-orange-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Salt air exposure:</strong> Accelerates corrosion but often excluded from coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>High humidity:</strong> Causes electronic component failures sooner</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Hurricane damage:</strong> May require separate insurance claim</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Year-round use:</strong> Reaches wear limits faster than in seasonal climates</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Warranty Best Practices</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Register and Document</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Register appliances immediately after purchase</li>
                    <li>• Keep all receipts and warranty documentation</li>
                    <li>• Take photos of model and serial number plates</li>
                    <li>• Store documents in waterproof location (hurricane preparedness)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintain Properly</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Follow all manufacturer maintenance requirements</li>
                    <li>• Keep maintenance records and receipts</li>
                    <li>• Use only authorized service providers for warranty work</li>
                    <li>• Address issues promptly—don't let problems worsen</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Know Your Coverage</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Read and understand warranty terms completely</li>
                    <li>• Know what documentation is required for claims</li>
                    <li>• Understand the difference between parts and labor coverage</li>
                    <li>• Be aware of coverage reduction over time</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Extended Warranty Decision Guide</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Consider Extended Coverage If:</h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Appliance cost over $1,000</li>
                      <li>• History of brand reliability issues</li>
                      <li>• Living in coastal Naples (salt air)</li>
                      <li>• Heavy use patterns</li>
                      <li>• Complex electronic features</li>
                      <li>• Plan to keep appliance 8+ years</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">Skip Extended Coverage If:</h3>
                    <ul className="space-y-2 text-red-800">
                      <li>• Appliance under $500</li>
                      <li>• Excellent brand reliability record</li>
                      <li>• Plan to replace in 3-5 years</li>
                      <li>• Have emergency repair fund</li>
                      <li>• Coverage cost over 20% of appliance price</li>
                      <li>• Many exclusions and limitations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Filing Warranty Claims</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Step-by-Step Process</h3>
                <ol className="text-blue-800 space-y-2 list-decimal list-inside">
                  <li><strong>Contact manufacturer first</strong> - Don't start with independent repair</li>
                  <li><strong>Have information ready</strong> - Model, serial number, purchase date, receipt</li>
                  <li><strong>Describe the problem clearly</strong> - Include when it started and symptoms</li>
                  <li><strong>Follow their service process</strong> - Use only authorized repair providers</li>
                  <li><strong>Keep all documentation</strong> - Work orders, parts replaced, communications</li>
                  <li><strong>Know your rights</strong> - Appeal decisions if you disagree</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Common Warranty Pitfalls</h2>

              <div className="space-y-4 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Voided by Unauthorized Repairs</h3>
                  <p className="text-gray-700">
                    Having anyone other than an authorized technician work on your appliance can void the entire warranty, even for unrelated future problems.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintenance Requirements</h3>
                  <p className="text-gray-700">
                    Many warranties require proof of regular maintenance. In Naples' harsh climate, this is especially important for outdoor units and water-related appliances.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Time Limits</h3>
                  <p className="text-gray-700">
                    Most warranties have strict time limits for reporting problems. Don't delay if you notice issues—document and report them immediately.
                  </p>
                </div>
              </div>

              <p className="mb-6">
                Remember: A warranty is only as good as the company standing behind it. Research the manufacturer's reputation for honoring claims and consider the long-term viability of the company when making appliance purchases.
              </p>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Warranty Service & Authorized Repairs
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're authorized to perform warranty service for major appliance brands. Don't risk voiding your warranty with unauthorized repairs.
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
                Schedule Warranty Service
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}