import { useState } from "react";
import UserSignin from "./UserSignin";
import ForgotPassword from "./ForgotPassword";

const SignIn = () => {
  const [loginType, setLoginType] = useState("user");
  const [forgot, setForgot] = useState(false);

  return (
    <div className="mt-[70px] w-full" style={{ minHeight: "calc(100vh - 70px)" }}>
      <div className="flex flex-col md:flex-row h-full">
        {/* Info Panel */}
        <div className="w-full md:w-1/2 h-full bg-[#0187FF] flex flex-col items-center justify-center py-16 px-12 text-white">
          <div className="max-w-[650px] text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">A Logo will be here</h1>
            <h2 className="text-[40px] md:text-[60px] font-extrabold">
              Welcome back to SMS-App
            </h2>
            <p className="text-lg font-normal leading-relaxed">
              We're thrilled to have you back with SMS-App!
            </p>
          </div>
        </div>

        {/* Form Panel */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center bg-white p-12 overflow-y-auto">
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
