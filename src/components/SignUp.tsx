import { useState } from "react";
import UserAccount from "./UserAccount";

const SignUp = () => {
  const [accountType, setAccountType] = useState("user");

  return (
    <div className="w-full mt-[40px] h-[calc(100vh-40px)] lg:h-[calc(100vh-70px)] lg:mt-[70px] flex flex-col md:flex-row bg-black text-white font-sans">
      {/* Info Panel */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-black text-white px-10 py-16 relative overflow-hidden">
        <div className="absolute top-6 left-6 text-2xl font-bold tracking-wide text-white">
          <span className="text-purple-300">SMS</span>
          <span className="text-white">App</span>
        </div>

        <div className="z-10 max-w-lg space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
            Welcome to SMS-App!
          </h1>
          <p className="text-lg text-gray-300">
            Create an account to access a vast range of virtual numbers for
            verification, marketing, and secure communication.
          </p>
        </div>

        {/* Subtle Glass Info */}
        <div className="absolute bottom-6 left-6 bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-4 rounded-xl text-sm text-gray-200">
          Secure • Global Access • Easy Setup
        </div>
      </div>

      {/* Form Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-zinc-900 p-6 overflow-y-auto">
        <div className="w-full max-w-[500px] mt-[250px] bg-white/5 lg:backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl lg:p-8 p-4">
          {accountType === "user" && (
            <UserAccount setAccountType={setAccountType} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
