import { useState } from "react";
import UserSignin from "./UserSignin";
import ForgotPassword from "./ForgotPassword";

const SignIn = () => {
  const [loginType, setLoginType] = useState("user");
  const [forgot, setForgot] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row" style={{ backgroundColor: "#1A1A1A" }}>
      {/* Info Panel */}
      <div className="w-full md:w-1/2 h-full bg-[#7E57C2] flex flex-col items-center justify-center py-8 px-6 text-white">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">A Logo will be here</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Welcome back to SMS-App
          </h2>
          <p className="text-lg">
            We're thrilled to have you back with SMS-App!
          </p>
        </div>
      </div>

      {/* Form Panel */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-6">
        {loginType === "user" && !forgot && (
          <UserSignin setLoginType={setLoginType} setForgot={setForgot} />
        )}
        {loginType === "user" && forgot && (
          <ForgotPassword loginType={loginType} setForgot={setForgot} />
        )}
      </div>
    </div>
  );
};

export default SignIn;
