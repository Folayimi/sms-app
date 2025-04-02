import { useState, useEffect } from "react";
import { ArrowLeftOutline } from "heroicons-react";
import Loader from "./Loader";
import { useRouter } from "next/router";

interface ForgotPasswordProps {
  loginType: "student" | "user";
  setForgot: (value: boolean) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ loginType, setForgot }) => {
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;
  const [valid, setValid] = useState<boolean>(false);
  const [changing, setChanging] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (email.trim().length > 0 && !emailError) {
      console.log("valid");
      setValid(true);
    } else {
      setValid(false);
    }

    if (EMAIL_REGEX.test(email) || email.trim().length === 0) {
      setEmailError(false);
    } else if (!EMAIL_REGEX.test(email) && email.trim().length > 0) {
      setEmailError(true);
    }
  }, [email, changing]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid && loginType === "user") {
      setLoading(true);
      // await studentForgotPassword(email);
      // setLoading(false);
    } 
  };

  return (
    <div className="cflexms h-full w-full gap-[28px]">
      <div
        className={`flexss ${loginType === "student" ? "bg-primary2" : "bg-primary3"} rounded-[0.5em] p-[0.4em] cursor-pointer`}
        onClick={() => {
          setForgot(false);
        }}
      >
        <div className="w-[1.2em] h-[1.2em] rounded-full bg-white flexmm">
          <ArrowLeftOutline
            size={12}
            color={loginType === "student" ? "#00AC76" : "#8D67CE"}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
        </div>
      </div>
      <div className="cflexss gap-[12px]">
        <h1 className="text-[1.7rem] font-[700] sm:font-[800] text-sec3">
          Forgot Password
        </h1>
        <p className="text-[18px] lg:text-[16px] ls:text-[14px] sm:text-[20px] font-400 text-[#52525B] leading-[1.5em]">
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password
        </p>
      </div>
      <form className="cflexss gap-[1em] w-full" method="POST" onSubmit={handleSubmit}>
        <div className="sect">
          <p>Email address</p>
          <div className="inputCont">
            <input
              className="input"
              type="text"
              name="email"
              placeholder="E.g annette.black@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setChanging(!changing);
              }}
            />
          </div>
          {emailError && <p className="err">* Fill in a valid email</p>}
        </div>

        <button
          type="submit"
          className={`w-full flexmm rounded-[2em] ${loginType === "student" ? "bg-primary2" : "bg-primary3"} px-[2.5em] py-[1em] text-white text-[18px] sm:text-[1rem] font-[600] sm:font-[400]`}
        >
          {loading ? (
            <Loader />
          ) : (
            <p>Send reset instruction</p>
          )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
