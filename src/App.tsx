import { useState } from 'react';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>('home');

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img src="/Transparent.png" alt="TaskAlly" className="h-12 w-auto" />

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-teal-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'services' ? 'text-teal-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Services
              </button>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>

            <button className="bg-teal-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {currentPage === 'home' ? <HomePage /> : <ServicesPage />}
      </main>

      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <img src="/Transparent.png" alt="TaskAlly" className="h-8 w-auto mb-4" />
              <p className="text-sm text-gray-600">
                AI-powered tools for small businesses
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Call Management</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Client Bookings</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Message Handling</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-teal-600 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 TaskAlly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
