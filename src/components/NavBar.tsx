"use client";

import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { Button } from "./ui/button";
import Link from "next/link";

type NavBarProps = {
  active?: number;
  background?: string;
};

const NavBar: React.FC<NavBarProps> = ({
  active = 0,
  background = "#FFFFFF",
}) => {
  const nav = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const [showNav, setShowNav] = useState(false);

  return (
    <header
      style={{ background }}
      className="fixed top-0 left-0 w-full z-50 bg-opacity-95 px-6 py-4 flex items-center justify-between shadow-lg"
    >
      {/* LOGO */}
      <Link href="/">
        <h1 className="text-[#BB86FC] font-bold text-xl">SMS-APP</h1>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 items-center text-[#121212]">
        {nav.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className={`text-sm font-semibold hover:text-[#BB86FC] transition-colors duration-300 ${
              active === i ? "text-[#BB86FC]" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
        <Link href="/signup">
          <Button className="bg-transparent cursor-pointer border-2 border-[#BB86FC] text-[#BB86FC] hover:bg-[#BB86FC] hover:text-white rounded-full px-5 py-2 text-sm font-semibold">
            Sign Up
          </Button>
        </Link>
        <Link href="/signin">
          <Button className="bg-[#7E57C2] cursor-pointer hover:bg-[#BB86FC] text-white rounded-full px-5 py-2 text-sm font-semibold">
            Login
          </Button>
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden text-white z-50">
        {showNav ? (
          <HiX size={28} onClick={() => setShowNav(false)} />
        ) : (
          <RiMenuFill size={28} onClick={() => setShowNav(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-[#1A1A1A] text-white transform transition-transform duration-300 ease-in-out ${
          showNav ? "translate-x-0" : "translate-x-full"
        } px-6 pt-20`}
      >
        <div className="flex flex-col gap-6">
          {nav.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setShowNav(false)}
              className={`text-base font-medium hover:text-[#BB86FC] ${
                active === i ? "text-[#BB86FC]" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Link href="/signup">
            <Button
              onClick={() => setShowNav(false)}
              className="bg-transparent border-2 border-[#BB86FC] cursor-pointer text-[#BB86FC] hover:bg-[#BB86FC] hover:text-white rounded-full w-full py-2 text-sm font-semibold"
            >
              Sign Up
            </Button>
          </Link>
          <Link href="/signin">
            <Button
              onClick={() => setShowNav(false)}
              className="bg-[#7E57C2] hover:bg-[#BB86FC] cursor-pointer text-white rounded-full w-full py-2 text-sm font-semibold"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
