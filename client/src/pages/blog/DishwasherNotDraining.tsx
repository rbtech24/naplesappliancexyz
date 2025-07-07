import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Wrench, Phone } from 'lucide-react';

export default function DishwasherNotDraining() {
  return (
    <>
      <Helmet>
        <title>Dishwasher Not Draining? Most Common Causes in Naples Homes | Naples Appliance Repair</title>
        <meta name="description" content="Expert guide to fixing dishwasher drainage issues in Naples, FL. Learn the most common causes and solutions for standing water in your dishwasher." />
        <meta name="keywords" content="dishwasher not draining Naples, dishwasher repair Naples FL, standing water dishwasher, Naples appliance repair" />
        <link rel="canonical" href="https://naplesappliancerepair.xyz/blog/dishwasher-not-draining-most-common-causes-naples-homes" />
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
              <span className="text-gray-900">Dishwasher Not Draining</span>
            </div>
          </div>
        </nav>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Dishwasher Not Draining? Most Common Causes in Naples Homes
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
                <span>Naples Appliance Repair Team</span>
                <span>•</span>
                <span>August 2025</span>
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
                A dishwasher that won't drain properly is one of the most frustrating appliance problems Naples homeowners face. Standing water in your dishwasher not only prevents proper cleaning but can also lead to unpleasant odors and potential water damage. Understanding the most common causes of drainage issues can help you identify whether this is a simple fix or requires professional attention.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Why Dishwashers Don't Drain: The Basics</h2>
              
              <p className="mb-6">
                Your dishwasher's drainage system works by pumping dirty water through a drain hose that connects to either your garbage disposal or directly to your home's plumbing system. When this process fails, water accumulates in the bottom of the dishwasher tub, creating the standing water problem many Naples residents experience.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Naples-Specific Consideration</h3>
                    <p className="text-blue-800">
                      Naples' hard water and high mineral content can accelerate dishwasher drainage problems. The limestone and calcium in our water supply often contribute to faster buildup of debris and mineral deposits in drainage components.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Most Common Causes of Dishwasher Drainage Issues</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-600 font-bold">1</span>
                      </div>
                      <h3 className="text-lg font-semibold">Clogged Drain Filter</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Food particles, grease, and debris accumulate in the drain filter, blocking water flow. This is the most common cause in Naples homes.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Solution:</strong> Remove and clean the filter thoroughly with hot water and a soft brush.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-600 font-bold">2</span>
                      </div>
                      <h3 className="text-lg font-semibold">Garbage Disposal Issues</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      If your dishwasher drains through the garbage disposal, clogs or malfunctions in the disposal affect dishwasher drainage.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Solution:</strong> Run the garbage disposal and ensure it's working properly before running the dishwasher.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-600 font-bold">3</span>
                      </div>
                      <h3 className="text-lg font-semibold">Kinked Drain Hose</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      The drain hose under your sink may be kinked, twisted, or crushed, preventing proper water flow.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Solution:</strong> Check the hose routing and straighten any kinks or obstructions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-red-600 font-bold">4</span>
                      </div>
                      <h3 className="text-lg font-semibold">Drain Pump Failure</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      The drain pump motor may have failed, preventing water from being pumped out of the dishwasher.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Solution:</strong> This requires professional repair or replacement by a qualified technician.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Step-by-Step Troubleshooting Guide</h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Check the Drain Filter</h3>
                  <p className="text-gray-700 mb-2">
                    Remove the bottom dish rack and locate the cylindrical filter at the bottom of the dishwasher. Unscrew it counterclockwise and rinse under hot water.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Naples Tip:</strong> With our hard water, filters need cleaning every 2-3 weeks instead of monthly.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Run the Garbage Disposal</h3>
                  <p className="text-gray-700 mb-2">
                    Turn on your garbage disposal and let it run for 30 seconds to clear any blockages that might affect dishwasher drainage.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Inspect the Drain Hose</h3>
                  <p className="text-gray-700 mb-2">
                    Check under your sink for the dishwasher drain hose. Ensure it's not kinked, crushed, or disconnected.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Test the Drain Cycle</h3>
                  <p className="text-gray-700 mb-2">
                    Run a drain cycle on your dishwasher. Listen for the drain pump motor - you should hear it running. If not, the pump may have failed.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Prevention Tips for Naples Homeowners</h2>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Regular Maintenance Schedule</h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Clean the drain filter every 2-3 weeks due to Naples' hard water</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Run hot water at kitchen sink before starting dishwasher</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Scrape dishes thoroughly but don't pre-rinse completely</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Use rinse aid to prevent mineral buildup from hard water</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">When to Call a Professional</h2>

              <p className="mb-6">
                While some drainage issues can be resolved with basic troubleshooting, certain problems require professional expertise. Contact Naples Appliance Repair if you experience:
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Persistent drainage problems after cleaning the filter</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Unusual noises during the drain cycle</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Water backing up into the sink when dishwasher drains</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Electrical issues or burning smells</span>
                </li>
              </ul>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Professional Dishwasher Repair in Naples?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our certified technicians serve all of Collier County with same-day service for dishwasher drainage issues and all major appliance repairs.
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