import { useState } from "react";
import UserAccount from "./UserAccount";

const SignUp = () => {
  const [accountType, setAccountType] = useState("user");

  return (
    <>
      <div
        className="mt-[70px] w-full flex"
        style={{ height: "calc(100vh - 70px)" }}
      >
        <div className="w-[45%] h-full flexmm bg-[#0187FF] py-[4em] px-[5em] text-white">
          <div className="w-full cflexss max-w-[650px] gap-[1.5em]">
            <h1>A Logo will be here </h1>
            <div className="cflexss gap-[50px]">
              <h1 className="text-[60px] text-white font-[800]">
                Welcome to SMS-App!
              </h1>
              <p className="text-[18px] font-[400] pt-[0.5em] leading-[1.7em]">
                By creating an account, you gain access to a diverse range of
                SMS numbers
              </p>
            </div>
          </div>
        </div>

        <div className="w-[55%] flexmm h-full bg-white p-[3em] overflow-y-auto">
          {accountType === "user" && (
            <UserAccount setAccountType={setAccountType} />
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
