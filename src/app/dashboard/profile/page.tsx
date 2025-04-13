const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#101827] backdrop-blur-[12px] lg:mt-[55px] mt-[40px] px-6 py-12">
      <div className="max-w-3xl mx-auto bg-[#29303D] backdrop-blur-[12px] shadow-xl rounded-2xl p-8">
        {/* Account Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-[#BB86FC]">
              Account Overview
            </h2>
            <p className="text-gray-400">ridwanfolayimi@gmail.com</p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition ease-in-out duration-300">
            💳 Top Up
          </button>
        </div>

        {/* Account Balance */}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-lg text-[#BB86FC]">Account Balance</h3>
          <p className="text-xl font-semibold text-white mt-2">$0.00</p>
        </div>

        {/* Account Settings */}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-lg text-[#BB86FC]">Account Settings</h3>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-500">Change Email</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition ease-in-out duration-300">
              Change Email
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-500">Change Password</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition ease-in-out duration-300">
              Change Password
            </button>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-lg text-[#BB86FC]">Change Password</h3>
          <div className="mt-4">
            <input
              type="password"
              placeholder="New password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#BB86FC] bg-[#1A1A1A] text-white"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              placeholder="Repeat password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#BB86FC] bg-[#1A1A1A] text-white"
            />
          </div>
          <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition ease-in-out duration-300">
            Change Password
          </button>
        </div>
      </div>

      {/* Referral Program - Moved to Bottom */}
      <div className="max-w-3xl mx-auto bg-[#1A1A1A] shadow-xl rounded-2xl p-8 mt-12">
        <h3 className="text-xl font-semibold text-[#BB86FC]">
          Referral Program
        </h3>
        <p className="text-gray-400 mt-2">
          Earn rewards by referring the service.
        </p>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">Your Balance</p>
          <p className="text-xl font-semibold text-white">$0.00</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Your REF Code</p>
          <a
            href="https://sms-man.com/?ref=tCJB6VFgsbjk"
            target="_blank"
            className="text-[#BB86FC] hover:underline text-sm"
          >
            https://sms-man.com/?ref=tCJB6VFgsbjk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
