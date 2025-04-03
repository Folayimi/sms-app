import { useState } from "react";
import StudentSignIn from "./StudentSignIn";
import ForgotPassword from "./ForgotPassword";

const SignIn = () => {
  const [loginType, setLoginType] = useState("user");
  const [forgot, setForgot] = useState(false);

  return (
    <>
      <div
        className="mt-[70px] w-full flexss"
        style={{ height: "calc(100vh - 70px)" }}
      >
        <div
          className="w-[45%] h-full bg-[#0187FF] py-[4em] px-[5em] text-white"
        >
          <div className="w-full cflexss gap-[1.5em]">
            <h1>A Logo will be here </h1>
            <div className="cflexss gap-[50px]">
              <h1 className="text-[60px] text-white font-[800]">
                Welcome back to Sms-App
              </h1>
              <p className="text-[18px] font-[400] pt-[0.5em] leading-[1.7em]">
                We're thrilled to have you back with Sms-app!
              </p>
            </div>
          </div>
        </div>

        <div className="w-[55%] h-full flexmm bg-white p-[3em] overflow-y-auto">
          {loginType === "user" && !forgot && (
            <StudentSignIn setLoginType={setLoginType} setForgot={setForgot} />
          )}
          {loginType === "user" && forgot && (
            <ForgotPassword loginType={loginType} setForgot={setForgot} />
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
