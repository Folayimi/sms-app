"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  Phone,
  Shield,
  MessageSquare,
  Clock,
  ChevronDown,
  RefreshCcw,
  Globe,
  Gift,
  Zap,
} from "lucide-react";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchService, setSearchService] = useState("");

  const countries = [
    { code: "US", name: "USA", flag: "🇺🇸" },
    { code: "CN", name: "China", flag: "🇨🇳" },
    { code: "KZ", name: "Kazakhstan", flag: "🇰🇿" },
    { code: "MY", name: "Malaysia", flag: "🇲🇾" },
    { code: "ID", name: "Indonesia", flag: "🇮🇩" },
    { code: "PH", name: "Philippines", flag: "🇵🇭" },
    { code: "MM", name: "Myanmar", flag: "🇲🇲" },
    { code: "VN", name: "Vietnam", flag: "🇻🇳" },
    { code: "RO", name: "Romania", flag: "🇷🇴" },
  ];

  const services = [
    { name: "LiveScore", price: 0.14, icon: <Phone className="w-5 h-5" /> },
    { name: "PaxFul", price: 0.26, icon: <Shield className="w-5 h-5" /> },
    {
      name: "Okcupid",
      price: 0.45,
      icon: <MessageSquare className="w-5 h-5" />,
    },
    { name: "paysafecard", price: 0.58, icon: <Clock className="w-5 h-5" /> },
    { name: "JustDating", price: 0.18, icon: <Phone className="w-5 h-5" /> },
    {
      name: "Tantan/探探",
      price: 0.18,
      icon: <MessageSquare className="w-5 h-5" />,
    },
    { name: "DiDi/滴滴出行", price: 0.18, icon: <Phone className="w-5 h-5" /> },
    {
      name: "Potato Chat",
      price: 0.29,
      icon: <MessageSquare className="w-5 h-5" />,
    },
    { name: "Prepaid2Cash", price: 0.6, icon: <Clock className="w-5 h-5" /> },
    { name: "MobiKwik", price: 0.23, icon: <Shield className="w-5 h-5" /> },
  ];

  const popularServices = [
    {
      country: "Indonesia",
      service: "Instagram",
      icon: "📷",
      activated: 1711,
      cost: 0.08,
    },
    {
      country: "South Africa",
      service: "Facebook",
      icon: "👤",
      activated: 519,
      cost: 0.18,
    },
    {
      country: "Indonesia",
      service: "Telegram",
      icon: "📱",
      activated: 215,
      cost: 0.29,
    },
    {
      country: "Indonesia",
      service: "Google/youtube/Gmail",
      icon: "📺",
      activated: 156,
      cost: 0.15,
    },
    {
      country: "Philippines",
      service: "Facebook",
      icon: "👤",
      activated: 103,
      cost: 0.27,
    },
  ];

  const socialIcons = [
    "telegram",
    "youtube",
    "instagram",
    "facebook",
    "twitter",
    "gmail",
    "whatsapp",
  ];

  // Memoize random positions for social icons
  const socialIconPositions = useMemo(
    () =>
      socialIcons.map(() => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
        size: `${Math.random() * 20 + 30}px`,
        opacity: Math.random() * 0.5 + 0.5,
      })),
    []
  );

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchCountry.toLowerCase())
  );

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchService.toLowerCase())
  );

  return (
    <div className="bg-[#1A1A1A] min-h-screen lg:mt-[70px] mt-[50px] text-gray-100 w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#7E57C2] to-[#BB86FC] text-white p-8 md:p-16 rounded-b-3xl shadow-lg relative overflow-hidden w-full">
        <div className="w-full px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Receive SMS Online
          </h1>
          <p className="mb-8 text-lg">
            Register on social networks, marketplaces, exchanges and online
            services{" "}
            <span className="text-yellow-300 font-semibold">
              without spam and disclosure of personal data
            </span>
            .
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-[#BB86FC] transition duration-300 shadow-lg">
              Receive SMS
            </button>
            <button className="bg-black bg-opacity-30 text-white font-bold py-3 px-8 rounded-full border-2 border-white hover:bg-[#BB86FC] hover:border-transparent transition duration-300">
              Rent Number
            </button>
          </div>
          {/* Notification Preview */}
          <div className="bg-gray-900 rounded-xl p-4 shadow-xl max-w-sm mt-8 md:mt-0 md:absolute md:bottom-[-40px] md:right-4 transform rotate-2 border-l-4 border-[#7E57C2]">
            <p className="text-gray-300 text-sm">
              Your SMS code for registration in the service is{" "}
              <span className="font-bold text-[#BB86FC]">12344</span>. Enter it
              on the site! 👍
            </p>
          </div>
        </div>
        {/* Social Media Icons Cloud */}
        <div className="absolute right-0 top-0 w-full h-full opacity-20">
          {socialIcons.map((icon, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-gray-900 flex items-center justify-center shadow-lg transform rotate-12"
              style={{
                top: socialIconPositions[index].top,
                left: socialIconPositions[index].left,
                width: socialIconPositions[index].size,
                height: socialIconPositions[index].size,
                opacity: socialIconPositions[index].opacity,
              }}
            >
              {icon.charAt(0).toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 text-center w-full px-4">
        <div className="inline-block bg-[#7E57C2] px-6 py-2 rounded-full text-white font-bold text-lg mb-8">
          Check How It Works!
        </div>
        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition duration-300">
            <div className="bg-[#7E57C2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              1. Choose Country &amp; Service
            </h3>
            <p className="text-gray-400">
              Select from our global range of numbers and services
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition duration-300">
            <div className="bg-[#7E57C2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCcw className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Complete Payment</h3>
            <p className="text-gray-400">
              Choose your preferred payment method
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition duration-300">
            <div className="bg-[#7E57C2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Receive SMS</h3>
            <p className="text-gray-400">
              Get verification codes instantly on our platform
            </p>
          </div>
        </div>
      </div>

      {/* Service Selection Section */}
      <div className="w-full px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-2">
          Choose Your Number
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Receive SMS messages instantly from anywhere in the world
        </p>
        <div className="bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Country Selection */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="font-bold mb-4 flex items-center text-[#BB86FC]">
                <Globe className="w-5 h-5 mr-2" />
                Select Country
              </h3>
              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search country"
                  className="pl-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:border-[#7E57C2] focus:ring focus:ring-[#7E57C2] focus:ring-opacity-50"
                  value={searchCountry}
                  onChange={(e) => setSearchCountry(e.target.value)}
                />
              </div>
              <div className="h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#7E57C2] scrollbar-track-gray-700">
                {filteredCountries.map((country) => (
                  <div
                    key={country.code}
                    className={`flex items-center p-3 hover:bg-[#7E57C2] cursor-pointer rounded-lg mb-1 transition duration-200 ${
                      selectedCountry === country.code
                        ? "bg-[#7E57C2]"
                        : "bg-gray-800"
                    }`}
                    onClick={() => setSelectedCountry(country.code)}
                  >
                    <span className="mr-3 text-2xl">{country.flag}</span>
                    <span className="font-medium">{country.name}</span>
                    <span className="ml-auto text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded-full">
                      VM
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-4 flex items-center justify-between">
                <span>
                  Available Countries:{" "}
                  <span className="text-white font-bold">179</span>
                </span>
                <button className="text-[#BB86FC] hover:underline flex items-center">
                  View All <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Service Selection */}
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="font-bold mb-4 flex items-center text-[#BB86FC]">
                <Zap className="w-5 h-5 mr-2" />
                Select Service
              </h3>
              <div className="mb-4 relative">
                <input
                  type="text"
                  placeholder="Search service"
                  className="pl-3 pr-10 w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:border-[#7E57C2] focus:ring focus:ring-[#7E57C2] focus:ring-opacity-50"
                  value={searchService}
                  onChange={(e) => setSearchService(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <div className="h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#7E57C2] scrollbar-track-gray-700">
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 hover:bg-[#7E57C2] cursor-pointer rounded-lg mb-1 transition duration-200 ${
                      selectedService === service.name
                        ? "bg-[#7E57C2]"
                        : "bg-gray-800"
                    }`}
                    onClick={() => setSelectedService(service.name)}
                  >
                    <div className="bg-gray-700 p-2 rounded-lg mr-3">
                      {service.icon}
                    </div>
                    <span className="font-medium">{service.name}</span>
                    <span className="ml-auto bg-black bg-opacity-30 px-2 py-1 rounded-lg text-yellow-300 font-bold">
                      ${service.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-4 flex items-center justify-between">
                <span>
                  Available Services:{" "}
                  <span className="text-white font-bold">1102</span>
                </span>
                <button className="text-[#BB86FC] hover:underline flex items-center">
                  Show All <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-gradient-to-r from-[#7E57C2] to-[#BB86FC] hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Receive SMS Now
            </button>
          </div>
        </div>
      </div>

      {/* Popular Services Section */}
      <div className="w-full px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Gift className="w-6 h-6 mr-2 text-[#BB86FC]" />
          Most Popular Services Today
        </h2>
        <div className="bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-gray-100">
              <thead>
                <tr className="text-left border-b border-gray-700">
                  <th className="pb-4 pt-2 pl-4">Country</th>
                  <th className="pb-4 pt-2">Service</th>
                  <th className="pb-4 pt-2">Activated</th>
                  <th className="pb-4 pt-2">Cost</th>
                  <th className="pb-4 pt-2"></th>
                </tr>
              </thead>
              <tbody>
                {popularServices.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index !== popularServices.length - 1
                        ? "border-b border-gray-700"
                        : ""
                    }
                  >
                    <td className="py-4 pl-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xl">
                          {item.country === "Indonesia"
                            ? "🇮🇩"
                            : item.country === "South Africa"
                            ? "🇿🇦"
                            : item.country === "Philippines"
                            ? "🇵🇭"
                            : item.country === "Chile"
                            ? "🇨🇱"
                            : item.country === "Colombia"
                            ? "🇨🇴"
                            : item.country === "India"
                            ? "🇮🇳"
                            : "🏳️"}
                        </span>
                        <span className="font-medium">{item.country}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <span className="mr-2 text-xl">{item.icon}</span>
                        <span>{item.service}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="bg-[#7E57C2] bg-opacity-20 text-[#BB86FC] px-3 py-1 rounded-full">
                        {item.activated}
                      </span>
                    </td>
                    <td className="py-4 font-bold text-yellow-300">
                      ${item.cost.toFixed(2)}
                    </td>
                    <td className="py-4">
                      <button className="bg-[#7E57C2] hover:bg-[#BB86FC] text-white font-medium py-2 px-4 rounded-lg text-sm transition">
                        Get Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <button className="text-[#BB86FC] hover:underline flex items-center mx-auto">
              View All Popular Services <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-900 w-full px-4">
        <h2 className="text-2xl font-bold text-center mb-12">
          Premium SMS Services For All Your Needs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="bg-gradient-to-br from-[#7E57C2] to-[#BB86FC] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-lg">24/7 Support</h3>
            <p className="text-sm text-gray-400 mb-4">
              Any questions? Our manager is here to help!
            </p>
            <a
              href="#"
              className="text-[#BB86FC] inline-flex items-center text-sm font-bold hover:underline"
            >
              Ask a question
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="bg-gradient-to-br from-[#7E57C2] to-[#BB86FC] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-lg">Telegram Bot</h3>
            <p className="text-sm text-gray-400 mb-4">
              Receive SMS directly in Telegram!
            </p>
            <a
              href="#"
              className="text-[#BB86FC] inline-flex items-center text-sm font-bold hover:underline"
            >
              Connect Now
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="bg-gradient-to-br from-[#7E57C2] to-[#BB86FC] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-lg">Group Chat</h3>
            <p className="text-sm text-gray-400 mb-4">
              Join our special Telegram group chat.
            </p>
            <a
              href="#"
              className="text-[#BB86FC] inline-flex items-center text-sm font-bold hover:underline"
            >
              Join Group
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg transform hover:-translate-y-1 transition duration-300">
            <div className="bg-gradient-to-br from-[#7E57C2] to-[#BB86FC] rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold mb-2 text-lg">SMS on Desktop</h3>
            <p className="text-sm text-gray-400 mb-4">
              We offer a dedicated solution for PC users.
            </p>
            <a
              href="#"
              className="text-[#BB86FC] inline-flex items-center text-sm font-bold hover:underline"
            >
              Download App
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8 border-t border-gray-700 w-full px-4">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="text-[#7E57C2] font-bold text-2xl">
              <span className="text-[#BB86FC]">SMS</span>
              <span className="bg-[#7E57C2] text-white px-2 rounded">M</span>
              <span>AN</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
            <a
              href="#"
              className="text-[#7E57C2] hover:text-[#BB86FC] transition"
            >
              Receive SMS online
            </a>
            <a
              href="#"
              className="text-[#7E57C2] hover:text-[#BB86FC] transition"
            >
              Rent Number
            </a>
            <a
              href="#"
              className="text-[#7E57C2] hover:text-[#BB86FC] transition"
            >
              API Connection
            </a>
            <a
              href="#"
              className="text-[#7E57C2] hover:text-[#BB86FC] transition"
            >
              Referral Program
            </a>
            <a
              href="#"
              className="text-[#7E57C2] hover:text-[#BB86FC] transition"
            >
              Partnership
            </a>
          </div>
          <div className="text-xs text-gray-400">
            <a href="#" className="hover:text-gray-200 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-200 mr-4">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gray-200">
              Payment & Refund
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
