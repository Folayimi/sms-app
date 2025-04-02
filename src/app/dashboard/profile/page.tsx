const Dashboard = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 mt-[100px]">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6">
        {/* Account Information */}
        <div className="border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Account Details
          </h2>
          <p className="text-gray-600">ridwanfolayimi@gmail.com</p>

          <div className="flex items-center justify-between mt-3">
            <div>
              <p className="text-sm text-gray-500">Balance</p>
              <p className="text-lg font-bold text-gray-800">$0.00</p>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium flex items-center">
              💳 Top Up
            </button>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <p className="text-sm text-gray-500">API Key</p>
            <input
              type="text"
              value="lySftopnXCKcEKlwM3JzLWC..."
              className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-sm w-48"
              readOnly
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
              Refresh
            </button>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Change Password
          </h3>
          <input
            type="password"
            placeholder="New password"
            className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Repeat password"
            className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
            Change Password
          </button>
        </div>

        {/* Referral Program */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Referral Program
          </h3>
          <p className="text-gray-600">
            Earn rewards by referring the service.
          </p>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm text-gray-500">Your Balance</p>
            <p className="text-lg font-bold text-gray-800">$0.00</p>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-500">Your REF Code</p>
            <a
              href="https://sms-man.com/?ref=tCJB6VFgsbjk"
              target="_blank"
              className="text-blue-500 hover:underline text-sm"
            >
              https://sms-man.com/?ref=tCJB6VFgsbjk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
