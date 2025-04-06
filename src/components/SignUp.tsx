import { useState } from "react";
import UserAccount from "./UserAccount";

const SignUp = () => {
  const [accountType, setAccountType] = useState("user");

  return (
    <div className="mt-[70px] w-full" style={{ minHeight: "calc(100vh - 70px)" }}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Info Panel */}
        <div className="w-full md:w-1/2 h-full bg-[#0187FF] flex flex-col items-center justify-center py-16 px-12 text-white">
          <div className="max-w-[650px] text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">A Logo will be here</h1>
            <h2 className="text-[40px] md:text-[60px] font-extrabold">
              Welcome to SMS-App!
            </h2>
            <p className="text-lg font-normal pt-2 leading-relaxed">
              By creating an account, you gain access to a diverse range of SMS numbers.
            </p>
          </div>
        </div>

        {/* Form Panel */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-white p-12 overflow-y-auto">
          {accountType === "user" && <UserAccount setAccountType={setAccountType} />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
