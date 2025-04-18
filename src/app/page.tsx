"use client";

import { useState } from 'react';
import { ChevronDown, Phone, ShieldCheck, Globe, Clock, Star, Check, MessageCircle } from 'lucide-react';

export default function SMSServiceLandingPage() {
  const [selectedCountry, setSelectedCountry] = useState<{ code: string; flag: string; name: string; } | null>(null);;
  
  const countries = [
    { code: 'US', flag: '🇺🇸', name: 'United States' },
    { code: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
    { code: 'CA', flag: '🇨🇦', name: 'Canada' },
    { code: 'AU', flag: '🇦🇺', name: 'Australia' },
    { code: 'DE', flag: '🇩🇪', name: 'Germany' },
    { code: 'FR', flag: '🇫🇷', name: 'France' },
    { code: 'ES', flag: '🇪🇸', name: 'Spain' },
    { code: 'IT', flag: '🇮🇹', name: 'Italy' },
  ];
  
  const reviews = [
    { rating: 5, text: "Great service, got my verification code instantly. Will use again!" },
    { rating: 5, text: "Perfect for creating accounts without sharing my personal number. Highly recommend." },
    { rating: 4, text: "Easy to use and reliable. The interface is simple and straightforward." },
    { rating: 5, text: "Been using this for months now and never had any issues. Super reliable!" },
    { rating: 4, text: "Very convenient for temporary use cases. Good selection of countries too." },
    { rating: 5, text: "Saved me from spam! No more unwanted messages on my personal phone." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-blue-50 text-gray-900">
      {/* Header/Nav */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="font-bold text-xl text-blue-600">SMSReceiver</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Numbers</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">API</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Blog</a>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign In</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Receive SMS online</h1>
            <p className="text-xl mb-8">Get temporary phone numbers to protect your privacy and receive verification codes</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">Get Started Free</button>
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800">See Numbers</button>
            </div>
          </div>
        </div>
      </section>

      {/* Country Selection */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4">Choose SMS Service</h2>
          <p className="text-gray-600 text-center mb-8">Select a country to get a temporary phone number available online</p>
          
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <div className="font-medium mb-2">Popular Countries</div>
              <div className="grid grid-cols-2 gap-2">
                {countries.slice(0, 8).map((country) => (
                  <button 
                    key={country.code}
                    className="flex items-center p-2 rounded-lg hover:bg-blue-50"
                    onClick={() => setSelectedCountry(country)}
                  >
                    <span className="text-xl mr-2">{country.flag}</span>
                    <span className="text-sm">{country.name}</span>
                  </button>
                ))}
              </div>
              <button className="mt-4 w-full text-blue-600 border border-blue-600 rounded-lg py-2 hover:bg-blue-50">
                Show All Countries
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">How our service works</h2>
          <p className="text-center mb-12">Follow these simple steps to receive SMS messages online</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Choose a number</h3>
              <p className="text-blue-100">Select a temporary phone number from our available countries</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Use the number</h3>
              <p className="text-blue-100">Enter the phone number where verification is required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Get SMS code</h3>
              <p className="text-blue-100">Receive and view SMS messages sent to your temporary number</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Why choose our SMS service</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-xl">
              <ShieldCheck className="text-blue-600 mb-3" size={24} />
              <h3 className="font-bold mb-2">100% Anonymous</h3>
              <p className="text-gray-600">Protect your privacy with completely anonymous phone numbers</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <Clock className="text-blue-600 mb-3" size={24} />
              <h3 className="font-bold mb-2">Instant Delivery</h3>
              <p className="text-gray-600">Receive SMS messages instantly, no delays or waiting</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <Globe className="text-blue-600 mb-3" size={24} />
              <h3 className="font-bold mb-2">Global Coverage</h3>
              <p className="text-gray-600">Access numbers from multiple countries worldwide</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <Check className="text-blue-600 mb-3" size={24} />
              <h3 className="font-bold mb-2">Trusted Platform</h3>
              <p className="text-gray-600">Join thousands of satisfied users who trust our service</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <MessageCircle className="text-blue-600 mb-3" size={24} />
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our team is available to help you whenever needed</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <Globe className="text-blue-600 mb-3" size={24} />
              <h3 className="font-bold mb-2">API Access</h3>
              <p className="text-gray-600">Integrate our service with your apps and systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">800K+</div>
              <div className="text-gray-400">Numbers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">What our users say</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-xl">
                <div className="flex mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Simple transparent pricing</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden w-full max-w-xs">
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-lg font-medium">Basic</div>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold">$5</span>
                    <span className="text-gray-500 ml-2">/mo</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>5 phone numbers</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>1 country</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>100 SMS/month</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>7-day history</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden w-full max-w-xs border-2 border-blue-500">
              <div className="bg-blue-500 text-white text-center py-1 text-sm">
                Most Popular
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-lg font-medium">Business</div>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold">$50</span>
                    <span className="text-gray-500 ml-2">/mo</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Unlimited numbers</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>All countries</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>1000 SMS/month</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>30-day history</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>API Access</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Priority Support</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-gray-600 mb-6">Create an account in less than a minute and start receiving SMS messages</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
                Get Started Free
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="/api/placeholder/300/600" alt="Mobile app screenshot" className="max-w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm cursor-pointer">
                <div className="font-medium">What is a temporary SMS number?</div>
                <ChevronDown size={20} />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm cursor-pointer">
                <div className="font-medium">How long can I use a temporary number?</div>
                <ChevronDown size={20} />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm cursor-pointer">
                <div className="font-medium">Is this service legal?</div>
                <ChevronDown size={20} />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm cursor-pointer">
                <div className="font-medium">What payment methods do you accept?</div>
                <ChevronDown size={20} />
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm cursor-pointer">
                <div className="font-medium">Can people call my temporary number?</div>
                <ChevronDown size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-6">Stay updated with our latest features</h2>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none" 
            />
            <button className="bg-blue-800 px-4 py-2 rounded-r-lg hover:bg-blue-900">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">SMSReceiver</h3>
              <p className="mb-4">The most reliable temporary phone number service for your verification needs.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                </a>
                <a href="#" className="hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>support@smsreceiver.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Main St, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            &copy; {new Date().getFullYear()} SMSReceiver. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Chat button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700">
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
}