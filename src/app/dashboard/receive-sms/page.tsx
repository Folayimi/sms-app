export default function NewSMS() {
  return (
    <div className="min-h-screen bg-[#121212] px-8 mt-[50px] lg:mt-[75px] py-12">
      <div className="max-w-4xl mx-auto bg-[#1A1A1A] shadow-2xl rounded-3xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#BB86FC] mb-4">
            📩 New SMS Purchase
          </h2>
          <p className="text-lg text-gray-400">
            Select a service and country to purchase SMS credits
          </p>
        </div>

        {/* Step 1: Select a Service */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#BB86FC] mb-6">
            1. Choose a Service
          </h3>
          {/* Service Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="🔍 Search for a service"
              className="w-full px-4 py-2 bg-[#333333] text-white border rounded-lg focus:ring-2 focus:ring-[#BB86FC] placeholder-gray-500"
            />
          </div>

          <div className="lg:flex space-x-6 justify-between lg:gap-[10px] flex-wrap">
            {[
              { name: "VKontakte", icon: "vk.png", available: true },
              { name: "WeChat", icon: "wechat.png", available: true },
              { name: "Telegram", icon: "telegram.png", available: true },
              { name: "OK", icon: "ok.png", available: false },
            ].map((service, index) => (
              <button
                key={index}
                className={`flex flex-col items-center justify-center w-full lg:w-24 h-24 bg-[#333333] p-4 rounded-xl ${
                  service.available
                    ? "hover:bg-[#BB86FC] hover:text-white"
                    : "opacity-50"
                } transition`}
              >
                <img
                  src={`/images/${service.icon}`}
                  alt={service.name}
                  className="w-12 h-12 mb-2"
                />
                <span className="text-white font-medium">{service.name}</span>
                {!service.available && (
                  <span className="text-red-500 text-xs">Unavailable</span>
                )}
              </button>
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
