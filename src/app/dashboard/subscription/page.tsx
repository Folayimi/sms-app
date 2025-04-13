const TopUpBalance = () => {
  return (
    <div className="min-h-screen bg-[#101827] backdrop-blur-[12px] lg:mt-[55px] mt-[40px] px-8 py-12">
      <div className="max-w-4xl mx-auto bg-[#29303D] backdrop-blur-[12px] shadow-2xl rounded-3xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#BB86FC] mb-4">
            💳 Top Up Your Balance
          </h2>
          <p className="text-lg text-gray-400">
            Choose your payment method and top-up amount
          </p>
        </div>

        {/* Step 1: Choose Payment Method */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#BB86FC] mb-6">
            1. Choose a Payment Method
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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
                className="flex items-center justify-center bg-[#333333] p-4 rounded-xl hover:bg-[#BB86FC] hover:text-white transition"
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
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#BB86FC] mb-6">
            2. Specify Top-up Amount 💲
          </h3>
          {/* Amount Selection */}
          <div className="flex gap-6 justify-center mb-6">
            {[10, 50, 100].map((amount) => (
              <button
                key={amount}
                className="px-6 py-3 bg-[#333333] text-[#BB86FC] rounded-lg hover:bg-[#BB86FC] hover:text-white transition font-medium"
              >
                {amount}$
              </button>
            ))}
            <button className="px-6 py-3 bg-[#444444] text-gray-400 rounded-lg cursor-pointer hover:bg-[#BB86FC] hover:text-white transition">
              Other Amount
            </button>
          </div>
        </div>

        {/* Pay Button */}
        <div className="text-center mb-8">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition">
            Pay Now
          </button>
        </div>

        {/* Info Text */}
        <p className="text-gray-400 text-sm mt-3 text-center">
          You will be redirected to the payment page of the chosen service.
        </p>
      </div>
    </div>
  );
};

export default TopUpBalance;
