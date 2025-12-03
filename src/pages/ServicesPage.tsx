import { Phone, Calendar, MessageSquare, FileText, ArrowRight, CheckCircle2, Clock, Users } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50/50 via-white to-blue-50/30 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-teal-600 bg-white px-4 py-2 rounded-full border border-teal-100">
                Our Services
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-powered tools that work for you
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We set up and manage a suite of intelligent tools designed to handle your everyday business tasks—no technical expertise required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-100 to-teal-50 rounded-3xl transform rotate-2" />
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-teal-100 rounded-full w-3/4 mb-2" />
                      <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-teal-600" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded-full w-full mb-2" />
                          <div className="h-2 bg-gray-200 rounded-full w-4/5" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-100">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-teal-200 rounded-full w-full mb-2" />
                          <div className="h-2 bg-teal-200 rounded-full w-3/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-600">Call Management</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Never miss an important call
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our AI-powered call system answers every incoming call professionally, captures key information, and routes urgent matters directly to you.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">24/7 availability</p>
                    <p className="text-sm text-gray-600">Your phone is always answered, day or night</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Professional greetings</p>
                    <p className="text-sm text-gray-600">Customized to match your brand and tone</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Smart call routing</p>
                    <p className="text-sm text-gray-600">Important calls flagged and forwarded immediately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Booking Management</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Automated scheduling made simple
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Let clients book appointments directly through your channels. Our system manages your calendar, sends reminders, and handles rescheduling automatically.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Calendar sync</p>
                    <p className="text-sm text-gray-600">Works with your existing calendar tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Automatic reminders</p>
                    <p className="text-sm text-gray-600">Reduces no-shows with timely notifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Flexible rescheduling</p>
                    <p className="text-sm text-gray-600">Clients can easily reschedule when needed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl transform -rotate-2" />
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-blue-100 rounded-full w-3/4 mb-2" />
                    <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-blue-600">TODAY</span>
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        <div className="h-2 bg-blue-200 rounded-full flex-1" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <div className="h-2 bg-blue-200 rounded-full flex-1 w-4/5" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-gray-600">UPCOMING</span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        <div className="h-2 bg-gray-200 rounded-full flex-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl transform rotate-2" />
                <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <MessageSquare className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-teal-100 rounded-full w-3/4 mb-2" />
                      <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm max-w-[70%]">
                        <div className="h-2 bg-gray-300 rounded-full w-full mb-2" />
                        <div className="h-2 bg-gray-300 rounded-full w-3/4" />
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-gradient-to-br from-teal-500 to-blue-600 p-3 rounded-2xl rounded-br-sm max-w-[70%]">
                        <div className="h-2 bg-white/40 rounded-full w-full mb-2" />
                        <div className="h-2 bg-white/40 rounded-full w-2/3" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm max-w-[70%]">
                        <div className="h-2 bg-gray-300 rounded-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full">
                <MessageSquare className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-600">Message Handling</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Respond to every inquiry
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether through text, email, or social media, our AI ensures every customer message gets a timely, helpful response.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Multi-channel support</p>
                    <p className="text-sm text-gray-600">Email, SMS, and social media messages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Quick responses</p>
                    <p className="text-sm text-gray-600">Customers get answers within minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Escalation when needed</p>
                    <p className="text-sm text-gray-600">Complex issues routed to you automatically</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <FileText className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Admin Tasks</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Simple tasks, handled automatically
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From data entry to follow-up emails, we automate the repetitive tasks that slow you down so you can focus on growth.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Data organization</p>
                    <p className="text-sm text-gray-600">Keep records clean and up-to-date</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Follow-up automation</p>
                    <p className="text-sm text-gray-600">Timely check-ins with customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Report generation</p>
                    <p className="text-sm text-gray-600">Regular summaries of key metrics</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl transform -rotate-2" />
              <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2" />
                    <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-gray-400" />
                      <div className="h-2 bg-gray-200 rounded-full flex-1" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-12 bg-gray-200 rounded-lg" />
                      <div className="h-12 bg-gray-200 rounded-lg" />
                      <div className="h-12 bg-gray-200 rounded-lg" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-8 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg" />
                    <div className="w-8 h-8 bg-gray-100 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal-600 to-blue-600 py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to let TaskAlly handle the details?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We'll set everything up for you. All you need to do is tell us about your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg text-base font-medium hover:bg-gray-50 transition-all shadow-xl inline-flex items-center justify-center gap-2">
              Schedule a Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-teal-700/50 text-white px-8 py-4 rounded-lg text-base font-medium hover:bg-teal-700/70 transition-all border-2 border-white/20">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
