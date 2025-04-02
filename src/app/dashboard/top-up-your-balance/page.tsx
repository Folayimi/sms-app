const TopUpBalance = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 mt-[100px]">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          💳 Top Up Your Balance
        </h2>

        {/* Step 1: Choose Payment Method */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            1. Choose a payment method
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              "visa",
              "wechat",
              "alipay",
              "crypto",
              "usdt",
              "upi",
              "payeer",
              "ton",
              "paytm",
              "promptpay",
            ].map((method, index) => (
              <button
                key={index}
                className="bg-gray-200 p-3 rounded-xl hover:bg-blue-100 transition"
              >
                <img
                  src={`/images/${method}.png`} // Replace with actual image paths
                  alt={method}
                  className="w-12 h-12"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Specify Top-up Amount */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">
            2. Specify top-up amount 💲
          </h3>
          <div className="flex gap-3">
            {[10, 50, 100].map((amount) => (
              <button
                key={amount}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition font-medium"
              >
                {amount}$
              </button>
            ))}
            <button className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-pointer">
              Other Amount
            </button>
          </div>
        </div>

        {/* Pay Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium text-lg transition">
          Pay Now
        </button>

        {/* Info Text */}
        <p className="text-gray-500 text-sm mt-3 text-center">
          You will be redirected to the payment page of the chosen service.
        </p>

        {/* Currency Rates */}
        <div className="mt-4 text-gray-600 text-sm text-center">
          <p>1 ¥ = 11.60 ₽</p>
          <p>1 $ = 84.87 ₽</p>
        </div>
      </div>
    </div>
  );
}

export default TopUpBalance;