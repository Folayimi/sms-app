"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)

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
  ]

  const services = [
    { name: "LiveScore", price: 0.14, icon: "🎮" },
    { name: "PaxFul", price: 0.26, icon: "🟣" },
    { name: "Okcupid", price: 0.45, icon: "🟪" },
    { name: "paysafecard", price: 0.58, icon: "💳" },
    { name: "JustDating", price: 0.18, icon: "👋" },
    { name: "Tantan/探探", price: 0.18, icon: "❤️" },
    { name: "DiDi/滴滴出行", price: 0.18, icon: "🚕" },
    { name: "Potato Chat", price: 0.29, icon: "✅" },
    { name: "Prepaid2Cash", price: 0.6, icon: "💳" },
    { name: "MobiKwik", price: 0.23, icon: "💳" },
  ]

  const popularServices = [
    { country: "Indonesia", service: "Instagram", icon: "📷", activated: 1711, cost: 0.08 },
    { country: "South Africa", service: "Facebook", icon: "👤", activated: 519, cost: 0.18 },
    { country: "Indonesia", service: "Telegram", icon: "📱", activated: 215, cost: 0.29 },
    { country: "Indonesia", service: "Google/youtube/Gmail", icon: "📺", activated: 156, cost: 0.15 },
    { country: "Philippines", service: "Facebook", icon: "👤", activated: 103, cost: 0.27 },
    { country: "Indonesia", service: "Facebook", icon: "👤", activated: 99, cost: 0.16 },
    { country: "Chile", service: "Google/youtube/Gmail", icon: "📺", activated: 97, cost: 0.2 },
    { country: "Colombia", service: "Google/youtube/Gmail", icon: "📺", activated: 92, cost: 0.32 },
    { country: "India", service: "IRCTC", icon: "🚂", activated: 87, cost: 0.55 },
    { country: "Philippines", service: "Viber", icon: "🟣", activated: 85, cost: 0.48 },
  ]

  const socialIcons = ["telegram", "youtube", "instagram", "facebook", "twitter", "gmail", "whatsapp"]

  // Memoize random positions for the social icons so they don’t recalc on every render
  const socialIconPositions = useMemo(
    () =>
      socialIcons.map(() => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      })),
    [],
  )

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white mt-8 p-8 pb-16 relative">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Receive SMS online</h1>
          <p className="mb-8 max-w-md">
            Register on social networks, marketplaces, exchanges and online services{" "}
            <span className="text-yellow-300">without spam and disclosure of personal data</span>.
          </p>

          <div className="flex space-x-4 mb-12">
            <button className="bg-white text-black font-medium py-2 px-6 rounded-full">Receive SMS</button>
            <button className="bg-gray-800 bg-opacity-40 text-white font-medium py-2 px-6 rounded-full">
              Rent number
            </button>
          </div>

          {/* Social media icons cloud */}
          <div className="absolute right-10 top-10 w-64 h-64">
            <div className="relative w-full h-full">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center"
                  style={{
                    top: socialIconPositions[index].top,
                    left: socialIconPositions[index].left,
                    opacity: 0.9,
                  }}
                >
                  {icon.charAt(0).toUpperCase()}
                </div>
              ))}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                1000+
              </div>
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 bg-white rounded-xl p-4 shadow-lg w-64">
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-800 text-sm">
                Your SMS code for registration in the service is 12344. Enter it on the site! 👍
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 text-center">
        <p className="text-blue-500 font-bold">Check how it works!</p>
      </div>

      {/* Service Selection Section */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-black text-center mb-8">
          Choose your country and service
          <br />
          receive SMS right now
        </h2>

        <div className="bg-white rounded-lg shadow-md p-6 text-black">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Country Selection */}
            <div>
              <h3 className="font-semibold mb-4">1. Select country</h3>
              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 w-full p-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="h-64 overflow-y-auto">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer ${
                      selectedCountry === country.code ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedCountry(country.code)}
                  >
                    <span className="mr-2 text-lg">{country.flag}</span>
                    <span>{country.name}</span>
                    <span className="ml-auto text-xs text-gray-400">numbers.xyz</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-2">Available countries - 179</div>
            </div>

            {/* Service Selection */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white w-6 h-6 rounded-md flex items-center justify-center mr-2">2</div>
                <h3 className="font-semibold">Select a service</h3>
              </div>
              <div className="mb-4 relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="pr-10 w-full p-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="h-64 overflow-y-auto">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer ${
                      selectedService === service.name ? "bg-blue-50" : ""
                    }`}
                    onClick={() => setSelectedService(service.name)}
                  >
                    <span className="mr-2 text-lg">{service.icon}</span>
                    <span>{service.name}</span>
                    <span className="ml-auto">{service.price.toFixed(2)} $</span>
                  </div>
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-2">Available services - 1102</div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="bg-blue-500 text-white font-medium py-2 px-6 rounded-md">Receive SMS</button>
          </div>
        </div>
      </div>

      {/* Popular Services Section */}
      <div className="max-w-4xl mx-auto px-4 pb-12 text-black">
        <h2 className="text-xl font-bold mb-6">Most popular services today</h2>

        <div className="bg-white rounded-lg shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-4">Country</th>
                <th className="pb-4">Service</th>
                <th className="pb-4">Activated</th>
                <th className="pb-4">Cost</th>
                <th className="pb-4"></th>
              </tr>
            </thead>
            <tbody>
              {popularServices.map((item, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-3">
                    <div className="flex items-center">
                      <span className="mr-2">
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
                      <span>{item.country}</span>
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center">
                      {item.service === "Instagram" && <span className="text-pink-500 mr-2">📷</span>}
                      {item.service === "Facebook" && <span className="text-blue-500 mr-2">👤</span>}
                      {item.service === "Telegram" && <span className="text-blue-400 mr-2">📱</span>}
                      {item.service === "Google/youtube/Gmail" && <span className="text-red-500 mr-2">📺</span>}
                      {item.service === "IRCTC" && <span className="text-blue-800 mr-2">🚂</span>}
                      {item.service === "Viber" && <span className="text-purple-500 mr-2">🟣</span>}
                      <span>{item.service}</span>
                    </div>
                  </td>
                  <td className="py-3">{item.activated} times</td>
                  <td className="py-3">{item.cost.toFixed(2)} $</td>
                  <td className="py-3">
                    <button className="bg-blue-500 text-white font-medium py-1 px-4 rounded-md text-sm">
                      Receive SMS
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Personal Data Warning Section */}
      <div className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-xl font-bold mb-6 text-center text-black">
          It's no secret that almost all online services
          <br />
          are selling your personal data.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 relative">
            <span className="text-4xl absolute top-4 left-4">😩</span>
            <h3 className="font-bold mt-12 mb-2 text-black">Have you registered on Facebook?</h3>
            <p className="text-black">You immediately receive an avalanche of targeted advertising.</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 relative">
            <span className="text-4xl absolute top-4 right-4">🙄</span>
            <h3 className="font-bold mt-12 mb-2 text-black">Post an ad on Craigslist?</h3>
            <p className="text-black">Expect a lot of spam calls with offers to arrange a loan!</p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center">
            <span className="mr-2">😟</span>
            <span className="text-blue-500 font-medium">Can we not do this?</span>
          </div>
          <div className="ml-4 bg-blue-100 rounded-full px-6 py-3 flex items-center">
            <span className="text-blue-500 font-medium mr-2">YES!</span>
            <span>😌</span>
          </div>
        </div>
      </div>

      {/* Service Description Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <svg
                className="w-16 h-16 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 2 12C2 6.47715 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9H9.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9H15.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="md:w-2/3 text-black">
              <div className="mb-6">
                <p className="mb-4">
                  The service is suitable for users who need both one-time and mass SMS verification of accounts in
                  social networks, messengers, payment systems, dating sites and any other services that require SMS
                  verification.
                </p>
                <p className="font-medium mb-4 text-black">Get a virtual phone number in just a few minutes!</p>
                <p className="mb-4">
                  The entire process is automated and occurs in a user-friendly interface. There is no need to contact
                  managers to connect the number. At the same time, support is always ready to help in case of anything.
                </p>
                <p>So feel free to use it!</p>
              </div>

              <div className="relative mt-12">
                <div className="absolute -top-12 right-0">
                  <svg
                    className="w-16 h-16 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-black">
                  <h3 className="text-xl font-bold mb-4 text-center">Sign Up</h3>

                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <input
                      type="password"
                      placeholder="Create password"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    <button className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-md">Sign Up</button>
                  </div>

                  <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-500">
                      Sign in
                    </a>
                  </div>

                  <div className="mt-6">
                    <p className="text-center text-sm text-gray-500 mb-4">Or log in with your social network</p>
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="bg-black text-white p-2 rounded">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a href="#" className="bg-blue-600 text-white p-2 rounded">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a href="#" className="bg-blue-400 text-white p-2 rounded">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="bg-red-500 text-white p-2 rounded">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-12 text-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Online SMS receive service for your convenience</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wWE82NKWgFyeT5QVu3bh8jQDH5TsN4.png"
                  alt="Support Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">24/7 Support</h3>
              <p className="text-sm mb-3">Any questions? Our manager will help to understand!</p>
              <a href="#" className="text-blue-500 inline-flex items-center text-sm">
                Ask a question
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wWE82NKWgFyeT5QVu3bh8jQDH5TsN4.png"
                  alt="Telegram Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Telegram bot</h3>
              <p className="text-sm mb-3">Receive SMS through the service directly in Telegram!</p>
              <a href="#" className="text-blue-500 inline-flex items-center text-sm">
                Connect
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wWE82NKWgFyeT5QVu3bh8jQDH5TsN4.png"
                  alt="Group Chat Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Group Chat</h3>
              <p className="text-sm mb-3">We've created a special Telegram group chat for users.</p>
              <a href="#" className="text-blue-500 inline-flex items-center text-sm">
                Join
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wWE82NKWgFyeT5QVu3bh8jQDH5TsN4.png"
                  alt="Desktop Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-bold mb-2">Get SMS on desktop!</h3>
              <p className="text-sm mb-3">
                We made a special solution for those who want to use PC version of SMS-Man!
              </p>
              <a href="#" className="text-blue-500 inline-flex items-center text-sm">
                Download
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions for Professionals Section */}
      <div className="bg-blue-600 text-black py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Solutions for professionals</h2>

          <p className="text-center mb-12 max-w-2xl mx-auto">
            SMS-MAN provides anonymity tools not only for ordinary users, but also for professionals who need to
            register their accounts in bulk and access blocked resources.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="bg-blue-500 bg-opacity-30 rounded-lg p-6 max-w-md">
              <div className="flex items-center mb-4">
                <div className="bg-white rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Connect via API</h3>
              </div>
              <p className="mb-4">Receive SMS verification in bulk and automate your work</p>
              <a href="#" className="text-white inline-flex items-center">
                Read more...
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="flex justify-between items-center w-full p-4 text-left">
                <span className="font-medium">What is the SMS verification service?</span>
                <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="p-4 bg-gray-50">
                <p className="text-gray-700 mb-2">
                  Virtual phone number texting service allows you to receive a confirmation code to register on any site
                  that requires you to verify your phone number.
                </p>
                <p className="text-gray-700">
                  Thanks to special equipment we have installed in our office and our software, anyone can get a virtual
                  number to receive sms in minutes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="flex justify-between items-center w-full p-4 text-left">
                <span className="font-medium">What is a virtual number?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="flex justify-between items-center w-full p-4 text-left">
                <span className="font-medium">Do I need a SIM card to use my virtual number?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="flex justify-between items-center w-full p-4 text-left">
                <span className="font-medium">Will someone have access to my number after my rent is up?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="flex justify-between items-center w-full p-4 text-left">
                <span className="font-medium">What does it mean to receive SMS from website online?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="flex justify-between items-center w-full p-4 text-left">
                <span className="font-medium">What do I do if I can't buy a virtual number?</span>
                <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="p-4 bg-gray-50">
                <p className="text-black">
                  Unfortunately, sometimes phone numbers may run out of stock. Please wait for replenishment or try
                  using our{" "}
                  <a href="#" className="text-blue-500">
                    Telegram bot
                  </a>
                  , which allows sending multiple phone number requests in one click and thus increases the chances of
                  getting a number.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button className="flex justify-between items-center w-full p-4 text-left">
                <span className="font-medium">Can I get a text message for free?</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      

      {/* 
        NEW SECTION: Add your images & text here.
        Replace /images/... with the correct paths or URLs to your uploaded images.
      */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* First Row: iPad mockup + main text */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <img src="/images/sms-man-mockup.png" alt="SMS-MAN Mockup" className="w-full h-auto rounded shadow" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">
                SMS-MAN – service for private registration at online resources
              </h2>
              <p className="text-gray-700 mb-4">
                We give you the opportunity to anonymously use the phone number online to receive SMS to register on
                sites and applications. At the same time, you can be sure that no one but you will have access to it.
              </p>
            </div>
          </div>

          {/* Second Row: 3-step explanation */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 order-2 md:order-1 mt-6 md:mt-0 md:pr-6">
              <h3 className="text-xl font-semibold mb-4">
                Registration on the sites without SMS to your personal number in 3 steps
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-3">
                <li>
                  <strong>Get your number</strong> in your personal cabinet. To register with SMS-MAN you only need to
                  enter your email address. No ID information or other contacts.
                </li>
                <li>
                  <strong>Enter your phone number</strong> when signing up online. We support 1500+ of the most popular
                  social networks, messengers, marketplaces, and websites.
                </li>
                <li>
                  You receive an SMS in your personal profile. Enter the verification code you received on the site.
                  From $0.05 per activation. The number of numbers and activations is unlimited.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 md:pl-6">
              <img
                src="/images/sms-man-3-steps.png"
                alt="3 Steps Illustration"
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>

          {/* Third Row: one-time vs. rent */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <img
                src="/images/sms-man-options.png"
                alt="Disposable vs. Rent"
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">
                You can buy a disposable phone number or rent one for up to a month
              </h3>
              <div className="mb-4">
                <p className="font-medium">One-time number for SMS</p>
                <p className="text-gray-700">
                  Receive a one-time SMS to a virtual number from the one website or application chosen when ordering.
                  Lasts up to 20 minutes. You can receive SMS from only that single site/application you selected when
                  ordering.
                </p>
              </div>
              <div>
                <p className="font-medium">Rent</p>
                <p className="text-gray-700">
                  Rent a phone number to receive an unlimited number of SMS from any service. Lasts up to 90 days. Truly
                  unlimited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-white py-8 border-t">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="text-blue-500 font-bold text-xl">
              <span className="text-blue-400">SMS</span>
              <span className="bg-blue-500 text-white px-1">M</span>
              <span>AN</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
            <a href="#" className="text-blue-500">
              Receive SMS online
            </a>
            <a href="#" className="text-blue-500">
              Rent
            </a>
            <a href="#" className="text-blue-500">
              API connection
            </a>
            <a href="#" className="text-blue-500">
              Referral program
            </a>
            <a href="#" className="text-blue-500">
              Partnership
            </a>
            <a href="#" className="text-blue-500">
              Partners
            </a>
            <a href="#" className="text-blue-500">
              Blog
            </a>
            <a href="#" className="text-blue-500">
              Help
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="bg-blue-500 text-white p-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 16.518l-3.5-3.5 1.396-1.396 2.104 2.104 4.104-4.104 1.396 1.396-5.5 5.5z" />
              </svg>
            </a>
            <a href="#" className="bg-gray-200 text-gray-700 p-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
              </svg>
            </a>
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 16.518l-3.5-3.5 1.396-1.396 2.104 2.104 4.104-4.104 1.396 1.396-5.5 5.5z" />
              </svg>
            </a>
            <a href="#" className="bg-blue-400 text-white p-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 16.518l-3.5-3.5 1.396-1.396 2.104 2.104 4.104-4.104 1.396 1.396-5.5 5.5z" />
              </svg>
            </a>
            <a href="#" className="bg-pink-500 text-white p-2 rounded-full">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 16.518l-3.5-3.5 1.396-1.396 2.104 2.104 4.104-4.104 1.396 1.396-5.5 5.5z" />
              </svg>
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-If9lB2EbQaH2VT2RQSu3ZbpEnfxqGY.png"
              alt="Payment Method"
              className="h-6"
            />
          </div>

          <div className="text-center text-xs text-gray-500">
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
              Terms of Use
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              Payment & Refund
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

