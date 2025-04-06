"use client";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import Link from "next/link";

type NavBarProps = {
  active?: number;
  background?: string;
};

const NavBar: React.FC<NavBarProps> = ({ active = 0 }) => {
  const nav = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/" },
    { title: "Contact", link: "/" },
  ];

  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
      <div
        className={`px-[40px] fixed top-0 left-0 z-50 w-full flex justify-between items-center py-[20px] transition-all ${
          showNav && "fixed"
        } bg-[#121212] text-white shadow-md`}
      >
        <h1 className="font-bold text-[20px] text-[#BB86FC]">SMS-APP-LOGO</h1>

        <div className="hidden text-white flexmm gap-[60px] md:block">
          {nav.map((item, i) => (
            <a
              href={item.link}
              key={i}
              className={`text-[16px] lg:text-[14px] font-semibold ${
                active === i
                  ? "text-[#BB86FC]"
                  : "hover:text-[#9B59B6] transition"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="w-fit flex gap-6 lf:hidden">
          <Link href="/signup">
            <Button className="rounded-full border-2 border-[#BB86FC] bg-transparent px-[30px] py-[10px] text-[16px] text-[#BB86FC] hover:bg-[#BB86FC] hover:text-white transition font-semibold">
              Sign Up
            </Button>
          </Link>
          <Link href="/signin">
            <Button className="rounded-full px-[30px] py-[12px] text-[16px] text-white bg-[#7E57C2] hover:bg-[#9B59B6] transition">
              Login
            </Button>
          </Link>
        </div>

        <div className="hidden lf:block text-white">
          {showNav ? (
            <HiX size={24} onClick={() => setShowNav(false)} />
          ) : (
            <RiMenuFill size={24} onClick={() => setShowNav(true)} />
          )}
        </div>

        <div
          className={`fixed top-[70px] sm:top-[60px] w-full h-full p-xpadding bg-[#1A1A1A] ${
            showNav ? "left-0" : "left-[100%]"
          } transition-all z-[999]`}
        >
          <div className="flex gap-6 flex-col text-white">
            {nav.map((item, i) => (
              <a
                href={item.link}
                key={i}
                className={`text-[0.8em] ${
                  active === i
                    ? "text-[#BB86FC] font-bold"
                    : "hover:text-[#9B59B6] transition"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="w-fit flex gap-6 mt-10">
            <Link href="/signup">
              <Button className="rounded-full border-2 border-white bg-transparent px-[30px] py-[10px] text-[16px] text-white hover:bg-[#BB86FC] hover:border-[#BB86FC] transition font-semibold">
                Sign Up
              </Button>
            </Link>

            <Link href="/signin">
              <Button className="rounded-full px-[30px] py-[12px] text-[16px] text-white bg-[#7E57C2] hover:bg-[#9B59B6] transition">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
