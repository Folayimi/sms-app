"use client";

import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import {
  EyeOutline,
  EyeOffOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
} from "heroicons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import { userRegistration } from "@/services/request";

interface UserDetails {
  fullName: string;
  email: string;
  password: string;
}

const StudentAccount = ({
  setAccountType,
}: {
  setAccountType: (type: string) => void;
}) => {
  const router = useRouter();
  const EMAIL_REGEX = /^(\w+)([\.\-]?\w+)*\@(\w+)([\.\-]?\w+)*(\.[a-z|A-Z]+)$/;
  const fName = useRef<HTMLInputElement>(null);
  const [valid, setValid] = useState<boolean>(false);
  const [changing, setChanging] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [exceedChar, setExceedChar] = useState<string>("");
  const [passError, setPassError] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (
      userDetails["fullName"].trim().length > 0 &&
      !emailError &&
      userDetails["password"].length >= 8
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
    if (
      EMAIL_REGEX.test(userDetails["email"]) ||
      userDetails["email"].trim().length === 0
    ) {
      setEmailError(false);
    } else if (
      !EMAIL_REGEX.test(userDetails["email"]) &&
      userDetails["email"].trim().length > 0
    ) {
      setEmailError(true);
    }

    if (
      (userDetails["password"].length >= 8 &&
        /[!@#$%^&*]/.test(userDetails["password"])) ||
      userDetails["password"].length === 0
    ) {
      setPassError(false);
    } else if (
      (userDetails["password"].length !== 0 &&
        userDetails["password"].length < 8) ||
      !/[!@#$%^&*]/.test(userDetails["password"])
    ) {
      setPassError(true);
    }
  }, [changing]);

  const acceptLettersOnly = (name: string, value: string, max: number) => {
    var alphabets = /^[A-Z|a-z| |@#$%^&-]+$/;
    if ((alphabets.test(value) && value.length <= max) || value.length === 0) {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
      setExceedChar("");
    } else if (value.length > max) {
      setExceedChar(name);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "fullName") {
      acceptLettersOnly(name, value, 50);
    } else {
      setUserDetails({ ...userDetails, [name]: value });
      setChanging(!changing);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loading && valid && !passError) {
      setLoading(true);
      await userRegistration({
        email: userDetails.email,
        password: userDetails.password,
      });
      setLoading(false);
      console.log("registering");
    }
  };

  return (
    <div className="font-inter h-full bg-white/5 lg:backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl max-w-[650px] lg:px-8 px-4 lg:py-10 py-5 space-y-6 w-full text-white">
      <div
        className="flexss w-fit rounded-full p-[0.4em] cursor-pointer bg-purple-800 bg-opacity-30 hover:bg-opacity-50 transition-all"
        onClick={() => router.back()}
      >
        <div className="w-[1.2em] h-[1.2em] flexmm">
          <ArrowLeftOutline
            className="w-4 h-4 text-white"
            size={12}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
        </div>
      </div>

      <div className="cflexss gap-[12px]">
        <h1 className="text-[1.7rem] font-[700] text-purple-300">
          Create an Account
        </h1>
        <p className="text-[16px] font-[400] text-gray-400 leading-[1.5em]">
          Join the SMS-App Services and experience a seamlessly smooth buying of
          numbers.
        </p>
      </div>

      <form
        className="cflexss gap-[1.5em] w-full"
        target="_blank"
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div className="cflexss gap-[10px] w-full">
          <p className="text-gray-300">Full Name</p>
          <input
            className="w-full rounded-xl border border-transparent focus:border-purple-400 bg-white/5 backdrop-blur-md px-5 py-3 text-white placeholder-gray-400 outline-none transition"
            type="text"
            name="fullName"
            placeholder="E.g First Name Last Name"
            value={userDetails.fullName}
            ref={fName}
            onChange={handleChange}
          />
          {exceedChar === "fullName" && (
            <p className="text-[12px] text-red-400">
              * Can't exceed 50 characters
            </p>
          )}
        </div>

        {/* Email */}
        <div className="cflexss gap-[10px] w-full">
          <p className="text-gray-300">Email Address</p>
          <input
            className="w-full rounded-xl border border-transparent focus:border-purple-400 bg-white/5 backdrop-blur-md px-5 py-3 text-white placeholder-gray-400 outline-none transition"
            type="text"
            name="email"
            placeholder="E.g annette.black@example.com"
            value={userDetails.email}
            onChange={handleChange}
          />
          {emailError && (
            <p className="text-[12px] text-red-400">
              * Fill in a valid email address
            </p>
          )}
        </div>

        {/* Password */}
        <div className="cflexss gap-[10px] w-full">
          <p className="text-gray-300">Password</p>
          <div className="w-full flex items-center gap-2 rounded-xl border border-purple-400 bg-white/5 backdrop-blur-md px-5 py-3">
            <input
              className="w-full bg-transparent text-white outline-none"
              type={hide ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={userDetails.password}
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
          {passError && (
            <p className="text-[12px] text-red-400">
              * Password must be at least 8 characters and include a special
              character
            </p>
          )}
        </div>

        {/* Validation Message */}
        {!valid && (
          <p className="text-[12px] text-red-400">* All fields are required.</p>
        )}

        {/* Remember Me */}
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <input type="checkbox" className="accent-purple-500" />
          <p>Remember me</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center lg:w-fit w-full justify-center gap-2 rounded-full bg-purple-600 hover:bg-purple-700 px-6 py-3 text-white font-semibold shadow-md transition disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader />
              <span>Create Account</span>
              <ArrowRightOutline
                size={14}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              />
            </>
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRightOutline
                size={14}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              />
            </>
          )}
        </button>
      </form>

      {/* Footer Link */}
      <p className="text-sm text-gray-400 pb-[30px]">
        Already have an account?{" "}
        <Link href="/signin">
          <span className="text-purple-400 font-semibold cursor-pointer">
            Log In
          </span>
        </Link>
      </p>
    </div>
  );
};

export default StudentAccount;
