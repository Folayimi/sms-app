import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdLocalActivity } from "react-icons/md";
import {
  UserGroupOutline,
  UsersOutline,
  LocationMarkerOutline,
  ClockOutline,
} from "heroicons-react";

interface LinkBarProps {
  title: string;
  routePath: string;
  icon: any;
}

const LinkBar: React.FC<LinkBarProps> = ({ title, routePath, icon }) => {
  const route = `/dashboard/${title
    .replaceAll(" ", "-")
    .replaceAll("&", "")
    .toLowerCase()}`;
  const isActive =
    routePath === title.replaceAll(" ", "-").replaceAll("&", "").toLowerCase();

  return (
    <a
      href={route}
      className={`group w-full pl-11 py-[10px] text-[14px] flex items-center rounded-[15px] gap-[20px] my-2 transition-all ${
        isActive
          ? "bg-[#7E57C2] text-white font-bold"
          : "text-[#E0E0E0] hover:text-[#BB86FC]"
      }`}
    >
      {icon}
      <div className="flex items-center">{title}</div>
    </a>
  );
};

interface Link {
  title: string;
  icon: any;
}

interface SideBarProps {
  setHidden: (hidden: boolean) => void;
  hidden: boolean;
}

const SideBar = ({ hidden, setHidden }: SideBarProps) => {
  const accountLinks: Link[] = [
    {
      title: "Profile",
      icon: (
        <UserGroupOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "Receive SMS",
      icon: (
        <UsersOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
  ];

  const managementLinks: Link[] = [
    {
      title: "Top up your balance",
      icon: (
        <UserGroupOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "Earn money on SMS",
      icon: (
        <UsersOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "Instructions",
      icon: (
        <LocationMarkerOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    { title: "Feedback", icon: <MdLocalActivity size={20} /> },
  ];

  const [routePath, setRoutePath] = useState<string>("overview");

  const getPageRoute = () => {
    const currentPath = window.location.pathname;
    const parts = currentPath.split("/");
    const route = parts[2]?.toLowerCase() || "overview";
    setRoutePath(route);
  };

  useEffect(() => {
    getPageRoute();
    console.log(hidden);
  }, []);

  return (
    <aside
      className={`mt-0 fixed top-[50px] lg:top-0 z-25 lg:left-[0px] left-[${
        hidden ? "-100vw" : "0px"
      }] lg:relative bg-[#101827] backdrop-blur-[12px] border-r border-gray-800 h-[calc(100vh-50px)] lg:h-[100vh] w-[270px] overflow-y-auto transition-all duration-300`}
    >
      <div className="p-4 flex items-center gap-3">
        <span className="text-2xl text-[#8B5CF6]">SET LOGO</span>
      </div>
      <nav className="mt-8">
        <div className="px-3 space-y-1">
          <Link
            href="/dashboard/overview"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] bg-[#8B5CF6]/10 text-[#8B5CF6]"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="before:content-[\ec12]"></i>
            </span>
            <span>Dashboard</span>
          </Link>
          <a
            href="/dashboard/receive-sms"
            id="newSmsButton"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-gray-800"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="before:content-[\ef44]"></i>
            </span>
            <div className="flex items-center justify-between flex-1">
              <span>New SMS</span>
              <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">
                Buy
              </span>
            </div>
          </a>
          <a
            href="#"
            id="rentNumbersButton"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-gray-800"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-phone-line"></i>
            </span>
            <div className="flex items-center justify-between flex-1">
              <span>Rent Numbers</span>
              <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">
                New
              </span>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-gray-800"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-calendar-line"></i>
            </span>
            <span>Subscriptions</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-gray-800"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-wallet-3-line"></i>
            </span>
            <span>Balance</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-gray-800"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-team-line"></i>
            </span>
            <span>Affiliate</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-gray-800"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-code-line"></i>
            </span>
            <span>API</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-gray-800"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-question-line"></i>
            </span>
            <span>FAQ</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-[12px] hover:bg-gray-800"
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <i className="ri-article-line"></i>
            </span>
            <span>Blogs</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
