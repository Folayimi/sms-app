import { useDispatch } from "react-redux";
import { setTopUp } from "@/redux/features/register/registerSlice";

const TopUp = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="fixed top-0 left-0 inset-0 bg-black/50 z-[150] bg-opacity-50 pt-[400px] flex h-full items-center justify-center overflow-y-auto"
        onClick={() => {
          dispatch(setTopUp(false));
        }}
      >
        <form
          className="bg-[#101827] backdrop-blur-[12px] mb-[40px] border border-gray-700 rounded-[20px] w-full max-w-md mx-4 overflow-y-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-700">
            <h3 className="text-[14px] font-medium">
              Add Funds to Your Account
            </h3>
            <button
              id="closeTopUpModal"
              className="w-8 h-8 rounded-full hover:bg-gray-800 flex items-center justify-center"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="p-5">
            <div className="mb-5">
              <p className="text-[12px] text-gray-400 mb-2">Current Balance</p>
              <p className="text-2xl font-bold">$24.50</p>
            </div>
            <div className="mb-5">
              <p className="text-[12px] text-gray-400 mb-3">Select Amount</p>
              <div className="grid grid-cols-2 gap-3">
                <button className="amount-option py-3 px-4 rounded-[12px] border border-gray-700 hover:bg-gray-800 cursor-pointer text-center">
                  $10
                </button>
                <button className="amount-option py-3 px-4 rounded-[12px] border border-gray-700 hover:bg-gray-800 cursor-pointer text-center">
                  $25
                </button>
                <button className="amount-option py-3 px-4 rounded-[12px] border border-gray-700 hover:bg-gray-800 cursor-pointer text-center">
                  $50
                </button>
                <button className="amount-option py-3 px-4 rounded-[12px] border border-gray-700 hover:bg-gray-800 cursor-pointer text-center">
                  $100
                </button>
              </div>
              <div className="mt-3">
                <label className="text-[12px] text-gray-400 mb-1 block">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    $
                  </span>
                  <input
                    type="text"
                    id="customAmount"
                    className="w-full bg-gray-800 border border-gray-700 rounded-[12px] py-2 pl-8 pr-3 text-gray-100"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <p className="text-[12px] text-gray-400 mb-3">Payment Method</p>
              <div className="space-y-3">
                <label className="flex items-center p-3 border border-gray-700 rounded-[12px] cursor-pointer hover:bg-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    className="custom-radio"
                    checked
                  />
                  <span className="w-6 h-6 flex items-center justify-center mr-3 text-[14px]">
                    <i className="ri-bank-card-fill"></i>
                  </span>
                  <span>Credit / Debit Card</span>
                </label>
                <label className="flex items-center p-3 border border-gray-700 rounded-[12px] cursor-pointer hover:bg-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    className="custom-radio"
                  />
                  <span className="w-6 h-6 flex items-center justify-center mr-3 text-[14px]">
                    <i className="ri-paypal-fill"></i>
                  </span>
                  <span>PayPal</span>
                </label>
                <label className="flex items-center p-3 border border-gray-700 rounded-[12px] cursor-pointer hover:bg-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="applePay"
                    className="custom-radio"
                  />
                  <span className="w-6 h-6 flex items-center justify-center mr-3 text-[14px]">
                    <i className="ri-apple-fill"></i>
                  </span>
                  <span>Apple Pay</span>
                </label>
              </div>
            </div>
            <div id="creditCardForm" className="mb-5">
              <div className="space-y-3">
                <div>
                  <label className="text-[12px] text-gray-400 mb-1 block">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-[12px] py-2 px-3 text-gray-100"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[12px] text-gray-400 mb-1 block">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-[12px] py-2 px-3 text-gray-100"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] text-gray-400 mb-1 block">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800 border border-gray-700 rounded-[12px] py-2 px-3 text-gray-100"
                      placeholder="123"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[12px] text-gray-400 mb-1 block">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-[12px] py-2 px-3 text-gray-100"
                    placeholder="John Smith"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 border-t border-gray-700">
            <button
              className="w-full py-3 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 rounded-[12px] text-white font-medium cursor-pointer"
              type="submit"
            >
              Add Funds
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TopUp;
