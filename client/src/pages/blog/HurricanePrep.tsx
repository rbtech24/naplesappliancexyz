import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Shield, CheckCircle, Phone, Wrench } from 'lucide-react';

export default function HurricanePrep() {
  return (
    <>
      <Helmet>
        <title>Hurricane Prep: Protecting Your Appliances in Naples | Naples Appliance Repair</title>
        <meta name="description" content="Essential guide to protecting appliances during hurricane season in Naples, FL. Preparation tips, power surge protection, and post-storm recovery." />
        <meta name="keywords" content="hurricane appliance protection Naples, storm preparation appliances Naples FL, power surge protection Southwest Florida, Naples hurricane season" />
        <link rel="canonical" href="https://naplesappliancerepair.xyz/blog/hurricane-prep-protecting-appliances-naples" />
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
              <span className="text-gray-900">Hurricane Prep</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hurricane Prep: Protecting Your Appliances in Naples
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
                <span>Naples Appliance Repair Team</span>
                <span>•</span>
                <span>October 2025</span>
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
                Hurricane season in Southwest Florida brings unique challenges for protecting valuable home appliances. Naples residents face the dual threat of power outages and dangerous electrical surges that can destroy expensive refrigerators, washers, dryers, and other appliances. Proper preparation can save thousands in replacement costs and ensure your appliances are ready when power returns after a storm.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <div className="flex items-start">
                  <Cloud className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-900 mb-2">Hurricane Season Timeline</h3>
                    <p className="text-orange-800 mb-2">
                      Peak hurricane season for Naples runs June through November, with highest risk in August through October:
                    </p>
                    <ul className="text-orange-800 space-y-1">
                      <li>• Preparation should begin by June 1st</li>
                      <li>• Peak danger period: August 15 - October 15</li>
                      <li>• Storm surge and wind damage most common threats</li>
                      <li>• Power grid particularly vulnerable to Gulf storms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Pre-Storm Preparation Checklist</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-lg font-semibold">Power Protection</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Surge Protectors</h4>
                        <p className="text-sm text-gray-600">Install whole-house surge protectors and individual appliance protectors</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Circuit Breakers</h4>
                        <p className="text-sm text-gray-600">Turn off individual appliance breakers during storm</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Unplug Devices</h4>
                        <p className="text-sm text-gray-600">Physically disconnect all non-essential appliances</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-lg font-semibold">Refrigerator/Freezer</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Temperature Settings</h4>
                        <p className="text-sm text-gray-600">Set to coldest safe setting before storm arrival</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Food Storage</h4>
                        <p className="text-sm text-gray-600">Stock up, but don't overfill - air needs to circulate</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Ice Supply</h4>
                        <p className="text-sm text-gray-600">Fill containers with water and freeze as backup cooling</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-lg font-semibold">Laundry Appliances</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Water Supply</h4>
                        <p className="text-sm text-gray-600">Turn off water supply valves to prevent flood damage</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Drain Lines</h4>
                        <p className="text-sm text-gray-600">Ensure drainage lines are clear and secure</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Gas Appliances</h4>
                        <p className="text-sm text-gray-600">Know location of gas shutoff valves</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-lg font-semibold">HVAC Systems</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Outdoor Units</h4>
                        <p className="text-sm text-gray-600">Secure or remove anything that could become projectiles</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Air Filters</h4>
                        <p className="text-sm text-gray-600">Install fresh filters before storm for post-storm air quality</p>
                      </div>
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Power Disconnect</h4>
                        <p className="text-sm text-gray-600">Turn off AC units during storm to prevent surge damage</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">During the Storm</h2>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Critical Actions</h3>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Keep refrigerator and freezer doors closed</strong> - opens only for absolute necessities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Monitor power fluctuations</strong> - turn off remaining appliances if power flickers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Avoid using appliances during storm</strong> - even if power remains on</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Document any damage immediately</strong> - photos for insurance claims</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Post-Storm Recovery</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Safety Assessment (First 24 Hours)</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Check for gas leaks before entering home</li>
                    <li>• Inspect for flooding or standing water near appliances</li>
                    <li>• Look for obvious damage to units or electrical connections</li>
                    <li>• Take photos of any damage for insurance documentation</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Gradual Power Restoration</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Wait 30 minutes after power returns before reconnecting appliances</li>
                    <li>• Turn on one appliance at a time, waiting 15 minutes between each</li>
                    <li>• Start with refrigerator/freezer as priority</li>
                    <li>• Monitor for unusual noises, smells, or performance issues</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Professional Inspection</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Schedule professional inspection if any appliances were flooded</li>
                    <li>• Have HVAC systems checked before full operation</li>
                    <li>• Test all safety systems (smoke detectors, etc.)</li>
                    <li>• Document everything for insurance claims</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Naples-Specific Considerations</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Local Risk Factors</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Storm surge:</strong> Ground-level appliances particularly vulnerable near coast</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Extended outages:</strong> Power restoration can take weeks in severe storms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>High humidity:</strong> Increases mold risk in flooded appliances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span><strong>Salt exposure:</strong> Accelerates corrosion in storm-damaged units</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Insurance and Documentation</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Before the Storm</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Photo inventory of all appliances</li>
                      <li>• Record model and serial numbers</li>
                      <li>• Keep receipts and warranty information safe</li>
                      <li>• Review insurance coverage limits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">After the Storm</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Document all damage immediately</li>
                      <li>• Save damaged appliances for inspection</li>
                      <li>• Get professional repair estimates</li>
                      <li>• File insurance claims promptly</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Emergency Supply Kit for Appliances</h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Essential Supplies</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Whole-house surge protector and individual surge strips</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Battery-powered or hand-crank radio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Coolers and ice packs for food storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Generator (properly installed and maintained)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Waterproof storage for important documents</span>
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                Remember: Hurricane preparation for appliances isn't just about protecting your investment—it's about ensuring your family's safety and comfort during and after the storm. Start preparing early and don't wait until a storm is approaching.
              </p>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Post-Hurricane Appliance Inspection & Repair
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our emergency response team provides rapid assessment and repair services after storms. We understand insurance requirements and work directly with claims adjusters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:239-777-0404"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency: (239) 777-0404
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-blue-700 transition-colors"
              >
                <Wrench className="w-5 h-5 mr-2" />
                Schedule Inspection
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}