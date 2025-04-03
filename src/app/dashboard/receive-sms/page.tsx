export default function NewSMS() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 mt-[100px]">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          📩 New SMS Purchase
        </h2>

        {/* Step 1: Select a Service */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            1. Select a Service
          </h3>
          <div className="flex items-center mb-3">
            <input
              type="text"
              placeholder="🔍 Search by service"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "VKontakte", icon: "vk.png", available: true },
              { name: "WeChat", icon: "wechat.png", available: true },
              { name: "Telegram", icon: "telegram.png", available: true },
              { name: "OK", icon: "ok.png", available: false },
            ].map((service, index) => (
              <button
                key={index}
                className={`flex items-center justify-between bg-gray-200 p-3 rounded-xl ${
                  service.available ? "hover:bg-blue-100" : "opacity-50"
                } transition`}
              >
                <img
                  src={`/images/${service.icon}`}
                  alt={service.name}
                  className="w-8 h-8"
                />
                <span className="text-gray-700 font-medium">
                  {service.name}
                </span>
                {!service.available && (
                  <span className="text-red-500 text-xs">Unavailable</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Select a Country */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            2. Select Your Country
          </h3>
          <div className="flex items-center justify-between mb-3">
            <input
              type="text"
              placeholder="🌍 Search by country"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
            />
            {/* <button className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Sort by Price 🔽
            </button> */}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { country: "Kazakhstan", price: "0.23$", flag: "🇰🇿" },
              { country: "China", price: "0.33$", flag: "🇨🇳" },
              { country: "USA", price: "0.42$", flag: "🇺🇸" },
              { country: "Malaysia", price: "0.45$", flag: "🇲🇾" },
              { country: "Indonesia", price: "0.23$", flag: "🇮🇩" },
              { country: "Philippines", price: "0.20$", flag: "🇵🇭" },
            ].map((item, index) => (
              <button
                key={index}
                className="flex items-center justify-between bg-gray-200 p-3 rounded-xl hover:bg-blue-100 transition"
              >
                <span className="text-lg">{item.flag}</span>
                <span className="text-gray-700 font-medium">
                  {item.country}
                </span>
                <span className="text-blue-500 font-semibold">
                  {item.price}
                </span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Buy SMS
                </button>
              </button>
            ))}
          </div>
        </div>

        {/* Extra Options */}
        <div className="flex items-center gap-4 mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Double SMS
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Multiple Purchase
          </label>
        </div>

        {/* Action Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-lg transition">
          Proceed to Checkout
        </button>

        {/* Info Text */}
        <p className="text-gray-500 text-sm mt-3 text-center">
          You will be redirected to the purchase page of the chosen service.
        </p>
      </div>
    </div>
  );
}
