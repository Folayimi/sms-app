import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import {
  EyeOutline,
  EyeOffOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
} from "heroicons-react";
import Link from "next/link";
import Image from "next/image";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";

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
  // const dispatch = useDispatch()
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

  // useEffect(() => {
  //   fName.current.focus();
  // }, []);

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
    if (valid && !passError) {
      // ENDPOINT FOR SUBMITTING USER DETAILS
      setLoading(true);
      // await studentRegister(
      //   dispatch,
      //   userDetails.fullName,
      //   userDetails.email,
      //   userDetails.productKey,
      //   userDetails.password
      // );
      // setLoading(false);
      console.log(userDetails);
    }
  };

  return (
    <div className="cflexss px-[30px] h-full w-full gap-[28px]">
      <div
        className="flexss bg-blue-500 rounded-[0.5em] p-[0.4em] cursor-pointer"
        onClick={() => {
          // setAccountType("none");
          router.back();
        }}
      >
        <div className="w-[1.2em] h-[1.2em] rounded-full bg-blue-500 flexmm">
          <ArrowLeftOutline
            size={15}
            color="white"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
        </div>
      </div>
      <div className="cflexss gap-[12px]">
        <h1 className="text-[1.7rem] font-[700] sm:font-[800] text-blue-500">
          Create an Account
        </h1>
        <p className="text-[18px] lg:text-[16px] ls:text-[14px] sm:text-[20px] font-400 text-[#52525B] leading-[1.5em]">
          Join the SMS-App Services and experience a seamlessly smooth buying of
          numbers.
        </p>
      </div>
      <form className="cflexss gap-[1em] w-full" onSubmit={handleSubmit}>
        <div className="text-black cflexss gap-[10px]">
          <p>Full name</p>
          <div className="w-[500px]">
            <input
              className="w-full rounded-[10px] outline-none shadow-md border border-transparent focus:border-blue-500 px-[20px] py-[10px]"
              type="text"
              name="fullName"
              placeholder="E.g First Name Last Name Other Name"
              value={userDetails["fullName"]}
              ref={fName}
              onChange={handleChange}
            />
          </div>
          {exceedChar === "fullName" && (
            <p className="text-[12px] text-red-700">
              *can't exceed 50 characters
            </p>
          )}
        </div>

        <div className="text-black cflexss gap-[10px]">
          <p>Email address</p>
          <div className="w-[500px]">
            <input
              className="w-full rounded-[10px] outline-none shadow-md border border-transparent focus:border-blue-500 px-[20px] py-[10px]"
              type="text"
              name="email"
              placeholder="E.g annette.black@example.com"
              value={userDetails["email"]}
              onChange={handleChange}
            />
          </div>
          {emailError && (
            <p className="text-[12px] text-red-700">
              * Fill in a valid email address
            </p>
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
              value={userDetails["password"]}
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
            <p className="text-gray-500 text-[14px] lg:text-[12px] font-[400] flex flex-wrap w-[30em] sm:w-full">
              * Password should be at least 8 characters long and must contain
              at least one special character
            </p>
          )}
        </div>

        {!valid && (
          <div className="text-[12px] text-red-700">
            <p>*All fields are required.</p>
          </div>
        )}

        <div className="flexbm w-full text-[16px] lg:text-[14px] text-black sm:text-[20px]">
          <div className="flexmm gap-[12px]">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
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
              <p>Create account</p>
              <ArrowRightOutline
                size={12}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              />
            </>
          )}
        </button>
      </form>
      <div className="text-[14px] pb-[30px] text-black lg:text-[12px] sm:text-[16px] font-[400]">
        <p>
          Already have an account?{" "}
          <Link href="/signin">
            <span className="text-sec1 font-[700] cursor-pointer">Log In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudentAccount;
