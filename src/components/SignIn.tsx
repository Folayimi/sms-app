import { useState } from "react";
import UserSignin from "./UserSignin";
import ForgotPassword from "./ForgotPassword";

const SignIn = () => {
  const [loginType, setLoginType] = useState("user");
  const [forgot, setForgot] = useState(false);

  return (
    <div className="min-h-screen w-full flex font-inter">
      {/* Left Panel */}
      <div className="w-[45%] hidden lg:flex flex-col justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-black text-white px-12 py-10 relative">
        <div className="absolute top-6 left-6 text-xl font-bold tracking-wide">
          {/* Replace this with your logo */}
          <span className="text-purple-300">SMS</span>
          <span className="text-white">App</span>
        </div>

        <div className="z-10 space-y-10">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-md">
            Welcome back to SMS-App
          </h1>
          <p className="text-lg text-gray-200">
            We're thrilled to have you back. Sign in to continue where you left
            off.
          </p>
        </div>
        {/* Glassmorphism Panel */}
        <div className="absolute bottom-6 left-6 bg-white/10 border border-white/20 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg text-sm">
          Secure • Fast • Reliable
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-[55%] flex justify-center items-center bg-[#0F0F0F] p-8">
        <div className="w-full max-w-[480px] bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 text-white">
          {loginType === "user" && !forgot && (
            <UserSignin setLoginType={setLoginType} setForgot={setForgot} />
          )}
          {loginType === "user" && forgot && (
            <ForgotPassword loginType={loginType} setForgot={setForgot} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
