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
  background = "#000000",
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
      className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-95 shadow-lg"
    >
      {/* remove horizontal padding on the container */}
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-[#BB86FC] font-bold text-xl pl-4">
            SMS<span className="text-white">MAN</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-white">
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
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 pr-4">
          <Link href="/signup">
            <Button className="bg-transparent border-2 border-[#BB86FC] text-[#BB86FC] hover:bg-[#BB86FC] hover:text-white rounded-full px-5 py-2 text-sm font-semibold">
              Sign Up
            </Button>
          </Link>
          <Link href="/signin">
            <Button className="bg-[#7E57C2] hover:bg-[#BB86FC] text-white rounded-full px-5 py-2 text-sm font-semibold">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden pr-4 text-white z-50">
          {showNav ? (
            <HiX size={28} onClick={() => setShowNav(false)} />
          ) : (
            <RiMenuFill size={28} onClick={() => setShowNav(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#1A1A1A] text-white transform transition-transform duration-300 ease-in-out z-40 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {nav.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setShowNav(false)}
              className={`text-lg font-medium hover:text-[#BB86FC] ${
                active === i ? "text-[#BB86FC]" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}

          <Link href="/signup">
            <Button
              onClick={() => setShowNav(false)}
              className="mt-auto bg-transparent border-2 border-[#BB86FC] text-[#BB86FC] hover:bg-[#BB86FC] hover:text-white rounded-full w-full py-2 text-sm font-semibold"
            >
              Sign Up
            </Button>
          </Link>
          <Link href="/signin">
            <Button
              onClick={() => setShowNav(false)}
              className="bg-[#7E57C2] hover:bg-[#BB86FC] text-white rounded-full w-full py-2 text-sm font-semibold"
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
