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
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [hide, setHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  const router = useRouter();

  useEffect(() => {
    const isValid =
      loginDetails.email.trim().length > 0 &&
      loginDetails.password.trim().length > 0;
    setValid(isValid);
  }, [changing, loginDetails]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
    setChanging(!changing);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
      await userLogin(loginDetails);
      setLoading(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className="w-full max-w-[500px] h-full bg-white/5 lg:backdrop-blur-md border border-white/10 text-white shadow-2xl rounded-2xl lg:px-8 px-4 lg:py-10 py-5 space-y-6">
      {/* Back Button */}
      <div
        className="flexss rounded-full w-fit p-[0.4em] cursor-pointer bg-purple-800 bg-opacity-30 hover:bg-opacity-50 transition-all"
        onClick={() => router.back()}
      >
        <ArrowLeftOutline
          className="w-[1.2em] h-[1.2em] flexmm text-white"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-purple-300">Sign In</h1>
        <p className="text-gray-400 text-sm">
          Continue your learning journey and explore a world of endless
          possibilities.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5" method="POST" onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            ref={eMail}
            placeholder="E.g. annette.black@example.com"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500 transition"
            value={loginDetails.email}
            onChange={handleChange}
          />
          {emailError && (
            <p className="text-sm text-red-500 mt-1">
              * Please enter a valid email
            </p>
          )}
        </div>

        {/* Password Input */}
        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3">
            <input
              id="password"
              name="password"
              type={hide ? "password" : "text"}
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-sm"
              value={loginDetails.password}
              onChange={handleChange}
            />
            <div
              className="cursor-pointer text-gray-500 hover:text-purple-400 transition"
              onClick={() => setHide(!hide)}
            >
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
        </div>

        {/* Validation */}
        {!valid && (
          <p className="text-sm text-red-500">* All fields are required</p>
        )}

        {/* Options Row */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-purple-500" />
            Remember me
          </label>
          <span
            className="cursor-pointer hover:text-purple-400 transition"
            onClick={() => setForgot(true)}
          >
            Forgot password?
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-500 transition rounded-full py-3 flex items-center justify-center gap-2 font-semibold text-white shadow-md disabled:opacity-60"
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRightOutline
                size={12}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-400 pt-2">
        Don't have an account?{" "}
        <a
          href="/signup"
          className="text-purple-400 font-semibold hover:text-purple-300 transition"
        >
          Create free account
        </a>
      </p>
    </div>
  );
};

export default StudentSignIn;
