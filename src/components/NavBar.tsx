"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type NavBarProps = {
  active?: number;
  background?: string;
};

const NavBar: React.FC<NavBarProps> = ({
  active = 0,
  background = "#ffffff",
}) => {
  // Updated navigation items based on the SMS service design
  const nav = [
    { title: "Home", link: "/" },
    { title: "Numbers", link: "/numbers" },
    { title: "Pricing", link: "/pricing" },
    { title: "API", link: "/api" },
    { title: "Blog", link: "/blog" },
  ];

  const [showNav, setShowNav] = useState(false);

  return (
    <header
      style={{ background }}
      className="fixed top-0 left-0 w-full z-50 shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-blue-600 font-bold text-xl">
            SMS<span className="text-gray-800">Receiver</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-gray-600">
          {nav.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className={`text-sm font-medium hover:text-blue-600 transition-colors duration-300 ${
                active === i ? "text-blue-600" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/signin">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-medium">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-gray-800 z-50">
          {showNav ? (
            <X size={24} onClick={() => setShowNav(false)} className="cursor-pointer" />
          ) : (
            <Menu size={24} onClick={() => setShowNav(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white text-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          {nav.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setShowNav(false)}
              className={`text-lg font-medium hover:text-blue-600 ${
                active === i ? "text-blue-600" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}

          <div className="mt-auto pb-8">
            <Link href="/signin">
              <Button
                onClick={() => setShowNav(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-full py-2 text-sm font-medium"
              >
                Sign In
              </Button>
            </Link>
            <div className="mt-4">
              <Link href="/signup" className="block text-center">
                <span className="text-gray-600 hover:text-blue-600">
                  New user? Create an account
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;