"use client";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { HiSearch, HiCreditCard, HiUserCircle, HiChevronDown, HiBell, HiCog, HiSun, HiMoon, HiX } from "react-icons/hi";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Nav: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Dark mode state

  const toggleTheme = () => setIsDarkMode(!isDarkMode); // Theme toggle function

  return (
    <div
      className={`px-6 fixed top-0 left-0 z-50 bg-[#1A1A1A] w-full flex justify-between items-center py-4 font-inter text-[#E0E0E0] shadow-lg ${isDarkMode ? 'bg-[#1A1A1A]' : 'bg-[#FFFFFF]'} transition-all`}
      style={{ backdropFilter: "blur(8px)" }}
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-[#BB86FC] text-lg tracking-wide">SMS-APP</h1>
      </div>

      {/* Center: Search Bar */}
      <div className="w-[350px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-lg bg-[#2A2A2A] border border-[#444] text-[#E0E0E0] placeholder:text-[#888] focus:ring-2 focus:ring-[#7E57C2] transition"
        />
      </div>

      {/* Right: Notifications, Balance, Top Up, Profile */}
      <div className="flex items-center gap-6">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer">
          <HiBell size={24} color="#E0E0E0" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>

        {/* Balance and Top Up */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <p className="text-xs text-[#AAAAAA]">Balance</p>
            <p className="text-xl font-semibold text-white">0 $</p>
          </div>
          <div
            className="flex items-center gap-2 bg-[#7E57C2] text-white font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[#BB86FC] transition"
          >
            <HiCreditCard size={20} />
            <p>Top Up</p>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 text-[#E0E0E0] cursor-pointer">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <HiChevronDown size={18} color="#BB86FC" />
          </div>
        </div>

        {/* Theme Toggle */}
        <div
          className="cursor-pointer text-[#E0E0E0]"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <HiSun size={24} />
          ) : (
            <HiMoon size={24} />
          )}
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex items-center">
          <RiMenuFill size={30} color="#E0E0E0" onClick={() => setShowNav(!showNav)} />
        </div>
      </div>

      {/* Mobile Navigation (hamburger menu) */}
      {showNav && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40">
          <div className="bg-[#1A1A1A] w-64 h-full p-6 flex flex-col items-start text-[#E0E0E0]">
            <div className="flex justify-between w-full mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <HiX size={30} color="#E0E0E0" onClick={() => setShowNav(false)} />
            </div>
            <Link href="/dashboard/overview">
              <a className="text-lg mb-4 hover:text-[#BB86FC]">Overview</a>
            </Link>
            <Link href="/dashboard/profile">
              <a className="text-lg mb-4 hover:text-[#BB86FC]">Profile</a>
            </Link>
            <Link href="/dashboard/settings">
              <a className="text-lg mb-4 hover:text-[#BB86FC]">Settings</a>
            </Link>
            <Link href="/dashboard/logout">
              <a className="text-lg mb-4 hover:text-[#BB86FC]">Logout</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
