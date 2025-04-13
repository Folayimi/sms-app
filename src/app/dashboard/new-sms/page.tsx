import { SearchIcon } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";

export default function NewSMS() {
  return (
    <div className="min-h-screen bg-[#101827] backdrop-blur-[12px] px-6 lg:mt-[55px] mt-[40px] py-12">
      <div className="w-full bg-[#29303D] backdrop-blur-[12px] text-[14px]shadow-2xl rounded-3xl p-6">
        {/* Step 1: Select a Service */}
        <div className="w-full mb-8">
          <div className="flexsm gap-[10px] mb-6 text-[18px]">
            <div className="text-[#8B5CF6] w-6 h-6 flexmm rounded-full bg-[#8B5CF6]/10">
              1
            </div>
            <p className="font-semibold">Select a service</p>
          </div>
          {/* Service Search */}
          <div className="relative mb-6 bg-gray-800/50 flexmm gap-[15px] px-[15px] py-2.5 rounded-[15px]">
            <SearchIcon color="gray" size={20} />
            <input
              type="text"
              placeholder="Search by service"
              className="w-full border-none outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Telegram", icon: "vk.png", available: true },
              { name: "Whatsapp", icon: "wechat.png", available: true },
              { name: "Google/YouTube", icon: "telegram.png", available: true },
              { name: "Twitter", icon: "ok.png", available: false },
            ].map((service, index) => (
              <>
                <div className="p-4 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 rounded-lg flex items-center gap-3 cursor-pointer group">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <i className="ri-telegram-fill"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Telegram</h3>
                    <p className="text-xs text-gray-400">1376227</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Step 2: Select a Country */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#BB86FC] mb-6">
            2. Choose a Country
          </h3>
          {/* Country Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="🌍 Search for a country"
              className="w-full px-4 py-2 bg-[#333333] text-white border rounded-lg focus:ring-2 focus:ring-[#BB86FC] placeholder-gray-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                className="bg-[#333333] p-6 rounded-xl hover:bg-[#BB86FC] hover:text-white transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.flag}</span>
                  <span className="text-lg font-medium">{item.country}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#BB86FC] font-semibold">
                    {item.price}
                  </span>
                  <button className="px-4 py-2 bg-[#BB86FC] text-white rounded-lg hover:bg-purple-600 transition">
                    Buy SMS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Options */}
        <div className="flex items-center justify-between gap-6 mb-8">
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-3" /> Double SMS
          </label>
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-3" /> Multiple Purchase
          </label>
        </div>

        {/* Proceed Button */}
        <div className="text-center mt-6">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition">
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
