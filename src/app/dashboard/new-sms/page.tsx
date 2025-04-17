"use client";
import { SearchIcon, ChevronDown } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";
import { useState, useEffect } from "react";

export default function NewSMS() {
  const [doubleSMS, setDoubleSMS] = useState(false);
  const [multiplePurchase, setMultiplePurchase] = useState(false);
  const [overviewLoading, setOverviewLoading] = useState(false);

  useEffect(() => {
    setOverviewLoading(true);
    setTimeout(() => {
      setOverviewLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen bg-[#101827] backdrop-blur-[12px] px-6 lg:mt-[50px] mt-[40px] py-12">
      <div className="w-full bg-[#29303D] backdrop-blur-[12px] text-[14px]shadow-2xl rounded-3xl p-6">
        {/* Step 1: Select a Service */}
        <div className="w-full mb-8">
          <div className="flexsm gap-[10px] mb-6 text-[16px]">
            <div className="text-[#8B5CF6] w-6 h-6 text-[14px] flexmm rounded-full bg-[#8B5CF6]/10">
              1
            </div>
            <p className="font-semibold">Select a service</p>
          </div>
          {/* Service Search */}
          <div className="relative mb-6 bg-gray-800/50 flexmm gap-[15px] px-[15px] py-2.5 rounded-[20px]">
            <SearchIcon color="gray" size={20} />
            <input
              type="text"
              placeholder="Search by service"
              className="w-full border-none outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: "Telegram", icon: "vk.png", available: true },
              { name: "Whatsapp", icon: "wechat.png", available: true },
              { name: "Google/YouTube", icon: "telegram.png", available: true },
              { name: "Twitter", icon: "ok.png", available: false },
            ].map((service, index) => (
              <>
                <div
                  key={index}
                  className="p-4 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 rounded-[20px] flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <i className="ri-telegram-fill"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{service.name}</h3>
                    <p className="text-xs text-gray-400">1376227</p>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-1 text-[12px] text-[#8B5CF6]">
              <span>Available services - 4363</span>
              <ChevronDown size={15} />
            </button>
          </div>
        </div>

        {/* Step 2: Select a Country */}
        <div className="mb-8">
          <div className="flexsm gap-[10px] mb-6 text-[16px]">
            <div className="text-[#8B5CF6] w-6 h-6 text-[14px] flexmm rounded-full bg-[#8B5CF6]/10">
              2
            </div>
            <p className="font-semibold">Choose a country</p>
          </div>
          {/* Country Search */}
          <div className="relative mb-6 bg-gray-800/50 flexmm gap-[15px] px-[15px] py-2.5 rounded-[20px]">
            <SearchIcon color="gray" size={20} />
            <input
              type="text"
              placeholder="Search by country"
              className="w-full border-none outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              { country: "Kazakhstan", price: "0.23$", flag: "🇰🇿" },
              { country: "China", price: "0.33$", flag: "🇨🇳" },
              { country: "USA", price: "0.42$", flag: "🇺🇸" },
              { country: "Malaysia", price: "0.45$", flag: "🇲🇾" },
              { country: "Indonesia", price: "0.23$", flag: "🇮🇩" },
              { country: "Philippines", price: "0.20$", flag: "🇵🇭" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 rounded-[20px] flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-xl uppercase">{item.flag}</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{item.country}</h3>
                    <p className="text-xs text-gray-400">118339</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium"> {item.price}</span>
                  <button className="px-3 py-1.5 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 rounded-[10px] text-[12px] font-medium whitespace-nowrap">
                    Buy SMS
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3">
            <button className="flex items-center gap-1 text-sm text-[#8B5CF6]">
              <span>Available countries - 168</span>
              <ChevronDown size={15} />
            </button>
          </div>
        </div>

        {/* Extra Options */}
        <div className="flex flex-wrap gap-6 mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <label className="relative inline-block w-[46px] h-[24px]">
              <input
                type="checkbox"
                className="opacity-0 before:translate-x-[22px]"
              />
              <span
                className={`w-[10px] h-[10px] rounded-full bg-white`}
              ></span>
            </label>
            <span className="text-sm">Double SMS</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <label className="relative inline-block w-[46px] h-[24px]">
              <input
                type="checkbox"
                className="group opacity-0 w-0 h-0 before:translate-x-[22px]"
              />
              <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#374151] rounded-[34px] transition-[0.4s]"></span>
            </label>
            <span className="text-sm">Multiple purchase</span>
          </label>
        </div>

        {/* Proceed Button */}
        <div className="text-center mt-6">
          <button className="w-full bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white px-6 py-3 font-medium text-lg transition rounded-[15px] cursor-pointer">
            Proceed to Checkout
          </button>
        </div>

        {/* Info Text */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          You will be redirected to the purchase page of the chosen service.
        </p>
      </div>
    </div>
  );
}
