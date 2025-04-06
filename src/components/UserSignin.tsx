import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import {
  EyeOutline,
  EyeOffOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
} from "heroicons-react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import { userLogin } from "@/services/request";

// Define interface for login details
interface LoginDetails {
  email: string;
  password: string;
}

interface StudentSignInProps {
  setLoginType: (type: string) => void;
  setForgot: (forgot: boolean) => void;
}

const StudentSignIn = ({ setLoginType, setForgot }: StudentSignInProps) => {
  const eMail = useRef<HTMLInputElement>(null);
  const [valid, setValid] = useState<boolean>(false);
  const [changing, setChanging] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (
      loginDetails["email"].trim().length > 0 &&
      loginDetails["password"].trim().length > 0
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [changing]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
    setChanging(!changing);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
      // Handle login submission here, e.g., API call
      await userLogin(loginDetails);
      setLoading(false);
    }
  };

  return (
    <div className="cflexss px-[30px] max-w-[650px] h-full w-full gap-[28px]">
      <div
        className="flexss bg-blue-500 rounded-[0.5em] p-[0.4em] cursor-pointer"
        onClick={() => {
          router.back();
        }}
      >
        <div className="w-[1.2em] h-[1.2em] rounded-full bg-blue-500 flexmm">
          <ArrowLeftOutline
            className="w-4 h-4 text-white"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
        </div>
      </div>
      <div className="cflexss gap-[12px]">
        <h1 className="text-[1.7rem] font-[700] sm:font-[800] text-blue-500">
          Sign In
        </h1>
        <p className="text-[18px] lg:text-[16px] ls:text-[14px] sm:text-[20px] font-400 text-[#52525B] leading-[1.5em]">
          Sign in to continue your learning journey and explore a world of
          endless possibilities.
        </p>
      </div>
      <form
        className="cflexss gap-[1em] w-full"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="text-black cflexss gap-[10px]">
          <p>Email address</p>
          <div className="w-[500px]">
            <input
              className="w-full rounded-[10px] outline-none shadow-md border border-transparent focus:border-blue-500 px-[20px] py-[10px]"
              type="email"
              name="email"
              placeholder="E.g annette.black@example.com"
              value={loginDetails["email"]}
              ref={eMail}
              onChange={handleChange}
            />
          </div>
          {emailError && (
            <p className="text-[12px] text-red-700">* Fill in a valid email</p>
          )}
        </div>

        <div className="text-black cflexss gap-[10px]">
          <p>Password</p>
          <div className="w-[500px] flexmm gap-[10px] shadow-md rounded-[10px] px-[20px] py-[10px] border-blue-500 border">
            <input
              className="w-full outline-none"
              type={hide ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={loginDetails["password"]}
              onChange={handleChange}
            />
            {hide ? (
              <EyeOutline
                className="w-5 h-5 text-gray-500 cursor-pointer"
                onClick={() => {
                  setHide(!hide);
                }}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              />
            ) : (
              <EyeOffOutline
                className="w-5 h-5 text-gray-500 cursor-pointer"
                onClick={() => {
                  setHide(!hide);
                }}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              />
            )}
          </div>
        </div>

        {!valid && (
          <div className="text-[12px] text-red-700">
            <p>*All fields are required.</p>
          </div>
        )}

        <div className="flexbm gap-[320px] mt-[20px] w-full text-[16px] lg:text-[14px] text-black sm:text-[20px]">
          <div className="flexmm gap-[12px]">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p
            className="text-sec1 cursor-pointer"
            onClick={() => {
              setForgot(true);
            }}
          >
            Forgot password?
          </p>
        </div>

        <button
          type="submit"
          className="flexmm gap-[0.5em] rounded-[2em] bg-blue-500 px-[2.5em] py-[1em] text-white text-[18px] sm:text-[1rem] font-[600] sm:font-[400]"
          disabled={loading}
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              <p>Sign In</p>
              <ArrowRightOutline
                size={12}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              />
            </>
          )}
        </button>
      </form>
      <div className="text-[16px] text-black pb-[30px] lg:text-[14px] sm:text-[18rem] font-[400]">
        <p>
          Don't have an account?{" "}
          <a href="/signup">
            <span className="text-sec1 font-[700] cursor-pointer">
              Create free account
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default StudentSignIn;
