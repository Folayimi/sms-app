import React, { useState } from 'react';
import { Globe, MessageSquare, Shield, Star, ThumbsUp, Clock, DollarSign, Check, ChevronDown, Phone, Send, User, HelpCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function SMSOnlineService() {
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const countries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Italy', flag: '🇮🇹' }
  ];
  
  const popularCountries = [
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Spain', flag: '🇪🇸' }
  ];
  
  const testimonials = [
    { rating: 5, text: "This service is amazing! So easy to use and reliable for all my verification needs." },
    { rating: 5, text: "I've tried many SMS services but this one stands out for its affordable pricing and excellent functionality." },
    { rating: 5, text: "Perfect solution for my privacy needs. I don't have to share my personal number anymore." },
    { rating: 5, text: "The interface is intuitive and the service works flawlessly. Highly recommend!" },
    { rating: 5, text: "Been using this for 6 months now. Never had any issues with delivery or functionality." },
    { rating: 5, text: "Great customer support! They resolved my issue within minutes." }
  ];
  
  const faqs = [
    "What is temporary SMS number?",
    "How long can I use my temporary number?",
    "Is this service legal?",
    "What payment methods do you accept?",
    "Do I need to give you my phone number?",
    "Can I get free SMS messages?"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-xl text-blue-600">SMS Online</span>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-700">Home</a>
              <a href="#" className="text-gray-700">About</a>
              <a href="#" className="text-gray-700">Pricing</a>
              <a href="#" className="text-gray-700">FAQ</a>
              <a href="#" className="text-gray-700">Blog</a>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Receive SMS Online</h1>
          <p className="text-xl mb-8">Get temporary phone numbers to verify accounts and receive messages from anywhere.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md">Get Started</button>
            <button className="border border-white text-white px-6 py-3 rounded-md">Learn More</button>
          </div>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Choose SMS Service</h2>
          <p className="text-center mb-8 text-gray-600">Select a country to receive SMS messages from anywhere in the world.</p>
          
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h3 className="font-bold mb-4">Popular Countries</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {popularCountries.map((country) => (
                <button 
                  key={country.name}
                  className={`flex items-center justify-center p-2 rounded ${selectedCountry === country.name ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
                  onClick={() => setSelectedCountry(country.name)}
                >
                  <span className="text-xl mr-2">{country.flag}</span>
                  <span className="text-sm">{country.name}</span>
                </button>
              ))}
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded">Continue</button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">How our service works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Globe size={28} />
              </div>
              <h3 className="font-bold mb-2">1. Choose a number</h3>
              <p>Select a phone number from any of our available countries</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={28} />
              </div>
              <h3 className="font-bold mb-2">2. Get the number</h3>
              <p>Use the temporary phone number for verification on any service</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Phone size={28} />
              </div>
              <h3 className="font-bold mb-2">3. Get your code</h3>
              <p>Receive and view SMS messages instantly in your account</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Why choose our SMS service</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Shield size={28} className="text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">100% Anonymous</h3>
              <p className="text-gray-700">Protect your privacy with our anonymous phone numbers</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <Check size={28} className="text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">Instant Delivery</h3>
              <p className="text-gray-700">Receive SMS messages instantly without delays</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <Globe size={28} className="text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">Global Coverage</h3>
              <p className="text-gray-700">Numbers available from countries all around the world</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <DollarSign size={28} className="text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">Great Pricing</h3>
              <p className="text-gray-700">Affordable rates for all budgets and needs</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <Clock size={28} className="text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-700">Our support team is available around the clock</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <ThumbsUp size={28} className="text-blue-600 mb-4" />
              <h3 className="font-bold mb-2">Easy Access</h3>
              <p className="text-gray-700">Simple interface that's easy to use for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-around flex-wrap">
            <div className="text-center px-4">
              <p className="text-4xl font-bold text-blue-400">99.9%</p>
              <p className="text-gray-400">Uptime</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl font-bold text-blue-400">800K+</p>
              <p className="text-gray-400">Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">What our users say</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Simple transparent pricing</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 w-full max-w-xs">
              <div className="border-b pb-4 mb-4">
                <p className="text-lg font-bold">Basic</p>
                <p className="text-3xl font-bold mt-2">$5</p>
                <p className="text-gray-600">per month</p>
              </div>
              
              <ul className="mb-6 space-y-2">
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> 10 SMS daily</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> 5 countries</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Basic support</li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded">Get Started</button>
            </div>
            
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 w-full max-w-xs relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl">Popular</div>
              <div className="border-b pb-4 mb-4">
                <p className="text-lg font-bold">Premium</p>
                <p className="text-3xl font-bold mt-2">$50</p>
                <p className="text-gray-600">per month</p>
              </div>
              
              <ul className="mb-6 space-y-2">
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Unlimited SMS</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> All countries</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Priority support</li>
                <li className="flex items-center"><Check size={16} className="text-green-500 mr-2" /> Advanced features</li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-2 rounded">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="mb-6">Create an account today and start receiving SMS messages online.</p>
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md">Sign Up Now</button>
          </div>
          <div className="w-full md:w-1/3">
            <img src="/api/placeholder/300/600" alt="Phone with SMS app" className="rounded-lg mx-auto" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b py-4">
                <button className="flex justify-between items-center w-full text-left font-medium">
                  {faq}
                  <ChevronDown size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-8 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-2">Stay updated with our latest features</h2>
          <p className="mb-4">Subscribe to our newsletter for updates and promotions</p>
          <div className="flex max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l text-gray-900" />
            <button className="bg-blue-800 px-4 py-2 rounded-r">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">SMS Online</h3>
              <p className="mb-4">The most reliable temporary SMS service for all your verification needs.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">SMS Receiving</a></li>
                <li><a href="#" className="hover:text-white">Verification Service</a></li>
                <li><a href="#" className="hover:text-white">API Access</a></li>
                <li><a href="#" className="hover:text-white">Business Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>support@smsonline.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Main Street, City</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} SMS Online Service. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <button className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
        <MessageSquare size={24} />
      </button>
    </div>
  );
}