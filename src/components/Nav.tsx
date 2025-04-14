"use client";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import {
  HiSearch,
  HiCreditCard,
  HiUserCircle,
  HiChevronDown,
  HiOutlineBell,
  HiCog,
  HiSun,
  HiMoon,
  HiX,
  HiMenu,
} from "react-icons/hi";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavProps {
  setHidden: (hidden: boolean) => void;
  setShowNav: (showNav: boolean) => void;
  showNav: boolean;
  hidden: boolean;
}

const Nav = ({ hidden, setHidden, showNav, setShowNav }: NavProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Dark mode state

  const toggleTheme = () => setIsDarkMode(!isDarkMode); // Theme toggle function

  return (
    <div
      className={`px-[35px] fixed top-0 left-0 lg:left-[250px]  border-b border-gray-800 z-50 bg-[#101827] backdrop-blur-[12px] w-full lg:w-[calc(100vw-250px)] flex justify-between items-center py-4 font-inter text-[#E0E0E0] shadow-lg ${
        isDarkMode ? "bg-[#101827]" : "bg-[#FFFFFF]"
      } transition-all`}
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-[25px]">
        <div
          className="flex justify-center items-center cursor-pointer transition-all duration-300"
          onClick={() => {
            setHidden(!hidden);
            setShowNav(false);
            console.log(hidden);
          }}
        >
          <HiMenu size={20} color="#E0E0E0" />
          {/* {hidden ? (
            
          ) : (
            <HiX size={20} color="#E0E0E0" />
          )} */}
        </div>
        <h1 className="font-semibold text-[#E0E0E0] text-lg tracking-wide">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-[35px]">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer">
          <HiOutlineBell size={20} color={`${isDarkMode ? "#E0E0E0" : "#1A1A1A"}`} />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[#8B5CF6] rounded-full"></div>
        </div>

        {/* Balance and Top Up */}
        <div className="hidden lg:flex items-center gap-4 text-[14px]">
          <p
            className={`font-semibold ${
              isDarkMode ? "text-white" : "text-[#1A1A1A]"
            } `}
          >
            $0
          </p>
          <div className="flex items-center gap-2 bg-[#8B5CF6] text-white font-semibold px-4 py-2 rounded-[12px] cursor-pointer hover:bg-[#7E57C2] transition-all duration-300">
            <p>Top up</p>
          </div>
        </div>

        {/* Profile */}
        <div className="hidden lg:flex items-center gap-3 text-[#E0E0E0] cursor-pointer">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <HiChevronDown size={18} color="#8B5CF6" />
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          {showNav ? (
            <HiX size={30} color="#E0E0E0" onClick={() => setShowNav(false)} />
          ) : (
            <RiMenuFill
              size={30}
              color="#E0E0E0"
              onClick={() => {
                setShowNav(true);
                setHidden(true);
              }}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation (hamburger menu) */}
      {showNav && (
        <div className="fixed w-64 top-[50px] left-0 h-[calc(100vh-70px)] bg-[#101827] backdrop-blur-[12px] z-10">
          <div className="w-full h-full p-6 flex flex-col gap-[15px] items-start text-[#E0E0E0]">
            <div className="flex items-center gap-4 text-[14px]">
              <p
                className={`font-semibold ${
                  isDarkMode ? "text-white" : "text-[#1A1A1A]"
                } `}
              >
                0 $
              </p>
              <div className="flex items-center gap-2 bg-[#8B5CF6] text-white font-semibold px-4 py-2 rounded-[12px] cursor-pointer hover:bg-[#7E57C2] transition-all duration-300">
                <p>Top up</p>
              </div>
            </div>

            <Link href="/dashboard/settings">
              <div className="text-lg mb-4 hover:text-[#8B5CF6]">Settings</div>
            </Link>
            <Link href="/dashboard/logout">
              <div className="text-lg mb-4 hover:text-[#8B5CF6]">Logout</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
