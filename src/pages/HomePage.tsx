import { Phone, Calendar, MessageSquare, CheckCircle2, Zap, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-white to-blue-50/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-sm font-medium text-teal-600 bg-teal-50 px-4 py-2 rounded-full">
                  AI-Powered Business Support
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Focus on your business.
                <span className="block text-teal-600 mt-2">We'll handle the rest.</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                TaskAlly manages your calls, bookings, messages, and admin tasks in the background—so you can focus on what matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30">
                  Get Started Today
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-50 transition-all border-2 border-gray-200">
                  See How It Works
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-600">No dashboard required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-gray-600">Setup in 48 hours</span>
                </div>
              </div>
            </div>

            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-blue-400/10 to-teal-500/20 rounded-3xl blur-3xl" />

              <div className="relative grid grid-cols-2 gap-6 w-full max-w-md">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Smart Calls</h3>
                    <p className="text-sm text-gray-600">AI handles incoming calls professionally</p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition-transform mt-12">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Messages</h3>
                    <p className="text-sm text-gray-600">Never miss a customer inquiry</p>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bookings</h3>
                    <p className="text-sm text-gray-600">Automated scheduling that just works</p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-600 to-blue-600 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">Admin Tasks</h3>
                    <p className="text-sm text-white/90">Simple tasks handled automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for small businesses who want to grow
            </h2>
            <p className="text-lg text-gray-600">
              We set up and manage AI tools that run in the background, giving you more time for what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                We get you up and running within 48 hours. No complicated software to learn or configure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliable Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Your AI assistant works around the clock, ensuring every call and message is handled professionally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Hassle</h3>
              <p className="text-gray-600 leading-relaxed">
                No dashboards to check daily. We manage everything in the background and keep you updated.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-blue-50 to-teal-50 rounded-3xl transform -rotate-3" />
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Tell us about your business</h4>
                      <p className="text-sm text-gray-600">Quick consultation to understand your needs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">We configure everything</h4>
                      <p className="text-sm text-gray-600">Setup and testing completed within 48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Focus on your business</h4>
                      <p className="text-sm text-white/90">While we manage tasks in the background</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Simple process, powerful results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Getting started with TaskAlly is straightforward. We handle the technical setup so you can get back to running your business.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">No technical expertise required on your end</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Seamlessly integrates with your existing workflow</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Ongoing support and adjustments as needed</p>
                </div>
              </div>
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 mt-6">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to streamline your business?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join small businesses already using TaskAlly to save time and improve customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20">
              Get Started Now
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-50 transition-all border-2 border-gray-200">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
