"use client";

import { useState } from 'react';
import { 
  ChevronDown, 
  Phone, 
  ShieldCheck, 
  Globe, 
  Clock, 
  Star, 
  Check, 
  MessageCircle, 
  Bell, 
  Code, 
  CreditCard,
  Headphones,
  Users,
  Lock,
  Heart,
  Mail
} from 'lucide-react';

export default function SMSServiceLandingPage() {
    const [selectedCountry, setSelectedCountry] = useState<{ code: string; flag: string; name: string; } | null>(null);
  
  const countries = [
    { code: 'US', flag: '🇺🇸', name: 'United States', price: '$0.50' },
    { code: 'GB', flag: '🇬🇧', name: 'United Kingdom', price: '$0.55' },
    { code: 'CA', flag: '🇨🇦', name: 'Canada', price: '$0.52' },
    { code: 'AU', flag: '🇦🇺', name: 'Australia', price: '$0.58' },
    { code: 'DE', flag: '🇩🇪', name: 'Germany', price: '$0.48' },
    { code: 'FR', flag: '🇫🇷', name: 'France', price: '$0.48' },
    { code: 'ES', flag: '🇪🇸', name: 'Spain', price: '$0.45' },
    { code: 'IT', flag: '🇮🇹', name: 'Italy', price: '$0.45' },
  ];
  
  const services = [
    { name: 'Telegram', emoji: '✈️', price: '$0.25' },
    { name: 'WhatsApp', emoji: '💬', price: '$0.35' },
    { name: 'Facebook', emoji: '👤', price: '$0.30' },
    { name: 'Instagram', emoji: '📸', price: '$0.30' },
    { name: 'Twitter', emoji: '🐦', price: '$0.28' },
    { name: 'Google', emoji: '🔍', price: '$0.32' },
    { name: 'TikTok', emoji: '🎵', price: '$0.38' },
    { name: 'LinkedIn', emoji: '💼', price: '$0.40' },
  ];
  
  const reviews = [
    { rating: 5, text: "Great service, got my verification code instantly. Will use again!", emoji: '⚡' },
    { rating: 5, text: "Perfect for creating accounts without sharing my personal number. Highly recommend.", emoji: '🔒' },
    { rating: 4, text: "Easy to use and reliable. The interface is simple and straightforward.", emoji: '👌' },
    { rating: 5, text: "Been using this for months now and never had any issues. Super reliable!", emoji: '🌟' },
    { rating: 4, text: "Very convenient for temporary use cases. Good selection of countries too.", emoji: '🌎' },
    { rating: 5, text: "Saved me from spam! No more unwanted messages on my personal phone.", emoji: '🛡️' }
  ];

  const faqs = [
    { 
      question: "What is a temporary SMS number?", 
      answer: "A temporary SMS number is a phone number you can use to receive text messages without revealing your personal number. It's perfect for verifications, registrations, and protecting your privacy.",
      emoji: '📱'
    },
    { 
      question: "How long can I use a temporary number?", 
      answer: "Our numbers are available for different durations depending on your plan. Basic plans offer numbers for 24 hours, while premium plans allow you to keep numbers for up to 30 days.",
      emoji: '⏱️'
    },
    { 
      question: "Is this service legal?", 
      answer: "Yes, our service is 100% legal. We provide legitimate phone numbers for temporary use. However, users must comply with our terms of service and not use our numbers for any illegal activities.",
      emoji: '⚖️'
    },
    { 
      question: "What payment methods do you accept?", 
      answer: "We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin, Ethereum, and others for your convenience and privacy.",
      emoji: '💳'
    },
    { 
      question: "Can people call my temporary number?", 
      answer: "No, our temporary numbers are SMS-only. They cannot receive voice calls. This is specifically designed for verification codes and text messages.",
      emoji: '📞'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  interface FAQ {
    question: string;
    answer: string;
    emoji: string;
  }

  const toggleFaq = (index: number): void => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white m-0 p-0 w-full overflow-hidden">
      {/* Navigation */}
      <nav className="bg-blue-800 py-4 px-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">SMSReceiver</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200">Home</a>
            <a href="#" className="hover:text-blue-200">Numbers</a>
            <a href="#" className="hover:text-blue-200">Pricing</a>
            <a href="#" className="hover:text-blue-200">API</a>
            <a href="#" className="hover:text-blue-200">Blog</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Sign In
          </button>
        </div>
      </nav>
     
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Receive SMS Online 📱</h1>
            <p className="text-xl mb-10 text-blue-100">Get temporary phone numbers to protect your privacy and receive verification codes instantly</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                <MessageCircle className="mr-2" size={20} />
                Get Started Free
              </button>
              <button className="bg-blue-500/30 backdrop-blur-sm text-white border border-blue-400/30 px-8 py-4 rounded-xl font-medium hover:bg-blue-500/50 transition-colors flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                See Numbers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Country Selection */}
      <section className="py-16 bg-blue-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Choose SMS Service 🌎</h2>
          <p className="text-blue-100 text-center mb-12">Select a country to get a temporary phone number available online</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Services */}
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
              <h3 className="font-medium text-xl mb-6 flex items-center">
                <Globe className="mr-2" size={20} />
                Worldwide Services
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <div 
                    key={service.name}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-600/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center">
                      <span className="text-xl mr-3">{service.emoji}</span>
                      <span>{service.name}</span>
                    </div>
                    <span className="text-blue-200">{service.price}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-blue-600/50 text-white border border-blue-500/50 rounded-xl py-3 hover:bg-blue-600/70 transition-colors">
                View All Services
              </button>
            </div>
            
            {/* Countries */}
            <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 text-white">
              <h3 className="font-medium text-xl mb-6 flex items-center">
                <Globe className="mr-2" size={20} />
                Popular Countries
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country) => (
                  <div 
                    key={country.code}
                    className={`flex items-center justify-between p-3 rounded-xl hover:bg-blue-600/50 transition-colors cursor-pointer ${selectedCountry?.code === country.code ? 'bg-blue-600/70' : ''}`}
                    onClick={() => setSelectedCountry(country)}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                    <span className="text-blue-200">{country.price}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full bg-blue-600/50 text-white border border-blue-500/50 rounded-xl py-3 hover:bg-blue-600/70 transition-colors">
                View All Countries
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">How our service works ⚙️</h2>
          <p className="text-center text-blue-100 mb-16">Follow these simple steps to receive SMS messages online</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600/50 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-400/30">
                <span className="font-bold text-2xl">1</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Choose a number 📱</h3>
              <p className="text-blue-100">Select a temporary phone number from our available countries</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/50 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-400/30">
                <span className="font-bold text-2xl">2</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Use the number 🔄</h3>
              <p className="text-blue-100">Enter the phone number where verification is required</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/50 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-400/30">
                <span className="font-bold text-2xl">3</span>
              </div>
              <h3 className="font-bold text-xl mb-3">Get SMS code ✅</h3>
              <p className="text-blue-100">Receive and view SMS messages sent to your temporary number</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why choose our SMS service ✨</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-950 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:bg-blue-600/40 transition-all hover:translate-y-1">
              <ShieldCheck className="text-blue-200 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">100% Anonymous 🔒</h3>
              <p className="text-blue-100">Protect your privacy with completely anonymous phone numbers</p>
            </div>
            <div className="bg-blue-950 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:bg-blue-600/40 transition-all hover:translate-y-1">
              <Clock className="text-blue-200 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Instant Delivery ⚡</h3>
              <p className="text-blue-100">Receive SMS messages instantly, no delays or waiting</p>
            </div>
            <div className="bg-blue-950 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:bg-blue-600/40 transition-all hover:translate-y-1">
              <Globe className="text-blue-200 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Global Coverage 🌎</h3>
              <p className="text-blue-100">Access numbers from multiple countries worldwide</p>
            </div>
            <div className="bg-blue-950 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:bg-blue-600/40 transition-all hover:translate-y-1">
              <Users className="text-blue-200 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">Trusted Platform 👍</h3>
              <p className="text-blue-100">Join thousands of satisfied users who trust our service</p>
            </div>
            <div className="bg-blue-950 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:bg-blue-600/40 transition-all hover:translate-y-1">
              <Headphones className="text-blue-200 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">24/7 Support 🎧</h3>
              <p className="text-blue-100">Our team is available to help you whenever needed</p>
            </div>
            <div className="bg-blue-950 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30 hover:bg-blue-600/40 transition-all hover:translate-y-1">
              <Code className="text-blue-200 mb-4" size={32} />
              <h3 className="font-bold text-xl mb-2">API Access 💻</h3>
              <p className="text-blue-100">Integrate our service with your apps and systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9% 🚀</div>
              <div className="text-blue-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">800K+ 📱</div>
              <div className="text-blue-200">Numbers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+ 🌎</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1M+ 👥</div>
              <div className="text-blue-200">Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What our users say 💬</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="bg-blue-900/20 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 text-white">
                <div className="text-2xl mb-4">{review.emoji}</div>
                <div className="flex mb-3">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-blue-300"} 
                    />
                  ))}
                </div>
                <p className="text-blue-100">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Simple transparent pricing 💰</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white backdrop-blur-sm text-blue-800/30 rounded-2xl overflow-hidden w-full max-w-xs border border-blue-500/30 hover:transform hover:scale-105 transition-all">
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-xl font-medium mb-2">Basic</div>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">$5</span>
                    <span className="text-blue-200 ml-2">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">5 phone numbers</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">1 country</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">100 SMS/month</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">7-day history</span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-500 transition-colors border border-blue-500/50">
                  Get Started
                </button>
              </div>
            </div>
            
            <div className="bg-blue-800/50 backdrop-blur-sm text-white rounded-2xl overflow-hidden w-full max-w-xs border border-blue-400 shadow-lg shadow-blue-500/20 hover:transform hover:scale-105 transition-all">
              <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                🔥 Most Popular
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-xl font-medium mb-2">Business</div>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">$50</span>
                    <span className="text-blue-200 ml-2">/mo</span>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">Unlimited numbers</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">All countries</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">1000 SMS/month</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">30-day history</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">API Access</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-green-400 mr-3" />
                    <span className="text-blue-100">Priority Support</span>
                  </div>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-400 transition-colors border border-blue-400/50">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-700/30 backdrop-blur-sm rounded-3xl border border-blue-500/30 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Ready to get started? 🚀</h2>
                <p className="text-blue-100 mb-8">Create an account in less than a minute and start receiving SMS messages</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors flex items-center">
                  <MessageCircle className="mr-2" size={20} />
                  Get Started Free
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src="https://readdy.ai/api/search-image?query=smartphone%2520with%2520SMS%2520verification%2520code%2520interface%252C%2520modern%2520clean%2520design%252C%2520blue%2520themed%2520app%2520screen%252C%2520professional%2520product%2520visualization%252C%2520high%2520quality%2520render%2520with%2520subtle%2520shadows%2520and%2520glowing%2520elements&width=400&height=400&seq=3&orientation=squarish" alt="Mobile app screenshot" className="max-w-full rounded-2xl border-4 border-white/20 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions 🤔</h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div 
                  className="bg-blue-700/30 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30 cursor-pointer hover:bg-blue-700/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <div className="font-medium flex items-center">
                      <span className="text-xl mr-3">{faq.emoji}</span>
                      {faq.question}
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </div>
                  {openFaq === index && (
                    <div className="mt-4 pt-4 border-t border-blue-600/30 text-blue-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-center">
            <Bell className="mr-2" size={24} />
            Stay updated with our latest features
          </h2>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-xl text-gray-900 focus:outline-none" 
            />
            <button className="bg-blue-600 px-6 py-3 rounded-r-xl hover:bg-blue-500 transition-colors flex items-center">
              <Mail className="mr-2" size={18} />
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center space-x-6">
            <a href="#" className="hover:text-white text-blue-300">
              <Code size={20} />
            </a>
            <a href="#" className="hover:text-white text-blue-300">
              <Mail size={20} />
            </a>
            <a href="#" className="hover:text-white text-blue-300">
              <Headphones size={20} />
            </a>
            <a href="#" className="hover:text-white text-blue-300">
              <Users size={20} />
            </a>
            <a href="#" className="hover:text-white text-blue-300">
              <Heart size={20} />
            </a>
            <a href="#" className="hover:text-white text-blue-300">
              <Lock size={20} />
            </a>
          </div>
          <p className="text-blue-300">&copy; {new Date().getFullYear()} SMSReceiver. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}