"use client";
import { Button } from "./ui/button";
import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeSwitcher } from "@/components/theme-switcher";

import {
  HiX,
  HiSearch,
  HiCreditCard,
  HiUserCircle,
  HiChevronDown,
} from "react-icons/hi";
import Link from "next/link";

type NavProps = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav: React.FC = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
      <div
        className={`px-[40px] fixed text-black top-0 left-0 z-50 bg-[#E3F0FF] w-full flexbm py-[10px] px-xpadding ${
          showNav && "fixed"
        } bg-opacity-75 font-inter`}
      >
        <div className="w-fit flexmm gap-[125px] lf:hidden">
          <h1 className="font-[600] text-[#0187FF]">SMS-APP-LOGO</h1>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border w-[300px] bg-white rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          />        
        </div>

        <div className="w-fit flexmm gap-[50px] text-[14px]">
          <ThemeSwitcher />
          <div className="bg-white rounded-[10px] border-[#0187FF] border-[1px] flexbm gap-[20px] px-[20px] py-[5px]">
            <div className="cflexss">
              <p className="text-[#929696]">Balance:</p>
              <p className="text-[20px] font-[700]">0 $</p>
            </div>
            <div className="flexmm gap-[10px] bg-[#E3F0FF] font-[700] px-[20px] py-[10px] rounded-[15px] cursor-pointer">
              <HiCreditCard size={25} color="#0187FF" />
              <p>Top Up</p>
            </div>
          </div>
          <div className="text-black text-[14px] font-[500] flexmm gap-[10px] uppercase">
            <h1>John Doe</h1>
            <div className="flexmm cursor-pointer gap-[5px]">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>

              <HiChevronDown size={18} color="#0187FF" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
