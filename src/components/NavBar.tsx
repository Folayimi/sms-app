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

const NavBar: React.FC<NavBarProps> = ({ active = 0, background }) => {
  const nav = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
      <div
        className={`px-[40px] fixed text-black top-0 left-0 z-50 bg-white shadow-md w-full flex justify-between items-center py-[20px] px-xpadding ${
          showNav && "fixed"
        } bg-opacity-75`}
      >
        <h1 className="font-[600] text-[#0187FF]">SMS-APP-LOGO</h1>
        <div className="hidden text-blue-500 flexmm gap-[60px] md:block">
          {nav.map((item, i) => {
            return (
              <a
                href={item.link}
                key={i}
                className={
                  active === i
                    ? "font-[800] text-sec1 text-[16px] lg:text-[14px]"
                    : "text-[16px] font-[600] lg:text-[14px]"
                }
              >
                {item.title}
              </a>
            );
          })}
        </div>

        <div className="w-fit flex gap-6 lf:hidden">
          <Link href={"/signup"}>
            <Button className="rounded-full border-[2px] border-blue-500 bg-transparent px-[30px] py-[10px] text-[16px] text-blue-500 hover:text-white font-[600]">
              Sign Up
            </Button>
          </Link>

          <Link href="/signin">
            <Button className="rounded-full px-[30px] py-[12px] text-[16px] text-white">
              Login
            </Button>
          </Link>
        </div>

        <div className="hidden lf:block">
          {showNav ? (
            <HiX
              size={24}
              onClick={() => {
                setShowNav(false);
              }}
            />
          ) : (
            <RiMenuFill
              size={24}
              onClick={() => {
                setShowNav(true);
              }}
            />
          )}
        </div>

        <div
          className={`fixed top-[70px] sm:top-[60px] w-full bg-primary0  h-full p-xpadding ${
            showNav ? "left-0" : "left-[100%]"
          } transition-all z-[999]`}
        >
          <div className="flex gap-6 flex-col">
            {nav.map((item, i) => {
              return (
                <a
                  href={item.link}
                  key={i}
                  className={
                    active === i
                      ? "font-[800] text-sec1 text-[0.8em]"
                      : "text-[0.8em]"
                  }
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <div className="w-fit flex gap-6 mt-10">
            <Link href={"/signup"}>
              <Button className="rounded-full border-[2px] border-white bg-transparent px-[30px] py-[10px] text-[16px] text-white font-[600]">
                Sign Up
              </Button>
            </Link>

            <Link href="/signin">
              <Button className="rounded-full px-[30px] py-[12px] text-[16px] text-white">
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
