import { useState } from "react";
import StudentAccount from "./StudentAccount";

const SignUp = () => {
  const [accountType, setAccountType] = useState("user");

  return (
    <>
      <div
        className="mt-[70px] w-full flex"
        style={{ height: "calc(100vh - 70px)" }}
      >
        <div className="w-[45%] h-full bg-[#0187FF] py-[4em] px-[5em] text-white">
          <div className="cflexss gap-[1.5em]">
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

        <div className="w-[55%] h-full bg-white p-[3em] overflow-y-auto">
          {accountType === "user" && (
            <StudentAccount setAccountType={setAccountType} />
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
